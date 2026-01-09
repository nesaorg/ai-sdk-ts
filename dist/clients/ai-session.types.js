/**
 * Enum representing the different states of an AI session.
 * Used to track the lifecycle of a session.
 */
export var AISessionState;
(function (AISessionState) {
    /**
     * Initial state when the session is created but not yet connected.
     */
    AISessionState["unknown"] = "unknown";
    /**
     * State when the session is being established.
     */
    AISessionState["opening"] = "opening";
    /**
     * State when the session is fully established and ready for use.
     */
    AISessionState["open"] = "open";
    /**
     * State when the session is being closed.
     */
    AISessionState["closing"] = "closing";
    /**
     * State when the session has been fully closed.
     */
    AISessionState["closed"] = "closed";
})(AISessionState || (AISessionState = {}));
//# sourceMappingURL=ai-session.types.js.map