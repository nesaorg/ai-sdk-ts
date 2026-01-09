/* eslint-disable */
import {
  Params,
  AgentStatus,
  TokenPrice,
  Payment,
  agentStatusFromJSON,
  agentStatusToJSON,
} from './agent.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { RequestLog } from '../../dht/v1/reputation.js';
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
export const protobufPackage = 'agent.v1';
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
/** MsgRegisterInferenceAgent is the Msg/RegisterInferenceAgent request type. */
export interface MsgRegisterInferenceAgent {
  account: string;
  url: string;
  version: Long;
  sender: string;
}
/** MsgRegisterInferenceAgentResponse defines the Msg/RegisterInferenceAgent response type. */
export interface MsgRegisterInferenceAgentResponse {}
/** MsgUpdateInferenceAgent is the Msg/UpdateInferenceAgent request type. */
export interface MsgUpdateInferenceAgent {
  account: string;
  url?: string;
  version?: Long;
  status?: AgentStatus;
  sender: string;
}
/** MsgUpdateInferenceAgentResponse defines the Msg/UpdateInferenceAgent response type. */
export interface MsgUpdateInferenceAgentResponse {}
/** MsgRemoveInferenceAgent is the Msg/RemoveInferenceAgent request type. */
export interface MsgRemoveInferenceAgent {
  account: string;
  sender: string;
}
/** MsgRemoveInferenceAgentResponse defines the Msg/RemoveInferenceAgent response type. */
export interface MsgRemoveInferenceAgentResponse {}
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
export interface MsgCancelSessionResponse {}
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
export interface MsgSubmitPaymentResponse {}
/** MsgDeleteExpiredSession is the Msg/DeleteExpiredSession request type. */
export interface MsgDeleteExpiredSession {
  account: string;
  sessionId: string;
}
/** MsgDeleteExpiredSessionResponse defines the Msg/DeleteExpiredSession response type. */
export interface MsgDeleteExpiredSessionResponse {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: '',
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: '/agent.v1.MsgUpdateParams',
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
  typeUrl: '/agent.v1.MsgUpdateParamsResponse',
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
function createBaseMsgRegisterInferenceAgent(): MsgRegisterInferenceAgent {
  return {
    account: '',
    url: '',
    version: Long.UZERO,
    sender: '',
  };
}
export const MsgRegisterInferenceAgent = {
  typeUrl: '/agent.v1.MsgRegisterInferenceAgent',
  encode(
    message: MsgRegisterInferenceAgent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.url !== '') {
      writer.uint32(18).string(message.url);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.sender !== '') {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterInferenceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInferenceAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.version = reader.uint64() as Long;
          break;
        case 4:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterInferenceAgent {
    const obj = createBaseMsgRegisterInferenceAgent();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.url)) obj.url = String(object.url);
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(
    message: MsgRegisterInferenceAgent,
  ): JsonSafe<MsgRegisterInferenceAgent> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    message.version !== undefined &&
      (obj.version = (message.version || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInferenceAgent>, I>>(
    object: I,
  ): MsgRegisterInferenceAgent {
    const message = createBaseMsgRegisterInferenceAgent();
    message.account = object.account ?? '';
    message.url = object.url ?? '';
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    message.sender = object.sender ?? '';
    return message;
  },
};
function createBaseMsgRegisterInferenceAgentResponse(): MsgRegisterInferenceAgentResponse {
  return {};
}
export const MsgRegisterInferenceAgentResponse = {
  typeUrl: '/agent.v1.MsgRegisterInferenceAgentResponse',
  encode(
    _: MsgRegisterInferenceAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInferenceAgentResponse();
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
  fromJSON(_: any): MsgRegisterInferenceAgentResponse {
    const obj = createBaseMsgRegisterInferenceAgentResponse();
    return obj;
  },
  toJSON(
    _: MsgRegisterInferenceAgentResponse,
  ): JsonSafe<MsgRegisterInferenceAgentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgRegisterInferenceAgentResponse>, I>,
  >(_: I): MsgRegisterInferenceAgentResponse {
    const message = createBaseMsgRegisterInferenceAgentResponse();
    return message;
  },
};
function createBaseMsgUpdateInferenceAgent(): MsgUpdateInferenceAgent {
  return {
    account: '',
    url: undefined,
    version: undefined,
    status: undefined,
    sender: '',
  };
}
export const MsgUpdateInferenceAgent = {
  typeUrl: '/agent.v1.MsgUpdateInferenceAgent',
  encode(
    message: MsgUpdateInferenceAgent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.url !== undefined) {
      writer.uint32(18).string(message.url);
    }
    if (message.version !== undefined) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.status !== undefined) {
      writer.uint32(32).int32(message.status);
    }
    if (message.sender !== '') {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateInferenceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInferenceAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.version = reader.uint64() as Long;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateInferenceAgent {
    const obj = createBaseMsgUpdateInferenceAgent();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.url)) obj.url = String(object.url);
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (isSet(object.status)) obj.status = agentStatusFromJSON(object.status);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgUpdateInferenceAgent): JsonSafe<MsgUpdateInferenceAgent> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    if (message.version !== undefined) {
      obj.version = message.version.toString();
    }
    message.status !== undefined &&
      (obj.status = agentStatusToJSON(message.status));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgent>, I>>(
    object: I,
  ): MsgUpdateInferenceAgent {
    const message = createBaseMsgUpdateInferenceAgent();
    message.account = object.account ?? '';
    message.url = object.url ?? undefined;
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    message.status = object.status ?? undefined;
    message.sender = object.sender ?? '';
    return message;
  },
};
function createBaseMsgUpdateInferenceAgentResponse(): MsgUpdateInferenceAgentResponse {
  return {};
}
export const MsgUpdateInferenceAgentResponse = {
  typeUrl: '/agent.v1.MsgUpdateInferenceAgentResponse',
  encode(
    _: MsgUpdateInferenceAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInferenceAgentResponse();
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
  fromJSON(_: any): MsgUpdateInferenceAgentResponse {
    const obj = createBaseMsgUpdateInferenceAgentResponse();
    return obj;
  },
  toJSON(
    _: MsgUpdateInferenceAgentResponse,
  ): JsonSafe<MsgUpdateInferenceAgentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateInferenceAgentResponse>, I>>(
    _: I,
  ): MsgUpdateInferenceAgentResponse {
    const message = createBaseMsgUpdateInferenceAgentResponse();
    return message;
  },
};
function createBaseMsgRemoveInferenceAgent(): MsgRemoveInferenceAgent {
  return {
    account: '',
    sender: '',
  };
}
export const MsgRemoveInferenceAgent = {
  typeUrl: '/agent.v1.MsgRemoveInferenceAgent',
  encode(
    message: MsgRemoveInferenceAgent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRemoveInferenceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveInferenceAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveInferenceAgent {
    const obj = createBaseMsgRemoveInferenceAgent();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgRemoveInferenceAgent): JsonSafe<MsgRemoveInferenceAgent> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveInferenceAgent>, I>>(
    object: I,
  ): MsgRemoveInferenceAgent {
    const message = createBaseMsgRemoveInferenceAgent();
    message.account = object.account ?? '';
    message.sender = object.sender ?? '';
    return message;
  },
};
function createBaseMsgRemoveInferenceAgentResponse(): MsgRemoveInferenceAgentResponse {
  return {};
}
export const MsgRemoveInferenceAgentResponse = {
  typeUrl: '/agent.v1.MsgRemoveInferenceAgentResponse',
  encode(
    _: MsgRemoveInferenceAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRemoveInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveInferenceAgentResponse();
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
  fromJSON(_: any): MsgRemoveInferenceAgentResponse {
    const obj = createBaseMsgRemoveInferenceAgentResponse();
    return obj;
  },
  toJSON(
    _: MsgRemoveInferenceAgentResponse,
  ): JsonSafe<MsgRemoveInferenceAgentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveInferenceAgentResponse>, I>>(
    _: I,
  ): MsgRemoveInferenceAgentResponse {
    const message = createBaseMsgRemoveInferenceAgentResponse();
    return message;
  },
};
function createBaseVRF(): VRF {
  return {
    seed: new Uint8Array(),
    proof: new Uint8Array(),
    hashRandom: new Uint8Array(),
  };
}
export const VRF = {
  typeUrl: '/agent.v1.VRF',
  encode(message: VRF, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.hashRandom.length !== 0) {
      writer.uint32(26).bytes(message.hashRandom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VRF {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVRF();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.hashRandom = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VRF {
    const obj = createBaseVRF();
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.hashRandom))
      obj.hashRandom = bytesFromBase64(object.hashRandom);
    return obj;
  },
  toJSON(message: VRF): JsonSafe<VRF> {
    const obj: any = {};
    message.seed !== undefined &&
      (obj.seed = base64FromBytes(
        message.seed !== undefined ? message.seed : new Uint8Array(),
      ));
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(
        message.proof !== undefined ? message.proof : new Uint8Array(),
      ));
    message.hashRandom !== undefined &&
      (obj.hashRandom = base64FromBytes(
        message.hashRandom !== undefined
          ? message.hashRandom
          : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VRF>, I>>(object: I): VRF {
    const message = createBaseVRF();
    message.seed = object.seed ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.hashRandom = object.hashRandom ?? new Uint8Array();
    return message;
  },
};
function createBaseMsgRegisterSession(): MsgRegisterSession {
  return {
    sessionId: '',
    account: '',
    modelName: '',
    lockBalance: Coin.fromPartial({}),
    vrf: VRF.fromPartial({}),
    tokenPrice: TokenPrice.fromPartial({}),
  };
}
export const MsgRegisterSession = {
  typeUrl: '/agent.v1.MsgRegisterSession',
  encode(
    message: MsgRegisterSession,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sessionId !== '') {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.account !== '') {
      writer.uint32(18).string(message.account);
    }
    if (message.modelName !== '') {
      writer.uint32(26).string(message.modelName);
    }
    if (message.lockBalance !== undefined) {
      Coin.encode(message.lockBalance, writer.uint32(34).fork()).ldelim();
    }
    if (message.vrf !== undefined) {
      VRF.encode(message.vrf, writer.uint32(42).fork()).ldelim();
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.modelName = reader.string();
          break;
        case 4:
          message.lockBalance = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.vrf = VRF.decode(reader, reader.uint32());
          break;
        case 6:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterSession {
    const obj = createBaseMsgRegisterSession();
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.lockBalance))
      obj.lockBalance = Coin.fromJSON(object.lockBalance);
    if (isSet(object.vrf)) obj.vrf = VRF.fromJSON(object.vrf);
    if (isSet(object.tokenPrice))
      obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    return obj;
  },
  toJSON(message: MsgRegisterSession): JsonSafe<MsgRegisterSession> {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.lockBalance !== undefined &&
      (obj.lockBalance = message.lockBalance
        ? Coin.toJSON(message.lockBalance)
        : undefined);
    message.vrf !== undefined &&
      (obj.vrf = message.vrf ? VRF.toJSON(message.vrf) : undefined);
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice
        ? TokenPrice.toJSON(message.tokenPrice)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterSession>, I>>(
    object: I,
  ): MsgRegisterSession {
    const message = createBaseMsgRegisterSession();
    message.sessionId = object.sessionId ?? '';
    message.account = object.account ?? '';
    message.modelName = object.modelName ?? '';
    if (object.lockBalance !== undefined && object.lockBalance !== null) {
      message.lockBalance = Coin.fromPartial(object.lockBalance);
    }
    if (object.vrf !== undefined && object.vrf !== null) {
      message.vrf = VRF.fromPartial(object.vrf);
    }
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    return message;
  },
};
function createBaseMsgRegisterSessionResponse(): MsgRegisterSessionResponse {
  return {
    account: '',
    modelName: '',
  };
}
export const MsgRegisterSessionResponse = {
  typeUrl: '/agent.v1.MsgRegisterSessionResponse',
  encode(
    message: MsgRegisterSessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.modelName !== '') {
      writer.uint32(18).string(message.modelName);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgRegisterSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterSessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
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
  fromJSON(object: any): MsgRegisterSessionResponse {
    const obj = createBaseMsgRegisterSessionResponse();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    return obj;
  },
  toJSON(
    message: MsgRegisterSessionResponse,
  ): JsonSafe<MsgRegisterSessionResponse> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterSessionResponse>, I>>(
    object: I,
  ): MsgRegisterSessionResponse {
    const message = createBaseMsgRegisterSessionResponse();
    message.account = object.account ?? '';
    message.modelName = object.modelName ?? '';
    return message;
  },
};
function createBaseMsgCancelSession(): MsgCancelSession {
  return {
    sessionId: '',
    account: '',
  };
}
export const MsgCancelSession = {
  typeUrl: '/agent.v1.MsgCancelSession',
  encode(
    message: MsgCancelSession,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sessionId !== '') {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.account !== '') {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSession {
    const obj = createBaseMsgCancelSession();
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.account)) obj.account = String(object.account);
    return obj;
  },
  toJSON(message: MsgCancelSession): JsonSafe<MsgCancelSession> {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSession>, I>>(
    object: I,
  ): MsgCancelSession {
    const message = createBaseMsgCancelSession();
    message.sessionId = object.sessionId ?? '';
    message.account = object.account ?? '';
    return message;
  },
};
function createBaseMsgCancelSessionResponse(): MsgCancelSessionResponse {
  return {};
}
export const MsgCancelSessionResponse = {
  typeUrl: '/agent.v1.MsgCancelSessionResponse',
  encode(
    _: MsgCancelSessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCancelSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSessionResponse();
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
  fromJSON(_: any): MsgCancelSessionResponse {
    const obj = createBaseMsgCancelSessionResponse();
    return obj;
  },
  toJSON(_: MsgCancelSessionResponse): JsonSafe<MsgCancelSessionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSessionResponse>, I>>(
    _: I,
  ): MsgCancelSessionResponse {
    const message = createBaseMsgCancelSessionResponse();
    return message;
  },
};
function createBaseMsgSubmitInferenceRequest(): MsgSubmitInferenceRequest {
  return {
    requestId: '',
    sender: '',
    sessionId: '',
    modelName: '',
    nodeId: '',
    inputTokens: Long.UZERO,
    outputTokens: Long.UZERO,
    actualTime: Long.UZERO,
    nonResponse: false,
  };
}
export const MsgSubmitInferenceRequest = {
  typeUrl: '/agent.v1.MsgSubmitInferenceRequest',
  encode(
    message: MsgSubmitInferenceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestId !== '') {
      writer.uint32(10).string(message.requestId);
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender);
    }
    if (message.sessionId !== '') {
      writer.uint32(26).string(message.sessionId);
    }
    if (message.modelName !== '') {
      writer.uint32(34).string(message.modelName);
    }
    if (message.nodeId !== '') {
      writer.uint32(42).string(message.nodeId);
    }
    if (!message.inputTokens.isZero()) {
      writer.uint32(48).uint64(message.inputTokens);
    }
    if (!message.outputTokens.isZero()) {
      writer.uint32(56).uint64(message.outputTokens);
    }
    if (!message.actualTime.isZero()) {
      writer.uint32(64).uint64(message.actualTime);
    }
    if (message.nonResponse === true) {
      writer.uint32(72).bool(message.nonResponse);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSubmitInferenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.sessionId = reader.string();
          break;
        case 4:
          message.modelName = reader.string();
          break;
        case 5:
          message.nodeId = reader.string();
          break;
        case 6:
          message.inputTokens = reader.uint64() as Long;
          break;
        case 7:
          message.outputTokens = reader.uint64() as Long;
          break;
        case 8:
          message.actualTime = reader.uint64() as Long;
          break;
        case 9:
          message.nonResponse = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitInferenceRequest {
    const obj = createBaseMsgSubmitInferenceRequest();
    if (isSet(object.requestId)) obj.requestId = String(object.requestId);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.inputTokens))
      obj.inputTokens = Long.fromValue(object.inputTokens);
    if (isSet(object.outputTokens))
      obj.outputTokens = Long.fromValue(object.outputTokens);
    if (isSet(object.actualTime))
      obj.actualTime = Long.fromValue(object.actualTime);
    if (isSet(object.nonResponse))
      obj.nonResponse = Boolean(object.nonResponse);
    return obj;
  },
  toJSON(
    message: MsgSubmitInferenceRequest,
  ): JsonSafe<MsgSubmitInferenceRequest> {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.inputTokens !== undefined &&
      (obj.inputTokens = (message.inputTokens || Long.UZERO).toString());
    message.outputTokens !== undefined &&
      (obj.outputTokens = (message.outputTokens || Long.UZERO).toString());
    message.actualTime !== undefined &&
      (obj.actualTime = (message.actualTime || Long.UZERO).toString());
    message.nonResponse !== undefined &&
      (obj.nonResponse = message.nonResponse);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitInferenceRequest>, I>>(
    object: I,
  ): MsgSubmitInferenceRequest {
    const message = createBaseMsgSubmitInferenceRequest();
    message.requestId = object.requestId ?? '';
    message.sender = object.sender ?? '';
    message.sessionId = object.sessionId ?? '';
    message.modelName = object.modelName ?? '';
    message.nodeId = object.nodeId ?? '';
    if (object.inputTokens !== undefined && object.inputTokens !== null) {
      message.inputTokens = Long.fromValue(object.inputTokens);
    }
    if (object.outputTokens !== undefined && object.outputTokens !== null) {
      message.outputTokens = Long.fromValue(object.outputTokens);
    }
    if (object.actualTime !== undefined && object.actualTime !== null) {
      message.actualTime = Long.fromValue(object.actualTime);
    }
    message.nonResponse = object.nonResponse ?? false;
    return message;
  },
};
function createBaseMsgSubmitInferenceRequestResponse(): MsgSubmitInferenceRequestResponse {
  return {
    requestLog: RequestLog.fromPartial({}),
  };
}
export const MsgSubmitInferenceRequestResponse = {
  typeUrl: '/agent.v1.MsgSubmitInferenceRequestResponse',
  encode(
    message: MsgSubmitInferenceRequestResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.requestLog !== undefined) {
      RequestLog.encode(message.requestLog, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSubmitInferenceRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitInferenceRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestLog = RequestLog.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitInferenceRequestResponse {
    const obj = createBaseMsgSubmitInferenceRequestResponse();
    if (isSet(object.requestLog))
      obj.requestLog = RequestLog.fromJSON(object.requestLog);
    return obj;
  },
  toJSON(
    message: MsgSubmitInferenceRequestResponse,
  ): JsonSafe<MsgSubmitInferenceRequestResponse> {
    const obj: any = {};
    message.requestLog !== undefined &&
      (obj.requestLog = message.requestLog
        ? RequestLog.toJSON(message.requestLog)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgSubmitInferenceRequestResponse>, I>,
  >(object: I): MsgSubmitInferenceRequestResponse {
    const message = createBaseMsgSubmitInferenceRequestResponse();
    if (object.requestLog !== undefined && object.requestLog !== null) {
      message.requestLog = RequestLog.fromPartial(object.requestLog);
    }
    return message;
  },
};
function createBaseMsgSubmitPayment(): MsgSubmitPayment {
  return {
    account: '',
    sessionId: '',
    payment: undefined,
    signature: new Uint8Array(),
    inferenceCount: Long.UZERO,
    totalInputTokens: Long.UZERO,
    totalOutputTokens: Long.UZERO,
  };
}
export const MsgSubmitPayment = {
  typeUrl: '/agent.v1.MsgSubmitPayment',
  encode(
    message: MsgSubmitPayment,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== '') {
      writer.uint32(18).string(message.sessionId);
    }
    if (message.payment !== undefined) {
      Payment.encode(message.payment, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (!message.inferenceCount.isZero()) {
      writer.uint32(40).uint64(message.inferenceCount);
    }
    if (!message.totalInputTokens.isZero()) {
      writer.uint32(48).uint64(message.totalInputTokens);
    }
    if (!message.totalOutputTokens.isZero()) {
      writer.uint32(56).uint64(message.totalOutputTokens);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitPayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        case 3:
          message.payment = Payment.decode(reader, reader.uint32());
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        case 5:
          message.inferenceCount = reader.uint64() as Long;
          break;
        case 6:
          message.totalInputTokens = reader.uint64() as Long;
          break;
        case 7:
          message.totalOutputTokens = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitPayment {
    const obj = createBaseMsgSubmitPayment();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.payment)) obj.payment = Payment.fromJSON(object.payment);
    if (isSet(object.signature))
      obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.inferenceCount))
      obj.inferenceCount = Long.fromValue(object.inferenceCount);
    if (isSet(object.totalInputTokens))
      obj.totalInputTokens = Long.fromValue(object.totalInputTokens);
    if (isSet(object.totalOutputTokens))
      obj.totalOutputTokens = Long.fromValue(object.totalOutputTokens);
    return obj;
  },
  toJSON(message: MsgSubmitPayment): JsonSafe<MsgSubmitPayment> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.payment !== undefined &&
      (obj.payment = message.payment
        ? Payment.toJSON(message.payment)
        : undefined);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.inferenceCount !== undefined &&
      (obj.inferenceCount = (message.inferenceCount || Long.UZERO).toString());
    message.totalInputTokens !== undefined &&
      (obj.totalInputTokens = (
        message.totalInputTokens || Long.UZERO
      ).toString());
    message.totalOutputTokens !== undefined &&
      (obj.totalOutputTokens = (
        message.totalOutputTokens || Long.UZERO
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitPayment>, I>>(
    object: I,
  ): MsgSubmitPayment {
    const message = createBaseMsgSubmitPayment();
    message.account = object.account ?? '';
    message.sessionId = object.sessionId ?? '';
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = Payment.fromPartial(object.payment);
    }
    message.signature = object.signature ?? new Uint8Array();
    if (object.inferenceCount !== undefined && object.inferenceCount !== null) {
      message.inferenceCount = Long.fromValue(object.inferenceCount);
    }
    if (
      object.totalInputTokens !== undefined &&
      object.totalInputTokens !== null
    ) {
      message.totalInputTokens = Long.fromValue(object.totalInputTokens);
    }
    if (
      object.totalOutputTokens !== undefined &&
      object.totalOutputTokens !== null
    ) {
      message.totalOutputTokens = Long.fromValue(object.totalOutputTokens);
    }
    return message;
  },
};
function createBaseMsgSubmitPaymentResponse(): MsgSubmitPaymentResponse {
  return {};
}
export const MsgSubmitPaymentResponse = {
  typeUrl: '/agent.v1.MsgSubmitPaymentResponse',
  encode(
    _: MsgSubmitPaymentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSubmitPaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitPaymentResponse();
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
  fromJSON(_: any): MsgSubmitPaymentResponse {
    const obj = createBaseMsgSubmitPaymentResponse();
    return obj;
  },
  toJSON(_: MsgSubmitPaymentResponse): JsonSafe<MsgSubmitPaymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitPaymentResponse>, I>>(
    _: I,
  ): MsgSubmitPaymentResponse {
    const message = createBaseMsgSubmitPaymentResponse();
    return message;
  },
};
function createBaseMsgDeleteExpiredSession(): MsgDeleteExpiredSession {
  return {
    account: '',
    sessionId: '',
  };
}
export const MsgDeleteExpiredSession = {
  typeUrl: '/agent.v1.MsgDeleteExpiredSession',
  encode(
    message: MsgDeleteExpiredSession,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.sessionId !== '') {
      writer.uint32(18).string(message.sessionId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteExpiredSession {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteExpiredSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.sessionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteExpiredSession {
    const obj = createBaseMsgDeleteExpiredSession();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    return obj;
  },
  toJSON(message: MsgDeleteExpiredSession): JsonSafe<MsgDeleteExpiredSession> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSession>, I>>(
    object: I,
  ): MsgDeleteExpiredSession {
    const message = createBaseMsgDeleteExpiredSession();
    message.account = object.account ?? '';
    message.sessionId = object.sessionId ?? '';
    return message;
  },
};
function createBaseMsgDeleteExpiredSessionResponse(): MsgDeleteExpiredSessionResponse {
  return {};
}
export const MsgDeleteExpiredSessionResponse = {
  typeUrl: '/agent.v1.MsgDeleteExpiredSessionResponse',
  encode(
    _: MsgDeleteExpiredSessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDeleteExpiredSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteExpiredSessionResponse();
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
  fromJSON(_: any): MsgDeleteExpiredSessionResponse {
    const obj = createBaseMsgDeleteExpiredSessionResponse();
    return obj;
  },
  toJSON(
    _: MsgDeleteExpiredSessionResponse,
  ): JsonSafe<MsgDeleteExpiredSessionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteExpiredSessionResponse>, I>>(
    _: I,
  ): MsgDeleteExpiredSessionResponse {
    const message = createBaseMsgDeleteExpiredSessionResponse();
    return message;
  },
};
/** Msg defines the agent Msg service. */
export interface Msg {
  /** UpdateParams defines a method to update the params. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** RegisterInferenceAgent defines a method to register an inference agent to the chain. */
  RegisterInferenceAgent(
    request: MsgRegisterInferenceAgent,
  ): Promise<MsgRegisterInferenceAgentResponse>;
  /** UpdateInferenceAgent defines a method to update an existing inference agent. */
  UpdateInferenceAgent(
    request: MsgUpdateInferenceAgent,
  ): Promise<MsgUpdateInferenceAgentResponse>;
  /** RemoveInferenceAgent defines a method to remove an existing inference agent. */
  RemoveInferenceAgent(
    request: MsgRemoveInferenceAgent,
  ): Promise<MsgRemoveInferenceAgentResponse>;
  /** RegisterSession defines a method to register a session to the chain */
  RegisterSession(
    request: MsgRegisterSession,
  ): Promise<MsgRegisterSessionResponse>;
  /** CancelSession defines a method to cancel a session */
  CancelSession(request: MsgCancelSession): Promise<MsgCancelSessionResponse>;
  /** SubmitPayment defines a method to submit a payment */
  SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse>;
  /** SubmitInferenceRequest defines a method to submit an inference request */
  SubmitInferenceRequest(
    request: MsgSubmitInferenceRequest,
  ): Promise<MsgSubmitInferenceRequestResponse>;
  /** DeleteExpiredSession defines a method to delete expired session */
  DeleteExpiredSession(
    request: MsgDeleteExpiredSession,
  ): Promise<MsgDeleteExpiredSessionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.RegisterInferenceAgent = this.RegisterInferenceAgent.bind(this);
    this.UpdateInferenceAgent = this.UpdateInferenceAgent.bind(this);
    this.RemoveInferenceAgent = this.RemoveInferenceAgent.bind(this);
    this.RegisterSession = this.RegisterSession.bind(this);
    this.CancelSession = this.CancelSession.bind(this);
    this.SubmitPayment = this.SubmitPayment.bind(this);
    this.SubmitInferenceRequest = this.SubmitInferenceRequest.bind(this);
    this.DeleteExpiredSession = this.DeleteExpiredSession.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request('agent.v1.Msg', 'UpdateParams', data);
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  RegisterInferenceAgent(
    request: MsgRegisterInferenceAgent,
  ): Promise<MsgRegisterInferenceAgentResponse> {
    const data = MsgRegisterInferenceAgent.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Msg',
      'RegisterInferenceAgent',
      data,
    );
    return promise.then((data) =>
      MsgRegisterInferenceAgentResponse.decode(new _m0.Reader(data)),
    );
  }
  UpdateInferenceAgent(
    request: MsgUpdateInferenceAgent,
  ): Promise<MsgUpdateInferenceAgentResponse> {
    const data = MsgUpdateInferenceAgent.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Msg',
      'UpdateInferenceAgent',
      data,
    );
    return promise.then((data) =>
      MsgUpdateInferenceAgentResponse.decode(new _m0.Reader(data)),
    );
  }
  RemoveInferenceAgent(
    request: MsgRemoveInferenceAgent,
  ): Promise<MsgRemoveInferenceAgentResponse> {
    const data = MsgRemoveInferenceAgent.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Msg',
      'RemoveInferenceAgent',
      data,
    );
    return promise.then((data) =>
      MsgRemoveInferenceAgentResponse.decode(new _m0.Reader(data)),
    );
  }
  RegisterSession(
    request: MsgRegisterSession,
  ): Promise<MsgRegisterSessionResponse> {
    const data = MsgRegisterSession.encode(request).finish();
    const promise = this.rpc.request('agent.v1.Msg', 'RegisterSession', data);
    return promise.then((data) =>
      MsgRegisterSessionResponse.decode(new _m0.Reader(data)),
    );
  }
  CancelSession(request: MsgCancelSession): Promise<MsgCancelSessionResponse> {
    const data = MsgCancelSession.encode(request).finish();
    const promise = this.rpc.request('agent.v1.Msg', 'CancelSession', data);
    return promise.then((data) =>
      MsgCancelSessionResponse.decode(new _m0.Reader(data)),
    );
  }
  SubmitPayment(request: MsgSubmitPayment): Promise<MsgSubmitPaymentResponse> {
    const data = MsgSubmitPayment.encode(request).finish();
    const promise = this.rpc.request('agent.v1.Msg', 'SubmitPayment', data);
    return promise.then((data) =>
      MsgSubmitPaymentResponse.decode(new _m0.Reader(data)),
    );
  }
  SubmitInferenceRequest(
    request: MsgSubmitInferenceRequest,
  ): Promise<MsgSubmitInferenceRequestResponse> {
    const data = MsgSubmitInferenceRequest.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Msg',
      'SubmitInferenceRequest',
      data,
    );
    return promise.then((data) =>
      MsgSubmitInferenceRequestResponse.decode(new _m0.Reader(data)),
    );
  }
  DeleteExpiredSession(
    request: MsgDeleteExpiredSession,
  ): Promise<MsgDeleteExpiredSessionResponse> {
    const data = MsgDeleteExpiredSession.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Msg',
      'DeleteExpiredSession',
      data,
    );
    return promise.then((data) =>
      MsgDeleteExpiredSessionResponse.decode(new _m0.Reader(data)),
    );
  }
}
