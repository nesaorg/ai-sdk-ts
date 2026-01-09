import { SessionStatus, Params, InferenceAgent, Session } from './agent.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import { Long, DeepPartial, Exact, Rpc } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "agent.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryInferenceAgentRequest is request type for the Query/InferenceAgent RPC method. */
export interface QueryInferenceAgentRequest {
    account: string;
}
/** QueryInferenceAgentResponse is response type for the Query/InferenceAgent RPC method. */
export interface QueryInferenceAgentResponse {
    inferenceAgent?: InferenceAgent;
}
/** QueryInferenceAgentsRequest is request type for the Query/InferenceAgents RPC method. */
export interface QueryInferenceAgentsRequest {
    limit: Long;
    key: Uint8Array;
}
/** QueryInferenceAgentsResponse is response type for the Query/InferenceAgents RPC method. */
export interface QueryInferenceAgentsResponse {
    inferenceAgents: InferenceAgent[];
    nextKey: Uint8Array;
}
/** QuerySessionRequest is request type for the Query/Session RPC method. */
export interface QuerySessionRequest {
    id: string;
}
/** QuerySessionResponse is response type for the Query/Session RPC method. */
export interface QuerySessionResponse {
    session?: Session;
}
/** QuerySessionByAgentRequest is request type for the Query/SessionByAgent RPC method. */
export interface QuerySessionByAgentRequest {
    account: string;
    status?: SessionStatus;
    expireTime: Timestamp;
    limit: Long;
    orderDesc: boolean;
    key: Uint8Array;
}
/** QuerySessionByAgentResponse is response type for the Query/SessionByAgent RPC method. */
export interface QuerySessionByAgentResponse {
    sessions: Session[];
    nextKey: Uint8Array;
}
/** QueryVRFSeedRequest is request type for the Query/VRFSeed RPC method. */
export interface QueryVRFSeedRequest {
    account: string;
}
/** QueryVRFSeedResponse is response type for the Query/VRFSeed RPC method. */
export interface QueryVRFSeedResponse {
    seed: Uint8Array;
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
export declare const QueryInferenceAgentRequest: {
    typeUrl: string;
    encode(message: QueryInferenceAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentRequest;
    fromJSON(object: any): QueryInferenceAgentRequest;
    toJSON(message: QueryInferenceAgentRequest): JsonSafe<QueryInferenceAgentRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentRequest>, I>>(object: I): QueryInferenceAgentRequest;
};
export declare const QueryInferenceAgentResponse: {
    typeUrl: string;
    encode(message: QueryInferenceAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentResponse;
    fromJSON(object: any): QueryInferenceAgentResponse;
    toJSON(message: QueryInferenceAgentResponse): JsonSafe<QueryInferenceAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentResponse>, I>>(object: I): QueryInferenceAgentResponse;
};
export declare const QueryInferenceAgentsRequest: {
    typeUrl: string;
    encode(message: QueryInferenceAgentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentsRequest;
    fromJSON(object: any): QueryInferenceAgentsRequest;
    toJSON(message: QueryInferenceAgentsRequest): JsonSafe<QueryInferenceAgentsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentsRequest>, I>>(object: I): QueryInferenceAgentsRequest;
};
export declare const QueryInferenceAgentsResponse: {
    typeUrl: string;
    encode(message: QueryInferenceAgentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInferenceAgentsResponse;
    fromJSON(object: any): QueryInferenceAgentsResponse;
    toJSON(message: QueryInferenceAgentsResponse): JsonSafe<QueryInferenceAgentsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentsResponse>, I>>(object: I): QueryInferenceAgentsResponse;
};
export declare const QuerySessionRequest: {
    typeUrl: string;
    encode(message: QuerySessionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionRequest;
    fromJSON(object: any): QuerySessionRequest;
    toJSON(message: QuerySessionRequest): JsonSafe<QuerySessionRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionRequest>, I>>(object: I): QuerySessionRequest;
};
export declare const QuerySessionResponse: {
    typeUrl: string;
    encode(message: QuerySessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionResponse;
    fromJSON(object: any): QuerySessionResponse;
    toJSON(message: QuerySessionResponse): JsonSafe<QuerySessionResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionResponse>, I>>(object: I): QuerySessionResponse;
};
export declare const QuerySessionByAgentRequest: {
    typeUrl: string;
    encode(message: QuerySessionByAgentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByAgentRequest;
    fromJSON(object: any): QuerySessionByAgentRequest;
    toJSON(message: QuerySessionByAgentRequest): JsonSafe<QuerySessionByAgentRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentRequest>, I>>(object: I): QuerySessionByAgentRequest;
};
export declare const QuerySessionByAgentResponse: {
    typeUrl: string;
    encode(message: QuerySessionByAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionByAgentResponse;
    fromJSON(object: any): QuerySessionByAgentResponse;
    toJSON(message: QuerySessionByAgentResponse): JsonSafe<QuerySessionByAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentResponse>, I>>(object: I): QuerySessionByAgentResponse;
};
export declare const QueryVRFSeedRequest: {
    typeUrl: string;
    encode(message: QueryVRFSeedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVRFSeedRequest;
    fromJSON(object: any): QueryVRFSeedRequest;
    toJSON(message: QueryVRFSeedRequest): JsonSafe<QueryVRFSeedRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryVRFSeedRequest>, I>>(object: I): QueryVRFSeedRequest;
};
export declare const QueryVRFSeedResponse: {
    typeUrl: string;
    encode(message: QueryVRFSeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVRFSeedResponse;
    fromJSON(object: any): QueryVRFSeedResponse;
    toJSON(message: QueryVRFSeedResponse): JsonSafe<QueryVRFSeedResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryVRFSeedResponse>, I>>(object: I): QueryVRFSeedResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of InferenceAgent items. */
    InferenceAgentRequest(request: QueryInferenceAgentRequest): Promise<QueryInferenceAgentResponse>;
    /** Queries a list of InferenceAgent items. */
    InferenceAgentsRequest(request: QueryInferenceAgentsRequest): Promise<QueryInferenceAgentsResponse>;
    /** Queries a list of Session items. */
    SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse>;
    /** Queries a list of Session items. */
    SessionByAgentRequest(request: QuerySessionByAgentRequest): Promise<QuerySessionByAgentResponse>;
    /** Queries a list of VRFSeed items. */
    VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    InferenceAgentRequest(request: QueryInferenceAgentRequest): Promise<QueryInferenceAgentResponse>;
    InferenceAgentsRequest(request: QueryInferenceAgentsRequest): Promise<QueryInferenceAgentsResponse>;
    SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse>;
    SessionByAgentRequest(request: QuerySessionByAgentRequest): Promise<QuerySessionByAgentResponse>;
    VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse>;
}
//# sourceMappingURL=query.d.ts.map