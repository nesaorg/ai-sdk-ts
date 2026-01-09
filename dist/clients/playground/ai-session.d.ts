/**
 * Playground-based implementation of AISession.
 * Provides the Nesa dApp with resources for AI interactions.
 */
import { AISessionBase } from '../ai-session-base.js';
import { HeartBeatData } from '../ai-session-events.js';
import { AISessionBaseParams } from '../ai-session.types.js';
/**
 * Constructor parameters for AISessionPlayground.
 * Extends the base session parameters with playground-specific fields.
 */
export interface AISessionPlaygroundConstructorParams extends AISessionBaseParams {
    /**
     * Name of the AI model being used in this session.
     */
    modelName: string;
    /**
     * Unique identifier for this session.
     */
    id: string;
    /**
     * Authentication token for the playground service.
     */
    authToken: string;
}
/**
 * Playground implementation of AI session.
 * Manages interactions with the playground environment for testing AI interactions.
 */
export declare class AISessionPlayground extends AISessionBase {
    /**
     * Unique identifier for this session.
     */
    readonly id: string;
    /**
     * Name of the AI model being used in this session.
     */
    readonly modelName: string;
    /**
     * Authentication token for the playground service.
     */
    private readonly authToken;
    /**
     * Creates a new AISessionPlayground instance.
     * Automatically starts the heartbeat mechanism upon initialization.
     *
     * @param params - Constructor parameters for the session
     */
    protected constructor(params: AISessionPlaygroundConstructorParams);
    static initialize(config: AISessionPlaygroundConstructorParams): Promise<AISessionPlayground>;
    /**
     * Prepares a query for the playground environment.
     *
     * @param query - Query object containing sequence number and message
     * @returns Prepared query object
     */
    protected prepareQuery(query: {
        chat_seq: number;
        query: string;
    }): {
        chat_seq: number;
        query: string;
    };
    /**
     * Prepares heartbeat data for the playground environment.
     *
     * @param query - Base heartbeat query object
     * @returns Heartbeat data with playground-specific fields
     */
    protected prepareHeartbeat(query: {
        message: string;
    }): HeartBeatData;
    /**
     * Gets the protocols for WebSocket connections.
     * Returns the authentication token as the protocol.
     *
     * @returns Authentication token as protocol string
     */
    protected getProtocols(): string | string[] | undefined;
}
//# sourceMappingURL=ai-session.d.ts.map