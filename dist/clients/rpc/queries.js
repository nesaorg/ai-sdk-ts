import { createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryClientImpl as AgentClientQuery } from './codec/agent/v1/query.js';
import { QueryClientImpl as BankClientQuery } from './codec/cosmos/bank/v1beta1/query.js';
import { QueryClientImpl as DHTClientQuery } from './codec/dht/v1/query.js';
export function setupBankExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const bankQueryService = new BankClientQuery(rpc);
    return {
        bank: {
            balance: async (address, denom = 'unes') => {
                return await bankQueryService.Balance({ address, denom });
            },
        },
    };
}
export function setupAgentExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const agentQueryService = new AgentClientQuery(rpc);
    return {
        agent: {
            params: async () => {
                return await agentQueryService.Params({});
            },
            inferenceAgentRequest: async (account) => {
                return await agentQueryService.InferenceAgentRequest({
                    account,
                });
            },
            sessionRequest: async (id) => {
                return await agentQueryService.SessionRequest({ id });
            },
            VRFSeedRequest: async (account) => {
                return await agentQueryService.VRFSeedRequest({ account });
            },
        },
    };
}
export function setupDHTExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const dhtQueryService = new DHTClientQuery(rpc);
    return {
        dht: {
            params: async () => {
                return await dhtQueryService.Params({});
            },
            getModel: async (modelName) => {
                return await dhtQueryService.GetModel({
                    modelName,
                });
            },
            getNode: async (nodeId) => {
                return await dhtQueryService.GetNode({
                    nodeId,
                });
            },
            getMiner: async (nodeId) => {
                return await dhtQueryService.GetMiner({
                    nodeId,
                });
            },
            getOrchestrator: async (nodeId) => {
                return await dhtQueryService.GetOrchestrator({
                    nodeId,
                });
            },
            getAllOrchestrator: async (pagination) => {
                return await dhtQueryService.GetAllOrchestrator({
                    pagination,
                });
            },
            getOrchestratorsByParams: async (inferenceType, availability, limit, key) => {
                return await dhtQueryService.GetOrchestratorsByParams({
                    inferenceType,
                    availability,
                    limit,
                    key,
                });
            },
        },
    };
}
//# sourceMappingURL=queries.js.map