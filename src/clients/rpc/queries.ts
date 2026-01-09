import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { QueryClientImpl as AgentClientQuery } from './codec/agent/v1/query.js';
import { QueryClientImpl as BankClientQuery } from './codec/cosmos/bank/v1beta1/query.js';
import { PageRequest } from './codec/cosmos/base/query/v1beta1/pagination.js';
import { Availability, InferenceType } from './codec/dht/v1/orchestrator.js';
import { QueryClientImpl as DHTClientQuery } from './codec/dht/v1/query.js';

export function setupBankExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const bankQueryService = new BankClientQuery(rpc);

  return {
    bank: {
      balance: async (address: string, denom = 'unes') => {
        return await bankQueryService.Balance({ address, denom });
      },
    },
  };
}

export function setupAgentExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const agentQueryService = new AgentClientQuery(rpc);

  return {
    agent: {
      params: async () => {
        return await agentQueryService.Params({});
      },
      inferenceAgentRequest: async (account: string) => {
        return await agentQueryService.InferenceAgentRequest({
          account,
        });
      },
      sessionRequest: async (id: string) => {
        return await agentQueryService.SessionRequest({ id });
      },
      VRFSeedRequest: async (account: string) => {
        return await agentQueryService.VRFSeedRequest({ account });
      },
    },
  };
}

export function setupDHTExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const dhtQueryService = new DHTClientQuery(rpc);

  return {
    dht: {
      params: async () => {
        return await dhtQueryService.Params({});
      },
      getModel: async (modelName: string) => {
        return await dhtQueryService.GetModel({
          modelName,
        });
      },
      getNode: async (nodeId: string) => {
        return await dhtQueryService.GetNode({
          nodeId,
        });
      },
      getMiner: async (nodeId: string) => {
        return await dhtQueryService.GetMiner({
          nodeId,
        });
      },
      getOrchestrator: async (nodeId: string) => {
        return await dhtQueryService.GetOrchestrator({
          nodeId,
        });
      },
      getAllOrchestrator: async (pagination?: PageRequest) => {
        return await dhtQueryService.GetAllOrchestrator({
          pagination,
        });
      },
      getOrchestratorsByParams: async (
        inferenceType: InferenceType,
        availability: Availability,
        limit: number,
        key: Uint8Array,
      ) => {
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
