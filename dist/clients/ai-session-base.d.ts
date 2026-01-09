/**
 * Base implementation for AI session management.
 * Provides common functionality for handling agent communication and inference requests.
 */
import WebSocket from 'isomorphic-ws';
import { Emitter } from 'mitt';
import { AIRequest } from './ai-request.types.js';
import { HeartBeatData, AISessionEvents, AIRequestEvent, AIRequestEventDoneChunk } from './ai-session-events.js';
import { AISession, AISessionBaseParams, AISessionState } from './ai-session.types.js';
import { Logger } from '../utils/logger.js';
/**
 * Abstract base class for AI session implementations.
 * Provides common functionality for managing sessions and processing AIRequests.
 */
export declare abstract class AISessionBase implements AISession {
    /**
     * Current state of the session.
     */
    get state(): AISessionState;
    /**
     * Name of the AI model being used in this session.
     */
    abstract get modelName(): string;
    /**
     * Unique identifier for this session.
     */
    abstract get id(): string;
    /**
     * A promise that resolves once the session is open.
     */
    get openHandle(): Promise<void>;
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
    protected _state: AISessionState;
    /**
     * Counter for tracking inference requests.
     */
    protected requestCount: number;
    /**
     * Heartbeat WebSocket connection.
     */
    protected hbWs: WebSocket | null;
    /**
     * Set of open chat WebSocket connections.
     */
    protected openChats: Set<WebSocket>;
    /**
     * Internal promise that resolves once heartbeat is ready.
     */
    private heartbeatReady;
    /**
     * Interval ID for heartbeat timer.
     */
    private heartbeatIntervalId;
    /**
     * Timeout for optimistic heartbeat WebSocket connections.
     */
    private optimisticHbConnectionTimeout;
    /**
     * Creates a new AISessionBase instance.
     *
     * @param params - Configuration parameters for the session
     */
    protected constructor(params: AISessionBaseParams);
    /**
     * Adds an event listener for session events.
     *
     * @param type - Type of event to listen for
     * @param handler - Handler function for the event
     */
    on<K extends keyof AISessionEvents>(type: K, handler: (ev: AISessionEvents[K]) => void): void;
    /**
     * Removes an event listener for session events.
     *
     * @param type - Type of event to remove listener for
     * @param handler - Handler function to remove
     */
    off<K extends keyof AISessionEvents>(type: K, handler: (ev: AISessionEvents[K]) => void): void;
    send(request: AIRequest): Promise<AIRequestEventDoneChunk>;
    /**
     * Sends an inference request and yields results.
     *
     * @param request - AI request to send
     * @returns Async generator that yields inference events
     *
     * @throws Error if the session state is invalid or the request times out
     */
    sendGenerator(request: AIRequest): AsyncGenerator<AIRequestEvent, void, void>;
    close(): Promise<void>;
    assertSession(): void;
    protected setState(state: AISessionState): void;
    protected get modelNameLower(): string;
    protected abstract prepareQuery(query: {
        chat_seq: number;
        query: string;
    }): any;
    protected abstract prepareHeartbeat(query: {
        message: string;
    }): HeartBeatData;
    protected abstract getProtocols(socketUrl: string): string | string[] | undefined;
    protected startHeartbeat(): Promise<void>;
    protected sendHeartbeatOnce(): Promise<void>;
    protected sendHeartbeat(socket: WebSocket, key?: string): void;
    protected stopHeartbeat(): void;
    protected openSocket({ url, protocols, timeout, }: {
        url: string;
        protocols?: string | string[];
        timeout?: number;
    }): Promise<WebSocket>;
    protected closeSocket(socket?: WebSocket | null): void;
}
//# sourceMappingURL=ai-session-base.d.ts.map