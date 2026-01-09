/**
 * Playground-based AIClient implementation.
 * Provides the Nesa dApp resources for AI interactions.
 */
import { Random } from '@cosmjs/crypto';
import { toHex } from '@cosmjs/encoding';
import { AIClientBase } from '../ai-client-base.js';
import { AISessionPlayground } from './ai-session.js';
import { noopLogger, LogLevel } from '../../utils/logger.js';
/**
 * Playground implementation of the AI client.
 * Provides a non-production environment for testing AI interactions.
 */
export class AIClientPlayground extends AIClientBase {
    /**
     * Private constructor - use initialize() to create instances.
     * @param agentUrl - URL of the playground agent
     * @param authToken - Authentication token for the Playground
     * @param logger - Logger instance for this client
     */
    constructor(agentUrl, authToken, logger) {
        super({ logger });
        /**
         * Type identifier for this client implementation (always 'playground').
         */
        this.type = 'playground';
        this.agentUrl = agentUrl;
        this.authToken = authToken;
    }
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
    static async initialize(config) {
        const { agentUrl, authToken } = config;
        const logger = config.logger ?? noopLogger;
        logger.log(LogLevel.log, `[AIClient] Connected to Playground`);
        return new AIClientPlayground(agentUrl, authToken, logger);
    }
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
    async createSession(params) {
        const { modelName: inModelName, sessionSeed, optimisticHbConnectionTimeout, } = params;
        const modelName = inModelName.toLowerCase();
        this.logger.log(LogLevel.log, `[AIClient] createSession("${modelName}", seed=${sessionSeed})`);
        const chatId = sessionSeed ?? toHex(crypto.getRandomValues(new Uint8Array(32)));
        const agentSessionId = Buffer.from(Random.getBytes(16)).toString('hex');
        const { chat, heartbeat } = this.constructInferenceUrls(this.agentUrl, chatId, agentSessionId);
        return AISessionPlayground.initialize({
            modelName: modelName,
            chatWsUrl: chat,
            hbWsUrl: heartbeat,
            id: Buffer.from(Random.getBytes(16)).toString('hex'),
            authToken: this.authToken,
            optimisticHbConnectionTimeout: optimisticHbConnectionTimeout,
            logger: this.logger,
        });
    }
}
//# sourceMappingURL=ai-client.js.map