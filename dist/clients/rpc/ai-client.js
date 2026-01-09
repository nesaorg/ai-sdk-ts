import { toHex } from '@cosmjs/encoding';
import crypto from 'isomorphic-webcrypto';
import { AIClientBase } from '../ai-client-base.js';
import { AISessionRpc } from './ai-session.js';
import { SigningRpcClient, } from './signing-rpc-client.js';
import { LogLevel, noopLogger } from '../../utils/logger.js';
import { generateKey } from './utils/vrf.js';
/**
 * RPC-based implementation of the AIClient.
 * Handles on-chain session creation and management using the Nesa blockchain.
 */
export class AIClientRpc extends AIClientBase {
    /**
     * Private constructor - use initialize() to create instances.
     * @param rpc - Initialized RPC client instance
     * @param logger - Logger instance for this client
     */
    constructor(rpc, logger) {
        super({ logger });
        /**
         * Type identifier for this client implementation (always 'rpc').
         */
        this.type = 'rpc';
        this.rpc = rpc;
    }
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
    static async initialize(config) {
        const { rpcEndpoint, signer, senderAddress, chainId, prefix, defaultDenom, defaultGasPrice, } = config;
        const logger = config.logger ?? noopLogger;
        logger.log(LogLevel.log, `[AIClient] Connecting on-chain with RPC ${rpcEndpoint}`);
        const rpcClient = await SigningRpcClient.connectWithSigner(rpcEndpoint, signer, senderAddress, chainId, prefix || 'nesa', defaultDenom || 'unes', defaultGasPrice || '0.025unes', { ...config.clientOptions, logger });
        logger.log(LogLevel.log, `[AIClient] Connected on-chain`);
        return new AIClientRpc(rpcClient, logger);
    }
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
    async createSession(params) {
        const { modelName, sessionSeed, optimisticHbConnectionTimeout } = params;
        this.logger.log(LogLevel.log, `[AIClient] createSession("${modelName}", lock=${params.lockAmount})`);
        const keyData = await generateKey();
        const onChain = await this.rpc.registerSession(keyData, params);
        this.logger.log(LogLevel.log, `[AIClient] Session created on-chain: sessionId=${onChain.sessionId}, txHash=${onChain.transactionHash}`);
        const infResp = await this.rpc.getInferenceAgent(onChain.account);
        const agentRecord = infResp.inferenceAgent;
        if (!agentRecord || !agentRecord.url) {
            throw new Error(`[AIClient] Unable to locate InferenceAgent for account=${onChain.account}, model="${modelName}"`);
        }
        const chatId = sessionSeed ?? toHex(crypto.getRandomValues(new Uint8Array(32)));
        const { chat, heartbeat } = this.constructInferenceUrls(agentRecord.url, chatId);
        return AISessionRpc.initialize({
            vrfKey: keyData,
            modelName: modelName,
            chatWsUrl: chat,
            hbWsUrl: heartbeat,
            onChainData: onChain,
            optimisticHbConnectionTimeout: optimisticHbConnectionTimeout,
            logger: this.logger,
        });
    }
}
//# sourceMappingURL=ai-client.js.map