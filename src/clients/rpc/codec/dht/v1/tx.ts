/* eslint-disable */
import { Params } from './params.js';
import { TokenPrice, ModelConfig } from './model.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import {
  Availability,
  InferenceType,
  availabilityFromJSON,
  inferenceTypeFromJSON,
  availabilityToJSON,
  inferenceTypeToJSON,
} from './orchestrator.js';
import { Reputation, ReputationParams } from './reputation.js';
import {
  Long,
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
  Rpc,
} from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export const protobufPackage = 'dht.v1';
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
export interface MsgUpdateParamsResponse {}
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
export interface MsgRegisterModelResponse {}
/** MsgDeleteModel is the Msg/DeleteModel request type. */
export interface MsgDeleteModel {
  creator: string;
  modelName: string;
}
/** MsgDeleteModelResponse defines the response structure for executing a */
export interface MsgDeleteModelResponse {}
/** MsgSetModelConfig is the Msg/SetModelConfig request type. */
export interface MsgSetModelConfig {
  creator: string;
  config: ModelConfig;
}
/**
 * MsgSetModelConfigResponse defines the response structure for executing a
 * MsgSetModelConfig message.
 */
export interface MsgSetModelConfigResponse {}
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
export interface MsgRegisterNodeResponse {}
/** MsgDeleteNode is the Msg/DeleteNode request type. */
export interface MsgDeleteNode {
  creator: string;
  nodeId: string;
}
/**
 * MsgDeleteNodeResponse defines the response structure for executing a
 * MsgDeleteNode message.
 */
export interface MsgDeleteNodeResponse {}
/** RegisterMiner is the Msg/RegisterMiner request type. */
export interface MsgRegisterMiner {
  creator: string;
  nodeId: string;
}
/**
 * MsgRegisterMinerResponse defines the response structure for executing a
 * MsgRegisterMiner message.
 */
export interface MsgRegisterMinerResponse {}
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
export interface MsgUpdateMinerResponse {}
/** MsgDeleteMiner is the Msg/DeleteMiner request type. */
export interface MsgDeleteMiner {
  creator: string;
  nodeId: string;
}
/**
 * MsgDeleteMinerResponse defines the response structure for executing a
 * MsgDeleteMiner message.
 */
export interface MsgDeleteMinerResponse {}
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
export interface MsgRegisterOrchestratorResponse {}
/** MsgDeleteOrchestrator is the Msg/DeleteOrchestrator request type. */
export interface MsgDeleteOrchestrator {
  creator: string;
  nodeId: string;
}
/**
 * MsgDeleteOrchestratorResponse defines the response structure for executing a
 * MsgDeleteOrchestrator message.
 */
export interface MsgDeleteOrchestratorResponse {}
/** AddMinerDeposit defines a request for depositing tokens to the miner. */
export interface MsgAddMinerDeposit {
  depositor: string;
  nodeId: string;
  amount: Coin;
}
/** MsgAddMinerDepositResponse defines the response for rpc AddMinerDeposit */
export interface MsgAddMinerDepositResponse {}
/** WithdrawMiner defines a request for withdrawing tokens from the miner. */
export interface MsgWithdrawMiner {
  depositor: string;
  nodeId: string;
  amount: Coin;
  receiver: string;
}
/** MsgWithdrawMinerResponse defines the response for rpc WithdrawMiner */
export interface MsgWithdrawMinerResponse {}
/** AddOrchestratorDeposit defines a request for depositing tokens to the orchestrator. */
export interface MsgAddOrchestratorDeposit {
  depositor: string;
  nodeId: string;
  amount: Coin;
}
/** MsgAddOrchestratorDepositResponse defines the response for rpc AddOrchestratorDeposit */
export interface MsgAddOrchestratorDepositResponse {}
/** WithdrawOrchestrator defines a request for withdrawing tokens from the orchestrator. */
export interface MsgWithdrawOrchestrator {
  depositor: string;
  nodeId: string;
  amount: Coin;
  receiver: string;
}
/** MsgWithdrawOrchestratorResponse defines the response for rpc WithdrawOrchestrator */
export interface MsgWithdrawOrchestratorResponse {}
/** MsgUpdateMinerLabel defines a method for updating the miner label. */
export interface MsgUpdateNodeLabel {
  creator: string;
  nodeId: string;
  /** NOTE: All labels need to be provided */
  labels: string[];
}
/** MsgUpdateMinerLabelResponse defines the MsgUpdateMinerLabel response type. */
export interface MsgUpdateNodeLabelResponse {}
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
export interface MsgUpdateModelResponse {}
/** MsgUpdateModelCreatorAllowList defines a request for updating model_creators. */
export interface MsgUpdateModelCreatorAllowList {
  account: string;
  modelCreators: string[];
}
/**
 * MsgUpdateModelCreatorAllowListResponse defines the
 * MsgUpdateModelCreatorAllowList response type
 */
export interface MsgUpdateModelCreatorAllowListResponse {}
/** MsgUpdateOrchestratorReputation defines a request for updating orchestrator reputation. */
export interface MsgUpdateOrchestratorReputation {
  creator: string;
  nodeId: string;
  /** NOTE: All reputations need to be provided */
  reputations: Reputation[];
}
/** MsgUpdateOrchestratorReputationResponse defines the MsgUpdateOrchestratorReputation response type. */
export interface MsgUpdateOrchestratorReputationResponse {}
/** MsgSetReputationParams defines a request for setting the reputation parameters. */
export interface MsgSetReputationParams {
  creator: string;
  params: ReputationParams;
}
/** MsgSetReputationParamsResponse defines the MsgSetReputationParams response type. */
export interface MsgSetReputationParamsResponse {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: '',
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: '/dht.v1.MsgUpdateParams',
  encode(
    message: MsgUpdateParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I,
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? '';
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: '/dht.v1.MsgUpdateParamsResponse',
  encode(
    _: MsgUpdateParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I,
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
function createBaseMsgRegisterModel(): MsgRegisterModel {
  return {
    creator: '',
    modelName: '',
    allowList: [],
    tokenPrice: undefined,
  };
}
export const MsgRegisterModel = {
  typeUrl: '/dht.v1.MsgRegisterModel',
  encode(
    message: MsgRegisterModel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.modelName !== '') {
      writer.uint32(18).string(message.modelName);
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.modelName = reader.string();
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        case 5:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterModel {
    const obj = createBaseMsgRegisterModel();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (Array.isArray(object?.allowList))
      obj.allowList = object.allowList.map((e: any) => String(e));
    if (isSet(object.tokenPrice))
      obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    return obj;
  },
  toJSON(message: MsgRegisterModel): JsonSafe<MsgRegisterModel> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    if (message.allowList) {
      obj.allowList = message.allowList.map((e) => e);
    } else {
      obj.allowList = [];
    }
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice
        ? TokenPrice.toJSON(message.tokenPrice)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterModel>, I>>(
    object: I,
  ): MsgRegisterModel {
    const message = createBaseMsgRegisterModel();
    message.creator = object.creator ?? '';
    message.modelName = object.modelName ?? '';
    message.allowList = object.allowList?.map((e) => e) || [];
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    return message;
  },
};
function createBaseMsgRegisterModelResponse(): MsgRegisterModelResponse {
  return {};
}
export const MsgRegisterModelResponse = {
  typeUrl: '/dht.v1.MsgRegisterModelResponse',
  encode(
    _: MsgRegisterModelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterModelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterModelResponse {
    const obj = createBaseMsgRegisterModelResponse();
    return obj;
  },
  toJSON(_: MsgRegisterModelResponse): JsonSafe<MsgRegisterModelResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterModelResponse>, I>>(
    _: I,
  ): MsgRegisterModelResponse {
    const message = createBaseMsgRegisterModelResponse();
    return message;
  },
};
function createBaseMsgDeleteModel(): MsgDeleteModel {
  return {
    creator: '',
    modelName: '',
  };
}
export const MsgDeleteModel = {
  typeUrl: '/dht.v1.MsgDeleteModel',
  encode(
    message: MsgDeleteModel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.modelName !== '') {
      writer.uint32(18).string(message.modelName);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.modelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteModel {
    const obj = createBaseMsgDeleteModel();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    return obj;
  },
  toJSON(message: MsgDeleteModel): JsonSafe<MsgDeleteModel> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteModel>, I>>(
    object: I,
  ): MsgDeleteModel {
    const message = createBaseMsgDeleteModel();
    message.creator = object.creator ?? '';
    message.modelName = object.modelName ?? '';
    return message;
  },
};
function createBaseMsgDeleteModelResponse(): MsgDeleteModelResponse {
  return {};
}
export const MsgDeleteModelResponse = {
  typeUrl: '/dht.v1.MsgDeleteModelResponse',
  encode(
    _: MsgDeleteModelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteModelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteModelResponse {
    const obj = createBaseMsgDeleteModelResponse();
    return obj;
  },
  toJSON(_: MsgDeleteModelResponse): JsonSafe<MsgDeleteModelResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteModelResponse>, I>>(
    _: I,
  ): MsgDeleteModelResponse {
    const message = createBaseMsgDeleteModelResponse();
    return message;
  },
};
function createBaseMsgSetModelConfig(): MsgSetModelConfig {
  return {
    creator: '',
    config: ModelConfig.fromPartial({}),
  };
}
export const MsgSetModelConfig = {
  typeUrl: '/dht.v1.MsgSetModelConfig',
  encode(
    message: MsgSetModelConfig,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.config !== undefined) {
      ModelConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetModelConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModelConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.config = ModelConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetModelConfig {
    const obj = createBaseMsgSetModelConfig();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.config)) obj.config = ModelConfig.fromJSON(object.config);
    return obj;
  },
  toJSON(message: MsgSetModelConfig): JsonSafe<MsgSetModelConfig> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.config !== undefined &&
      (obj.config = message.config
        ? ModelConfig.toJSON(message.config)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetModelConfig>, I>>(
    object: I,
  ): MsgSetModelConfig {
    const message = createBaseMsgSetModelConfig();
    message.creator = object.creator ?? '';
    if (object.config !== undefined && object.config !== null) {
      message.config = ModelConfig.fromPartial(object.config);
    }
    return message;
  },
};
function createBaseMsgSetModelConfigResponse(): MsgSetModelConfigResponse {
  return {};
}
export const MsgSetModelConfigResponse = {
  typeUrl: '/dht.v1.MsgSetModelConfigResponse',
  encode(
    _: MsgSetModelConfigResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetModelConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetModelConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetModelConfigResponse {
    const obj = createBaseMsgSetModelConfigResponse();
    return obj;
  },
  toJSON(_: MsgSetModelConfigResponse): JsonSafe<MsgSetModelConfigResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetModelConfigResponse>, I>>(
    _: I,
  ): MsgSetModelConfigResponse {
    const message = createBaseMsgSetModelConfigResponse();
    return message;
  },
};
function createBaseMsgRegisterNode(): MsgRegisterNode {
  return {
    creator: '',
    nodeId: '',
    publicName: '',
    version: '',
    networkAddress: '',
    walletAddress: '',
    vram: Long.UZERO,
    networkRps: 0,
    usingRelay: false,
    nextPings: [],
  };
}
export const MsgRegisterNode = {
  typeUrl: '/dht.v1.MsgRegisterNode',
  encode(
    message: MsgRegisterNode,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.publicName !== '') {
      writer.uint32(26).string(message.publicName);
    }
    if (message.version !== '') {
      writer.uint32(34).string(message.version);
    }
    if (message.networkAddress !== '') {
      writer.uint32(42).string(message.networkAddress);
    }
    if (message.walletAddress !== '') {
      writer.uint32(50).string(message.walletAddress);
    }
    if (!message.vram.isZero()) {
      writer.uint32(56).uint64(message.vram);
    }
    if (message.networkRps !== 0) {
      writer.uint32(65).double(message.networkRps);
    }
    if (message.usingRelay === true) {
      writer.uint32(72).bool(message.usingRelay);
    }
    for (const v of message.nextPings) {
      writer.uint32(82).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.publicName = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.networkAddress = reader.string();
          break;
        case 6:
          message.walletAddress = reader.string();
          break;
        case 7:
          message.vram = reader.uint64() as Long;
          break;
        case 8:
          message.networkRps = reader.double();
          break;
        case 9:
          message.usingRelay = reader.bool();
          break;
        case 10:
          message.nextPings.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterNode {
    const obj = createBaseMsgRegisterNode();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.publicName)) obj.publicName = String(object.publicName);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.networkAddress))
      obj.networkAddress = String(object.networkAddress);
    if (isSet(object.walletAddress))
      obj.walletAddress = String(object.walletAddress);
    if (isSet(object.vram)) obj.vram = Long.fromValue(object.vram);
    if (isSet(object.networkRps)) obj.networkRps = Number(object.networkRps);
    if (isSet(object.usingRelay)) obj.usingRelay = Boolean(object.usingRelay);
    if (Array.isArray(object?.nextPings))
      obj.nextPings = object.nextPings.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: MsgRegisterNode): JsonSafe<MsgRegisterNode> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.publicName !== undefined && (obj.publicName = message.publicName);
    message.version !== undefined && (obj.version = message.version);
    message.networkAddress !== undefined &&
      (obj.networkAddress = message.networkAddress);
    message.walletAddress !== undefined &&
      (obj.walletAddress = message.walletAddress);
    message.vram !== undefined &&
      (obj.vram = (message.vram || Long.UZERO).toString());
    message.networkRps !== undefined && (obj.networkRps = message.networkRps);
    message.usingRelay !== undefined && (obj.usingRelay = message.usingRelay);
    if (message.nextPings) {
      obj.nextPings = message.nextPings.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.nextPings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterNode>, I>>(
    object: I,
  ): MsgRegisterNode {
    const message = createBaseMsgRegisterNode();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    message.publicName = object.publicName ?? '';
    message.version = object.version ?? '';
    message.networkAddress = object.networkAddress ?? '';
    message.walletAddress = object.walletAddress ?? '';
    if (object.vram !== undefined && object.vram !== null) {
      message.vram = Long.fromValue(object.vram);
    }
    message.networkRps = object.networkRps ?? 0;
    message.usingRelay = object.usingRelay ?? false;
    message.nextPings = object.nextPings?.map((e) => e) || [];
    return message;
  },
};
function createBaseMsgRegisterNodeResponse(): MsgRegisterNodeResponse {
  return {};
}
export const MsgRegisterNodeResponse = {
  typeUrl: '/dht.v1.MsgRegisterNodeResponse',
  encode(
    _: MsgRegisterNodeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterNodeResponse {
    const obj = createBaseMsgRegisterNodeResponse();
    return obj;
  },
  toJSON(_: MsgRegisterNodeResponse): JsonSafe<MsgRegisterNodeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterNodeResponse>, I>>(
    _: I,
  ): MsgRegisterNodeResponse {
    const message = createBaseMsgRegisterNodeResponse();
    return message;
  },
};
function createBaseMsgDeleteNode(): MsgDeleteNode {
  return {
    creator: '',
    nodeId: '',
  };
}
export const MsgDeleteNode = {
  typeUrl: '/dht.v1.MsgDeleteNode',
  encode(
    message: MsgDeleteNode,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteNode {
    const obj = createBaseMsgDeleteNode();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: MsgDeleteNode): JsonSafe<MsgDeleteNode> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteNode>, I>>(
    object: I,
  ): MsgDeleteNode {
    const message = createBaseMsgDeleteNode();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};
function createBaseMsgDeleteNodeResponse(): MsgDeleteNodeResponse {
  return {};
}
export const MsgDeleteNodeResponse = {
  typeUrl: '/dht.v1.MsgDeleteNodeResponse',
  encode(
    _: MsgDeleteNodeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteNodeResponse {
    const obj = createBaseMsgDeleteNodeResponse();
    return obj;
  },
  toJSON(_: MsgDeleteNodeResponse): JsonSafe<MsgDeleteNodeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteNodeResponse>, I>>(
    _: I,
  ): MsgDeleteNodeResponse {
    const message = createBaseMsgDeleteNodeResponse();
    return message;
  },
};
function createBaseMsgRegisterMiner(): MsgRegisterMiner {
  return {
    creator: '',
    nodeId: '',
  };
}
export const MsgRegisterMiner = {
  typeUrl: '/dht.v1.MsgRegisterMiner',
  encode(
    message: MsgRegisterMiner,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterMiner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterMiner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterMiner {
    const obj = createBaseMsgRegisterMiner();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: MsgRegisterMiner): JsonSafe<MsgRegisterMiner> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterMiner>, I>>(
    object: I,
  ): MsgRegisterMiner {
    const message = createBaseMsgRegisterMiner();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};
function createBaseMsgRegisterMinerResponse(): MsgRegisterMinerResponse {
  return {};
}
export const MsgRegisterMinerResponse = {
  typeUrl: '/dht.v1.MsgRegisterMinerResponse',
  encode(
    _: MsgRegisterMinerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterMinerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterMinerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterMinerResponse {
    const obj = createBaseMsgRegisterMinerResponse();
    return obj;
  },
  toJSON(_: MsgRegisterMinerResponse): JsonSafe<MsgRegisterMinerResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterMinerResponse>, I>>(
    _: I,
  ): MsgRegisterMinerResponse {
    const message = createBaseMsgRegisterMinerResponse();
    return message;
  },
};
function createBaseMsgUpdateMiner(): MsgUpdateMiner {
  return {
    creator: '',
    nodeId: '',
    reputationValue: '',
    cumulativeReward: [],
    cumulativePenalty: [],
    sRolling: '',
  };
}
export const MsgUpdateMiner = {
  typeUrl: '/dht.v1.MsgUpdateMiner',
  encode(
    message: MsgUpdateMiner,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.reputationValue !== '') {
      writer.uint32(26).string(message.reputationValue);
    }
    for (const v of message.cumulativeReward) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cumulativePenalty) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.sRolling !== '') {
      writer.uint32(50).string(message.sRolling);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMiner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMiner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.reputationValue = reader.string();
          break;
        case 4:
          message.cumulativeReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.cumulativePenalty.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sRolling = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateMiner {
    const obj = createBaseMsgUpdateMiner();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.reputationValue))
      obj.reputationValue = String(object.reputationValue);
    if (Array.isArray(object?.cumulativeReward))
      obj.cumulativeReward = object.cumulativeReward.map((e: any) =>
        Coin.fromJSON(e),
      );
    if (Array.isArray(object?.cumulativePenalty))
      obj.cumulativePenalty = object.cumulativePenalty.map((e: any) =>
        Coin.fromJSON(e),
      );
    if (isSet(object.sRolling)) obj.sRolling = String(object.sRolling);
    return obj;
  },
  toJSON(message: MsgUpdateMiner): JsonSafe<MsgUpdateMiner> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.reputationValue !== undefined &&
      (obj.reputationValue = message.reputationValue);
    if (message.cumulativeReward) {
      obj.cumulativeReward = message.cumulativeReward.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.cumulativeReward = [];
    }
    if (message.cumulativePenalty) {
      obj.cumulativePenalty = message.cumulativePenalty.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.cumulativePenalty = [];
    }
    message.sRolling !== undefined && (obj.sRolling = message.sRolling);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMiner>, I>>(
    object: I,
  ): MsgUpdateMiner {
    const message = createBaseMsgUpdateMiner();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    message.reputationValue = object.reputationValue ?? '';
    message.cumulativeReward =
      object.cumulativeReward?.map((e) => Coin.fromPartial(e)) || [];
    message.cumulativePenalty =
      object.cumulativePenalty?.map((e) => Coin.fromPartial(e)) || [];
    message.sRolling = object.sRolling ?? '';
    return message;
  },
};
function createBaseMsgUpdateMinerResponse(): MsgUpdateMinerResponse {
  return {};
}
export const MsgUpdateMinerResponse = {
  typeUrl: '/dht.v1.MsgUpdateMinerResponse',
  encode(
    _: MsgUpdateMinerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateMinerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMinerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateMinerResponse {
    const obj = createBaseMsgUpdateMinerResponse();
    return obj;
  },
  toJSON(_: MsgUpdateMinerResponse): JsonSafe<MsgUpdateMinerResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMinerResponse>, I>>(
    _: I,
  ): MsgUpdateMinerResponse {
    const message = createBaseMsgUpdateMinerResponse();
    return message;
  },
};
function createBaseMsgDeleteMiner(): MsgDeleteMiner {
  return {
    creator: '',
    nodeId: '',
  };
}
export const MsgDeleteMiner = {
  typeUrl: '/dht.v1.MsgDeleteMiner',
  encode(
    message: MsgDeleteMiner,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMiner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMiner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteMiner {
    const obj = createBaseMsgDeleteMiner();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: MsgDeleteMiner): JsonSafe<MsgDeleteMiner> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteMiner>, I>>(
    object: I,
  ): MsgDeleteMiner {
    const message = createBaseMsgDeleteMiner();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};
function createBaseMsgDeleteMinerResponse(): MsgDeleteMinerResponse {
  return {};
}
export const MsgDeleteMinerResponse = {
  typeUrl: '/dht.v1.MsgDeleteMinerResponse',
  encode(
    _: MsgDeleteMinerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteMinerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMinerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteMinerResponse {
    const obj = createBaseMsgDeleteMinerResponse();
    return obj;
  },
  toJSON(_: MsgDeleteMinerResponse): JsonSafe<MsgDeleteMinerResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteMinerResponse>, I>>(
    _: I,
  ): MsgDeleteMinerResponse {
    const message = createBaseMsgDeleteMinerResponse();
    return message;
  },
};
function createBaseMsgRegisterOrchestrator(): MsgRegisterOrchestrator {
  return {
    creator: '',
    nodeId: '',
    status: 0,
    blockCount: [],
    minerIds: [],
    inferenceType: 0,
    modelName: '',
  };
}
export const MsgRegisterOrchestrator = {
  typeUrl: '/dht.v1.MsgRegisterOrchestrator',
  encode(
    message: MsgRegisterOrchestrator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    writer.uint32(34).fork();
    for (const v of message.blockCount) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.minerIds) {
      writer.uint32(42).string(v!);
    }
    if (message.inferenceType !== 0) {
      writer.uint32(48).int32(message.inferenceType);
    }
    if (message.modelName !== '') {
      writer.uint32(58).string(message.modelName);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterOrchestrator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOrchestrator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blockCount.push(reader.uint64() as Long);
            }
          } else {
            message.blockCount.push(reader.uint64() as Long);
          }
          break;
        case 5:
          message.minerIds.push(reader.string());
          break;
        case 6:
          message.inferenceType = reader.int32() as any;
          break;
        case 7:
          message.modelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterOrchestrator {
    const obj = createBaseMsgRegisterOrchestrator();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.status)) obj.status = availabilityFromJSON(object.status);
    if (Array.isArray(object?.blockCount))
      obj.blockCount = object.blockCount.map((e: any) => Long.fromValue(e));
    if (Array.isArray(object?.minerIds))
      obj.minerIds = object.minerIds.map((e: any) => String(e));
    if (isSet(object.inferenceType))
      obj.inferenceType = inferenceTypeFromJSON(object.inferenceType);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    return obj;
  },
  toJSON(message: MsgRegisterOrchestrator): JsonSafe<MsgRegisterOrchestrator> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.status !== undefined &&
      (obj.status = availabilityToJSON(message.status));
    if (message.blockCount) {
      obj.blockCount = message.blockCount.map((e) =>
        (e || Long.UZERO).toString(),
      );
    } else {
      obj.blockCount = [];
    }
    if (message.minerIds) {
      obj.minerIds = message.minerIds.map((e) => e);
    } else {
      obj.minerIds = [];
    }
    message.inferenceType !== undefined &&
      (obj.inferenceType = inferenceTypeToJSON(message.inferenceType));
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterOrchestrator>, I>>(
    object: I,
  ): MsgRegisterOrchestrator {
    const message = createBaseMsgRegisterOrchestrator();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    message.status = object.status ?? 0;
    message.blockCount = object.blockCount?.map((e) => Long.fromValue(e)) || [];
    message.minerIds = object.minerIds?.map((e) => e) || [];
    message.inferenceType = object.inferenceType ?? 0;
    message.modelName = object.modelName ?? '';
    return message;
  },
};
function createBaseMsgRegisterOrchestratorResponse(): MsgRegisterOrchestratorResponse {
  return {};
}
export const MsgRegisterOrchestratorResponse = {
  typeUrl: '/dht.v1.MsgRegisterOrchestratorResponse',
  encode(
    _: MsgRegisterOrchestratorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterOrchestratorResponse {
    const obj = createBaseMsgRegisterOrchestratorResponse();
    return obj;
  },
  toJSON(
    _: MsgRegisterOrchestratorResponse,
  ): JsonSafe<MsgRegisterOrchestratorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterOrchestratorResponse>, I>>(
    _: I,
  ): MsgRegisterOrchestratorResponse {
    const message = createBaseMsgRegisterOrchestratorResponse();
    return message;
  },
};
function createBaseMsgDeleteOrchestrator(): MsgDeleteOrchestrator {
  return {
    creator: '',
    nodeId: '',
  };
}
export const MsgDeleteOrchestrator = {
  typeUrl: '/dht.v1.MsgDeleteOrchestrator',
  encode(
    message: MsgDeleteOrchestrator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteOrchestrator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOrchestrator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteOrchestrator {
    const obj = createBaseMsgDeleteOrchestrator();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: MsgDeleteOrchestrator): JsonSafe<MsgDeleteOrchestrator> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteOrchestrator>, I>>(
    object: I,
  ): MsgDeleteOrchestrator {
    const message = createBaseMsgDeleteOrchestrator();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};
function createBaseMsgDeleteOrchestratorResponse(): MsgDeleteOrchestratorResponse {
  return {};
}
export const MsgDeleteOrchestratorResponse = {
  typeUrl: '/dht.v1.MsgDeleteOrchestratorResponse',
  encode(
    _: MsgDeleteOrchestratorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteOrchestratorResponse {
    const obj = createBaseMsgDeleteOrchestratorResponse();
    return obj;
  },
  toJSON(
    _: MsgDeleteOrchestratorResponse,
  ): JsonSafe<MsgDeleteOrchestratorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteOrchestratorResponse>, I>>(
    _: I,
  ): MsgDeleteOrchestratorResponse {
    const message = createBaseMsgDeleteOrchestratorResponse();
    return message;
  },
};
function createBaseMsgAddMinerDeposit(): MsgAddMinerDeposit {
  return {
    depositor: '',
    nodeId: '',
    amount: Coin.fromPartial({}),
  };
}
export const MsgAddMinerDeposit = {
  typeUrl: '/dht.v1.MsgAddMinerDeposit',
  encode(
    message: MsgAddMinerDeposit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.depositor !== '') {
      writer.uint32(10).string(message.depositor);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMinerDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMinerDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddMinerDeposit {
    const obj = createBaseMsgAddMinerDeposit();
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgAddMinerDeposit): JsonSafe<MsgAddMinerDeposit> {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddMinerDeposit>, I>>(
    object: I,
  ): MsgAddMinerDeposit {
    const message = createBaseMsgAddMinerDeposit();
    message.depositor = object.depositor ?? '';
    message.nodeId = object.nodeId ?? '';
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgAddMinerDepositResponse(): MsgAddMinerDepositResponse {
  return {};
}
export const MsgAddMinerDepositResponse = {
  typeUrl: '/dht.v1.MsgAddMinerDepositResponse',
  encode(
    _: MsgAddMinerDepositResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAddMinerDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMinerDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddMinerDepositResponse {
    const obj = createBaseMsgAddMinerDepositResponse();
    return obj;
  },
  toJSON(_: MsgAddMinerDepositResponse): JsonSafe<MsgAddMinerDepositResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddMinerDepositResponse>, I>>(
    _: I,
  ): MsgAddMinerDepositResponse {
    const message = createBaseMsgAddMinerDepositResponse();
    return message;
  },
};
function createBaseMsgWithdrawMiner(): MsgWithdrawMiner {
  return {
    depositor: '',
    nodeId: '',
    amount: Coin.fromPartial({}),
    receiver: '',
  };
}
export const MsgWithdrawMiner = {
  typeUrl: '/dht.v1.MsgWithdrawMiner',
  encode(
    message: MsgWithdrawMiner,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.depositor !== '') {
      writer.uint32(10).string(message.depositor);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.receiver !== '') {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawMiner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawMiner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawMiner {
    const obj = createBaseMsgWithdrawMiner();
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    return obj;
  },
  toJSON(message: MsgWithdrawMiner): JsonSafe<MsgWithdrawMiner> {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawMiner>, I>>(
    object: I,
  ): MsgWithdrawMiner {
    const message = createBaseMsgWithdrawMiner();
    message.depositor = object.depositor ?? '';
    message.nodeId = object.nodeId ?? '';
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.receiver = object.receiver ?? '';
    return message;
  },
};
function createBaseMsgWithdrawMinerResponse(): MsgWithdrawMinerResponse {
  return {};
}
export const MsgWithdrawMinerResponse = {
  typeUrl: '/dht.v1.MsgWithdrawMinerResponse',
  encode(
    _: MsgWithdrawMinerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawMinerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawMinerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawMinerResponse {
    const obj = createBaseMsgWithdrawMinerResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawMinerResponse): JsonSafe<MsgWithdrawMinerResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawMinerResponse>, I>>(
    _: I,
  ): MsgWithdrawMinerResponse {
    const message = createBaseMsgWithdrawMinerResponse();
    return message;
  },
};
function createBaseMsgAddOrchestratorDeposit(): MsgAddOrchestratorDeposit {
  return {
    depositor: '',
    nodeId: '',
    amount: Coin.fromPartial({}),
  };
}
export const MsgAddOrchestratorDeposit = {
  typeUrl: '/dht.v1.MsgAddOrchestratorDeposit',
  encode(
    message: MsgAddOrchestratorDeposit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.depositor !== '') {
      writer.uint32(10).string(message.depositor);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAddOrchestratorDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOrchestratorDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddOrchestratorDeposit {
    const obj = createBaseMsgAddOrchestratorDeposit();
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(
    message: MsgAddOrchestratorDeposit,
  ): JsonSafe<MsgAddOrchestratorDeposit> {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddOrchestratorDeposit>, I>>(
    object: I,
  ): MsgAddOrchestratorDeposit {
    const message = createBaseMsgAddOrchestratorDeposit();
    message.depositor = object.depositor ?? '';
    message.nodeId = object.nodeId ?? '';
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
};
function createBaseMsgAddOrchestratorDepositResponse(): MsgAddOrchestratorDepositResponse {
  return {};
}
export const MsgAddOrchestratorDepositResponse = {
  typeUrl: '/dht.v1.MsgAddOrchestratorDepositResponse',
  encode(
    _: MsgAddOrchestratorDepositResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAddOrchestratorDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddOrchestratorDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddOrchestratorDepositResponse {
    const obj = createBaseMsgAddOrchestratorDepositResponse();
    return obj;
  },
  toJSON(
    _: MsgAddOrchestratorDepositResponse,
  ): JsonSafe<MsgAddOrchestratorDepositResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgAddOrchestratorDepositResponse>, I>,
  >(_: I): MsgAddOrchestratorDepositResponse {
    const message = createBaseMsgAddOrchestratorDepositResponse();
    return message;
  },
};
function createBaseMsgWithdrawOrchestrator(): MsgWithdrawOrchestrator {
  return {
    depositor: '',
    nodeId: '',
    amount: Coin.fromPartial({}),
    receiver: '',
  };
}
export const MsgWithdrawOrchestrator = {
  typeUrl: '/dht.v1.MsgWithdrawOrchestrator',
  encode(
    message: MsgWithdrawOrchestrator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.depositor !== '') {
      writer.uint32(10).string(message.depositor);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.receiver !== '') {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawOrchestrator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawOrchestrator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawOrchestrator {
    const obj = createBaseMsgWithdrawOrchestrator();
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.receiver)) obj.receiver = String(object.receiver);
    return obj;
  },
  toJSON(message: MsgWithdrawOrchestrator): JsonSafe<MsgWithdrawOrchestrator> {
    const obj: any = {};
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawOrchestrator>, I>>(
    object: I,
  ): MsgWithdrawOrchestrator {
    const message = createBaseMsgWithdrawOrchestrator();
    message.depositor = object.depositor ?? '';
    message.nodeId = object.nodeId ?? '';
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    message.receiver = object.receiver ?? '';
    return message;
  },
};
function createBaseMsgWithdrawOrchestratorResponse(): MsgWithdrawOrchestratorResponse {
  return {};
}
export const MsgWithdrawOrchestratorResponse = {
  typeUrl: '/dht.v1.MsgWithdrawOrchestratorResponse',
  encode(
    _: MsgWithdrawOrchestratorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgWithdrawOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawOrchestratorResponse {
    const obj = createBaseMsgWithdrawOrchestratorResponse();
    return obj;
  },
  toJSON(
    _: MsgWithdrawOrchestratorResponse,
  ): JsonSafe<MsgWithdrawOrchestratorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawOrchestratorResponse>, I>>(
    _: I,
  ): MsgWithdrawOrchestratorResponse {
    const message = createBaseMsgWithdrawOrchestratorResponse();
    return message;
  },
};
function createBaseMsgUpdateNodeLabel(): MsgUpdateNodeLabel {
  return {
    creator: '',
    nodeId: '',
    labels: [],
  };
}
export const MsgUpdateNodeLabel = {
  typeUrl: '/dht.v1.MsgUpdateNodeLabel',
  encode(
    message: MsgUpdateNodeLabel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    for (const v of message.labels) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNodeLabel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNodeLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.labels.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateNodeLabel {
    const obj = createBaseMsgUpdateNodeLabel();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (Array.isArray(object?.labels))
      obj.labels = object.labels.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgUpdateNodeLabel): JsonSafe<MsgUpdateNodeLabel> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    if (message.labels) {
      obj.labels = message.labels.map((e) => e);
    } else {
      obj.labels = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateNodeLabel>, I>>(
    object: I,
  ): MsgUpdateNodeLabel {
    const message = createBaseMsgUpdateNodeLabel();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    message.labels = object.labels?.map((e) => e) || [];
    return message;
  },
};
function createBaseMsgUpdateNodeLabelResponse(): MsgUpdateNodeLabelResponse {
  return {};
}
export const MsgUpdateNodeLabelResponse = {
  typeUrl: '/dht.v1.MsgUpdateNodeLabelResponse',
  encode(
    _: MsgUpdateNodeLabelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateNodeLabelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNodeLabelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateNodeLabelResponse {
    const obj = createBaseMsgUpdateNodeLabelResponse();
    return obj;
  },
  toJSON(_: MsgUpdateNodeLabelResponse): JsonSafe<MsgUpdateNodeLabelResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateNodeLabelResponse>, I>>(
    _: I,
  ): MsgUpdateNodeLabelResponse {
    const message = createBaseMsgUpdateNodeLabelResponse();
    return message;
  },
};
function createBaseMsgUpdateModel(): MsgUpdateModel {
  return {
    account: '',
    modelName: '',
    allowList: [],
    tokenPrice: TokenPrice.fromPartial({}),
  };
}
export const MsgUpdateModel = {
  typeUrl: '/dht.v1.MsgUpdateModel',
  encode(
    message: MsgUpdateModel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.modelName !== '') {
      writer.uint32(18).string(message.modelName);
    }
    for (const v of message.allowList) {
      writer.uint32(26).string(v!);
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.modelName = reader.string();
          break;
        case 3:
          message.allowList.push(reader.string());
          break;
        case 4:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateModel {
    const obj = createBaseMsgUpdateModel();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (Array.isArray(object?.allowList))
      obj.allowList = object.allowList.map((e: any) => String(e));
    if (isSet(object.tokenPrice))
      obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    return obj;
  },
  toJSON(message: MsgUpdateModel): JsonSafe<MsgUpdateModel> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    if (message.allowList) {
      obj.allowList = message.allowList.map((e) => e);
    } else {
      obj.allowList = [];
    }
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice
        ? TokenPrice.toJSON(message.tokenPrice)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateModel>, I>>(
    object: I,
  ): MsgUpdateModel {
    const message = createBaseMsgUpdateModel();
    message.account = object.account ?? '';
    message.modelName = object.modelName ?? '';
    message.allowList = object.allowList?.map((e) => e) || [];
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    return message;
  },
};
function createBaseMsgUpdateModelResponse(): MsgUpdateModelResponse {
  return {};
}
export const MsgUpdateModelResponse = {
  typeUrl: '/dht.v1.MsgUpdateModelResponse',
  encode(
    _: MsgUpdateModelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateModelResponse {
    const obj = createBaseMsgUpdateModelResponse();
    return obj;
  },
  toJSON(_: MsgUpdateModelResponse): JsonSafe<MsgUpdateModelResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateModelResponse>, I>>(
    _: I,
  ): MsgUpdateModelResponse {
    const message = createBaseMsgUpdateModelResponse();
    return message;
  },
};
function createBaseMsgUpdateModelCreatorAllowList(): MsgUpdateModelCreatorAllowList {
  return {
    account: '',
    modelCreators: [],
  };
}
export const MsgUpdateModelCreatorAllowList = {
  typeUrl: '/dht.v1.MsgUpdateModelCreatorAllowList',
  encode(
    message: MsgUpdateModelCreatorAllowList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.modelCreators) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateModelCreatorAllowList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModelCreatorAllowList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.modelCreators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateModelCreatorAllowList {
    const obj = createBaseMsgUpdateModelCreatorAllowList();
    if (isSet(object.account)) obj.account = String(object.account);
    if (Array.isArray(object?.modelCreators))
      obj.modelCreators = object.modelCreators.map((e: any) => String(e));
    return obj;
  },
  toJSON(
    message: MsgUpdateModelCreatorAllowList,
  ): JsonSafe<MsgUpdateModelCreatorAllowList> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.modelCreators) {
      obj.modelCreators = message.modelCreators.map((e) => e);
    } else {
      obj.modelCreators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateModelCreatorAllowList>, I>>(
    object: I,
  ): MsgUpdateModelCreatorAllowList {
    const message = createBaseMsgUpdateModelCreatorAllowList();
    message.account = object.account ?? '';
    message.modelCreators = object.modelCreators?.map((e) => e) || [];
    return message;
  },
};
function createBaseMsgUpdateModelCreatorAllowListResponse(): MsgUpdateModelCreatorAllowListResponse {
  return {};
}
export const MsgUpdateModelCreatorAllowListResponse = {
  typeUrl: '/dht.v1.MsgUpdateModelCreatorAllowListResponse',
  encode(
    _: MsgUpdateModelCreatorAllowListResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateModelCreatorAllowListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateModelCreatorAllowListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateModelCreatorAllowListResponse {
    const obj = createBaseMsgUpdateModelCreatorAllowListResponse();
    return obj;
  },
  toJSON(
    _: MsgUpdateModelCreatorAllowListResponse,
  ): JsonSafe<MsgUpdateModelCreatorAllowListResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateModelCreatorAllowListResponse>, I>,
  >(_: I): MsgUpdateModelCreatorAllowListResponse {
    const message = createBaseMsgUpdateModelCreatorAllowListResponse();
    return message;
  },
};
function createBaseMsgUpdateOrchestratorReputation(): MsgUpdateOrchestratorReputation {
  return {
    creator: '',
    nodeId: '',
    reputations: [],
  };
}
export const MsgUpdateOrchestratorReputation = {
  typeUrl: '/dht.v1.MsgUpdateOrchestratorReputation',
  encode(
    message: MsgUpdateOrchestratorReputation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nodeId !== '') {
      writer.uint32(18).string(message.nodeId);
    }
    for (const v of message.reputations) {
      Reputation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateOrchestratorReputation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOrchestratorReputation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.reputations.push(Reputation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateOrchestratorReputation {
    const obj = createBaseMsgUpdateOrchestratorReputation();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (Array.isArray(object?.reputations))
      obj.reputations = object.reputations.map((e: any) =>
        Reputation.fromJSON(e),
      );
    return obj;
  },
  toJSON(
    message: MsgUpdateOrchestratorReputation,
  ): JsonSafe<MsgUpdateOrchestratorReputation> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    if (message.reputations) {
      obj.reputations = message.reputations.map((e) =>
        e ? Reputation.toJSON(e) : undefined,
      );
    } else {
      obj.reputations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateOrchestratorReputation>, I>>(
    object: I,
  ): MsgUpdateOrchestratorReputation {
    const message = createBaseMsgUpdateOrchestratorReputation();
    message.creator = object.creator ?? '';
    message.nodeId = object.nodeId ?? '';
    message.reputations =
      object.reputations?.map((e) => Reputation.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgUpdateOrchestratorReputationResponse(): MsgUpdateOrchestratorReputationResponse {
  return {};
}
export const MsgUpdateOrchestratorReputationResponse = {
  typeUrl: '/dht.v1.MsgUpdateOrchestratorReputationResponse',
  encode(
    _: MsgUpdateOrchestratorReputationResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateOrchestratorReputationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateOrchestratorReputationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateOrchestratorReputationResponse {
    const obj = createBaseMsgUpdateOrchestratorReputationResponse();
    return obj;
  },
  toJSON(
    _: MsgUpdateOrchestratorReputationResponse,
  ): JsonSafe<MsgUpdateOrchestratorReputationResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateOrchestratorReputationResponse>, I>,
  >(_: I): MsgUpdateOrchestratorReputationResponse {
    const message = createBaseMsgUpdateOrchestratorReputationResponse();
    return message;
  },
};
function createBaseMsgSetReputationParams(): MsgSetReputationParams {
  return {
    creator: '',
    params: ReputationParams.fromPartial({}),
  };
}
export const MsgSetReputationParams = {
  typeUrl: '/dht.v1.MsgSetReputationParams',
  encode(
    message: MsgSetReputationParams,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.params !== undefined) {
      ReputationParams.encode(
        message.params,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetReputationParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetReputationParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.params = ReputationParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetReputationParams {
    const obj = createBaseMsgSetReputationParams();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.params))
      obj.params = ReputationParams.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgSetReputationParams): JsonSafe<MsgSetReputationParams> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.params !== undefined &&
      (obj.params = message.params
        ? ReputationParams.toJSON(message.params)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetReputationParams>, I>>(
    object: I,
  ): MsgSetReputationParams {
    const message = createBaseMsgSetReputationParams();
    message.creator = object.creator ?? '';
    if (object.params !== undefined && object.params !== null) {
      message.params = ReputationParams.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgSetReputationParamsResponse(): MsgSetReputationParamsResponse {
  return {};
}
export const MsgSetReputationParamsResponse = {
  typeUrl: '/dht.v1.MsgSetReputationParamsResponse',
  encode(
    _: MsgSetReputationParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetReputationParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetReputationParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetReputationParamsResponse {
    const obj = createBaseMsgSetReputationParamsResponse();
    return obj;
  },
  toJSON(
    _: MsgSetReputationParamsResponse,
  ): JsonSafe<MsgSetReputationParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetReputationParamsResponse>, I>>(
    _: I,
  ): MsgSetReputationParamsResponse {
    const message = createBaseMsgSetReputationParamsResponse();
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** UpdateModelCreatorAllowList defines a method for updating the model_creators. */
  UpdateModelCreatorAllowList(
    request: MsgUpdateModelCreatorAllowList,
  ): Promise<MsgUpdateModelCreatorAllowListResponse>;
  /** RegisterModel defines a method for registering a new model. */
  RegisterModel(request: MsgRegisterModel): Promise<MsgRegisterModelResponse>;
  /** UpdateModel defines a method for updating an existing model. */
  UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse>;
  /** DeleteModel defines a method for deleting an existing model. */
  DeleteModel(request: MsgDeleteModel): Promise<MsgDeleteModelResponse>;
  /** SetModelConfig defines a method for setting the model config. */
  SetModelConfig(
    request: MsgSetModelConfig,
  ): Promise<MsgSetModelConfigResponse>;
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
  RegisterOrchestrator(
    request: MsgRegisterOrchestrator,
  ): Promise<MsgRegisterOrchestratorResponse>;
  /** DeleteOrchestrator defines a method for deleting an existing orchestrator. */
  DeleteOrchestrator(
    request: MsgDeleteOrchestrator,
  ): Promise<MsgDeleteOrchestratorResponse>;
  /** AddMinerDeposit defines a method for depositing tokens to the miner. */
  AddMinerDeposit(
    request: MsgAddMinerDeposit,
  ): Promise<MsgAddMinerDepositResponse>;
  /** WithdrawMiner defines a method for withdrawing tokens from the miner. */
  WithdrawMiner(request: MsgWithdrawMiner): Promise<MsgWithdrawMinerResponse>;
  /** AddOrchestratorDeposit defines a method for depositing tokens to the orchestrator. */
  AddOrchestratorDeposit(
    request: MsgAddOrchestratorDeposit,
  ): Promise<MsgAddOrchestratorDepositResponse>;
  /** WithdrawOrchestrator defines a method for withdrawing tokens from the orchestrator. */
  WithdrawOrchestrator(
    request: MsgWithdrawOrchestrator,
  ): Promise<MsgWithdrawOrchestratorResponse>;
  /**
   * TODO optimize and streamline interfaces
   * UpdateNodeLabel defines a method for updating the node label.
   */
  UpdateNodeLabel(
    request: MsgUpdateNodeLabel,
  ): Promise<MsgUpdateNodeLabelResponse>;
  /** UpdateOrchestratorReputation defines a method for updating the orchestrator reputation. */
  UpdateOrchestratorReputation(
    request: MsgUpdateOrchestratorReputation,
  ): Promise<MsgUpdateOrchestratorReputationResponse>;
  /** SetReputationParams defines a method for setting the reputation parameters. */
  SetReputationParams(
    request: MsgSetReputationParams,
  ): Promise<MsgSetReputationParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.UpdateModelCreatorAllowList =
      this.UpdateModelCreatorAllowList.bind(this);
    this.RegisterModel = this.RegisterModel.bind(this);
    this.UpdateModel = this.UpdateModel.bind(this);
    this.DeleteModel = this.DeleteModel.bind(this);
    this.SetModelConfig = this.SetModelConfig.bind(this);
    this.RegisterNode = this.RegisterNode.bind(this);
    this.DeleteNode = this.DeleteNode.bind(this);
    this.RegisterMiner = this.RegisterMiner.bind(this);
    this.DeleteMiner = this.DeleteMiner.bind(this);
    this.UpdateMiner = this.UpdateMiner.bind(this);
    this.RegisterOrchestrator = this.RegisterOrchestrator.bind(this);
    this.DeleteOrchestrator = this.DeleteOrchestrator.bind(this);
    this.AddMinerDeposit = this.AddMinerDeposit.bind(this);
    this.WithdrawMiner = this.WithdrawMiner.bind(this);
    this.AddOrchestratorDeposit = this.AddOrchestratorDeposit.bind(this);
    this.WithdrawOrchestrator = this.WithdrawOrchestrator.bind(this);
    this.UpdateNodeLabel = this.UpdateNodeLabel.bind(this);
    this.UpdateOrchestratorReputation =
      this.UpdateOrchestratorReputation.bind(this);
    this.SetReputationParams = this.SetReputationParams.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'UpdateParams', data);
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  UpdateModelCreatorAllowList(
    request: MsgUpdateModelCreatorAllowList,
  ): Promise<MsgUpdateModelCreatorAllowListResponse> {
    const data = MsgUpdateModelCreatorAllowList.encode(request).finish();
    const promise = this.rpc.request(
      'dht.v1.Msg',
      'UpdateModelCreatorAllowList',
      data,
    );
    return promise.then((data) =>
      MsgUpdateModelCreatorAllowListResponse.decode(new _m0.Reader(data)),
    );
  }
  RegisterModel(request: MsgRegisterModel): Promise<MsgRegisterModelResponse> {
    const data = MsgRegisterModel.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'RegisterModel', data);
    return promise.then((data) =>
      MsgRegisterModelResponse.decode(new _m0.Reader(data)),
    );
  }
  UpdateModel(request: MsgUpdateModel): Promise<MsgUpdateModelResponse> {
    const data = MsgUpdateModel.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'UpdateModel', data);
    return promise.then((data) =>
      MsgUpdateModelResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteModel(request: MsgDeleteModel): Promise<MsgDeleteModelResponse> {
    const data = MsgDeleteModel.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'DeleteModel', data);
    return promise.then((data) =>
      MsgDeleteModelResponse.decode(new _m0.Reader(data)),
    );
  }
  SetModelConfig(
    request: MsgSetModelConfig,
  ): Promise<MsgSetModelConfigResponse> {
    const data = MsgSetModelConfig.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'SetModelConfig', data);
    return promise.then((data) =>
      MsgSetModelConfigResponse.decode(new _m0.Reader(data)),
    );
  }
  RegisterNode(request: MsgRegisterNode): Promise<MsgRegisterNodeResponse> {
    const data = MsgRegisterNode.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'RegisterNode', data);
    return promise.then((data) =>
      MsgRegisterNodeResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteNode(request: MsgDeleteNode): Promise<MsgDeleteNodeResponse> {
    const data = MsgDeleteNode.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'DeleteNode', data);
    return promise.then((data) =>
      MsgDeleteNodeResponse.decode(new _m0.Reader(data)),
    );
  }
  RegisterMiner(request: MsgRegisterMiner): Promise<MsgRegisterMinerResponse> {
    const data = MsgRegisterMiner.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'RegisterMiner', data);
    return promise.then((data) =>
      MsgRegisterMinerResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteMiner(request: MsgDeleteMiner): Promise<MsgDeleteMinerResponse> {
    const data = MsgDeleteMiner.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'DeleteMiner', data);
    return promise.then((data) =>
      MsgDeleteMinerResponse.decode(new _m0.Reader(data)),
    );
  }
  UpdateMiner(request: MsgUpdateMiner): Promise<MsgUpdateMinerResponse> {
    const data = MsgUpdateMiner.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'UpdateMiner', data);
    return promise.then((data) =>
      MsgUpdateMinerResponse.decode(new _m0.Reader(data)),
    );
  }
  RegisterOrchestrator(
    request: MsgRegisterOrchestrator,
  ): Promise<MsgRegisterOrchestratorResponse> {
    const data = MsgRegisterOrchestrator.encode(request).finish();
    const promise = this.rpc.request(
      'dht.v1.Msg',
      'RegisterOrchestrator',
      data,
    );
    return promise.then((data) =>
      MsgRegisterOrchestratorResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteOrchestrator(
    request: MsgDeleteOrchestrator,
  ): Promise<MsgDeleteOrchestratorResponse> {
    const data = MsgDeleteOrchestrator.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'DeleteOrchestrator', data);
    return promise.then((data) =>
      MsgDeleteOrchestratorResponse.decode(new _m0.Reader(data)),
    );
  }
  AddMinerDeposit(
    request: MsgAddMinerDeposit,
  ): Promise<MsgAddMinerDepositResponse> {
    const data = MsgAddMinerDeposit.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'AddMinerDeposit', data);
    return promise.then((data) =>
      MsgAddMinerDepositResponse.decode(new _m0.Reader(data)),
    );
  }
  WithdrawMiner(request: MsgWithdrawMiner): Promise<MsgWithdrawMinerResponse> {
    const data = MsgWithdrawMiner.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'WithdrawMiner', data);
    return promise.then((data) =>
      MsgWithdrawMinerResponse.decode(new _m0.Reader(data)),
    );
  }
  AddOrchestratorDeposit(
    request: MsgAddOrchestratorDeposit,
  ): Promise<MsgAddOrchestratorDepositResponse> {
    const data = MsgAddOrchestratorDeposit.encode(request).finish();
    const promise = this.rpc.request(
      'dht.v1.Msg',
      'AddOrchestratorDeposit',
      data,
    );
    return promise.then((data) =>
      MsgAddOrchestratorDepositResponse.decode(new _m0.Reader(data)),
    );
  }
  WithdrawOrchestrator(
    request: MsgWithdrawOrchestrator,
  ): Promise<MsgWithdrawOrchestratorResponse> {
    const data = MsgWithdrawOrchestrator.encode(request).finish();
    const promise = this.rpc.request(
      'dht.v1.Msg',
      'WithdrawOrchestrator',
      data,
    );
    return promise.then((data) =>
      MsgWithdrawOrchestratorResponse.decode(new _m0.Reader(data)),
    );
  }
  UpdateNodeLabel(
    request: MsgUpdateNodeLabel,
  ): Promise<MsgUpdateNodeLabelResponse> {
    const data = MsgUpdateNodeLabel.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'UpdateNodeLabel', data);
    return promise.then((data) =>
      MsgUpdateNodeLabelResponse.decode(new _m0.Reader(data)),
    );
  }
  UpdateOrchestratorReputation(
    request: MsgUpdateOrchestratorReputation,
  ): Promise<MsgUpdateOrchestratorReputationResponse> {
    const data = MsgUpdateOrchestratorReputation.encode(request).finish();
    const promise = this.rpc.request(
      'dht.v1.Msg',
      'UpdateOrchestratorReputation',
      data,
    );
    return promise.then((data) =>
      MsgUpdateOrchestratorReputationResponse.decode(new _m0.Reader(data)),
    );
  }
  SetReputationParams(
    request: MsgSetReputationParams,
  ): Promise<MsgSetReputationParamsResponse> {
    const data = MsgSetReputationParams.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Msg', 'SetReputationParams', data);
    return promise.then((data) =>
      MsgSetReputationParamsResponse.decode(new _m0.Reader(data)),
    );
  }
}
