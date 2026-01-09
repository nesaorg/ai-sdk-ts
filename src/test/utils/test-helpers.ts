import type { AISession } from '../../clients/ai-session.types.js';
import type { AIRequest } from '../../clients/ai-request.types.js';
import {
  AIRequestEvent,
  AIRequestEventType,
} from '../../clients/ai-session-events.js';

/**
 * Utility function to pause execution for a specified number of milliseconds
 * @param ms Number of milliseconds to sleep
 * @returns Promise that resolves after the specified time
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export interface TestLogger {
  log: (level: string, message: string, ...params: any[]) => void;
  getLogs: () => { level: string; message: string; params: any[] }[];
  clearLogs: () => void;
}

/**
 * Helper to create a test logger that captures logs for assertions
 */
export const createTestLogger = (): TestLogger => {
  const logs: { level: string; message: string; params: any[] }[] = [];
  const validLevels = ['log', 'error', 'warn', 'info', 'debug'] as const;
  type LogLevel = (typeof validLevels)[number];

  const logger: TestLogger = {
    log: (level: string, message: string, ...params: any[]) => {
      logs.push({ level, message, params });

      // Safely log to console with fallback to console.log
      const logLevel = validLevels.includes(level as LogLevel)
        ? (level as LogLevel)
        : 'log';

      console[logLevel](
        `[${new Date().toISOString()}][${level.toUpperCase()}] ${message}`,
        ...params,
      );
    },
    getLogs: () => [...logs],
    clearLogs: () => {
      logs.length = 0;
    },
  };

  return logger;
};

/**
 * Helper to send a request and collect all events
 */
export const sendRequestAndCollectEvents = async (
  session: AISession,
  request: AIRequest,
): Promise<{
  events: AIRequestEvent[];
  result: string | null;
  error: Error | null;
}> => {
  const events: AIRequestEvent[] = [];
  let result: string | null = null;
  let error: Error | null = null;

  try {
    for await (const event of session.sendGenerator(request)) {
      events.push(event);
      if (event.type === AIRequestEventType.inferenceDoneChunk) {
        result = event.result;
      }
    }
  } catch (err) {
    error = err as Error;
  }

  return { events, result, error };
};

/**
 * Helper to wait for a specific event
 */
export const waitForEvent = <T extends AIRequestEvent>(
  events: AIRequestEvent[],
  type: T['type'],
  timeout = 30000,
): Promise<T> => {
  return new Promise((resolve, reject) => {
    const found = events.find((event) => event.type === type) as T | undefined;
    if (found) return resolve(found);

    const timer = setTimeout(() => {
      reject(new Error(`Timeout waiting for event: ${type}`));
    }, timeout);

    // If we want to support waiting for future events, we'd need to modify this
    // to accept an event emitter instead of an array
  });
};

interface WithSessionOptions {
  timeout?: number;
}

/**
 * Helper to create an AISession with automatic cleanup
 */
export const withSession = async (
  createSession: () => Promise<AISession>,
  testFn: (session: AISession) => Promise<void>,
  options: WithSessionOptions = {},
) => {
  const { timeout } = options;
  const session = await createSession();

  try {
    if (timeout) {
      // If a timeout is specified, wrap the test function in a Promise.race
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error(`Test timed out after ${timeout}ms`));
        }, timeout);
      });

      await Promise.race([testFn(session), timeoutPromise]);
    } else {
      await testFn(session);
    }
  } finally {
    await session.close().catch((error) => {
      console.error('Error closing session:', error);
    });
  }
};
