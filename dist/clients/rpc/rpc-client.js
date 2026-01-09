import { QueryClient } from '@cosmjs/stargate';
import { connectComet } from '@cosmjs/tendermint-rpc';
import { setupAgentExtension, setupBankExtension, setupDHTExtension, } from './queries.js';
import { noopLogger, LogLevel } from '../../utils/logger.js';
export class RpcClient {
    constructor(tmClient, queryClient, chainId, prefix, defaultDenom, defaultGasPrice, logger) {
        this.tm = tmClient;
        this.query = queryClient;
        this.chainId = chainId;
        this.prefix = prefix;
        this.defaultDenom = defaultDenom;
        this.defaultGasPrice = defaultGasPrice;
        this.logger = logger;
    }
    static async connect(options) {
        const { rpcEndpoint, prefix, chainId: maybeChainId, defaultDenom, defaultGasPrice, logger, } = options;
        const thisLogger = logger ?? noopLogger;
        thisLogger.log(LogLevel.verbose, `[RpcClient] Connecting to ${rpcEndpoint}`);
        const tmClient = await connectComet(rpcEndpoint);
        const queryClient = QueryClient.withExtensions(tmClient, setupAgentExtension, setupBankExtension, setupDHTExtension);
        let chainId = maybeChainId;
        if (!chainId) {
            thisLogger.log(LogLevel.verbose, `[RpcClient] Fetching chainId from node status`);
            const statusResponse = await tmClient.status();
            chainId = statusResponse.nodeInfo.network;
        }
        thisLogger.log(LogLevel.log, `[RpcClient] Connected to chainId=${chainId}`);
        return new RpcClient(tmClient, queryClient, chainId, prefix, defaultDenom, defaultGasPrice, thisLogger);
    }
    async getWalletBalance(address) {
        this.logger.log(LogLevel.verbose, `[RpcClient] getWalletBalance()`);
        return await this.query.bank.balance(address);
    }
    async getParams() {
        this.logger.log(LogLevel.verbose, `[RpcClient] getParams()`);
        return await this.query.agent.params();
    }
    async getDHTParams() {
        this.logger.log(LogLevel.verbose, `[RpcClient] getDHTParams()`);
        return await this.query.dht.params();
    }
    async getMiner(nodeId) {
        this.logger.log(LogLevel.verbose, `[RpcClient] getMiner("${nodeId}")`);
        return await this.query.dht.getMiner(nodeId);
    }
    async getModel(modelName) {
        this.logger.log(LogLevel.verbose, `[RpcClient] getModel("${modelName}")`);
        return await this.query.dht.getModel(modelName.toLowerCase());
    }
    async getTokenPrice(modelName) {
        this.logger.log(LogLevel.verbose, `[RpcClient] getTokenPrice("${modelName}")`);
        const res = await this.getModel(modelName.toLowerCase());
        if (!res.model) {
            throw new Error(`Model "${modelName}" not found on chain`);
        }
        return res.model.tokenPrice;
    }
    async getVRFSeed(account) {
        this.logger.log(LogLevel.verbose, `[RpcClient] getVRFSeed("${account}")`);
        const resp = await this.query.agent.VRFSeedRequest(account);
        return resp.seed;
    }
    async getSession(sessionId) {
        this.logger.log(LogLevel.verbose, `[RpcClient] getSession("${sessionId}")`);
        return await this.query.agent.sessionRequest(sessionId);
    }
    async getInferenceAgent(account) {
        this.logger.log(LogLevel.verbose, `[RpcClient] getInferenceAgent(account="${account}")`);
        return await this.query.agent.inferenceAgentRequest(account);
    }
}
//# sourceMappingURL=rpc-client.js.map