import { Params } from './params.js';
import { TokenPrice, ModelConfig } from './model.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Availability, InferenceType } from './orchestrator.js';
import { Reputation, ReputationParams } from './reputation.js';
import { Long, DeepPartial, Exact, Rpc } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "dht.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
/** MsgRegisterModel is the Msg/RegisterModel request type. */
export interface MsgRegisterModel {
    creator: string;
    modelName: string;
    allowList: string[];
    tokenPrice?: TokenPrice;
}
/**
 * MsgRegisterModelResponse defines the response structure for executing a
 * MsgRegisterModel message.
 */
export interface MsgRegisterModelResponse {
}
/** MsgDeleteModel is the Msg/DeleteModel request type. */
export interface MsgDeleteModel {
    creator: string;
    modelName: string;
}
/** MsgDeleteModelResponse defines the response structure for executing a */
export interface MsgDeleteModelResponse {
}
/** MsgSetModelConfig is the Msg/SetModelConfig request type. */
export interface MsgSetModelConfig {
    creator: string;
    config: ModelConfig;
}
/**
 * MsgSetModelConfigResponse defines the response structure for executing a
 * MsgSetModelConfig message.
 */
export interface MsgSetModelConfigResponse {
}
/** RegisterNode is the Msg/RegisterNode request type. */
export interface MsgRegisterNode {
    creator: string;
    nodeId: string;
    publicName: string;
    version: string;
    networkAddress: string;
    walletAddress: string;
    vram: Long;
    networkRps: number;
    usingRelay: boolean;
    nextPings: Uint8Array[];
}
/**
 * MsgRegisterNodeResponse defines the response structure for executing a
 * MsgRegisterNode message.
 */
export interface MsgRegisterNodeResponse {
}
/** MsgDeleteNode is the Msg/DeleteNode request type. */
export interface MsgDeleteNode {
    creator: string;
    nodeId: string;
}
/**
 * MsgDeleteNodeResponse defines the response structure for executing a
 * MsgDeleteNode message.
 */
export interface MsgDeleteNodeResponse {
}
/** RegisterMiner is the Msg/RegisterMiner request type. */
export interface MsgRegisterMiner {
    creator: string;
    nodeId: string;
}
/**
 * MsgRegisterMinerResponse defines the response structure for executing a
 * MsgRegisterMiner message.
 */
export interface MsgRegisterMinerResponse {
}
/** MsgUpdateMiner is the Msg/UpdateMiner request type. */
export interface MsgUpdateMiner {
    creator: string;
    nodeId: string;
    /** Reputation R */
    reputationValue: string;
    /** Cumulative reward */
    cumulativeReward: Coin[];
    /** Cumulative penalty */
    cumulativePenalty: Coin[];
    /** Rolling efficiency average */
    sRolling: string;
}
/** MsgUpdateMinerResponse defines the response structure for executing a */
export interface MsgUpdateMinerResponse {
}
/** MsgDeleteMiner is the Msg/DeleteMiner request type. */
export interface MsgDeleteMiner {
    creator: string;
    nodeId: string;
}
/**
 * MsgDeleteMinerResponse defines the response structure for executing a
 * MsgDeleteMiner message.
 */
export interface MsgDeleteMinerResponse {
}
/** RegisterOrchestrator is the Msg/RegisterOrchestrator request type. */
export interface MsgRegisterOrchestrator {
    creator: string;
    nodeId: string;
    status: Availability;
    blockCount: Long[];
    minerIds: string[];
    inferenceType: InferenceType;
    modelName: string;
}
/**
 * MsgRegisterOrchestratorResponse defines the response structure for executing a
 * MsgRegisterOrchestrator message.
 */
export interface MsgRegisterOrchestratorResponse {
}
/** MsgDeleteOrchestrator is the Msg/DeleteOrchestrator request type. */
export interface MsgDeleteOrchestrator {
    creator: string;
    nodeId: string;
}
/**
 * MsgDeleteOrchestratorResponse defines the response structure for executing a
 * MsgDeleteOrchestrator message.
 */
export interface MsgDeleteOrchestratorResponse {
}
/** AddMinerDeposit defines a request for depositing tokens to the miner. */
export interface MsgAddMinerDeposit {
    depositor: string;
    nodeId: string;
    amount: Coin;
}
/** MsgAddMinerDepositResponse defines the response for rpc AddMinerDeposit */
export interface MsgAddMinerDepositResponse {
}
/** WithdrawMiner defines a request for withdrawing tokens from the miner. */
export interface MsgWithdrawMiner {
    depositor: string;
    nodeId: string;
    amount: Coin;
    receiver: string;
}
/** MsgWithdrawMinerResponse defines the response for rpc WithdrawMiner */
export interface MsgWithdrawMinerResponse {
}
/** AddOrchestratorDeposit defines a request for depositing tokens to the orchestrator. */
export interface MsgAddOrchestratorDeposit {
    depositor: string;
    nodeId: string;
    amount: Coin;
}
/** MsgAddOrchestratorDepositResponse defines the response for rpc AddOrchestratorDeposit */
export interface MsgAddOrchestratorDepositResponse {
}
/** WithdrawOrchestrator defines a request for withdrawing tokens from the orchestrator. */
export interface MsgWithdrawOrchestrator {
    depositor: string;
    nodeId: string;
    amount: Coin;
    receiver: string;
}
/** MsgWithdrawOrchestratorResponse defines the response for rpc WithdrawOrchestrator */
export interface MsgWithdrawOrchestratorResponse {
}
/** MsgUpdateMinerLabel defines a method for updating the miner label. */
export interface MsgUpdateNodeLabel {
    creator: string;
    nodeId: string;
    /** NOTE: All labels need to be provided */
    labels: string[];
}
/** MsgUpdateMinerLabelResponse defines the MsgUpdateMinerLabel response type. */
export interface MsgUpdateNodeLabelResponse {
}
/** MsgUpdateModel defines a request for updating allow_list from model. */
export interface MsgUpdateModel {
    account: string;
    modelName: string;
    /** NOTE: All allow list need to be provided */
    allowList: string[];
    /** NOTE: All token prices need to be provided */
    tokenPrice: TokenPrice;
}
/** MsgUpdateModelResponse defines the MsgUpdateModel response type */
export interface MsgUpdateModelResponse {
}
/** MsgUpdateModelCreatorAllowList defines a request for updating model_creators. */
export interface MsgUpdateModelCreatorAllowList {
    account: string;
    modelCreators: string[];
}
/**
 * MsgUpdateModelCreatorAllowListResponse defines the
 * MsgUpdateModelCreatorAllowList response type
 */
export interface MsgUpdateModelCreatorAllowListResponse {
}
/** MsgUpdateOrchestratorReputation defines a request for updating orchestrator reputation. */
export interface MsgUpdateOrchestratorReputation {
    creator: string;
    nodeId: string;
    /** NOTE: All reputations need to be provided */
    reputations: Reputation[];
}
/** MsgUpdateOrchestratorReputationResponse defines the MsgUpdateOrchestratorReputation response type. */
export interface MsgUpdateOrchestratorReputationResponse {
}
/** MsgSetReputationParams defines a request for setting the reputation parameters. */
export interface MsgSetReputationParams {
    creator: string;
    params: ReputationParams;
}
/** MsgSetReputationParamsResponse defines the MsgSetReputationParams response type. */
export interface MsgSetReputationParamsResponse {
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
export declare const MsgRegisterModel: {
    typeUrl: string;
    encode(message: MsgRegisterModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterModel;
    fromJSON(object: any): MsgRegisterModel;
    toJSON(message: MsgRegisterModel): JsonSafe<MsgRegisterModel>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterModel>, I>>(object: I): MsgRegisterModel;
};
export declare const MsgRegisterModelResponse: {
    typeUrl: string;
    encode(_: MsgRegisterModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterModelResponse;
    fromJSON(_: any): MsgRegisterModelResponse;
    toJSON(_: MsgRegisterModelResponse): JsonSafe<MsgRegisterModelResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterModelResponse>, I>>(_: I): MsgRegisterModelResponse;
};
export declare const MsgDeleteModel: {
    typeUrl: string;
    encode(message: MsgDeleteModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteModel;
    fromJSON(object: any): MsgDeleteModel;
    toJSON(message: MsgDeleteModel): JsonSafe<MsgDeleteModel>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteModel>, I>>(object: I): MsgDeleteModel;
};
export declare const MsgDeleteModelResponse: {
    typeUrl: string;
    encode(_: MsgDeleteModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteModelResponse;
    fromJSON(_: any): MsgDeleteModelResponse;
    toJSON(_: MsgDeleteModelResponse): JsonSafe<MsgDeleteModelResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteModelResponse>, I>>(_: I): MsgDeleteModelResponse;
};
export declare const MsgSetModelConfig: {
    typeUrl: string;
    encode(message: MsgSetModelConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModelConfig;
    fromJSON(object: any): MsgSetModelConfig;
    toJSON(message: MsgSetModelConfig): JsonSafe<MsgSetModelConfig>;
    fromPartial<I extends Exact<DeepPartial<MsgSetModelConfig>, I>>(object: I): MsgSetModelConfig;
};
export declare const MsgSetModelConfigResponse: {
    typeUrl: string;
    encode(_: MsgSetModelConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModelConfigResponse;
    fromJSON(_: any): MsgSetModelConfigResponse;
    toJSON(_: MsgSetModelConfigResponse): JsonSafe<MsgSetModelConfigResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSetModelConfigResponse>, I>>(_: I): MsgSetModelConfigResponse;
};
export declare const MsgRegisterNode: {
    typeUrl: string;
    encode(message: MsgRegisterNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNode;
    fromJSON(object: any): MsgRegisterNode;
    toJSON(message: MsgRegisterNode): JsonSafe<MsgRegisterNode>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterNode>, I>>(object: I): MsgRegisterNode;
};
export declare const MsgRegisterNodeResponse: {
    typeUrl: string;
    encode(_: MsgRegisterNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNodeResponse;
    fromJSON(_: any): MsgRegisterNodeResponse;
    toJSON(_: MsgRegisterNodeResponse): JsonSafe<MsgRegisterNodeResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterNodeResponse>, I>>(_: I): MsgRegisterNodeResponse;
};
export declare const MsgDeleteNode: {
    typeUrl: string;
    encode(message: MsgDeleteNode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNode;
    fromJSON(object: any): MsgDeleteNode;
    toJSON(message: MsgDeleteNode): JsonSafe<MsgDeleteNode>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteNode>, I>>(object: I): MsgDeleteNode;
};
export declare const MsgDeleteNodeResponse: {
    typeUrl: string;
    encode(_: MsgDeleteNodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNodeResponse;
    fromJSON(_: any): MsgDeleteNodeResponse;
    toJSON(_: MsgDeleteNodeResponse): JsonSafe<MsgDeleteNodeResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteNodeResponse>, I>>(_: I): MsgDeleteNodeResponse;
};
export declare const MsgRegisterMiner: {
    typeUrl: string;
    encode(message: MsgRegisterMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterMiner;
    fromJSON(object: any): MsgRegisterMiner;
    toJSON(message: MsgRegisterMiner): JsonSafe<MsgRegisterMiner>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterMiner>, I>>(object: I): MsgRegisterMiner;
};
export declare const MsgRegisterMinerResponse: {
    typeUrl: string;
    encode(_: MsgRegisterMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterMinerResponse;
    fromJSON(_: any): MsgRegisterMinerResponse;
    toJSON(_: MsgRegisterMinerResponse): JsonSafe<MsgRegisterMinerResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterMinerResponse>, I>>(_: I): MsgRegisterMinerResponse;
};
export declare const MsgUpdateMiner: {
    typeUrl: string;
    encode(message: MsgUpdateMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMiner;
    fromJSON(object: any): MsgUpdateMiner;
    toJSON(message: MsgUpdateMiner): JsonSafe<MsgUpdateMiner>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateMiner>, I>>(object: I): MsgUpdateMiner;
};
export declare const MsgUpdateMinerResponse: {
    typeUrl: string;
    encode(_: MsgUpdateMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMinerResponse;
    fromJSON(_: any): MsgUpdateMinerResponse;
    toJSON(_: MsgUpdateMinerResponse): JsonSafe<MsgUpdateMinerResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateMinerResponse>, I>>(_: I): MsgUpdateMinerResponse;
};
export declare const MsgDeleteMiner: {
    typeUrl: string;
    encode(message: MsgDeleteMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMiner;
    fromJSON(object: any): MsgDeleteMiner;
    toJSON(message: MsgDeleteMiner): JsonSafe<MsgDeleteMiner>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteMiner>, I>>(object: I): MsgDeleteMiner;
};
export declare const MsgDeleteMinerResponse: {
    typeUrl: string;
    encode(_: MsgDeleteMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMinerResponse;
    fromJSON(_: any): MsgDeleteMinerResponse;
    toJSON(_: MsgDeleteMinerResponse): JsonSafe<MsgDeleteMinerResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteMinerResponse>, I>>(_: I): MsgDeleteMinerResponse;
};
export declare const MsgRegisterOrchestrator: {
    typeUrl: string;
    encode(message: MsgRegisterOrchestrator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOrchestrator;
    fromJSON(object: any): MsgRegisterOrchestrator;
    toJSON(message: MsgRegisterOrchestrator): JsonSafe<MsgRegisterOrchestrator>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterOrchestrator>, I>>(object: I): MsgRegisterOrchestrator;
};
export declare const MsgRegisterOrchestratorResponse: {
    typeUrl: string;
    encode(_: MsgRegisterOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterOrchestratorResponse;
    fromJSON(_: any): MsgRegisterOrchestratorResponse;
    toJSON(_: MsgRegisterOrchestratorResponse): JsonSafe<MsgRegisterOrchestratorResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterOrchestratorResponse>, I>>(_: I): MsgRegisterOrchestratorResponse;
};
export declare const MsgDeleteOrchestrator: {
    typeUrl: string;
    encode(message: MsgDeleteOrchestrator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrchestrator;
    fromJSON(object: any): MsgDeleteOrchestrator;
    toJSON(message: MsgDeleteOrchestrator): JsonSafe<MsgDeleteOrchestrator>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteOrchestrator>, I>>(object: I): MsgDeleteOrchestrator;
};
export declare const MsgDeleteOrchestratorResponse: {
    typeUrl: string;
    encode(_: MsgDeleteOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteOrchestratorResponse;
    fromJSON(_: any): MsgDeleteOrchestratorResponse;
    toJSON(_: MsgDeleteOrchestratorResponse): JsonSafe<MsgDeleteOrchestratorResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteOrchestratorResponse>, I>>(_: I): MsgDeleteOrchestratorResponse;
};
export declare const MsgAddMinerDeposit: {
    typeUrl: string;
    encode(message: MsgAddMinerDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMinerDeposit;
    fromJSON(object: any): MsgAddMinerDeposit;
    toJSON(message: MsgAddMinerDeposit): JsonSafe<MsgAddMinerDeposit>;
    fromPartial<I extends Exact<DeepPartial<MsgAddMinerDeposit>, I>>(object: I): MsgAddMinerDeposit;
};
export declare const MsgAddMinerDepositResponse: {
    typeUrl: string;
    encode(_: MsgAddMinerDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMinerDepositResponse;
    fromJSON(_: any): MsgAddMinerDepositResponse;
    toJSON(_: MsgAddMinerDepositResponse): JsonSafe<MsgAddMinerDepositResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgAddMinerDepositResponse>, I>>(_: I): MsgAddMinerDepositResponse;
};
export declare const MsgWithdrawMiner: {
    typeUrl: string;
    encode(message: MsgWithdrawMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawMiner;
    fromJSON(object: any): MsgWithdrawMiner;
    toJSON(message: MsgWithdrawMiner): JsonSafe<MsgWithdrawMiner>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawMiner>, I>>(object: I): MsgWithdrawMiner;
};
export declare const MsgWithdrawMinerResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawMinerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawMinerResponse;
    fromJSON(_: any): MsgWithdrawMinerResponse;
    toJSON(_: MsgWithdrawMinerResponse): JsonSafe<MsgWithdrawMinerResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawMinerResponse>, I>>(_: I): MsgWithdrawMinerResponse;
};
export declare const MsgAddOrchestratorDeposit: {
    typeUrl: string;
    encode(message: MsgAddOrchestratorDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOrchestratorDeposit;
    fromJSON(object: any): MsgAddOrchestratorDeposit;
    toJSON(message: MsgAddOrchestratorDeposit): JsonSafe<MsgAddOrchestratorDeposit>;
    fromPartial<I extends Exact<DeepPartial<MsgAddOrchestratorDeposit>, I>>(object: I): MsgAddOrchestratorDeposit;
};
export declare const MsgAddOrchestratorDepositResponse: {
    typeUrl: string;
    encode(_: MsgAddOrchestratorDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddOrchestratorDepositResponse;
    fromJSON(_: any): MsgAddOrchestratorDepositResponse;
    toJSON(_: MsgAddOrchestratorDepositResponse): JsonSafe<MsgAddOrchestratorDepositResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgAddOrchestratorDepositResponse>, I>>(_: I): MsgAddOrchestratorDepositResponse;
};
export declare const MsgWithdrawOrchestrator: {
    typeUrl: string;
    encode(message: MsgWithdrawOrchestrator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawOrchestrator;
    fromJSON(object: any): MsgWithdrawOrchestrator;
    toJSON(message: MsgWithdrawOrchestrator): JsonSafe<MsgWithdrawOrchestrator>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawOrchestrator>, I>>(object: I): MsgWithdrawOrchestrator;
};
export declare const MsgWithdrawOrchestratorResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawOrchestratorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawOrchestratorResponse;
    fromJSON(_: any): MsgWithdrawOrchestratorResponse;
    toJSON(_: MsgWithdrawOrchestratorResponse): JsonSafe<MsgWithdrawOrchestratorResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawOrchestratorResponse>, I>>(_: I): MsgWithdrawOrchestratorResponse;
};
export declare const MsgUpdateNodeLabel: {
    typeUrl: string;
    encode(message: MsgUpdateNodeLabel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeLabel;
    fromJSON(object: any): MsgUpdateNodeLabel;
    toJSON(message: MsgUpdateNodeLabel): JsonSafe<MsgUpdateNodeLabel>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateNodeLabel>, I>>(object: I): MsgUpdateNodeLabel;
};
export declare const MsgUpdateNodeLabelResponse: {
    typeUrl: string;
    encode(_: MsgUpdateNodeLabelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeLabelResponse;
    fromJSON(_: any): MsgUpdateNodeLabelResponse;
    toJSON(_: MsgUpdateNodeLabelResponse): JsonSafe<MsgUpdateNodeLabelResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateNodeLabelResponse>, I>>(_: I): MsgUpdateNodeLabelResponse;
};
export declare const MsgUpdateModel: {
    typeUrl: string;
    encode(message: MsgUpdateModel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModel;
    fromJSON(object: any): MsgUpdateModel;
    toJSON(message: MsgUpdateModel): JsonSafe<MsgUpdateModel>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateModel>, I>>(object: I): MsgUpdateModel;
};
export declare const MsgUpdateModelResponse: {
    typeUrl: string;
    encode(_: MsgUpdateModelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModelResponse;
    fromJSON(_: any): MsgUpdateModelResponse;
    toJSON(_: MsgUpdateModelResponse): JsonSafe<MsgUpdateModelResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateModelResponse>, I>>(_: I): MsgUpdateModelResponse;
};
export declare const MsgUpdateModelCreatorAllowList: {
    typeUrl: string;
    encode(message: MsgUpdateModelCreatorAllowList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModelCreatorAllowList;
    fromJSON(object: any): MsgUpdateModelCreatorAllowList;
    toJSON(message: MsgUpdateModelCreatorAllowList): JsonSafe<MsgUpdateModelCreatorAllowList>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateModelCreatorAllowList>, I>>(object: I): MsgUpdateModelCreatorAllowList;
};
export declare const MsgUpdateModelCreatorAllowListResponse: {
    typeUrl: string;
    encode(_: MsgUpdateModelCreatorAllowListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModelCreatorAllowListResponse;
    fromJSON(_: any): MsgUpdateModelCreatorAllowListResponse;
    toJSON(_: MsgUpdateModelCreatorAllowListResponse): JsonSafe<MsgUpdateModelCreatorAllowListResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateModelCreatorAllowListResponse>, I>>(_: I): MsgUpdateModelCreatorAllowListResponse;
};
export declare const MsgUpdateOrchestratorReputation: {
    typeUrl: string;
    encode(message: MsgUpdateOrchestratorReputation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrchestratorReputation;
    fromJSON(object: any): MsgUpdateOrchestratorReputation;
    toJSON(message: MsgUpdateOrchestratorReputation): JsonSafe<MsgUpdateOrchestratorReputation>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateOrchestratorReputation>, I>>(object: I): MsgUpdateOrchestratorReputation;
};
export declare const MsgUpdateOrchestratorReputationResponse: {
    typeUrl: string;
    encode(_: MsgUpdateOrchestratorReputationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateOrchestratorReputationResponse;
    fromJSON(_: any): MsgUpdateOrchestratorReputationResponse;
    toJSON(_: MsgUpdateOrchestratorReputationResponse): JsonSafe<MsgUpdateOrchestratorReputationResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateOrchestratorReputationResponse>, I>>(_: I): MsgUpdateOrchestratorReputationResponse;
};
export declare const MsgSetReputationParams: {
    typeUrl: string;
    encode(message: MsgSetReputationParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetReputationParams;
    fromJSON(object: any): MsgSetReputationParams;
    toJSON(message: MsgSetReputationParams): JsonSafe<MsgSetReputationParams>;
    fromPartial<I extends Exact<DeepPartial<MsgSetReputationParams>, I>>(object: I): MsgSetReputationParams;
};
export declare const MsgSetReputationParamsResponse: {
    typeUrl: string;
    encode(_: MsgSetReputationParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetReputationParamsResponse;
    fromJSON(_: any): MsgSetReputationParamsResponse;
    toJSON(_: MsgSetReputationParamsResponse): JsonSafe<MsgSetReputationParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSetReputationParamsResponse>, I>>(_: I): MsgSetReputationParamsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** UpdateModelCreatorAllowList defines a method for updating the model_creators. */
    UpdateModelCreatorAllowList(request: MsgUpdateModelCreatorAllowList): Promise<MsgUpdateModelCreatorAllowListResponse>;
    /** RegisterModel defines a method for registering a new model. */
    RegisterModel(request: MsgRegisterModel): Promise<MsgRegisterModelResponse>;
    /** UpdateModel defines a method for updating an existing model. */
    UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse>;
    /** DeleteModel defines a method for deleting an existing model. */
    DeleteModel(request: MsgDeleteModel): Promise<MsgDeleteModelResponse>;
    /** SetModelConfig defines a method for setting the model config. */
    SetModelConfig(request: MsgSetModelConfig): Promise<MsgSetModelConfigResponse>;
    /** RegisterNode defines a method for registering a new node. */
    RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse>;
    /** DeleteNode defines a method for deleting an existing node. */
    DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
    /** RegisterMiner defines a method for registering a new miner. */
    RegisterMiner(request: MsgRegisterMiner): Promise<MsgRegisterMinerResponse>;
    /** DeleteMiner defines a method for deleting an existing miner. */
    DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse>;
    UpdateMiner(request: MsgUpdateMiner): Promise<MsgUpdateMinerResponse>;
    /** RegisterOrchestrator defines a method for registering a new orchestrator. */
    RegisterOrchestrator(request: MsgRegisterOrchestrator): Promise<MsgRegisterOrchestratorResponse>;
    /** DeleteOrchestrator defines a method for deleting an existing orchestrator. */
    DeleteOrchestrator(request: MsgDeleteOrchestrator): Promise<MsgDeleteOrchestratorResponse>;
    /** AddMinerDeposit defines a method for depositing tokens to the miner. */
    AddMinerDeposit(request: MsgAddMinerDeposit): Promise<MsgAddMinerDepositResponse>;
    /** WithdrawMiner defines a method for withdrawing tokens from the miner. */
    WithdrawMiner(request: MsgWithdrawMiner): Promise<MsgWithdrawMinerResponse>;
    /** AddOrchestratorDeposit defines a method for depositing tokens to the orchestrator. */
    AddOrchestratorDeposit(request: MsgAddOrchestratorDeposit): Promise<MsgAddOrchestratorDepositResponse>;
    /** WithdrawOrchestrator defines a method for withdrawing tokens from the orchestrator. */
    WithdrawOrchestrator(request: MsgWithdrawOrchestrator): Promise<MsgWithdrawOrchestratorResponse>;
    /**
     * TODO optimize and streamline interfaces
     * UpdateNodeLabel defines a method for updating the node label.
     */
    UpdateNodeLabel(request: MsgUpdateNodeLabel): Promise<MsgUpdateNodeLabelResponse>;
    /** UpdateOrchestratorReputation defines a method for updating the orchestrator reputation. */
    UpdateOrchestratorReputation(request: MsgUpdateOrchestratorReputation): Promise<MsgUpdateOrchestratorReputationResponse>;
    /** SetReputationParams defines a method for setting the reputation parameters. */
    SetReputationParams(request: MsgSetReputationParams): Promise<MsgSetReputationParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    UpdateModelCreatorAllowList(request: MsgUpdateModelCreatorAllowList): Promise<MsgUpdateModelCreatorAllowListResponse>;
    RegisterModel(request: MsgRegisterModel): Promise<MsgRegisterModelResponse>;
    UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse>;
    DeleteModel(request: MsgDeleteModel): Promise<MsgDeleteModelResponse>;
    SetModelConfig(request: MsgSetModelConfig): Promise<MsgSetModelConfigResponse>;
    RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse>;
    DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse>;
    RegisterMiner(request: MsgRegisterMiner): Promise<MsgRegisterMinerResponse>;
    DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse>;
    UpdateMiner(request: MsgUpdateMiner): Promise<MsgUpdateMinerResponse>;
    RegisterOrchestrator(request: MsgRegisterOrchestrator): Promise<MsgRegisterOrchestratorResponse>;
    DeleteOrchestrator(request: MsgDeleteOrchestrator): Promise<MsgDeleteOrchestratorResponse>;
    AddMinerDeposit(request: MsgAddMinerDeposit): Promise<MsgAddMinerDepositResponse>;
    WithdrawMiner(request: MsgWithdrawMiner): Promise<MsgWithdrawMinerResponse>;
    AddOrchestratorDeposit(request: MsgAddOrchestratorDeposit): Promise<MsgAddOrchestratorDepositResponse>;
    WithdrawOrchestrator(request: MsgWithdrawOrchestrator): Promise<MsgWithdrawOrchestratorResponse>;
    UpdateNodeLabel(request: MsgUpdateNodeLabel): Promise<MsgUpdateNodeLabelResponse>;
    UpdateOrchestratorReputation(request: MsgUpdateOrchestratorReputation): Promise<MsgUpdateOrchestratorReputationResponse>;
    SetReputationParams(request: MsgSetReputationParams): Promise<MsgSetReputationParamsResponse>;
}
//# sourceMappingURL=tx.d.ts.map