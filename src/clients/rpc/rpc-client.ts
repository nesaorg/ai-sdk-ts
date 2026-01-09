import { QueryClient } from '@cosmjs/stargate';
import { CometClient, connectComet } from '@cosmjs/tendermint-rpc';

import { TokenPrice } from './codec/agent/v1/agent.js';
import {
  QueryGetMinerResponse,
  QueryGetModelResponse,
} from './codec/dht/v1/query.js';
import {
  setupAgentExtension,
  setupBankExtension,
  setupDHTExtension,
} from './queries.js';
import { Logger, noopLogger, LogLevel } from '../../utils/logger.js';

export interface RpcClientOptions {
  rpcEndpoint: string;
  prefix: string;
  chainId?: string;
  defaultDenom: string;
  defaultGasPrice: string;
  logger?: Logger;
}

export class RpcClient {
  public readonly tm: CometClient;

  public readonly query: QueryClient &
    ReturnType<typeof setupAgentExtension> &
    ReturnType<typeof setupBankExtension> &
    ReturnType<typeof setupDHTExtension>;
  public readonly chainId: string;
  public readonly prefix: string;
  public readonly defaultDenom: string;
  public readonly defaultGasPrice: string;
  protected readonly logger: Logger;

  protected constructor(
    tmClient: CometClient,
    queryClient: QueryClient &
      ReturnType<typeof setupAgentExtension> &
      ReturnType<typeof setupBankExtension> &
      ReturnType<typeof setupDHTExtension>,
    chainId: string,
    prefix: string,
    defaultDenom: string,
    defaultGasPrice: string,
    logger: Logger,
  ) {
    this.tm = tmClient;
    this.query = queryClient;
    this.chainId = chainId;
    this.prefix = prefix;
    this.defaultDenom = defaultDenom;
    this.defaultGasPrice = defaultGasPrice;
    this.logger = logger;
  }

  public static async connect(options: RpcClientOptions): Promise<RpcClient> {
    const {
      rpcEndpoint,
      prefix,
      chainId: maybeChainId,
      defaultDenom,
      defaultGasPrice,
      logger,
    } = options;

    const thisLogger = logger ?? noopLogger;

    thisLogger.log(
      LogLevel.verbose,
      `[RpcClient] Connecting to ${rpcEndpoint}`,
    );
    const tmClient = await connectComet(rpcEndpoint);

    const queryClient = QueryClient.withExtensions(
      tmClient,
      setupAgentExtension,
      setupBankExtension,
      setupDHTExtension,
    );

    let chainId = maybeChainId;
    if (!chainId) {
      thisLogger.log(
        LogLevel.verbose,
        `[RpcClient] Fetching chainId from node status`,
      );
      const statusResponse = await tmClient.status();
      chainId = statusResponse.nodeInfo.network;
    }

    thisLogger.log(LogLevel.log, `[RpcClient] Connected to chainId=${chainId}`);

    return new RpcClient(
      tmClient,
      queryClient,
      chainId,
      prefix,
      defaultDenom,
      defaultGasPrice,
      thisLogger,
    );
  }

  public async getWalletBalance(address: string) {
    this.logger.log(LogLevel.verbose, `[RpcClient] getWalletBalance()`);
    return await this.query.bank.balance(address);
  }

  public async getParams() {
    this.logger.log(LogLevel.verbose, `[RpcClient] getParams()`);
    return await this.query.agent.params();
  }

  public async getDHTParams() {
    this.logger.log(LogLevel.verbose, `[RpcClient] getDHTParams()`);
    return await this.query.dht.params();
  }

  public async getMiner(nodeId: string): Promise<QueryGetMinerResponse> {
    this.logger.log(LogLevel.verbose, `[RpcClient] getMiner("${nodeId}")`);
    return await this.query.dht.getMiner(nodeId);
  }

  public async getModel(modelName: string): Promise<QueryGetModelResponse> {
    this.logger.log(LogLevel.verbose, `[RpcClient] getModel("${modelName}")`);
    return await this.query.dht.getModel(modelName.toLowerCase());
  }

  public async getTokenPrice(modelName: string): Promise<TokenPrice> {
    this.logger.log(
      LogLevel.verbose,
      `[RpcClient] getTokenPrice("${modelName}")`,
    );
    const res = await this.getModel(modelName.toLowerCase());
    if (!res.model) {
      throw new Error(`Model "${modelName}" not found on chain`);
    }
    return res.model.tokenPrice;
  }

  public async getVRFSeed(account: string): Promise<Uint8Array> {
    this.logger.log(LogLevel.verbose, `[RpcClient] getVRFSeed("${account}")`);
    const resp = await this.query.agent.VRFSeedRequest(account);
    return resp.seed;
  }

  public async getSession(sessionId: string) {
    this.logger.log(LogLevel.verbose, `[RpcClient] getSession("${sessionId}")`);
    return await this.query.agent.sessionRequest(sessionId);
  }

  public async getInferenceAgent(account: string) {
    this.logger.log(
      LogLevel.verbose,
      `[RpcClient] getInferenceAgent(account="${account}")`,
    );
    return await this.query.agent.inferenceAgentRequest(account);
  }
}
