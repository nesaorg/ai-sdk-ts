/**
 * Core interface for AI client implementations.
 */
import { AISession } from './ai-session.types.js';
/**
 * Interface for AI client implementations that provides a standardized way to create AI sessions.
 *
 * @template P - Type of parameters used for session creation
 * @template S - Type of the session object that extends AISession (defaults to AISession if not specified)
 *
 * @remarks
 * This interface is implemented by concrete AI client classes (e.g., RPC-based or Playground-based clients)
 * to provide a consistent API for creating AI sessions.
 */
export interface AIClient<P, S extends AISession> {
    /**
     * Unique identifier for the type of AI client implementation.
     * Used to distinguish between different client implementations (e.g., 'rpc', 'playground').
     */
    readonly type: string;
    /**
     * Creates a new AI session with the specified parameters.
     *
     * @param params - Parameters specific to the session creation process
     * @returns Promise that resolves to a new session object
     *
     * @example
     * ```typescript
     * // Example usage with RPC client
     * const client: AIClientRpc = new AIClientRpc({...});
     * const session = await client.createSession({
     *   modelName: 'meta-llama/llama-3.2-1b-instruct',
     *   lockAmount: (1_000_000).toString(),
     * });
     * ```
     */
    createSession: (params: P) => Promise<S>;
}
//# sourceMappingURL=ai-client.types.d.ts.map