import { noopLogger } from '../utils/logger.js';
/**
 * Abstract base class for AI client implementations.
 * Provides common functionality for creating sessions and managing URLs for AI agent communication.
 *
 * @template P - Type of parameters used for creating a new session
 * @template S - Type of the session object that extends AISession
 *
 * @remarks
 * This class must be extended by concrete AI client implementations that provide specific
 * functionality for different AI agent types (e.g., RPC-based or Playground-based clients).
 */
export class AIClientBase {
    /**
     * Constructor for AIClientBase.
     *
     * @param config - Configuration options for the AI client
     */
    constructor({ logger }) {
        this.logger = logger ?? noopLogger;
    }
    /**
     * Constructs URLs for chat and heartbeat endpoints based on the provided parameters.
     *
     * @param agentUrl - Base URL of the AI agent service
     * @param chatId - Unique identifier for the chat session
     * @param agentSessionId - Optional session identifier for the agent
     * @returns Object containing chat and heartbeat URLs
     *
     * @example
     * ```typescript
     * const urls = client.constructInferenceUrls(
     *   'https://agent.example.com',
     *   'abcdef0123456789',
     *   'abcdef0123456789'
     * );
     * // Returns: {
     * //   chat: 'https://agent.example.com/chat?chat-id=abcdef0123456789&session-id=abcdef0123456789',
     * //   heartbeat: 'https://agent.example.com/heartbeat?chat-id=abcdef0123456789&session-id=abcdef0123456789'
     * // }
     * ```
     */
    constructInferenceUrls(agentUrl, chatId, agentSessionId) {
        const CHAT_PATH = '/chat';
        const HB_PATH = '/heartbeat';
        const CHAT_ID_PARAM = 'chat-id';
        const AGENT_SESSION_ID_PARAM = 'session-id';
        const appendParams = (path) => {
            const url = new URL(agentUrl);
            url.pathname = path;
            url.searchParams.append(CHAT_ID_PARAM, chatId);
            if (agentSessionId) {
                url.searchParams.append(AGENT_SESSION_ID_PARAM, chatId);
            }
            return url.toString();
        };
        const chat = appendParams(CHAT_PATH);
        const heartbeat = appendParams(HB_PATH);
        return { chat, heartbeat };
    }
}
//# sourceMappingURL=ai-client-base.js.map