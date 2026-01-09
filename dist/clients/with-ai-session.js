/**
 * A helper function that manages the lifecycle of an AI session.
 *
 * This function:
 * 1. Creates a session using the provided function
 * 2. Executes the provided callback with the session
 * 3. Ensures the session is properly closed after the callback completes or fails
 *
 * @example
 * ```typescript
 * import { withAISession } from './with-ai-session.js';
 * import { AIClient } from './ai-client.js';
 *
 * const client = new AIClient();
 *
 * // Basic usage
 * await withAISession(
 *   () => client.createSession(),
 *   async (session) => {
 *     // Use the session
 *     const result = await session.send({ /* ... *\/ });
 *   }
 * );
 * ```
 *
 * @param createSession A function that creates and returns an AISession
 * @param useSession A callback function that uses the created session
 * @param options Optional configuration for the session operation
 * @returns A Promise that resolves with the result of the useSession callback
 * @throws If an error occurs during session use
 */
export async function withAISession(createSession, useSession, options = {}) {
    const { onCleanupError } = options;
    let session = null;
    try {
        const timeout = options.sessionOpenTimeout ?? 60000;
        const sessionPromise = (async () => {
            session = await createSession();
            await session.openHandle;
        })();
        await Promise.race([
            sessionPromise,
            new Promise((_, reject) => setTimeout(() => reject(new Error(`Session creation/open timed out after ${timeout}ms`)), timeout)),
        ]);
        return await useSession(session);
    }
    finally {
        try {
            if (session) {
                await session?.close();
            }
        }
        catch (error) {
            if (onCleanupError) {
                onCleanupError(error);
            }
        }
    }
}
//# sourceMappingURL=with-ai-session.js.map