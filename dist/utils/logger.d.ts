/**
 * Logger utilities for the Nesa SDK.
 * Provides structured logging capabilities with different severity levels.
 */
/**
 * Enum representing different logging severity levels.
 * Used to control the verbosity and importance of log messages.
 */
export declare enum LogLevel {
    /**
     * Verbose level - for detailed debugging information.
     */
    verbose = "verbose",
    /**
     * Standard log level - for general information.
     */
    log = "log",
    /**
     * Warning level - for non-critical issues.
     */
    warn = "warn",
    /**
     * Error level - for critical issues that need attention.
     */
    error = "error"
}
/**
 * Interface for logger implementations.
 * Provides a standardized way to handle log messages with different severity levels.
 */
export interface Logger {
    /**
     * Logs a message with the specified severity level.
     *
     * @param level - Severity level of the message
     * @param message - The log message to be recorded
     * @param optionalParams - Additional parameters to be included in the log
     *
     * @example
     * ```typescript
     * // Example usage
     * logger.log(LogLevel.log, 'Session created successfully');
     * logger.log(LogLevel.error, 'Failed to connect', { error: new Error('Connection failed') });
     * ```
     */
    log(level: LogLevel, message: string, ...optionalParams: unknown[]): void;
}
/**
 * No-op logger implementation.
 * Does not output any log messages (silent logger).
 * Used as a fallback when no custom logger is provided.
 */
export declare const noopLogger: Logger;
export declare const consoleLogger: Logger;
//# sourceMappingURL=logger.d.ts.map