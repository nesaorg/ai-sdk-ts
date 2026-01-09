import { Params, AgentStatus, TokenPrice, Payment } from './agent.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { RequestLog } from '../../dht/v1/reputation.js';
import { Long, DeepPartial, Exact, Rpc } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "agent.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    authority: string;
    params: Params;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
/** MsgRegisterInferenceAgent is the Msg/RegisterInferenceAgent request type. */
export interface MsgRegisterInferenceAgent {
    account: string;
    url: string;
    version: Long;
    sender: string;
}
/** MsgRegisterInferenceAgentResponse defines the Msg/RegisterInferenceAgent response type. */
export interface MsgRegisterInferenceAgentResponse {
}
/** MsgUpdateInferenceAgent is the Msg/UpdateInferenceAgent request type. */
export interface MsgUpdateInferenceAgent {
    account: string;
    url?: string;
    version?: Long;
    status?: AgentStatus;
    sender: string;
}
/** MsgUpdateInferenceAgentResponse defines the Msg/UpdateInferenceAgent response type. */
export interface MsgUpdateInferenceAgentResponse {
}
/** MsgRemoveInferenceAgent is the Msg/RemoveInferenceAgent request type. */
export interface MsgRemoveInferenceAgent {
    account: string;
    sender: string;
}
/** MsgRemoveInferenceAgentResponse defines the Msg/RemoveInferenceAgent response type. */
export interface MsgRemoveInferenceAgentResponse {
}
/** VRF is the VRF struct */
export interface VRF {
    seed: Uint8Array;
    proof: Uint8Array;
    hashRandom: Uint8Array;
}
/** MsgRegisterSession is the Msg/RegisterSession request type. */
export interface MsgRegisterSession {
    sessionId: string;
    account: string;
    modelName: string;
    lockBalance: Coin;
    vrf: VRF;
    tokenPrice: TokenPrice;
}
/** MsgRegisterSessionResponse defines the Msg/RegisterSession response type. */
export interface MsgRegisterSessionResponse {
    account: string;
    modelName: string;
}
/** MsgCancelSession is the Msg/CancelSession request type. */
export interface MsgCancelSession {
    sessionId: string;
    account: string;
}
/** MsgCancelSessionResponse defines the Msg/CancelSession response type. */
export interface MsgCancelSessionResponse {
}
/** MsgSubmitInferenceRequest is the Msg/SubmitInferenceRequest request type. */
export interface MsgSubmitInferenceRequest {
    /** request id */
    requestId: string;
    /** agent address */
    sender: string;
    /** session id */
    sessionId: string;
    /** model name */
    modelName: string;
    /** miner id */
    nodeId: string;
    /** input tokens */
    inputTokens: Long;
    /** output tokens */
    outputTokens: Long;
    /** actual time */
    actualTime: Long;
    /** non response */
    nonResponse: boolean;
}
/** MsgSubmitInferenceRequestResponse defines the Msg/SubmitInferenceRequest response type. */
export interface MsgSubmitInferenceRequestResponse {
    requestLog: RequestLog;
}
/** MsgSubmitPayment is the Msg/SubmitPayment request type. */
export interface MsgSubmitPayment {
    account: string;
    sessionId: string;
    payment?: Payment;
    /** @deprecated */
    signature: Uint8Array;
    /** Records the number of AI inference executions. */
    /** @deprecated */
    inferenceCount: Long;
    /** Records the total number of tokens input */
    /** @deprecated */
    totalInputTokens: Long;
    /** Records the total number of tokens output */
    /** @deprecated */
    totalOutputTokens: Long;
}
/** MsgSubmitPaymentResponse defines the Msg/SubmitPayment response type. */
export interface MsgSubmitPaymentResponse {
}
/** MsgDeleteExpiredSession is the Msg/DeleteExpiredSession request type. */
export interface MsgDeleteExpiredSession {
    account: string;
    sessionId: string;
}
/** MsgDeleteExpiredSessionResponse defines the Msg/DeleteExpiredSession response type. */
export interface MsgDeleteExpiredSessionResponse {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
export declare const MsgRegisterInferenceAgent: {
    typeUrl: string;
    encode(message: MsgRegisterInferenceAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInferenceAgent;
    fromJSON(object: any): MsgRegisterInferenceAgent;
    toJSON(message: MsgRegisterInferenceAgent): JsonSafe<MsgRegisterInferenceAgent>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgent>, I>>(object: I): MsgRegisterInferenceAgent;
};
export declare const MsgRegisterInferenceAgentResponse: {
    typeUrl: string;
    encode(_: MsgRegisterInferenceAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterInferenceAgentResponse;
    fromJSON(_: any): MsgRegisterInferenceAgentResponse;
    toJSON(_: MsgRegisterInferenceAgentResponse): JsonSafe<MsgRegisterInferenceAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgentResponse>, I>>(_: I): MsgRegisterInferenceAgentResponse;
};
export declare const MsgUpdateInferenceAgent: {
    typeUrl: string;
    encode(message: MsgUpdateInferenceAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInferenceAgent;
    fromJSON(object: any): MsgUpdateInferenceAgent;
    toJSON(message: MsgUpdateInferenceAgent): JsonSafe<MsgUpdateInferenceAgent>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgent>, I>>(object: I): MsgUpdateInferenceAgent;
};
export declare const MsgUpdateInferenceAgentResponse: {
    typeUrl: string;
    encode(_: MsgUpdateInferenceAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateInferenceAgentResponse;
    fromJSON(_: any): MsgUpdateInferenceAgentResponse;
    toJSON(_: MsgUpdateInferenceAgentResponse): JsonSafe<MsgUpdateInferenceAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgentResponse>, I>>(_: I): MsgUpdateInferenceAgentResponse;
};
export declare const MsgRemoveInferenceAgent: {
    typeUrl: string;
    encode(message: MsgRemoveInferenceAgent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveInferenceAgent;
    fromJSON(object: any): MsgRemoveInferenceAgent;
    toJSON(message: MsgRemoveInferenceAgent): JsonSafe<MsgRemoveInferenceAgent>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveInferenceAgent>, I>>(object: I): MsgRemoveInferenceAgent;
};
export declare const MsgRemoveInferenceAgentResponse: {
    typeUrl: string;
    encode(_: MsgRemoveInferenceAgentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveInferenceAgentResponse;
    fromJSON(_: any): MsgRemoveInferenceAgentResponse;
    toJSON(_: MsgRemoveInferenceAgentResponse): JsonSafe<MsgRemoveInferenceAgentResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveInferenceAgentResponse>, I>>(_: I): MsgRemoveInferenceAgentResponse;
};
export declare const VRF: {
    typeUrl: string;
    encode(message: VRF, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VRF;
    fromJSON(object: any): VRF;
    toJSON(message: VRF): JsonSafe<VRF>;
    fromPartial<I extends Exact<DeepPartial<VRF>, I>>(object: I): VRF;
};
export declare const MsgRegisterSession: {
    typeUrl: string;
    encode(message: MsgRegisterSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterSession;
    fromJSON(object: any): MsgRegisterSession;
    toJSON(message: MsgRegisterSession): JsonSafe<MsgRegisterSession>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterSession>, I>>(object: I): MsgRegisterSession;
};
export declare const MsgRegisterSessionResponse: {
    typeUrl: string;
    encode(message: MsgRegisterSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterSessionResponse;
    fromJSON(object: any): MsgRegisterSessionResponse;
    toJSON(message: MsgRegisterSessionResponse): JsonSafe<MsgRegisterSessionResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterSessionResponse>, I>>(object: I): MsgRegisterSessionResponse;
};
export declare const MsgCancelSession: {
    typeUrl: string;
    encode(message: MsgCancelSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSession;
    fromJSON(object: any): MsgCancelSession;
    toJSON(message: MsgCancelSession): JsonSafe<MsgCancelSession>;
    fromPartial<I extends Exact<DeepPartial<MsgCancelSession>, I>>(object: I): MsgCancelSession;
};
export declare const MsgCancelSessionResponse: {
    typeUrl: string;
    encode(_: MsgCancelSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSessionResponse;
    fromJSON(_: any): MsgCancelSessionResponse;
    toJSON(_: MsgCancelSessionResponse): JsonSafe<MsgCancelSessionResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgCancelSessionResponse>, I>>(_: I): MsgCancelSessionResponse;
};
export declare const MsgSubmitInferenceRequest: {
    typeUrl: string;
    encode(message: MsgSubmitInferenceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitInferenceRequest;
    fromJSON(object: any): MsgSubmitInferenceRequest;
    toJSON(message: MsgSubmitInferenceRequest): JsonSafe<MsgSubmitInferenceRequest>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitInferenceRequest>, I>>(object: I): MsgSubmitInferenceRequest;
};
export declare const MsgSubmitInferenceRequestResponse: {
    typeUrl: string;
    encode(message: MsgSubmitInferenceRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitInferenceRequestResponse;
    fromJSON(object: any): MsgSubmitInferenceRequestResponse;
    toJSON(message: MsgSubmitInferenceRequestResponse): JsonSafe<MsgSubmitInferenceRequestResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitInferenceRequestResponse>, I>>(object: I): MsgSubmitInferenceRequestResponse;
};
export declare const MsgSubmitPayment: {
    typeUrl: string;
    encode(message: MsgSubmitPayment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitPayment;
    fromJSON(object: any): MsgSubmitPayment;
    toJSON(message: MsgSubmitPayment): JsonSafe<MsgSubmitPayment>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitPayment>, I>>(object: I): MsgSubmitPayment;
};
export declare const MsgSubmitPaymentResponse: {
    typeUrl: string;
    encode(_: MsgSubmitPaymentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitPaymentResponse;
    fromJSON(_: any): MsgSubmitPaymentResponse;
    toJSON(_: MsgSubmitPaymentResponse): JsonSafe<MsgSubmitPaymentResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitPaymentResponse>, I>>(_: I): MsgSubmitPaymentResponse;
};
export declare const MsgDeleteExpiredSession: {
    typeUrl: string;
    encode(message: MsgDeleteExpiredSession, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExpiredSession;
    fromJSON(object: any): MsgDeleteExpiredSession;
    toJSON(message: MsgDeleteExpiredSession): JsonSafe<MsgDeleteExpiredSession>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSession>, I>>(object: I): MsgDeleteExpiredSession;
};
export declare const MsgDeleteExpiredSessionResponse: {
    typeUrl: string;
    encode(_: MsgDeleteExpiredSessionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteExpiredSessionResponse;
    fromJSON(_: any): MsgDeleteExpiredSessionResponse;
    toJSON(_: MsgDeleteExpiredSessionResponse): JsonSafe<MsgDeleteExpiredSessionResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSessionResponse>, I>>(_: I): MsgDeleteExpiredSessionResponse;
};
/** Msg defines the agent Msg service. */
export interface Msg {
    /** UpdateParams defines a method to update the params. */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** RegisterInferenceAgent defines a method to register an inference agent to the chain. */
    RegisterInferenceAgent(request: MsgRegisterInferenceAgent): Promise<MsgRegisterInferenceAgentResponse>;
    /** UpdateInferenceAgent defines a method to update an existing inference agent. */
    UpdateInferenceAgent(request: MsgUpdateInferenceAgent): Promise<MsgUpdateInferenceAgentResponse>;
    /** RemoveInferenceAgent defines a method to remove an existing inference agent. */
    RemoveInferenceAgent(request: MsgRemoveInferenceAgent): Promise<MsgRemoveInferenceAgentResponse>;
    /** RegisterSession defines a method to register a session to the chain */
    RegisterSession(request: MsgRegisterSession): Promise<MsgRegisterSessionResponse>;
    /** CancelSession defines a method to cancel a session */
    CancelSession(request: MsgCancelSession): Promise<MsgCancelSessionResponse>;
    /** SubmitPayment defines a method to submit a payment */
    SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse>;
    /** SubmitInferenceRequest defines a method to submit an inference request */
    SubmitInferenceRequest(request: MsgSubmitInferenceRequest): Promise<MsgSubmitInferenceRequestResponse>;
    /** DeleteExpiredSession defines a method to delete expired session */
    DeleteExpiredSession(request: MsgDeleteExpiredSession): Promise<MsgDeleteExpiredSessionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    RegisterInferenceAgent(request: MsgRegisterInferenceAgent): Promise<MsgRegisterInferenceAgentResponse>;
    UpdateInferenceAgent(request: MsgUpdateInferenceAgent): Promise<MsgUpdateInferenceAgentResponse>;
    RemoveInferenceAgent(request: MsgRemoveInferenceAgent): Promise<MsgRemoveInferenceAgentResponse>;
    RegisterSession(request: MsgRegisterSession): Promise<MsgRegisterSessionResponse>;
    CancelSession(request: MsgCancelSession): Promise<MsgCancelSessionResponse>;
    SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse>;
    SubmitInferenceRequest(request: MsgSubmitInferenceRequest): Promise<MsgSubmitInferenceRequestResponse>;
    DeleteExpiredSession(request: MsgDeleteExpiredSession): Promise<MsgDeleteExpiredSessionResponse>;
}
//# sourceMappingURL=tx.d.ts.map