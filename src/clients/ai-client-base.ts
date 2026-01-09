/**
 * Base class for AI client implementations, providing common functionality and structure
 * for interacting with AI agents.
 */
import { AIClient } from './ai-client.types.js';
import { AISession } from './ai-session.types.js';
import { Logger, noopLogger } from '../utils/logger.js';

/**
 * Configuration options for AI client instances.
 * @property logger - Optional custom logger implementation. If not provided, uses a no-op logger.
 */
export interface AIClientConfiguration {
  logger?: Logger;
}

/**
 * Abstract base class for AI client implementations.
 * Provides common functionality for creating sessions and managing URLs for AI agent communication.
 *
 * @template P - Type of parameters used for creating a new session
 * @template S - Type of the session object that extends AISession
 *
 * @remarks
 * This class must be extended by concrete AI client implementations that provide specific
 * functionality for different AI agent types (e.g., RPC-based or Playground-based clients).
 */
export abstract class AIClientBase<P, S extends AISession>
  implements AIClient<P, S>
{
  /**
   * Abstract property that must be implemented by subclasses to specify the type of AI client.
   * This is used for identifying the specific client implementation.
   */
  public abstract readonly type: string;

  /**
   * Protected logger instance used for logging operations.
   * Uses either the provided logger from configuration or falls back to a no-op implementation.
   */
  protected readonly logger: Logger;

  /**
   * Abstract method that must be implemented by subclasses to create a new AI session.
   *
   * @param params - Parameters specific to the session creation process
   * @returns Promise that resolves to a new session object
   */
  public abstract createSession(params: P): Promise<S>;

  /**
   * Constructor for AIClientBase.
   *
   * @param config - Configuration options for the AI client
   */
  protected constructor({ logger }: AIClientConfiguration) {
    this.logger = logger ?? noopLogger;
  }

  /**
   * Constructs URLs for chat and heartbeat endpoints based on the provided parameters.
   *
   * @param agentUrl - Base URL of the AI agent service
   * @param chatId - Unique identifier for the chat session
   * @param agentSessionId - Optional session identifier for the agent
   * @returns Object containing chat and heartbeat URLs
   *
   * @example
   * ```typescript
   * const urls = client.constructInferenceUrls(
   *   'https://agent.example.com',
   *   'abcdef0123456789',
   *   'abcdef0123456789'
   * );
   * // Returns: {
   * //   chat: 'https://agent.example.com/chat?chat-id=abcdef0123456789&session-id=abcdef0123456789',
   * //   heartbeat: 'https://agent.example.com/heartbeat?chat-id=abcdef0123456789&session-id=abcdef0123456789'
   * // }
   * ```
   */
  protected constructInferenceUrls(
    agentUrl: string,
    chatId: string,
    agentSessionId?: string,
  ) {
    const CHAT_PATH = '/chat';
    const HB_PATH = '/heartbeat';

    const CHAT_ID_PARAM = 'chat-id';
    const AGENT_SESSION_ID_PARAM = 'session-id';

    const appendParams = (path: string): string => {
      const url = new URL(agentUrl);
      url.pathname = path;
      url.searchParams.append(CHAT_ID_PARAM, chatId);
      if (agentSessionId) {
        url.searchParams.append(AGENT_SESSION_ID_PARAM, chatId);
      }
      return url.toString();
    };

    const chat = appendParams(CHAT_PATH);
    const heartbeat = appendParams(HB_PATH);

    return { chat, heartbeat };
  }
}
