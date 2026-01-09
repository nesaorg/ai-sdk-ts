import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination.js';
import { InferenceType, Availability, Orchestrator } from './orchestrator.js';
import { Params } from './params.js';
import { Node } from './node.js';
import { Miner } from './miner.js';
import { ReputationParams } from './reputation.js';
import { ModelConfig, TokenPrice } from './model.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
import { DeepPartial, Exact, Rpc } from '../../helpers.js';
export declare const protobufPackage = "dht.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** QueryGetModelRequest is request type for the Query/Model RPC method. */
export interface QueryGetModelRequest {
    modelName: string;
}
/** QueryGetModelResponse is response type for the Query/Model RPC method. */
export interface QueryGetModelResponse {
    model?: DisplayModel;
}
/** QueryModelsRequest is request type for the Query/Models RPC method. */
export interface QueryModelsRequest {
    pagination?: PageRequest;
}
/** QueryModelsResponse is response type for the Query/Models RPC method. */
export interface QueryModelsResponse {
    models: DisplayModel[];
    pagination?: PageResponse;
}
/** QueryGetNodeRequest is request type for the Query/GetNode RPC method. */
export interface QueryGetNodeRequest {
    nodeId: string;
}
/** QueryGetNodeResponse is response type for the Query/GetNode RPC method. */
export interface QueryGetNodeResponse {
    node?: Node;
}
/** QueryGetMinerRequest is request type for the Query/GetMiner RPC method. */
export interface QueryGetMinerRequest {
    nodeId: string;
}
/** QueryGetMinerResponse is response type for the Query/GetMiner RPC method. */
export interface QueryGetMinerResponse {
    miner?: Miner;
    node?: Node;
}
/** QueryGetOrchestratorRequest is request type for the Query/GetOrchestrator RPC method. */
export interface QueryGetOrchestratorRequest {
    nodeId: string;
}
/** QueryGetOrchestratorResponse is response type for the Query/GetOrchestrator RPC method. */
export interface QueryGetOrchestratorResponse {
    orchestrator?: Orchestrator;
    node?: Node;
}
/** QueryGetOrchestratorsByParamsRequest is request type for the Query/GetOrchestratorsByParams RPC method. */
export interface QueryGetOrchestratorsByParamsRequest {
    inferenceType: InferenceType;
    availability: Availability;
    limit: number;
    key: Uint8Array;
}
/** QueryGetOrchestratorsByParamsResponse is response type for the Query/GetOrchestratorsByParams RPC method. */
export interface QueryGetOrchestratorsByParamsResponse {
    orchestrators: Orchestrator[];
    nextKey: Uint8Array;
}
/** QueryGetAllOrchestratorRequest is request type for the Query/GetAllOrchestrator RPC method. */
export interface QueryGetAllOrchestratorRequest {
    pagination?: PageRequest;
}
/** QueryGetAllOrchestratorResponse is response type for the Query/GetAllOrchestrator RPC method. */
export interface QueryGetAllOrchestratorResponse {
    orchestrators: Orchestrator[];
    pagination?: PageResponse;
}
/** QueryReputationParamsRequest is request type for the Query/ReputationParams RPC method. */
export interface QueryReputationParamsRequest {
}
/** QueryReputationParamsResponse is response type for the Query/ReputationParams RPC method. */
export interface QueryReputationParamsResponse {
    params: ReputationParams;
}
/** QueryModelConfigRequest is request type for the Query/ModelConfig RPC method. */
export interface QueryModelConfigRequest {
    modelName: string;
}
/** QueryModelConfigResponse is response type for the Query/ModelConfig RPC method. */
export interface QueryModelConfigResponse {
    config: ModelConfig;
}
/** DisplayModel defines a model */
export interface DisplayModel {
    creator: string;
    modelName: string;
    tokenPrice: TokenPrice;
    sWindow: string[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryGetModelRequest: {
    typeUrl: string;
    encode(message: QueryGetModelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelRequest;
    fromJSON(object: any): QueryGetModelRequest;
    toJSON(message: QueryGetModelRequest): JsonSafe<QueryGetModelRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetModelRequest>, I>>(object: I): QueryGetModelRequest;
};
export declare const QueryGetModelResponse: {
    typeUrl: string;
    encode(message: QueryGetModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetModelResponse;
    fromJSON(object: any): QueryGetModelResponse;
    toJSON(message: QueryGetModelResponse): JsonSafe<QueryGetModelResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetModelResponse>, I>>(object: I): QueryGetModelResponse;
};
export declare const QueryModelsRequest: {
    typeUrl: string;
    encode(message: QueryModelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModelsRequest;
    fromJSON(object: any): QueryModelsRequest;
    toJSON(message: QueryModelsRequest): JsonSafe<QueryModelsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryModelsRequest>, I>>(object: I): QueryModelsRequest;
};
export declare const QueryModelsResponse: {
    typeUrl: string;
    encode(message: QueryModelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModelsResponse;
    fromJSON(object: any): QueryModelsResponse;
    toJSON(message: QueryModelsResponse): JsonSafe<QueryModelsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryModelsResponse>, I>>(object: I): QueryModelsResponse;
};
export declare const QueryGetNodeRequest: {
    typeUrl: string;
    encode(message: QueryGetNodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeRequest;
    fromJSON(object: any): QueryGetNodeRequest;
    toJSON(message: QueryGetNodeRequest): JsonSafe<QueryGetNodeRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeRequest>, I>>(object: I): QueryGetNodeRequest;
};
export declare const QueryGetNodeResponse: {
    typeUrl: string;
    encode(message: QueryGetNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeResponse;
    fromJSON(object: any): QueryGetNodeResponse;
    toJSON(message: QueryGetNodeResponse): JsonSafe<QueryGetNodeResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetNodeResponse>, I>>(object: I): QueryGetNodeResponse;
};
export declare const QueryGetMinerRequest: {
    typeUrl: string;
    encode(message: QueryGetMinerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerRequest;
    fromJSON(object: any): QueryGetMinerRequest;
    toJSON(message: QueryGetMinerRequest): JsonSafe<QueryGetMinerRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerRequest>, I>>(object: I): QueryGetMinerRequest;
};
export declare const QueryGetMinerResponse: {
    typeUrl: string;
    encode(message: QueryGetMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMinerResponse;
    fromJSON(object: any): QueryGetMinerResponse;
    toJSON(message: QueryGetMinerResponse): JsonSafe<QueryGetMinerResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetMinerResponse>, I>>(object: I): QueryGetMinerResponse;
};
export declare const QueryGetOrchestratorRequest: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorRequest;
    fromJSON(object: any): QueryGetOrchestratorRequest;
    toJSON(message: QueryGetOrchestratorRequest): JsonSafe<QueryGetOrchestratorRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorRequest>, I>>(object: I): QueryGetOrchestratorRequest;
};
export declare const QueryGetOrchestratorResponse: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorResponse;
    fromJSON(object: any): QueryGetOrchestratorResponse;
    toJSON(message: QueryGetOrchestratorResponse): JsonSafe<QueryGetOrchestratorResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorResponse>, I>>(object: I): QueryGetOrchestratorResponse;
};
export declare const QueryGetOrchestratorsByParamsRequest: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorsByParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorsByParamsRequest;
    fromJSON(object: any): QueryGetOrchestratorsByParamsRequest;
    toJSON(message: QueryGetOrchestratorsByParamsRequest): JsonSafe<QueryGetOrchestratorsByParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsRequest>, I>>(object: I): QueryGetOrchestratorsByParamsRequest;
};
export declare const QueryGetOrchestratorsByParamsResponse: {
    typeUrl: string;
    encode(message: QueryGetOrchestratorsByParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrchestratorsByParamsResponse;
    fromJSON(object: any): QueryGetOrchestratorsByParamsResponse;
    toJSON(message: QueryGetOrchestratorsByParamsResponse): JsonSafe<QueryGetOrchestratorsByParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsResponse>, I>>(object: I): QueryGetOrchestratorsByParamsResponse;
};
export declare const QueryGetAllOrchestratorRequest: {
    typeUrl: string;
    encode(message: QueryGetAllOrchestratorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOrchestratorRequest;
    fromJSON(object: any): QueryGetAllOrchestratorRequest;
    toJSON(message: QueryGetAllOrchestratorRequest): JsonSafe<QueryGetAllOrchestratorRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorRequest>, I>>(object: I): QueryGetAllOrchestratorRequest;
};
export declare const QueryGetAllOrchestratorResponse: {
    typeUrl: string;
    encode(message: QueryGetAllOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllOrchestratorResponse;
    fromJSON(object: any): QueryGetAllOrchestratorResponse;
    toJSON(message: QueryGetAllOrchestratorResponse): JsonSafe<QueryGetAllOrchestratorResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorResponse>, I>>(object: I): QueryGetAllOrchestratorResponse;
};
export declare const QueryReputationParamsRequest: {
    typeUrl: string;
    encode(_: QueryReputationParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReputationParamsRequest;
    fromJSON(_: any): QueryReputationParamsRequest;
    toJSON(_: QueryReputationParamsRequest): JsonSafe<QueryReputationParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryReputationParamsRequest>, I>>(_: I): QueryReputationParamsRequest;
};
export declare const QueryReputationParamsResponse: {
    typeUrl: string;
    encode(message: QueryReputationParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryReputationParamsResponse;
    fromJSON(object: any): QueryReputationParamsResponse;
    toJSON(message: QueryReputationParamsResponse): JsonSafe<QueryReputationParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryReputationParamsResponse>, I>>(object: I): QueryReputationParamsResponse;
};
export declare const QueryModelConfigRequest: {
    typeUrl: string;
    encode(message: QueryModelConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModelConfigRequest;
    fromJSON(object: any): QueryModelConfigRequest;
    toJSON(message: QueryModelConfigRequest): JsonSafe<QueryModelConfigRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryModelConfigRequest>, I>>(object: I): QueryModelConfigRequest;
};
export declare const QueryModelConfigResponse: {
    typeUrl: string;
    encode(message: QueryModelConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModelConfigResponse;
    fromJSON(object: any): QueryModelConfigResponse;
    toJSON(message: QueryModelConfigResponse): JsonSafe<QueryModelConfigResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryModelConfigResponse>, I>>(object: I): QueryModelConfigResponse;
};
export declare const DisplayModel: {
    typeUrl: string;
    encode(message: DisplayModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DisplayModel;
    fromJSON(object: any): DisplayModel;
    toJSON(message: DisplayModel): JsonSafe<DisplayModel>;
    fromPartial<I extends Exact<DeepPartial<DisplayModel>, I>>(object: I): DisplayModel;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** GetModel queries a list of GetModel items. */
    GetModel(request: QueryGetModelRequest): Promise<QueryGetModelResponse>;
    /** Models queries a list of model items. */
    Models(request?: QueryModelsRequest): Promise<QueryModelsResponse>;
    /** Queries a list of GetNode items. */
    GetNode(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse>;
    /** Queries a list of GetMiner items. */
    GetMiner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse>;
    /** Queries a list of GetOrchestrator items. */
    GetOrchestrator(request: QueryGetOrchestratorRequest): Promise<QueryGetOrchestratorResponse>;
    /** GetAllOrchestrator queries a list of GetAllOrchestrator items. */
    GetAllOrchestrator(request?: QueryGetAllOrchestratorRequest): Promise<QueryGetAllOrchestratorResponse>;
    /** GetOrchestratorsByParams queries a list of GetOrchestratorsByParams items. */
    GetOrchestratorsByParams(request: QueryGetOrchestratorsByParamsRequest): Promise<QueryGetOrchestratorsByParamsResponse>;
    /** ReputationParams queries the reputation parameters. */
    ReputationParams(request?: QueryReputationParamsRequest): Promise<QueryReputationParamsResponse>;
    /** ModelConfig queries the model configuration. */
    ModelConfig(request: QueryModelConfigRequest): Promise<QueryModelConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetModel(request: QueryGetModelRequest): Promise<QueryGetModelResponse>;
    Models(request?: QueryModelsRequest): Promise<QueryModelsResponse>;
    GetNode(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse>;
    GetMiner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse>;
    GetOrchestrator(request: QueryGetOrchestratorRequest): Promise<QueryGetOrchestratorResponse>;
    GetAllOrchestrator(request?: QueryGetAllOrchestratorRequest): Promise<QueryGetAllOrchestratorResponse>;
    GetOrchestratorsByParams(request: QueryGetOrchestratorsByParamsRequest): Promise<QueryGetOrchestratorsByParamsResponse>;
    ReputationParams(request?: QueryReputationParamsRequest): Promise<QueryReputationParamsResponse>;
    ModelConfig(request: QueryModelConfigRequest): Promise<QueryModelConfigResponse>;
}
//# sourceMappingURL=query.d.ts.map