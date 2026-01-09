<div align="center">
   <a href="https://nesa.ai"><img src="https://video.nesa.ai/logotype.svg" align="center" /></a><br>
</div>

# Nesa SDK

<p align="center">A TypeScript-based SDK for interacting with the Nesa AI Platform via web and node environments, providing a robust interface for managing AI sessions and sending inference requests to over 100,000 AI Models.</p>

<p align="center">
    <a href="https://nesa.ai/"><b>Website</b></a> •
    <a href="https://docs.nesa.ai"><b>Documentation</b></a>
</p>

<div align="center">

[![Website nesa.ai](https://img.shields.io/website-up-down-green-red/https/nesa.ai.svg)](https://nesa.ai)
[![Docs](https://img.shields.io/badge/docs-up-green)](https://docs.nesa.ai/)
[![Discord](https://img.shields.io/discord/1195309883394904084?label=discord)](https://discord.com/invite/Z4jZPTdfcY)
[![Twitter Base](https://img.shields.io/twitter/follow/nesaorg?style=social)](https://x.com/nesaorg)

</div>

## Installation

```bash
bun install @nesaorg/ai-sdk
# or
npm install @nesaorg/ai-sdk
# or
pnpm add @nesaorg/ai-sdk
# or
yarn add @nesaorg/ai-sdk
```

## Usage

### Creating an AIClient Instance

The `AIClientRpc` class provides a high-level interface for interacting with the Nesa AI Platform over RPC, backed by Nesa Chain.

```typescript
import { AIClientRpc, devnet, signerFromMnemonic } from '@nesaorg/ai-sdk';

// Alternatively, you might use another method like `signerFromPrivateKey`
const signer = await signerFromMnemonic(process.env.MNEMONIC!, 'nesa');
const [{ address }] = await signer.getAccounts();

const clientConfig: AIClientRpcConfiguration = {
  rpcEndpoint: devnet.rpc!,
  chainId: devnet.chainId,
  signer: signer,
  senderAddress: address,
};

const client = await AIClientRpc.initialize(clientConfig);
```

### Creating an AISession

An `AISession` instance is the starting point for interacting with individual AI models. Once a session is created, it can be used to send inference requests to the model.

```typescript
const sessionInitParams: AIClientRpcSessionInitParams = {
  modelName: 'meta-llama/llama-3.2-1b-instruct',
  lockAmount: (1_000_000).toString(),
};

const session = await client.createSession(sessionInitParams);
await session.openHandle;
```

### Sending an AIRequest

An `AIRequest` contains the input information required to generate a response from your session's AI model.

Each model is unique in terms of the parameters it accepts. The `getModelParameterDefaults` function can be used to get the default parameters for a model.

```typescript
import {
  AIRequest,
  AIRequestEventType,
  getModelParameterDefaults,
} from '@nesaorg/ai-sdk';

const request: AIRequest = {
  messages: [
    {
      role: 'user',
      content: 'Hi, how are you?',
    },
  ],
  model_params: await getModelParameterDefaults(session.modelName),
};

const doneChunk = await session.send(request);
console.log(`Final result: ${doneChunk.result}`);

// Alternatively, collect all chunks into a complete response
let finalResult = '';
for await (const event of session.sendGenerator(request)) {
  switch (event.type) {
    case AIRequestEventType.ack:
      console.log('Request acknowledged');
      break;
    case AIRequestEventType.inferenceChunk:
      console.log(`Received chunk: ${event.content}`);
      finalResult += event.content;
      break;
    case AIRequestEventType.inferenceDoneChunk:
      // console.log(`Final result: ${event.result}`);
      break;
    case AIRequestEventType.error:
      console.error('Error:', event);
      break;
  }
}
console.log(`Final result: ${finalResult}`);

// Finally, close the session
await session.close();
```

### Session State Management

Sessions states are defined by the `AISessionState` enum and can be monitored by adding a event listener to the session.

The `openHandle` promise resolves once the session is opened. This is useful for waiting for the session to be ready before sending inference requests and will immediately resolve if the session has previously opened.

```typescript
// Monitor session state changes
session.on('stateChange', (e) => {
  console.log(`Session state changed from ${e.previousState} to ${e.state}`);
});

// Wait for the session to open
await session.openHandle;

// Close the session when done
await session.close();
```

### Using withAISession Helper

The SDK provides a convenient `withAISession` helper function that waits for session open and automatically handles cleanup:

```typescript
import {
  withAISession,
  AIRequest,
  AIRequestEventType,
  getModelParameterDefaults,
} from '@nesaorg/ai-sdk';

try {
  const doneChunk = await withAISession(
    () =>
      client.createSession({
        modelName: 'meta-llama/llama-3.2-1b-instruct',
        lockAmount: '1000000',
      }),
    async (session) =>
      session.send({
        messages: [
          {
            role: 'user',
            content: 'Tell me a joke',
          },
        ],
        model_params: await getModelParameterDefaults(session.modelName),
      }),
    {
      // Optional: Set a custom timeout for session opening (default: 60000ms)
      sessionOpenTimeout: 30000, // 30 seconds

      // Optional: Handle cleanup errors
      onCleanupError: (error) => {
        console.error('Error during session cleanup:', error);
      },
    },
  );

  console.log(`Final result: ${doneChunk.result}`);
} catch (error: any) {
  console.log('Error during session creation/use', error);
}
```

The `withAISession` helper ensures that:

1. The session is returned after it reaches an `open` state
2. Cleanup happens in a `finally` block
3. Custom error handling for session creation, use, and cleanup is supported
4. Session opening is automatically timed out after the specified duration (default: 60 seconds)

## Full Examples

### Example 1: Standard Usage

```typescript
import 'dotenv/config';

import {
  AIClientRpc,
  AIClientRpcConfiguration,
  AISession,
  devnet,
  getModelParameterDefaults,
  signerFromMnemonic,
} from '@nesaorg/ai-sdk';

// Environment Variables
const MNEMONIC = process.env.MNEMONIC!;

// Session Initialization Parameters
const modelName = 'meta-llama/llama-3.2-1b-instruct';
const lockAmount = (1_000_000).toString();

// Model Request
const questions = ['Tell me your name', 'Tell me a joke'];

const main = async () => {
  let session: AISession | null = null;

  try {
    const signer = await signerFromMnemonic(MNEMONIC, 'nesa');
    const [{ address }] = await signer.getAccounts();

    const rpcClientConfig: AIClientRpcConfiguration = {
      rpcEndpoint: devnet.rpc!,
      chainId: devnet.chainId,
      signer: signer,
      senderAddress: address,
    };

    console.log('Initializing client...');
    const rpcClient = await AIClientRpc.initialize(rpcClientConfig);

    console.log('Creating session...');
    session = await rpcClient.createSession({
      modelName,
      lockAmount,
    })!;

    if (!session) {
      throw new Error('Session creation returned empty object');
    }

    console.log('Waiting for the session to open...');
    await session.openHandle;

    console.log('Getting model parameters...');
    const model_params = await getModelParameterDefaults(session.modelName);

    console.log('Sending requests...');
    const doneChunks = await Promise.all(
      questions.map((question) =>
        session!.send({
          messages: [
            {
              role: 'user',
              content: question,
            },
          ],
          model_params,
        }),
      ),
    );

    console.log(doneChunks.map((o, idx) => `${questions[idx]} -> ${o.result}`));
  } catch (error: any) {
    console.error('Error during session creation/use', error);
  } finally {
    if (session) {
      console.log('Closing session...');
      await session.close();
    }
  }
};

main().then(() => process.exit(0));
```

### Example 2: withAISession Helper

```typescript
import 'dotenv/config';

import {
  AIClientRpc,
  AIClientRpcConfiguration,
  devnet,
  getModelParameterDefaults,
  signerFromMnemonic,
  withAISession,
} from '@nesaorg/ai-sdk';

// Environment Variables
const MNEMONIC = process.env.MNEMONIC!;

// Session Initialization Parameters
const modelName = 'meta-llama/llama-3.2-1b-instruct';
const lockAmount = (1_000_000).toString();

// Model Request
const questions = ['Tell me your name', 'Tell me a joke'];

const main = async () => {
  try {
    const signer = await signerFromMnemonic(MNEMONIC, 'nesa');
    const [{ address }] = await signer.getAccounts();

    const rpcClientConfig: AIClientRpcConfiguration = {
      rpcEndpoint: devnet.rpc!,
      signer: signer,
      senderAddress: address,
    };

    console.log('Initializing client...');
    const rpcClient = await AIClientRpc.initialize(rpcClientConfig);

    console.log('Getting model parameters...');
    const model_params = await getModelParameterDefaults(modelName);

    console.log('Creating session and sending requests...');
    const doneChunks = await withAISession(
      () =>
        rpcClient.createSession({
          modelName,
          lockAmount,
        }),
      (session) =>
        Promise.all(
          questions.map((question) =>
            session.send({
              messages: [
                {
                  role: 'user',
                  content: question,
                },
              ],
              model_params,
            }),
          ),
        ),
    );

    console.log(doneChunks.map((o, idx) => `${questions[idx]} -> ${o.result}`));
  } catch (error: any) {
    console.error('Error during session creation/use', error);
  }
};

main().then(() => process.exit(0));
```

## Event Types

The `AISession.sendGenerator` method yields some or all of the following event types:

- `ack`: Initial acknowledgment of the request
- `inferenceChunk`: Partial results as they are generated
- `inferenceDoneChunk`: Final complete results
- `error`: Error during inference
- `close`: Request closure

## Advanced Features

### Experimental: Low-Rank Adaptations (LoRA)

```typescript
const requestWithLoRA: AIRequest = {
  messages: [...],
  model_params: {...},
  low_rank_adaptations: [
    {
      lora_id: 'lora-123',
      scale: 0.8,
    },
  ],
};
```

### Custom Timeout Configuration

Each `AIRequest` can be configured with custom timeout settings.

```typescript
const requestWithTimeouts: AIRequest = {
  messages: [...],
  model_params: {...},
  requestConfig: {
    timeoutTtfb: 3000,   // 3 seconds for first byte of response
    timeoutResult: 10000, // 10 seconds for complete result
  },
};
```

## Logging

The SDK uses a flexible logging system:

```typescript
import { AIClientRpc, Logger } from '@nesaorg/ai-sdk';

const logger: Logger = {
  log: (level, message, ...params) => {
    console.log(`[${level}] ${message}`, ...params);
  },
};

const client = await AIClientRpc.initialize({
  // ... other config
  logger,
});
```

## Miner Management

The SDK provides methods for registering nodes, registering miners, and managing miner deposits on the Nesa blockchain.

### Registering a Node

Register a new node on the network:

```typescript
import { Long } from '@nesaorg/ai-sdk';

const nodeParams = {
  nodeId: '...', // see https://github.com/nesaorg/bootstrap/blob/master/FAQ.md#how-do-i-find-my-node-id
  publicName: 'my-node-moniker',
  version: '1.0.1', // current version of https://github.com/nesaorg/bootstrap
  networkAddress: '192.168.1.254', // replace
  vram: Long.fromNumber(8000), // deprecated
  networkRps: 1000, // deprecated
  usingRelay: false, // deprecated
  nextPings: new Uint8Array(0), // deprecated
};

try {
  const result = await client.rpc.registerNode(
    nodeParams.nodeId,
    nodeParams.publicName,
    nodeParams.version,
    nodeParams.networkAddress,
    client.rpc.senderAddress,
    nodeParams.vram,
    nodeParams.networkRps,
    nodeParams.usingRelay,
    nodeParams.nextPings,
    { fee: 250000 }, // adjust as needed
  );
  console.log(`Node registered with tx hash: ${result.txHash}`);
} catch (error) {
  console.error('Node registration failed:', error);
}
```

### Registering a Miner

Required for each node entity:

```typescript
try {
  const result = await client.rpc.registerMiner(
    client.rpc.senderAddress,
    '...', // see https://github.com/nesaorg/bootstrap/blob/master/FAQ.md#how-do-i-find-my-node-id
    { fee: 250000 }, // adjust as needed
  );
  console.log(`Miner registered with tx hash: ${result.txHash}`);
} catch (error) {
  console.error('Miner registration failed:', error);
}
```

### Adding Miner Deposit

Add funds to a miner's deposit:

```typescript
try {
  const result = await client.rpc.addMinerDeposit(
    '...', // see https://github.com/nesaorg/bootstrap/blob/master/FAQ.md#how-do-i-find-my-node-id
    '1000', // amount in unes, see DHT Parameters for minimum deposit amount
    { fee: 'auto' }, // adjust as needed
  );
  console.log(`Deposit added with tx hash: ${result.txHash}`);
} catch (error) {
  console.error('Deposit failed:', error);
}
```

### Querying Miner Information

Get details about a specific miner:

```typescript
try {
  const minerDetails = await client.rpc.getMiner('miner-node-id');

  if (minerDetails.miner) {
    console.log('Miner ID:', minerDetails.miner.nodeId);
    console.log('Deposit:', minerDetails.miner.deposit);
  }
} catch (error) {
  console.error('Failed to get miner details:', error);
}
```

### Fetching DHT Parameters

Get network-wide DHT parameters:

```typescript
try {
  const dhtParams = await client.rpc.getDHTParams();

  console.log('DHT Parameters:', dhtParams.params);

  // Access specific parameters
  console.log('Miner min deposit:', dhtParams.params.minerMinDeposit);
} catch (error) {
  console.error('Failed to get DHT parameters:', error);
}
```

### Fetching Wallet Balance

Get the balance of a specific wallet address:

```typescript
try {
  const balance = await client.rpc.getWalletBalance('nesa...');

  if (balance.balance) {
    console.log('Balance:', balance.balance.amount, balance.balance.denom);
  }
} catch (error) {
  console.error('Failed to get wallet balance:', error);
}
```

## Development

### Testing

```bash
bun test
```

### Building

```bash
bun run build
```

## License

This project is licensed under the MIT License - see the [License](https://github.com/nesaorg/ai-sdk-ts/blob/main/LICENSE) file for details.
