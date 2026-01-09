import { QueryClient } from '@cosmjs/stargate';
import { PageRequest } from './codec/cosmos/base/query/v1beta1/pagination.js';
import { Availability, InferenceType } from './codec/dht/v1/orchestrator.js';
export declare function setupBankExtension(base: QueryClient): {
    bank: {
        balance: (address: string, denom?: string) => Promise<import("./codec/cosmos/bank/v1beta1/query.js").QueryBalanceResponse>;
    };
};
export declare function setupAgentExtension(base: QueryClient): {
    agent: {
        params: () => Promise<import("./codec/agent/v1/query.js").QueryParamsResponse>;
        inferenceAgentRequest: (account: string) => Promise<import("./codec/agent/v1/query.js").QueryInferenceAgentResponse>;
        sessionRequest: (id: string) => Promise<import("./codec/agent/v1/query.js").QuerySessionResponse>;
        VRFSeedRequest: (account: string) => Promise<import("./codec/agent/v1/query.js").QueryVRFSeedResponse>;
    };
};
export declare function setupDHTExtension(base: QueryClient): {
    dht: {
        params: () => Promise<import("./codec/dht/v1/query.js").QueryParamsResponse>;
        getModel: (modelName: string) => Promise<import("./codec/dht/v1/query.js").QueryGetModelResponse>;
        getNode: (nodeId: string) => Promise<import("./codec/dht/v1/query.js").QueryGetNodeResponse>;
        getMiner: (nodeId: string) => Promise<import("./codec/dht/v1/query.js").QueryGetMinerResponse>;
        getOrchestrator: (nodeId: string) => Promise<import("./codec/dht/v1/query.js").QueryGetOrchestratorResponse>;
        getAllOrchestrator: (pagination?: PageRequest) => Promise<import("./codec/dht/v1/query.js").QueryGetAllOrchestratorResponse>;
        getOrchestratorsByParams: (inferenceType: InferenceType, availability: Availability, limit: number, key: Uint8Array) => Promise<import("./codec/dht/v1/query.js").QueryGetOrchestratorsByParamsResponse>;
    };
};
//# sourceMappingURL=queries.d.ts.map