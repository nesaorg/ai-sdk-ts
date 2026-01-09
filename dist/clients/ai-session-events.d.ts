/**
 * Types and interfaces for AI session events and event handling.
 * Defines the structure of events emitted during AI session lifecycle and inference.
 */
import { AISessionState } from './ai-session.types.js';
/**
 * Enum representing different types of events that can occur during an AI request.
 */
export declare enum AIRequestEventType {
    /**
     * Acknowledgment event indicating the request was received.
     */
    ack = "ack",
    /**
     * Event emitted when receiving a chunk of inference response.
     * Contains partial results as they are generated.
     */
    inferenceChunk = "inferenceChunk",
    /**
     * Event emitted when inference is complete.
     * Contains the final result.
     */
    inferenceDoneChunk = "inferenceDoneChunk",
    /**
     * Error event indicating a failure during inference.
     */
    error = "error",
    /**
     * Event emitted when the session is closed.
     */
    close = "close"
}
/**
 * Event type for acknowledgment responses.
 * Indicates successful receipt of a request.
 */
export interface AIRequestEventAck {
    /**
     * Type discriminator for the event (always 'ack').
     */
    type: AIRequestEventType.ack;
    /**
     * Raw event data as received from the server.
     */
    raw: string;
}
/**
 * Event type for inference chunks.
 * Represents partial results during the inference process.
 */
export interface AIRequestEventChunk {
    /**
     * Type discriminator for the event (always 'inferenceChunk').
     */
    type: AIRequestEventType.inferenceChunk;
    /**
     * Raw event data as received from the server.
     */
    raw: string;
    /**
     * Output index within the entire response.
     */
    output_index: number;
    /**
     * Content of this chunk of the response.
     */
    content: string;
    /**
     * Role of the message sender (e.g., 'user', 'assistant').
     */
    role: string;
    /**
     * Unique identifier for this session.
     */
    session_id: string;
    /**
     * Fingerprint identifying the system configuration.
     */
    system_fingerprint: string;
    /**
     * Number of input tokens processed.
     */
    input_tokens: number;
    /**
     * Number of output tokens generated.
     */
    output_tokens: number;
    /**
     * Number of input tokens processed across the session.
     */
    input_tokens_session: number;
    /**
     * Number of output tokens generated across the session.
     */
    output_tokens_session: number;
    /**
     * Amount of payment for this chunk.
     */
    payment_amount: number;
    /**
     * Denomination of the payment (e.g., 'nesa').
     */
    payment_denom: string;
}
/**
 * Event type for final inference completion.
 * Contains the complete results and final metrics.
 */
export interface AIRequestEventDoneChunk {
    /**
     * Type discriminator for the event (always 'inferenceDoneChunk').
     */
    type: AIRequestEventType.inferenceDoneChunk;
    /**
     * Raw event data as received from the server.
     */
    raw: string;
    /**
     * Final result of the inference.
     */
    result: string;
    /**
     * Total number of input tokens processed.
     */
    input_tokens: number;
    /**
     * Total number of output tokens generated.
     */
    output_tokens: number;
    /**
     * Total payment amount for the inference.
     */
    payment_amount: number;
    /**
     * Payment denomination (e.g., 'nesa').
     */
    payment_denom: string;
    /**
     * Final reason for inference completion (e.g., 'stop', 'length').
     */
    finish_reason: string;
}
/**
 * Event type for errors during inference.
 * Contains error information and message.
 */
export interface AIRequestEventError {
    /**
     * Type discriminator for the event (always 'error').
     */
    type: AIRequestEventType.error;
    /**
     * Error object containing detailed error information.
     */
    error: any;
    /**
     * Human-readable error message.
     */
    message: string;
}
/**
 * Event type for session closure.
 * Indicates the session has been closed.
 */
export interface AIRequestEventClose {
    /**
     * Type discriminator for the event (always 'close').
     */
    type: AIRequestEventType.close;
    /**
     * Socket close code.
     */
    code: number;
    /**
     * Reason for the session closure.
     */
    reason: string;
    /**
     * Whether the closure was clean (true) or abrupt (false).
     */
    wasClean: boolean;
}
/**
 * Union type representing all possible AI request events.
 * Used as the generic event type in event handlers.
 */
export type AIRequestEvent = AIRequestEventAck | AIRequestEventChunk | AIRequestEventDoneChunk | AIRequestEventError | AIRequestEventClose;
/**
 * Type representing session state change events.
 * Used to track changes in the session's lifecycle.
 */
export type AISessionEvents = {
    /**
     * Event emitted when the session state changes.
     * Contains both the previous and new states.
     */
    stateChange: {
        previousState: AISessionState;
        state: AISessionState;
    };
};
/**
 * Data structure for heartbeat messages.
 * Used to maintain session connectivity.
 */
export interface HeartBeatData {
    /**
     * Message content for the heartbeat.
     */
    message: string;
    /**
     * Signature message for heartbeat verification.
     */
    signature_message: string;
}
//# sourceMappingURL=ai-session-events.d.ts.map