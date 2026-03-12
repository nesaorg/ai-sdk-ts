import { describe, it, expect, beforeAll, afterEach, vi } from 'bun:test';

import { GasPrice } from '@cosmjs/stargate';

import { AIClientRpc } from '../../clients/rpc/ai-client.js';
import { signerFromMnemonic } from '../../utils/signers.js';
import {
  createTestLogger,
  sendRequestAndCollectEvents,
  sleep,
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

describe('AIClientRpc', () => {
  const logger = createTestLogger();
  let client: AIClientRpc;

  beforeAll(async () => {
    const maxRetries = 3;
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const signer = await signerFromMnemonic(
          TEST_CONFIG.env.mnemonic!,
          'nesa',
        );
        const [{ address }] = await signer.getAccounts();

        const gasPrice = GasPrice.fromString(TEST_CONFIG.rpc.gasPrice);

        client = await AIClientRpc.initialize({
          rpcEndpoint: TEST_CONFIG.endpoints.rpc,
          signer,
          senderAddress: address,
          logger,
          clientOptions: {
            broadcastTimeoutMs: TEST_CONFIG.timeouts.short,
            broadcastPollIntervalMs: 1000,
            gasPrice,
          },
        });

        lastError = null;
        break;
      } catch (error) {
        lastError = error;
        console.warn(`Initialization attempt ${attempt} failed:`, error);
        if (attempt < maxRetries) {
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    if (lastError) {
      throw lastError;
    }
  });

  afterEach(() => {
    logger.clearLogs();
  });

  describe('send request', () => {
    it(
      'should fail with an invalid lockAmount',
      async () => {
        await expect(
          client.createSession({
            modelName: ModelName.text,
            lockAmount: (9).toString(),
            lockDenom: TEST_CONFIG.wallet.lockDenom,
          }),
        ).rejects.toThrow('lock balance is too small');
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should fail with an invalid unit price',
      async () => {
        const modelName = ModelName.text;
        const maxUnitPrice = await client.rpc.getTokenPrice(modelName);
        maxUnitPrice.inputPrice.amount = (
          Number(maxUnitPrice.inputPrice.amount) - 1
        ).toString();
        maxUnitPrice.outputPrice.amount = (
          Number(maxUnitPrice.outputPrice.amount) - 1
        ).toString();

        await expect(
          client.createSession({
            modelName: modelName,
            lockAmount: (1_000_000).toString(),
            lockDenom: TEST_CONFIG.wallet.lockDenom,
            maxUnitPrice: maxUnitPrice,
          }),
        ).rejects.toThrow('exceeds maxUnitPrice');
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should create a new session for a text model',
      async () => {
        await withAISession(
          () =>
            client.createSession({
              modelName: ModelName.text,
              lockAmount: TEST_CONFIG.wallet.lockAmount,
              lockDenom: TEST_CONFIG.wallet.lockDenom,
            }),
          async (session: AISession) => {
            expect(session).toBeDefined();
            expect(session.id).toBeDefined();
            expect(session.state).toBe(AISessionState.open);
          },
        );
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should fail with an invalid model name',
      async () => {
        await sleep(TEST_CONFIG.timeouts.delayBetweenTests);

        await expect(
          client.createSession({
            modelName: 'invalid-model',
            lockAmount: TEST_CONFIG.wallet.lockAmount,
            lockDenom: TEST_CONFIG.wallet.lockDenom,
          }),
        ).rejects.toThrow();
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should send a text inference request and receive a response',
      async () => {
        await sleep(TEST_CONFIG.timeouts.delayBetweenTests);

        await withAISession(
          () =>
            client.createSession({
              modelName: ModelName.text,
              lockAmount: TEST_CONFIG.wallet.lockAmount,
              lockDenom: TEST_CONFIG.wallet.lockDenom,
            }),
          async (session) => {
            const request = { ...TEST_REQUESTS.text };
            request.model_params = await getModelParameterDefaults(
              ModelName.text,
            );

            const { events, result } = await sendRequestAndCollectEvents(
              session,
              request,
            );

            const contentEvents = events.filter(
              (e) => e.type === AIRequestEventType.inferenceChunk,
            );
            expect(contentEvents.length).toBeGreaterThan(0);
            expect(result).toBeDefined();
          },
        );
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should transition through expected states',
      async () => {
        await sleep(TEST_CONFIG.timeouts.delayBetweenTests);

        const stateChanges: string[] = [];

        await withAISession(
          () =>
            client.createSession({
              modelName: ModelName.text,
              lockAmount: TEST_CONFIG.wallet.lockAmount,
              lockDenom: TEST_CONFIG.wallet.lockDenom,
            }),
          async (session: AISession) => {
            session.on('stateChange', (e: any) => {
              stateChanges.push(`${e.previousState} -> ${e.state}`);
            });

            const request = { ...TEST_REQUESTS.text };
            request.model_params = await getModelParameterDefaults(
              ModelName.text,
            );

            await sendRequestAndCollectEvents(session, request);
          },
        );

        expect(stateChanges).toContain('open -> closing');
        expect(stateChanges).toContain('closing -> closed');
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should report an error when a session is no longer open',
      async () => {
        await sleep(TEST_CONFIG.timeouts.delayBetweenTests);

        await withAISession(
          () =>
            client.createSession({
              modelName: ModelName.text,
              lockAmount: TEST_CONFIG.wallet.lockAmount,
              lockDenom: TEST_CONFIG.wallet.lockDenom,
            }),
          async (session) => {
            const request = { ...TEST_REQUESTS.text };
            request.model_params = await getModelParameterDefaults(
              ModelName.text,
            );

            const { events, result } = await sendRequestAndCollectEvents(
              session,
              request,
            );
            const contentEvents = events.filter(
              (e) => e.type === AIRequestEventType.inferenceChunk,
            );
            expect(contentEvents.length).toBeGreaterThan(0);
            expect(result).toBeDefined();

            await session.close();

            await sleep(120 * 1000);

            const resultAfterSessionClose = await sendRequestAndCollectEvents(
              session,
              request,
            );

            const error =
              resultAfterSessionClose.error ||
              resultAfterSessionClose.events.find(
                (e) => e.type === AIRequestEventType.error,
              );
            expect(error).toBeDefined();
          },
        );
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should fail when invoice surpasses lockAmount',
      async () => {
        const testModelName = ModelName.text;

        await expect(
          withAISession(
            () =>
              client.createSession({
                modelName: testModelName,
                lockAmount: (10).toString(),
                lockDenom: TEST_CONFIG.wallet.lockDenom,
              }),
            async (session) => {
              const request = { ...TEST_REQUESTS.text };
              request.model_params =
                await getModelParameterDefaults(testModelName);

              await Promise.all(
                Array.from({ length: 99 }).map((_) => session.send(request)),
              );
            },
          ),
        ).rejects.toThrow('balance insufficient');
      },
      TEST_CONFIG.timeouts.veryLong,
    );
  });
});
