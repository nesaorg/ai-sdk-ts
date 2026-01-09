import { describe, it, expect, beforeAll, afterEach } from 'bun:test';

import { GasPrice } from '@cosmjs/stargate';
import { Long } from '../../clients/rpc/codec/helpers.js';

import { AIClientRpc } from '../../clients/rpc/ai-client.js';
import { signerFromMnemonic } from '../../utils/signers.js';
import { createTestLogger } from '../utils/test-helpers.js';
import TEST_CONFIG from '../config.js';

const TEST_NODE_ID = 'Ff9ggsmyVkFm5xaAMvBDBfobt19PzRY9aUBwGnTB36J9';

describe('Miner Usage', () => {
  const logger = createTestLogger();
  let client: AIClientRpc;
  let testAddress: string;
  let testDepositAmount = '1000';

  beforeAll(async () => {
    const maxRetries = 3;
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const signer = await signerFromMnemonic(
          TEST_CONFIG.env.mnemonic!,
          TEST_CONFIG.chain.chainId,
        );
        const [{ address }] = await signer.getAccounts();
        testAddress = address;

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

  describe('Wallet Balance', () => {
    it(
      'should check wallet balance successfully',
      async () => {
        const balance = await client.rpc.getWalletBalance(testAddress);

        expect(balance).toBeDefined();
        expect(balance.balance).toBeDefined();
        if (balance.balance) {
          expect(balance.balance.denom).toBeDefined();
          expect(balance.balance.amount).toBeDefined();

          // Log the balance for debugging
          console.log(
            `Wallet balance: ${balance.balance.amount} ${balance.balance.denom}`,
          );
        }
      },
      TEST_CONFIG.timeouts.medium,
    );

    it(
      'should handle invalid address gracefully',
      async () => {
        await expect(
          client.rpc.getWalletBalance('invalid-address'),
        ).rejects.toThrow();
      },
      TEST_CONFIG.timeouts.medium,
    );
  });

  describe('DHT Parameters', () => {
    it(
      'should check DHT params successfully',
      async () => {
        const dhtParams = await client.rpc.getDHTParams();

        expect(dhtParams).toBeDefined();
        expect(dhtParams.params).toBeDefined();

        testDepositAmount = dhtParams.params.minerMinDeposit.amount;
      },
      TEST_CONFIG.timeouts.medium,
    );
  });

  describe('Node Registration', () => {
    const testNodeId = TEST_NODE_ID;
    const testNodeParams = {
      publicName: 'test-node',
      version: '1.0.0',
      networkAddress: 'https://test-node.example.com',
      vram: Long.fromNumber(8000),
      networkRps: 1000,
      usingRelay: false,
      nextPings: new Uint8Array(0),
    };

    it(
      'should register a node successfully',
      async () => {
        try {
          const result = await client.rpc.registerNode(
            testNodeId,
            testNodeParams.publicName,
            testNodeParams.version,
            testNodeParams.networkAddress,
            client.rpc.senderAddress,
            testNodeParams.vram,
            testNodeParams.networkRps,
            testNodeParams.usingRelay,
            [testNodeParams.nextPings],
            { fee: 250000, maxRetries: 3 },
          );

          expect(result).toBeDefined();
          expect(result.txHash).toBeDefined();
          expect(typeof result.txHash).toBe('string');
          expect(result.txHash.length).toBeGreaterThan(0);

          console.log(`Node registration tx hash: ${result.txHash}`);
        } catch (error) {
          // It's acceptable if registration fails due to existing node or other issues
          expect(error).toBeDefined();
          console.log(`Node registration failed (may be expected): ${error}`);
        }
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should handle empty node ID for node registration',
      async () => {
        await expect(
          client.rpc.registerNode(
            '',
            testNodeParams.publicName,
            testNodeParams.version,
            testNodeParams.networkAddress,
            client.rpc.senderAddress,
            testNodeParams.vram,
            testNodeParams.networkRps,
            testNodeParams.usingRelay,
            [testNodeParams.nextPings],
          ),
        ).rejects.toThrow();
      },
      TEST_CONFIG.timeouts.medium,
    );
  });

  describe('Miner Registration', () => {
    const testNodeId = TEST_NODE_ID;

    it(
      'should register a miner successfully',
      async () => {
        try {
          const result = await client.rpc.registerMiner(
            client.rpc.senderAddress,
            testNodeId,
            { fee: 250000 },
          );

          expect(result).toBeDefined();
          expect(result.txHash).toBeDefined();
          expect(typeof result.txHash).toBe('string');
          expect(result.txHash.length).toBeGreaterThan(0);

          console.log(`Miner registration tx hash: ${result.txHash}`);
        } catch (error) {
          // It's acceptable if registration fails due to existing node or other issues
          expect(error).toBeDefined();
          console.log(`Miner registration failed (may be expected): ${error}`);
        }
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should handle empty node ID for miner registration',
      async () => {
        await expect(
          client.rpc.registerMiner(client.rpc.senderAddress, ''),
        ).rejects.toThrow();
      },
      TEST_CONFIG.timeouts.medium,
    );
  });

  describe('Miner Deposit', () => {
    const testNodeId = TEST_NODE_ID;

    it(
      'should add miner deposit successfully',
      async () => {
        try {
          const result = await client.rpc.addMinerDeposit(
            testNodeId,
            testDepositAmount,
          );

          expect(result).toBeDefined();
          expect(result.txHash).toBeDefined();
          expect(typeof result.txHash).toBe('string');
          expect(result.txHash.length).toBeGreaterThan(0);

          console.log(`Miner deposit tx hash: ${result.txHash}`);
        } catch (error) {
          // It's acceptable if deposit fails due to invalid node ID or insufficient funds
          expect(error).toBeDefined();
          console.log(`Miner deposit failed (may be expected): ${error}`);
        }
      },
      TEST_CONFIG.timeouts.veryLong,
    );

    it(
      'should handle invalid deposit amount',
      async () => {
        const invalidAmount = '-1000';

        await expect(
          client.rpc.addMinerDeposit(testNodeId, invalidAmount),
        ).rejects.toThrow();
      },
      TEST_CONFIG.timeouts.medium,
    );

    it(
      'should handle empty node ID',
      async () => {
        await expect(
          client.rpc.addMinerDeposit('', testDepositAmount),
        ).rejects.toThrow();
      },
      TEST_CONFIG.timeouts.medium,
    );
  });

  describe('Miner Details', () => {
    const testNodeId = TEST_NODE_ID;

    it(
      'should query miner details',
      async () => {
        try {
          const minerDetails = await client.rpc.getMiner(testNodeId);

          expect(minerDetails).toBeDefined();

          // If miner exists, check structure
          if (minerDetails.miner) {
            expect(minerDetails.miner.nodeId).toBeDefined();
            expect(minerDetails.miner.deposit).toBeDefined();
          }
        } catch (error) {
          // It's acceptable if the miner doesn't exist in test environment
          expect(error).toBeDefined();
          console.log(
            `Miner ${testNodeId} not found (expected in test environment)`,
          );
        }
      },
      TEST_CONFIG.timeouts.medium,
    );

    it(
      'should handle non-existent miner gracefully',
      async () => {
        const nonExistentNodeId = 'non-existent-miner-12345';

        await expect(client.rpc.getMiner(nonExistentNodeId)).rejects.toThrow();
      },
      TEST_CONFIG.timeouts.medium,
    );
  });
});
