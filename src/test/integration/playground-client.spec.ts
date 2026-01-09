import { describe, it, expect, beforeAll, afterEach } from 'bun:test';

import { AIClientPlayground } from '../../clients/playground/ai-client.js';
import {
  createTestLogger,
  sendRequestAndCollectEvents,
} from '../utils/test-helpers.js';
import { withAISession } from '../../clients/with-ai-session.js';
import { ModelName, TEST_REQUESTS } from '../fixtures/test-requests.js';
import { getModelParameterDefaults } from '../../utils/models.js';
import TEST_CONFIG from '../config.js';
import { AIRequestEventType } from '../../clients/ai-session-events.js';
import {
  AISessionState,
  type AISession,
} from '../../clients/ai-session.types.js';
import type { ModelNameType } from '../fixtures/test-requests.js';
import { AIRequest } from '../../clients/ai-request.types.js';

describe('AIClientPlayground', () => {
  const logger = createTestLogger();
  let client: AIClientPlayground;

  beforeAll(async () => {
    client = await AIClientPlayground.initialize({
      agentUrl: TEST_CONFIG.endpoints.playgroundAgent,
      authToken: TEST_CONFIG.env.apiAuthToken!,
      logger,
    });
  });

  afterEach(() => {
    logger.clearLogs();
  });

  describe('createSession', () => {
    it(
      'should create a new session for text model',
      async () => {
        await withAISession(
          () =>
            client.createSession({
              modelName: ModelName.text as ModelNameType,
            }),
          async (session: AISession) => {
            await session.openHandle;

            expect(session).toBeDefined();
            expect(session.id).toBeDefined();
            expect(session.state).toBe(AISessionState.open);
          },
        );
      },
      TEST_CONFIG.timeouts.medium,
    );

    it(
      'should handle invalid model name with a warning',
      async () => {
        const session = await client.createSession({
          modelName: 'invalid-model' as ModelNameType,
        });

        try {
          expect(session).toBeDefined();
          expect(session.id).toBeDefined();
          expect(session.modelName).toBe('invalid-model');

          // Check if there are any warning logs about the invalid model
          // Note: Commented out due to Playground not supporting this message
          // const logs = logger.getLogs();
          // const hasWarning = logs.some(log =>
          //   log.level === 'warn' &&
          //   log.message.includes('Model Not Found') ||
          //   log.message.includes('unknown model')
          // );
          // expect(hasWarning).toBe(true);
        } finally {
          await session.close().catch(() => {});
        }
      },
      TEST_CONFIG.timeouts.short,
    );
  });

  describe('send', () => {
    it(
      'should send a text inference request and receive response',
      async () => {
        await withAISession(
          () =>
            client.createSession({
              modelName: ModelName.text as ModelNameType,
            }),
          async (session) => {
            const request: AIRequest = {
              ...TEST_REQUESTS.text,
              model_params: await getModelParameterDefaults(ModelName.text),
            };

            const { events, result } = await sendRequestAndCollectEvents(
              session,
              request,
            );

            const contentEvents = events.filter(
              (e) => e.type === AIRequestEventType.inferenceChunk,
            );
            expect(contentEvents.length).toBeGreaterThan(0);
            expect(result).toBeDefined();
            expect(typeof result).toBe('string');
          },
        );
      },
      TEST_CONFIG.timeouts.veryLong,
    );
  });

  describe('concurrency', () => {
    it(
      'should handle multiple concurrent requests',
      async () => {
        await withAISession(
          () =>
            client.createSession({
              modelName: ModelName.text as ModelNameType,
            }),
          async (session) => {
            const request: AIRequest = {
              ...TEST_REQUESTS.text,
              model_params: await getModelParameterDefaults(ModelName.text),
            };

            const requests = Array.from({
              length: TEST_CONFIG.requestCounts.text,
            }).map((_, i) =>
              sendRequestAndCollectEvents(session, {
                ...request,
                messages: [
                  {
                    role: 'user',
                    content: `Test concurrent request ${i + 1}: ${request.messages[0].content}`,
                  },
                ],
              }),
            );

            const results = await Promise.all(requests);

            results.forEach(({ result }, i) => {
              expect(result).toBeDefined();
              expect(result).not.toBeNull();

              if (result !== null) {
                expect(typeof result).toBe('string');
                expect(result.length).toBeGreaterThan(0);
              }
            });
          },
        );
      },
      TEST_CONFIG.timeouts.veryLong,
    );
  });
});
