/**
 * Core types and interfaces for AI session management.
 * Defines the structure and behavior of AI sessions across different client implementations.
 */
import { Logger } from '../utils/logger.js';
import { AIRequest } from './ai-request.types.js';
import { AIRequestEvent, AIRequestEventDoneChunk, AISessionEvents } from './ai-session-events.js';
/**
 * Base parameters required for creating an AI session.
 * Provides essential configuration for WebSocket communication and logging.
 */
export interface AISessionBaseParams {
    /**
     * WebSocket URL for chat communication with the AI agent.
     */
    chatWsUrl: string;
    /**
     * WebSocket URL for heartbeat communication with the AI agent.
     */
    hbWsUrl: string;
    /**
     * Optional timeout for optimistic heartbeat WebSocket connections.
     * This timeout is used to determine when the heartbeat WebSocket connection is considered successful.
     * If not provided, a default value of 3000ms will be used.
     */
    optimisticHbConnectionTimeout?: number;
    /**
     * Optional custom logger instance for session-specific logging.
     * If not provided, a no-op logger will be used.
     */
    logger?: Logger;
}
/**
 * Enum representing the different states of an AI session.
 * Used to track the lifecycle of a session.
 */
export declare enum AISessionState {
    /**
     * Initial state when the session is created but not yet connected.
     */
    unknown = "unknown",
    /**
     * State when the session is being established.
     */
    opening = "opening",
    /**
     * State when the session is fully established and ready for use.
     */
    open = "open",
    /**
     * State when the session is being closed.
     */
    closing = "closing",
    /**
     * State when the session has been fully closed.
     */
    closed = "closed"
}
/**
 * Core interface for AI session implementations.
 * Provides methods for managing AI conversations and handling events.
 */
export interface AISession {
    /**
     * Gets the current state of the session.
     * Returns one of the AISessionState values.
     */
    get state(): AISessionState;
    /**
     * Gets a handle to a promise that resolves once the session is open.
     */
    get openHandle(): Promise<void>;
    /**
     * Gets the name of the AI model being used in this session.
     */
    get modelName(): string;
    /**
     * Gets the unique identifier for this session.
     */
    get id(): string;
    /**
     * Sends an inference request to the AI agent.
     *
     * @param request - The request containing conversation history and model parameters
     * @returns AsyncGenerator that yields AIRequestEvent objects as the response is received
     *
     * @example
     * ```typescript
     * // Example usage
     * const session: AISession = await client.createSession(params);
     * const request: AIRequest = {
     *   messages: [
     *     { role: 'user', content: 'Hello!' }
     *   ],
     *   model_params: {
     *     temperature: 0.7,
     *     max_tokens: 100
     *   }
     * };
     *
     * const resultChunk = await session.send(request);
     * console.log(resultChunk.result);
     * ```
     */
    send(request: AIRequest): Promise<AIRequestEventDoneChunk>;
    /**
     * Sends an inference request and yields results.
     *
     * @param request - AI request to send
     * @returns Async generator that yields inference events
     *
     * @example
     * ```typescript
     * // Example usage
     * const session: AISession = await client.createSession(params);
     * const request: AIRequest = {
     *   messages: [
     *     { role: 'user', content: 'Hello!' }
     *   ],
     *   model_params: {
     *     temperature: 0.7,
     *     max_tokens: 100
     *   }
     * };
     *
     * for await (const event of session.sendGenerator(request)) {
     *   console.log(event);
     * }
     * ```
     */
    sendGenerator(request: AIRequest): AsyncGenerator<AIRequestEvent, void, void>;
    /**
     * Registers an event handler for a specific event type.
     *
     * @template K - Type of event to listen for (must be a key of AISessionEvents)
     * @param type - Type of event to listen for
     * @param handler - Callback function to handle the event
     */
    on<K extends keyof AISessionEvents>(type: K, handler: (ev: AISessionEvents[K]) => void): void;
    /**
     * Removes an event handler that was previously registered with on().
     *
     * @template K - Type of event to stop listening for
     * @param type - Type of event to stop listening for
     * @param handler - The handler function to remove
     */
    off<K extends keyof AISessionEvents>(type: K, handler: (ev: AISessionEvents[K]) => void): void;
    /**
     * Closes the AI session and cleans up resources.
     *
     * @returns Promise that resolves when the session is fully closed
     */
    close(): Promise<void>;
}
//# sourceMappingURL=ai-session.types.d.ts.map