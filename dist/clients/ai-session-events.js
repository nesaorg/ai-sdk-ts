/**
 * Enum representing different types of events that can occur during an AI request.
 */
export var AIRequestEventType;
(function (AIRequestEventType) {
    /**
     * Acknowledgment event indicating the request was received.
     */
    AIRequestEventType["ack"] = "ack";
    /**
     * Event emitted when receiving a chunk of inference response.
     * Contains partial results as they are generated.
     */
    AIRequestEventType["inferenceChunk"] = "inferenceChunk";
    /**
     * Event emitted when inference is complete.
     * Contains the final result.
     */
    AIRequestEventType["inferenceDoneChunk"] = "inferenceDoneChunk";
    /**
     * Error event indicating a failure during inference.
     */
    AIRequestEventType["error"] = "error";
    /**
     * Event emitted when the session is closed.
     */
    AIRequestEventType["close"] = "close";
})(AIRequestEventType || (AIRequestEventType = {}));
//# sourceMappingURL=ai-session-events.js.map