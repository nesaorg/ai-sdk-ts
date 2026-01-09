import { AIClientConfiguration, AIClientBase } from '../ai-client-base.js';
import { AISessionPlayground } from './ai-session.js';
/**
 * Configuration interface for initializing a Playground AIClient.
 * Extends the base AIClient configuration with Playground-specific settings.
 */
export interface AIClientPlaygroundConfiguration extends AIClientConfiguration {
    /**
     * URL of the Playground agent service.
     */
    agentUrl: string;
    /**
     * Authentication token for accessing the playground service.
     */
    authToken: string;
}
/**
 * Parameters for initializing a new playground session.
 */
export interface AIClientPlaygroundSessionInitParams {
    /**
     * Name of the AI model to use for the session.
     */
    modelName: string;
    /**
     * Optional seed for session identification.
     * If not provided, a random seed will be generated.
     */
    sessionSeed?: string;
    /**
     * Optional timeout for optimistic heartbeat WebSocket connections.
     * This timeout is used to determine when the heartbeat WebSocket connection is considered successful.
     */
    optimisticHbConnectionTimeout?: number;
}
/**
 * Playground implementation of the AI client.
 * Provides a non-production environment for testing AI interactions.
 */
export declare class AIClientPlayground extends AIClientBase<AIClientPlaygroundSessionInitParams, AISessionPlayground> {
    /**
     * Type identifier for this client implementation (always 'playground').
     */
    readonly type: "playground";
    /**
     * URL of the playground agent.
     */
    private readonly agentUrl;
    /**
     * Authentication token for the Playground.
     */
    private readonly authToken;
    /**
     * Private constructor - use initialize() to create instances.
     * @param agentUrl - URL of the playground agent
     * @param authToken - Authentication token for the Playground
     * @param logger - Logger instance for this client
     */
    private constructor();
    /**
     * Initializes a new playground AI client instance.
     *
     * @param config - Configuration parameters for the client
     * @returns Promise that resolves to a new AIClientPlayground instance
     *
     * @example
     * ```typescript
     * // Example usage
     * const client = await AIClientPlayground.initialize({
     *   agentUrl: 'https://playground.nesa.devnet',
     *   authToken: 'your-auth-token',
     *   logger: defaultLogger
     * });
     * ```
     */
    static initialize(config: AIClientPlaygroundConfiguration): Promise<AIClientPlayground>;
    /**
     * Creates a new AI session within the Playground.
     *
     * @param params - Parameters for session creation
     * @returns Promise that resolves to a new AISessionPlayground instance
     *
     * @example
     * ```typescript
     * // Example usage
     * const session = await client.createSession({
     *   modelName: 'gpt-3.5-turbo',
     * });
     * ```
     */
    createSession(params: AIClientPlaygroundSessionInitParams): Promise<AISessionPlayground>;
}
//# sourceMappingURL=ai-client.d.ts.map