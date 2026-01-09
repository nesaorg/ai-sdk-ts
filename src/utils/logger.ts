/**
 * Logger utilities for the Nesa SDK.
 * Provides structured logging capabilities with different severity levels.
 */

/**
 * Enum representing different logging severity levels.
 * Used to control the verbosity and importance of log messages.
 */
export enum LogLevel {
  /**
   * Verbose level - for detailed debugging information.
   */
  verbose = 'verbose',

  /**
   * Standard log level - for general information.
   */
  log = 'log',

  /**
   * Warning level - for non-critical issues.
   */
  warn = 'warn',

  /**
   * Error level - for critical issues that need attention.
   */
  error = 'error',
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
export const noopLogger: Logger = {
  /**
   * No-op implementation of the log method.
   * Does nothing when called.
   */
  log: () => {
    /* empty */
  },
};

export const consoleLogger: Logger = {
  /**
   * Console implementation of the log method.
   * Logs messages to the console.
   */
  log: (_level, _message, _optionalParams) =>
    console.log(`[Nesa][${_level}]: ${_message}`, _optionalParams),
};
