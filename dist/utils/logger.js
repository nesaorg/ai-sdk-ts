/**
 * Logger utilities for the Nesa SDK.
 * Provides structured logging capabilities with different severity levels.
 */
/**
 * Enum representing different logging severity levels.
 * Used to control the verbosity and importance of log messages.
 */
export var LogLevel;
(function (LogLevel) {
    /**
     * Verbose level - for detailed debugging information.
     */
    LogLevel["verbose"] = "verbose";
    /**
     * Standard log level - for general information.
     */
    LogLevel["log"] = "log";
    /**
     * Warning level - for non-critical issues.
     */
    LogLevel["warn"] = "warn";
    /**
     * Error level - for critical issues that need attention.
     */
    LogLevel["error"] = "error";
})(LogLevel || (LogLevel = {}));
/**
 * No-op logger implementation.
 * Does not output any log messages (silent logger).
 * Used as a fallback when no custom logger is provided.
 */
export const noopLogger = {
    /**
     * No-op implementation of the log method.
     * Does nothing when called.
     */
    log: () => {
        /* empty */
    },
};
export const consoleLogger = {
    /**
     * Console implementation of the log method.
     * Logs messages to the console.
     */
    log: (_level, _message, _optionalParams) => console.log(`[Nesa][${_level}]: ${_message}`, _optionalParams),
};
//# sourceMappingURL=logger.js.map