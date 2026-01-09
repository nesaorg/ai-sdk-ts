import { QueryClient } from '@cosmjs/stargate';
import { CometClient } from '@cosmjs/tendermint-rpc';
import { TokenPrice } from './codec/agent/v1/agent.js';
import { QueryGetMinerResponse, QueryGetModelResponse } from './codec/dht/v1/query.js';
import { setupAgentExtension, setupBankExtension, setupDHTExtension } from './queries.js';
import { Logger } from '../../utils/logger.js';
export interface RpcClientOptions {
    rpcEndpoint: string;
    prefix: string;
    chainId?: string;
    defaultDenom: string;
    defaultGasPrice: string;
    logger?: Logger;
}
export declare class RpcClient {
    readonly tm: CometClient;
    readonly query: QueryClient & ReturnType<typeof setupAgentExtension> & ReturnType<typeof setupBankExtension> & ReturnType<typeof setupDHTExtension>;
    readonly chainId: string;
    readonly prefix: string;
    readonly defaultDenom: string;
    readonly defaultGasPrice: string;
    protected readonly logger: Logger;
    protected constructor(tmClient: CometClient, queryClient: QueryClient & ReturnType<typeof setupAgentExtension> & ReturnType<typeof setupBankExtension> & ReturnType<typeof setupDHTExtension>, chainId: string, prefix: string, defaultDenom: string, defaultGasPrice: string, logger: Logger);
    static connect(options: RpcClientOptions): Promise<RpcClient>;
    getWalletBalance(address: string): Promise<import("./codec/cosmos/bank/v1beta1/query.js").QueryBalanceResponse>;
    getParams(): Promise<import("./codec/agent/v1/query.js").QueryParamsResponse>;
    getDHTParams(): Promise<import("./codec/dht/v1/query.js").QueryParamsResponse>;
    getMiner(nodeId: string): Promise<QueryGetMinerResponse>;
    getModel(modelName: string): Promise<QueryGetModelResponse>;
    getTokenPrice(modelName: string): Promise<TokenPrice>;
    getVRFSeed(account: string): Promise<Uint8Array>;
    getSession(sessionId: string): Promise<import("./codec/agent/v1/query.js").QuerySessionResponse>;
    getInferenceAgent(account: string): Promise<import("./codec/agent/v1/query.js").QueryInferenceAgentResponse>;
}
//# sourceMappingURL=rpc-client.d.ts.map