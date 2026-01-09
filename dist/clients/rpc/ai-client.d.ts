/**
 * RPC-based AIClient implementation.
 * Provides on-chain session management and inference capabilities using the Nesa blockchain.
 */
import { OfflineSigner } from '@cosmjs/proto-signing';
import { SigningStargateClientOptions } from '@cosmjs/stargate';
import { AIClientBase, AIClientConfiguration } from '../ai-client-base.js';
import { AISessionRpc } from './ai-session.js';
import { SigningRpcClient, RegisterSessionParams } from './signing-rpc-client.js';
/**
 * Configuration interface for initializing an RPC-based AIClient.
 * Extends the base AIClient configuration with RPC-specific settings.
 */
export interface AIClientRpcConfiguration extends AIClientConfiguration {
    /**
     * URL of the RPC endpoint to connect to.
     */
    rpcEndpoint: string;
    /**
     * Offline signer for signing transactions.
     */
    signer: OfflineSigner;
    /**
     * Address of the sender for transactions.
     */
    senderAddress: string;
    /**
     * Optional chain ID for the blockchain.
     */
    chainId?: string;
    /**
     * Optional address prefix (defaults to 'nesa').
     */
    prefix?: string;
    /**
     * Optional default denomination (defaults to 'unes').
     */
    defaultDenom?: string;
    /**
     * Optional default gas price (defaults to '0.025unes').
     */
    defaultGasPrice?: `${string}unes`;
    /**
     * Optional client options for the signing RPC client.
     */
    clientOptions?: Omit<SigningStargateClientOptions, 'registry'>;
}
/**
 * Parameters for initializing a new rpc session.
 */
export interface AIClientRpcSessionInitParams extends RegisterSessionParams {
    /**
     * Optional timeout for optimistic heartbeat WebSocket connections.
     * This timeout is used to determine when the heartbeat WebSocket connection is considered successful.
     */
    optimisticHbConnectionTimeout?: number;
}
/**
 * RPC-based implementation of the AIClient.
 * Handles on-chain session creation and management using the Nesa blockchain.
 */
export declare class AIClientRpc extends AIClientBase<AIClientRpcSessionInitParams, AISessionRpc> {
    /**
     * Type identifier for this client implementation (always 'rpc').
     */
    readonly type: "rpc";
    /**
     * Internal RPC client instance for blockchain interactions.
     */
    readonly rpc: SigningRpcClient;
    /**
     * Private constructor - use initialize() to create instances.
     * @param rpc - Initialized RPC client instance
     * @param logger - Logger instance for this client
     */
    private constructor();
    /**
     * Initializes a new RPC-based AI client instance.
     *
     * @param config - Configuration parameters for the client
     * @returns Promise that resolves to a new AIClientRpc instance
     *
     * @example
     * ```typescript
     * // Example usage
     * const client = await AIClientRpc.initialize({
     *   rpcEndpoint: 'https://rpc.dev.nesa.ai',
     *   signer: signer,
     *   senderAddress: walletAddress,
     *   logger: defaultLogger
     * });
     * ```
     */
    static initialize(config: AIClientRpcConfiguration): Promise<AIClientRpc>;
    /**
     * Creates a new AI session on-chain.
     *
     * @param params - Parameters for session creation
     * @returns Promise that resolves to a new AISessionRpc instance
     *
     * @example
     * ```typescript
     * // Example usage
     * const session = await client.createSession({
     *   modelName: 'meta-llama/llama-3.2-1b-instruct',
     *   lockAmount: (1_000_000).toString(),
     * });
     * ```
     */
    createSession(params: AIClientRpcSessionInitParams): Promise<AISessionRpc>;
}
//# sourceMappingURL=ai-client.d.ts.map