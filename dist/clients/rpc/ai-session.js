/**
 * RPC-based AISession implementation.
 * Manages blockchain-registered sessions with VRF-based message signing.
 */
import { AISessionBase } from '../ai-session-base.js';
import { signMessage } from './utils/vrf.js';
/**
 * RPC-based AISession implementation.
 * Manages blockchain-registered sessions with VRF-based message signing.
 */
export class AISessionRpc extends AISessionBase {
    /**
     * Creates a new AISessionRpc instance.
     * Automatically starts the heartbeat mechanism.
     *
     * @param params - Constructor parameters for the session
     */
    constructor(params) {
        super(params);
        this.vrfKey = params.vrfKey;
        this.onChainData = params.onChainData;
    }
    static async initialize(config) {
        const session = new AISessionRpc(config);
        await session.startHeartbeat();
        return session;
    }
    /**
     * Gets the session ID from the blockchain-registered session.
     *
     * @returns Session ID as a string
     */
    get id() {
        return this.onChainData.sessionId;
    }
    /**
     * Gets the model name from the blockchain-registered session.
     *
     * @returns Model name as a string
     */
    get modelName() {
        return this.onChainData.modelName;
    }
    /**
     * Prepares a query for the RPC session.
     * Adds VRF signature to the query message.
     *
     * @param query - Query object containing sequence number and message
     * @returns Prepared query object with VRF signature
     */
    prepareQuery(query) {
        return {
            ...query,
            // total_payment: this.onChainData.lockBalance,
            signature_query: signMessage(this.vrfKey.privateKey, query.query, query.chat_seq, true),
        };
    }
    /**
     * Prepares heartbeat data for the RPC session.
     * Adds VRF signature to the heartbeat message.
     *
     * @param query - Base heartbeat query object
     * @returns Heartbeat data with VRF signature
     */
    prepareHeartbeat(query) {
        return {
            ...query,
            signature_message: signMessage(this.vrfKey.privateKey, query.message),
        };
    }
    /**
     * Gets the protocols for WebSocket connections.
     * Returns undefined as RPC sessions don't use protocol headers.
     *
     * @returns undefined
     */
    getProtocols() {
        return undefined;
    }
}
//# sourceMappingURL=ai-session.js.map