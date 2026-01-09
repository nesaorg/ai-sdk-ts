import BN from 'bn.js';
import { OfflineSigner } from '@cosmjs/proto-signing';
import {
  SigningStargateClient,
  SigningStargateClientOptions,
  GasPrice,
  Event,
  assertIsDeliverTxSuccess,
  isDeliverTxFailure,
} from '@cosmjs/stargate';
import { StdFee } from '@cosmjs/amino';

import { getRegistry } from './codec-registry.js';
import { TokenPrice } from './codec/agent/v1/agent.js';
import {
  MsgRegisterSession,
  MsgRegisterSessionResponse,
} from './codec/agent/v1/tx.js';
import { Coin } from './codec/cosmos/base/v1beta1/coin.js';
import {
  MsgAddMinerDeposit,
  MsgRegisterModel,
  MsgRegisterModelResponse,
  MsgRegisterMiner,
  MsgRegisterNode,
} from './codec/dht/v1/tx.js';
import { Long } from './codec/helpers.js';
import { RpcClient, RpcClientOptions } from './rpc-client.js';
import {
  VRFKeyData,
  processVRF,
  Evaluate,
  VRF as ProtoVRF,
} from './utils/vrf.js';
import { Logger, noopLogger, LogLevel } from '../../utils/logger.js';

/**
 * Parameters required to register a new AI inference session on the blockchain.
 * This interface defines the configuration needed to create and fund a session
 * for interacting with AI models on the Nesa network.
 */
export interface RegisterSessionParams {
  /**
   * Optional seed value used for generating verifiable random values (VRF).
   * If not provided, a random seed will be generated automatically.
   */
  sessionSeed?: string;

  /**
   * The name of the AI model to be used for this session.
   * Must match a supported model name on the Nesa network.
   */
  modelName: string;

  /**
   * The amount of tokens to lock for this session, represented as a string.
   * This amount will be locked from the sender's account for the duration of the session.
   */
  lockAmount: string;

  /**
   * The denomination of the tokens to be locked (e.g., 'untrn' for Nesa Testnet tokens).
   * If not specified, the network's default denomination will be used.
   */
  lockDenom?: string;

  /**
   * Optional transaction fee configuration.
   * If not provided, the network's default fee structure will be used.
   */
  fee?: StdFee;

  /**
   * Optional maximum unit price for the session.
   * If provided, session creation will fail if the unit price exceeds this value.
   *
   * Find the current price of a model using the `rpc.getTokenPrice` method.
   */
  maxUnitPrice?: TokenPrice;
}

/**
 * Represents a successfully registered AI session on the blockchain.
 * This interface contains all the metadata and proof of the session registration
 * that can be used to interact with the AI model.
 */
export interface RegisterSessionOnChain {
  /** The blockchain address that registered this session */
  account: string;

  /** Unique identifier for the registered session */
  sessionId: string;

  /**
   * The name of the AI model associated with this session.
   * This determines the capabilities and pricing of the AI service.
   */
  modelName: string;

  /**
   * The token price structure for this session, including the cost per token
   * and any applicable rate limits or pricing tiers.
   */
  tokenPrice: TokenPrice;

  /**
   * Verifiable Random Function (VRF) proof generated during session registration.
   * Used for cryptographic verification of the session's authenticity.
   */
  vrf: ProtoVRF;

  /**
   * The amount and denomination of tokens locked for this session.
   * These tokens are held in escrow until the session is completed or cancelled.
   */
  lockBalance: Coin;

  /**
   * The transaction hash of the blockchain transaction that created this session.
   * Can be used to look up the transaction in a block explorer.
   */
  transactionHash: string;

  /**
   * The block height at which the session was registered.
   * Used for tracking session age and blockchain state.
   */
  height: number;

  /**
   * Raw blockchain events emitted during session registration.
   * Contains detailed information about the session creation process.
   */
  events: readonly Event[];
}

export class SigningRpcClient extends RpcClient {
  public readonly sign: SigningStargateClient;
  public readonly senderAddress: string;

  public static async connectWithSigner(
    rpcEndpoint: string,
    signer: OfflineSigner,
    senderAddress: string,
    chainId: string | undefined,
    prefix: string,
    defaultDenom: string,
    defaultGasPrice: string,
    options: SigningStargateClientOptions & { logger?: Logger },
  ): Promise<SigningRpcClient> {
    const logger = options.logger ?? noopLogger;
    const baseRpc = await RpcClient.connect({
      rpcEndpoint,
      chainId,
      prefix,
      defaultDenom,
      defaultGasPrice,
      logger,
    } as RpcClientOptions);
    logger.log(
      LogLevel.verbose,
      `[SigningRpcClient] Creating SigningStargateClient`,
    );
    const mergedOptions: SigningStargateClientOptions = {
      ...options,
      registry: getRegistry(),
      gasPrice: GasPrice.fromString(defaultGasPrice),
      broadcastPollIntervalMs: options.broadcastPollIntervalMs || 1000,
      broadcastTimeoutMs: options.broadcastTimeoutMs || 60000,
    };

    const signingClient = await SigningStargateClient.createWithSigner(
      baseRpc.tm,
      signer,
      mergedOptions,
    );
    return new SigningRpcClient(
      baseRpc,
      signingClient,
      senderAddress,
      baseRpc.chainId,
      prefix,
      defaultDenom,
      defaultGasPrice,
      logger,
    );
  }

  private constructor(
    base: RpcClient,
    signingClient: SigningStargateClient,
    senderAddress: string,
    chainId: string,
    prefix: string,
    defaultDenom: string,
    defaultGasPrice: string,
    logger: Logger,
  ) {
    super(
      base.tm,
      base.query,
      chainId,
      prefix,
      defaultDenom,
      defaultGasPrice,
      logger,
    );

    this.sign = signingClient;
    this.senderAddress = senderAddress;
  }

  public async registerSession(
    keyData: VRFKeyData,
    params: RegisterSessionParams,
  ): Promise<RegisterSessionOnChain> {
    const lockDenom = params.lockDenom ?? this.defaultDenom;

    const lockBalance: Coin = {
      denom: lockDenom,
      amount: params.lockAmount,
    };

    const modelNameLower = params.modelName.toLowerCase();
    const [tokenPrice, resVrf] = await Promise.all([
      this.getTokenPrice(modelNameLower),
      this.generateVRF(keyData),
    ]);

    if (params.maxUnitPrice) {
      if (
        new BN(tokenPrice.inputPrice.amount).gt(
          new BN(params.maxUnitPrice.inputPrice.amount),
        ) ||
        new BN(tokenPrice.outputPrice.amount).gt(
          new BN(params.maxUnitPrice.outputPrice.amount),
        )
      ) {
        const errorMessage = `Unit price for ${params.modelName} exceeds maxUnitPrice: ${JSON.stringify(tokenPrice)} > ${JSON.stringify(params.maxUnitPrice)}`;

        this.logger.log(LogLevel.error, errorMessage);
        throw new Error(errorMessage);
      }
    }

    const protoMsg = MsgRegisterSession.fromPartial({
      account: this.senderAddress,
      sessionId: resVrf.sessionId,
      modelName: modelNameLower,
      lockBalance,
      vrf: resVrf.vrf,
      tokenPrice,
    });
    const anyMsg = {
      typeUrl: '/agent.v1.MsgRegisterSession',
      value: protoMsg,
    };

    this.logger.log(
      LogLevel.log,
      `[SigningRpcClient] Broadcasting MsgRegisterSession for session="${resVrf.sessionId}"`,
    );
    const result = await this.sign.signAndBroadcast(
      this.senderAddress,
      [anyMsg],
      params.fee || 'auto',
    );

    assertIsDeliverTxSuccess(result);

    if (
      !result.msgResponses ||
      result.msgResponses.length === 0 ||
      !result.msgResponses[0]?.value
    ) {
      throw new Error(
        `[SigningRpcClient] MsgRegisterSession: No response in result`,
      );
    }

    const { account, modelName } = MsgRegisterSessionResponse.decode(
      result.msgResponses[0]?.value,
    );

    return {
      sessionId: resVrf.sessionId,
      modelName,
      account,
      lockBalance,
      tokenPrice,
      vrf: resVrf.vrf,
      transactionHash: result.transactionHash.toUpperCase(),
      height: result.height,
      events: result.events,
    };
  }

  private async generateVRF(
    keyData: VRFKeyData,
  ): Promise<{ vrf: ProtoVRF; sessionId: string }> {
    const vrfSeedResponse = await this.query.agent.VRFSeedRequest(
      this.senderAddress,
    );
    const seedFromChain: Uint8Array = vrfSeedResponse.seed;
    if (seedFromChain.length !== 32) {
      throw new Error(
        `generateVRF: expected 32-byte seed, got ${seedFromChain.length}`,
      );
    }
    const { sessionId } = processVRF(seedFromChain, keyData);

    const [hashRandom, proofBytes] = Evaluate(
      keyData.privateKey,
      seedFromChain,
    );

    return {
      vrf: {
        seed: seedFromChain,
        proof: proofBytes,
        hashRandom,
      },
      sessionId,
    };
  }

  public async registerModel(
    creator: string,
    modelName: string,
    allowList: string[],
    tokenPrice?: TokenPrice,
    fee?: StdFee | number | 'auto',
  ): Promise<MsgRegisterModelResponse> {
    this.logger.log(LogLevel.verbose, `Register Model`);
    const senderAddress = this.senderAddress;
    const registerModelMsg = {
      typeUrl: '/dht.v1.MsgRegisterModel',
      value: MsgRegisterModel.fromPartial({
        creator,
        modelName,
        allowList,
        tokenPrice,
      }),
    };
    this.logger.log(
      LogLevel.verbose,
      'Register Model Message: ',
      registerModelMsg,
    );
    const result = await this.sign.signAndBroadcast(
      senderAddress,
      [registerModelMsg],
      fee || 'auto',
    );
    if (isDeliverTxFailure(result)) {
      console.error(result.transactionHash);
      result.events.forEach((e) => console.error(e));
      console.error(result);
      throw new Error(result.toString());
    }

    return {
      events: result.events,
      transactionHash: result.transactionHash,
      height: result.height,
    };
  }

  public async registerMiner(
    creator: string,
    nodeId: string,
    options: { fee?: StdFee | number | 'auto'; maxRetries?: number } = {},
  ): Promise<{ txHash: string }> {
    if (!creator || !nodeId) {
      throw new Error('creator and nodeId are required');
    }

    const { fee = 'auto', maxRetries = 3 } = options;
    this.logger.log(
      LogLevel.log,
      `[SigningRpcClient] registerMiner(nodeId="${nodeId}")`,
    );

    const registerMinerMsg = {
      typeUrl: MsgRegisterMiner.typeUrl,
      value: MsgRegisterMiner.fromPartial({
        creator,
        nodeId,
      }),
    };

    let lastError = '';
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const result = await this.sign.signAndBroadcast(
          this.senderAddress,
          [registerMinerMsg],
          fee,
        );
        assertIsDeliverTxSuccess(result);
        return { txHash: result.transactionHash.toUpperCase() };
      } catch (e) {
        lastError = e instanceof Error ? e.message : String(e);
        if (attempt < maxRetries - 1) {
          const delayMs = 1000 * (attempt + 1);
          this.logger.log(
            LogLevel.verbose,
            `[SigningRpcClient] registerMiner attempt ${attempt + 1} failed, retrying in ${delayMs}ms`,
          );
          await new Promise((r) => setTimeout(r, delayMs));
        }
      }
    }

    this.logger.log(
      LogLevel.error,
      `[SigningRpcClient] registerMiner failed after retries: ${lastError}`,
    );
    throw new Error(`registerMiner failed: ${lastError}`);
  }

  public async registerNode(
    nodeId: string,
    publicName: string,
    version: string,
    networkAddress: string,
    walletAddress: string,
    vram: Long,
    networkRps: number,
    usingRelay: boolean,
    nextPings: Uint8Array[],
    options: { fee?: StdFee | number | 'auto'; maxRetries?: number } = {},
  ): Promise<{ txHash: string }> {
    if (
      !nodeId ||
      !publicName ||
      !version ||
      !networkAddress ||
      !walletAddress ||
      !vram ||
      !networkRps ||
      !usingRelay ||
      !nextPings
    ) {
      throw new Error(
        'nodeId, publicName, version, networkAddress, walletAddress, vram, networkRps, usingRelay, and nextPings are required',
      );
    }

    const { fee = 'auto', maxRetries = 3 } = options;
    this.logger.log(
      LogLevel.log,
      `[SigningRpcClient] registerNode(nodeId="${nodeId}", publicName="${publicName}")`,
    );

    const registerNodeMsg = {
      typeUrl: MsgRegisterNode.typeUrl,
      value: MsgRegisterNode.fromPartial({
        creator: this.senderAddress,
        nodeId,
        publicName,
        version,
        networkAddress,
        walletAddress,
        vram,
        networkRps,
        usingRelay,
        nextPings,
      }),
    };

    let lastError = '';
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const result = await this.sign.signAndBroadcast(
          this.senderAddress,
          [registerNodeMsg],
          fee,
        );
        assertIsDeliverTxSuccess(result);
        return { txHash: result.transactionHash.toUpperCase() };
      } catch (e) {
        lastError = e instanceof Error ? e.message : String(e);
        if (attempt < maxRetries - 1) {
          const delayMs = 1000 * (attempt + 1);
          this.logger.log(
            LogLevel.verbose,
            `[SigningRpcClient] registerNode attempt ${attempt + 1} failed, retrying in ${delayMs}ms`,
          );
          await new Promise((r) => setTimeout(r, delayMs));
        }
      }
    }

    this.logger.log(
      LogLevel.error,
      `[SigningRpcClient] registerNode failed after retries: ${lastError}`,
    );
    throw new Error(`registerNode failed: ${lastError}`);
  }

  public async addMinerDeposit(
    nodeId: string,
    amountUnes: string,
    options: { fee?: StdFee | 'auto'; maxRetries?: number } = {},
  ): Promise<{ txHash: string }> {
    if (!nodeId || !amountUnes) {
      throw new Error('nodeId and amountUnes are required');
    }

    const { fee = 'auto', maxRetries = 3 } = options;
    this.logger.log(
      LogLevel.log,
      `[SigningRpcClient] addMinerDeposit(nodeId="${nodeId}", amountUnes="${amountUnes}")`,
    );

    const addMinerDepositMsg = {
      typeUrl: MsgAddMinerDeposit.typeUrl,
      value: MsgAddMinerDeposit.fromPartial({
        depositor: this.senderAddress,
        nodeId,
        amount: { denom: this.defaultDenom, amount: amountUnes },
      }),
    };

    let lastError = '';
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const result = await this.sign.signAndBroadcast(
          this.senderAddress,
          [addMinerDepositMsg],
          fee,
        );
        assertIsDeliverTxSuccess(result);
        return { txHash: result.transactionHash.toUpperCase() };
      } catch (e) {
        lastError = e instanceof Error ? e.message : String(e);
        if (attempt < maxRetries - 1) {
          const delayMs = 1000 * (attempt + 1);
          this.logger.log(
            LogLevel.verbose,
            `[SigningRpcClient] addMinerDeposit attempt ${attempt + 1} failed, retrying in ${delayMs}ms`,
          );
          await new Promise((r) => setTimeout(r, delayMs));
        }
      }
    }

    this.logger.log(
      LogLevel.error,
      `[SigningRpcClient] addMinerDeposit failed after retries: ${lastError}`,
    );
    throw new Error(`addMinerDeposit failed: ${lastError}`);
  }
}
