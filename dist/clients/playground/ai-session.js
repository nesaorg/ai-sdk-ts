/**
 * Playground-based implementation of AISession.
 * Provides the Nesa dApp with resources for AI interactions.
 */
import { AISessionBase } from '../ai-session-base.js';
/**
 * Playground implementation of AI session.
 * Manages interactions with the playground environment for testing AI interactions.
 */
export class AISessionPlayground extends AISessionBase {
    /**
     * Creates a new AISessionPlayground instance.
     * Automatically starts the heartbeat mechanism upon initialization.
     *
     * @param params - Constructor parameters for the session
     */
    constructor(params) {
        super(params);
        this.id = params.id;
        this.modelName = params.modelName;
        this.authToken = params.authToken;
    }
    static async initialize(config) {
        const session = new AISessionPlayground(config);
        await session.startHeartbeat();
        return session;
    }
    /**
     * Prepares a query for the playground environment.
     *
     * @param query - Query object containing sequence number and message
     * @returns Prepared query object
     */
    prepareQuery(query) {
        return query;
    }
    /**
     * Prepares heartbeat data for the playground environment.
     *
     * @param query - Base heartbeat query object
     * @returns Heartbeat data with playground-specific fields
     */
    prepareHeartbeat(query) {
        return {
            ...query,
            signature_message: '',
        };
    }
    /**
     * Gets the protocols for WebSocket connections.
     * Returns the authentication token as the protocol.
     *
     * @returns Authentication token as protocol string
     */
    getProtocols() {
        return this.authToken;
    }
}
//# sourceMappingURL=ai-session.js.map