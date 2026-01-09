/**
 * Base implementation for AI session management.
 * Provides common functionality for handling agent communication and inference requests.
 */
import WebSocket from 'isomorphic-ws';
import mitt, { Emitter, EventType } from 'mitt';

import { AIRequest } from './ai-request.types.js';
import {
  HeartBeatData,
  AIRequestEventChunk,
  AISessionEvents,
  AIRequestEvent,
  AIRequestEventType,
  AIRequestEventDoneChunk,
} from './ai-session-events.js';
import {
  AISession,
  AISessionBaseParams,
  AISessionState,
} from './ai-session.types.js';
import { Logger, noopLogger, LogLevel } from '../utils/logger.js';

const DONE_SENTINEL = '[DONE]';
const ACK_MESSAGE = 'ack';
const HB_CHAT_KEY = 'hello_body';
const HB_MESSAGE = 'hello';
const SESSION_IS_CLOSED = 'session is closed';
const WS_TIMEOUT = 60 * 1000; // 60 seconds
const MAX_TTFB_TIMEOUT = 5 * 60 * 1000; // 5 minutes
const MAX_RESULT_TIMEOUT = 10 * 60 * 1000; // 10 minutes
const OPTIMISTIC_HB_TIMEOUT = 3 * 1000; // 3 seconds

const createEmitter: <E extends Record<EventType, unknown>>() => Emitter<E> =
  (mitt as any).default ?? (mitt as any);

/**
 * Abstract base class for AI session implementations.
 * Provides common functionality for managing sessions and processing AIRequests.
 */
export abstract class AISessionBase implements AISession {
  /**
   * Current state of the session.
   */
  public get state() {
    return this._state;
  }

  /**
   * Name of the AI model being used in this session.
   */
  public abstract get modelName(): string;

  /**
   * Unique identifier for this session.
   */
  public abstract get id(): string;

  /**
   * A promise that resolves once the session is open.
   */
  public get openHandle() {
    return this.heartbeatReady;
  }

  /**
   * WebSocket URL for chat communication.
   */
  protected readonly chatWsUrl: string;

  /**
   * WebSocket URL for heartbeat communication.
   */
  protected readonly hbWsUrl: string;

  /**
   * Logger instance for this session.
   */
  protected readonly logger: Logger;

  /**
   * Event emitter for session events.
   */
  protected readonly emitter: Emitter<AISessionEvents>;

  /**
   * Internal session state.
   */
  protected _state = AISessionState.unknown;

  /**
   * Counter for tracking inference requests.
   */
  protected requestCount = 0;

  /**
   * Heartbeat WebSocket connection.
   */
  protected hbWs: WebSocket | null = null;

  /**
   * Set of open chat WebSocket connections.
   */
  protected openChats: Set<WebSocket> = new Set<WebSocket>();

  /**
   * Internal promise that resolves once heartbeat is ready.
   */
  private heartbeatReady!: Promise<void>;

  /**
   * Interval ID for heartbeat timer.
   */
  private heartbeatIntervalId: any | null = null;

  /**
   * Timeout for optimistic heartbeat WebSocket connections.
   */
  private optimisticHbConnectionTimeout: number;

  /**
   * Creates a new AISessionBase instance.
   *
   * @param params - Configuration parameters for the session
   */
  protected constructor(params: AISessionBaseParams) {
    this.chatWsUrl = params.chatWsUrl;
    this.logger = params.logger ?? noopLogger;
    this.hbWsUrl = params.hbWsUrl;
    this.optimisticHbConnectionTimeout =
      params.optimisticHbConnectionTimeout || OPTIMISTIC_HB_TIMEOUT;
    this.emitter = createEmitter<AISessionEvents>();

    this.heartbeatReady = new Promise<void>((r) => {
      const changeHandler = (change: AISessionEvents['stateChange']) => {
        if (change.state === AISessionState.open) {
          r();
          this.off('stateChange', changeHandler);
        }
      };

      this.on('stateChange', changeHandler);
    });
  }

  /**
   * Adds an event listener for session events.
   *
   * @param type - Type of event to listen for
   * @param handler - Handler function for the event
   */
  public on<K extends keyof AISessionEvents>(
    type: K,
    handler: (ev: AISessionEvents[K]) => void,
  ) {
    this.emitter.on(type, handler);
  }

  /**
   * Removes an event listener for session events.
   *
   * @param type - Type of event to remove listener for
   * @param handler - Handler function to remove
   */
  public off<K extends keyof AISessionEvents>(
    type: K,
    handler: (ev: AISessionEvents[K]) => void,
  ) {
    this.emitter.off(type, handler);
  }

  public async send(request: AIRequest): Promise<AIRequestEventDoneChunk> {
    for await (const event of this.sendGenerator(request)) {
      switch (event.type) {
        case AIRequestEventType.inferenceDoneChunk:
          return event;
        case AIRequestEventType.error:
          throw event.error;
      }
    }

    throw new Error('Request yielded no inference done chunk');
  }

  /**
   * Sends an inference request and yields results.
   *
   * @param request - AI request to send
   * @returns Async generator that yields inference events
   *
   * @throws Error if the session state is invalid or the request times out
   */
  public async *sendGenerator(
    request: AIRequest,
  ): AsyncGenerator<AIRequestEvent, void, void> {
    await this.heartbeatReady;

    this.assertSession();

    if (AISessionState.open !== this.state) {
      const errorMessage = `[AISession][...${this.id.slice(-4)}] sendGenerator called with invalid session state (${this.state})`;
      this.logger.log(LogLevel.error, errorMessage);
      throw new Error(errorMessage);
    }

    const socket = await this.openSocket({
      url: this.chatWsUrl,
      protocols: this.getProtocols(this.chatWsUrl),
    });
    this.openChats.add(socket);
    const chatHeartbeatIntervalId = setInterval(() => {
      try {
        this.sendHeartbeat(socket, HB_CHAT_KEY);
      } catch (error: any) {
        this.logger.log(
          LogLevel.warn,
          `[AISession][...${this.id.slice(-4)}] sendHeartbeat failed: ${error.message || 'Unknown Error'}`,
        );
      }
    }, WS_TIMEOUT / 2.1);

    const queue: AIRequestEvent[] = [];
    const pendingChunks = new Map<number, AIRequestEventChunk>();
    const latestInferenceChunk: {
      output_index: number;
      chunk?: AIRequestEventChunk;
    } = { output_index: -1 };
    let nextChunkIndex = 0;
    let responseBegan = false;
    let errored = false;
    let closed = false;
    let result = '';
    let pullResolver: (() => void) | null = null;

    const timeoutTtfb = Math.min(
      request.requestConfig?.timeoutTtfb || MAX_TTFB_TIMEOUT,
      MAX_TTFB_TIMEOUT,
    );
    const timeoutResult = Math.min(
      request.requestConfig?.timeoutResult || MAX_RESULT_TIMEOUT,
      MAX_RESULT_TIMEOUT,
    );
    const endWithTimeout = () => {
      const message = `[AISession][...${this.id.slice(-4)}] Request timed out (${timeoutTtfb}ms)`;
      this.logger.log(LogLevel.error, message);

      queue.push({
        type: AIRequestEventType.error,
        error: new Error(message),
        message,
      });

      notifyPull();

      this.closeSocket(socket);
    };
    const ttfbTimeoutId = setTimeout(() => {
      if (!responseBegan) {
        endWithTimeout();
      }
    }, timeoutTtfb);
    const resultTimeoutId = setTimeout(endWithTimeout, timeoutResult);

    const notifyPull = () => {
      if (pullResolver) {
        pullResolver();
      }

      pullResolver = null;
    };

    socket.onmessage = (ev: WebSocket.MessageEvent) => {
      const raw = ev.data as string;
      this.logger.log(
        LogLevel.verbose,
        `[AISession][...${this.id.slice(-4)}] Received chunk: "${raw}"`,
      );

      if (ACK_MESSAGE === raw) {
        queue.push({ type: AIRequestEventType.ack, raw });

        notifyPull();

        return;
      }

      responseBegan = true;
      const json = JSON.parse(raw);

      if ((json.content as string)?.startsWith(DONE_SENTINEL)) {
        queue.push({
          type: AIRequestEventType.inferenceDoneChunk,
          raw,
          finish_reason: json.finish_reason,
        } as AIRequestEventDoneChunk);

        notifyPull();

        return;
      }

      const chunk = {
        type: AIRequestEventType.inferenceChunk,
        raw,
        ...json,
        content: json.content ?? '',
      } as AIRequestEventChunk;

      const outputIndex = json.output_index;
      pendingChunks.set(outputIndex, chunk);
      if (latestInferenceChunk.output_index <= outputIndex) {
        latestInferenceChunk.chunk = chunk;
      }

      notifyPull();
    };

    socket.onerror = (ev: WebSocket.ErrorEvent) => {
      errored = true;
      queue.push({
        type: AIRequestEventType.error,
        error: ev.error,
        message: ev.message,
      });
      notifyPull();
    };

    socket.onclose = (ev: WebSocket.CloseEvent) => {
      closed = true;
      clearInterval(chatHeartbeatIntervalId);
      this.openChats.delete(socket);
      if (ev.reason) {
        let detail = ev.reason;
        try {
          detail = JSON.parse(ev.reason).detail;
        } catch (error) {
          /* empty */
        }
        queue.push({
          type: AIRequestEventType.error,
          error: new Error(detail),
          message: ev.reason,
        });
        notifyPull();
      }
      queue.push({
        type: AIRequestEventType.close,
        code: ev.code,
        reason: ev.reason,
        wasClean: ev.wasClean,
      });
      notifyPull();
    };

    try {
      const requestToSend = request;
      if (false === requestToSend.requestConfig?.passthroughRequest) {
        delete requestToSend.requestConfig;
      }
      const payloadObj = {
        ...requestToSend,
        model: this.modelNameLower,
      };
      const payloadStr = JSON.stringify(payloadObj);
      socket.send(
        JSON.stringify(
          this.prepareQuery({
            chat_seq: ++this.requestCount,
            query: payloadStr,
          }),
        ),
      );
      this.logger.log(
        LogLevel.log,
        `[AISession][...${this.id.slice(-4)}] Sent inference request: ${payloadStr}`,
      );

      while (true) {
        if (pendingChunks.has(nextChunkIndex)) {
          const chunk = pendingChunks.get(nextChunkIndex);
          if (chunk) {
            result += chunk?.content ?? '';

            yield chunk;
          }

          pendingChunks.delete(nextChunkIndex);

          nextChunkIndex++;

          continue;
        }

        if (queue.length > 0) {
          const nextChunk = queue.shift();

          if (nextChunk) {
            if (AIRequestEventType.inferenceDoneChunk === nextChunk.type) {
              nextChunk.result = result;
              nextChunk.input_tokens =
                latestInferenceChunk.chunk?.input_tokens || 0;
              nextChunk.output_tokens =
                latestInferenceChunk.chunk?.output_tokens || 0;
              nextChunk.payment_amount =
                latestInferenceChunk.chunk?.payment_amount || 0;
              nextChunk.payment_denom =
                latestInferenceChunk.chunk?.payment_denom || '';
            }

            yield nextChunk;

            if (AIRequestEventType.inferenceDoneChunk === nextChunk.type) {
              this.closeSocket(socket);
            }

            if (
              AIRequestEventType.error === nextChunk.type &&
              [
                nextChunk.message?.toLowerCase(),
                nextChunk.error?.message?.toLowerCase(),
              ].some((message) =>
                message.includes(SESSION_IS_CLOSED.toLowerCase()),
              )
            ) {
              this.logger.log(
                LogLevel.error,
                `[AISession][...${this.id.slice(-4)}] Encountered session is closed error, closing...`,
              );
              await this.close();
            }
          }

          continue;
        }

        if (closed || errored) break;

        await new Promise<void>((r) => (pullResolver = r));
      }
    } finally {
      clearInterval(ttfbTimeoutId);
      clearInterval(resultTimeoutId);
      clearInterval(chatHeartbeatIntervalId);
    }
  }

  public async close(): Promise<void> {
    this.logger.log(
      LogLevel.log,
      `[AISession][...${this.id.slice(-4)}] close()`,
    );

    if ([AISessionState.closing, AISessionState.closed].includes(this.state)) {
      this.logger.log(
        LogLevel.verbose,
        `[AISession][...${this.id.slice(-4)}] Session (${this.state}) already closing or closed: ${this.state}`,
      );
    } else {
      this.setState(AISessionState.closing);
    }

    this.stopHeartbeat();

    Array.from(this.openChats).forEach((chatWs) => this.closeSocket(chatWs));
    this.openChats.clear();

    this.setState(AISessionState.closed);
  }

  public assertSession() {
    if (AISessionState.open !== this.state) {
      const errorMessage = `[AISession][...${this.id.slice(-4)}] Chat session not open (${this.state})`;
      this.logger.log(LogLevel.error, errorMessage);
      throw new Error(errorMessage);
    }
  }

  protected setState(state: AISessionState) {
    if (state === this._state) {
      return;
    }

    const previousState = this._state;
    this._state = state;

    this.emitter.emit('stateChange', { previousState, state });
  }

  protected get modelNameLower() {
    return this.modelName.toLowerCase();
  }

  protected abstract prepareQuery(query: {
    chat_seq: number;
    query: string;
  }): any;

  protected abstract prepareHeartbeat(query: {
    message: string;
  }): HeartBeatData;

  protected abstract getProtocols(
    socketUrl: string,
  ): string | string[] | undefined;

  protected async startHeartbeat(): Promise<void> {
    this.setState(AISessionState.opening);

    await this.sendHeartbeatOnce();

    this.heartbeatIntervalId = setInterval(() => {
      this.sendHeartbeatOnce().catch((error: any) => {
        this.logger.log(
          LogLevel.error,
          `[AISession][...${this.id.slice(-4)}] Caught error sending heartbeat: `,
          error,
        );
      });
    }, 5000);
  }

  protected async sendHeartbeatOnce(): Promise<void> {
    if (this.hbWs?.readyState !== WebSocket.OPEN) {
      this.closeSocket(this.hbWs);
      this.hbWs = null;
    }

    if (!this.hbWs) {
      const socket = await this.openSocket({
        url: this.hbWsUrl,
        protocols: this.getProtocols(this.hbWsUrl),
        timeout: 5000,
      });

      setTimeout(() => {
        if (AISessionState.opening === this.state) {
          this.logger.log(
            LogLevel.verbose,
            `[AISession][...${this.id.slice(-4)}] Optimistically setting state to open.`,
          );
          this.setState(AISessionState.open);
        }
      }, this.optimisticHbConnectionTimeout);

      socket.onmessage = () => {
        if (AISessionState.opening === this.state) {
          this.logger.log(
            LogLevel.verbose,
            `[AISession][...${this.id.slice(-4)}] Initial heartbeat response received, setting state to open.`,
          );
          this.setState(AISessionState.open);
        }
      };

      this.hbWs = socket;
    }

    this.sendHeartbeat(this.hbWs);
  }

  protected sendHeartbeat(socket: WebSocket, key?: string) {
    const pathname = socket ? new URL(socket.url).pathname : 'undefined';

    if (socket?.readyState !== WebSocket.OPEN) {
      const errorMessage = `[AISession][...${this.id.slice(-4)}] sendHeartbeat (${pathname}) socket not open (${socket?.readyState})`;
      this.logger.log(LogLevel.error, errorMessage);
      throw new Error(errorMessage);
    }

    const hb = this.prepareHeartbeat({ message: HB_MESSAGE });
    socket.send(key ? JSON.stringify({ [key]: hb }) : JSON.stringify(hb));
    this.logger.log(
      LogLevel.verbose,
      `[AISession][...${this.id.slice(-4)}] Sent heartbeat (${pathname}) ${hb.message}:${hb.signature_message.length}`,
    );
  }

  protected stopHeartbeat(): void {
    if (this.heartbeatIntervalId != null) {
      clearInterval(this.heartbeatIntervalId);
      this.heartbeatIntervalId = null;
    }

    this.closeSocket(this.hbWs);
    this.hbWs = null;

    this.logger.log(
      LogLevel.log,
      `[AISession][...${this.id.slice(-4)}] Stopped heartbeat`,
    );
  }

  protected async openSocket({
    url,
    protocols,
    timeout,
  }: {
    url: string;
    protocols?: string | string[];
    timeout?: number;
  }): Promise<WebSocket> {
    this.logger.log(
      LogLevel.verbose,
      `[AISession][...${this.id.slice(-4)}] Opening socket (${url})`,
    );

    const pathname = new URL(url).pathname;
    return new Promise<WebSocket>((resolve, reject) => {
      const socket = new WebSocket(url, protocols);
      const timer =
        timeout &&
        setTimeout(
          () =>
            reject(
              new Error(
                `[AISession][...${this.id.slice(-4)}] WebSocket (${pathname}) timed out`,
              ),
            ),
          timeout,
        );

      socket.onopen = () => {
        timeout && clearTimeout(timer);

        this.logger.log(
          LogLevel.log,
          `[AISession][...${this.id.slice(-4)}] WebSocket (${pathname}) opened`,
        );
        resolve(socket);
      };
      socket.onerror = (ev) => {
        const errorMessage = `[AISession][...${this.id.slice(-4)}] WebSocket (${pathname}) failed to open: ${ev.message}`;
        this.logger.log(LogLevel.error, errorMessage);
        reject(new Error(errorMessage));
      };
      socket.onclose = (ev) => {
        if (socket.readyState !== WebSocket.OPEN) {
          reject(
            new Error(
              `[AISession][...${this.id.slice(-4)}] Websocket (${pathname}) closed prematurely (code=${ev.code}, reason=${ev.reason})`,
            ),
          );
        }
      };
    });
  }

  protected closeSocket(socket?: WebSocket | null) {
    try {
      if (socket && socket.readyState !== WebSocket.CLOSED) {
        socket.close();
        this.logger.log(
          LogLevel.log,
          `[AISession][...${this.id.slice(-4)}] WebSocket ${new URL(socket.url).pathname} closed`,
        );
      }
    } catch {
      /* empty */
    }
  }
}
