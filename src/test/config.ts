import 'dotenv/config';

import devnet from '../chains/nesa.devnet.js';
import type { ChainInfo } from '../chains/types.js';

// Test configuration
export const TEST_CONFIG = {
  // Environment variables
  env: {
    apiAuthToken: process.env.API_AUTH_TOKEN,
    mnemonic: process.env.MNEMONIC,
  },

  // Endpoints
  endpoints: {
    playgroundAgent: process.env.TEST_PG_URL!,
    rpc: process.env.TEST_RPC_URL!,
  },

  // Test timeouts in milliseconds
  timeouts: {
    short: 30000, // 30 seconds
    medium: 60000, // 60 seconds
    long: 120000, // 120 seconds
    veryLong: 300000, // 300 seconds (5 minutes)
    delayBetweenTests: 6000, // 6 second delay between tests
  },

  // RPC configuration
  rpc: {
    endpoint: process.env.TEST_RPC_URL!,
    chainId: process.env.TEST_CHAIN_ID || 'nesa',
    gasPrice: process.env.TEST_GAS_PRICE || '0.25unes',
  },

  // Wallet configuration
  wallet: {
    mnemonic: process.env.MNEMONIC!,
    prefix: process.env.TEST_COIN_PREFIX || 'nesa',
    lockAmount: '1000000',
    lockDenom: process.env.TEST_LOCK_DENOM || 'unes',
  },

  // API configuration
  api: {
    authToken: process.env.API_AUTH_TOKEN!,
    baseUrl: process.env.API_BASE_URL!,
  },

  // Model configuration
  models: {
    text: 'meta-llama/llama-3.2-1b-instruct',
    invalid: 'invalid-model',
  },

  // Test requests
  requestCounts: {
    text: 5,
  },

  // Chain configuration
  chain: devnet as ChainInfo,

  // Test retries
  retries: 3,
} as const;

// Validate required environment variables
const requiredEnvVars = ['API_AUTH_TOKEN', 'MNEMONIC'] as const;
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export default TEST_CONFIG;
