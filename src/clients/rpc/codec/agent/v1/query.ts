/* eslint-disable */
import {
  SessionStatus,
  Params,
  InferenceAgent,
  Session,
  sessionStatusFromJSON,
  sessionStatusToJSON,
} from './agent.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import {
  Long,
  DeepPartial,
  Exact,
  isSet,
  bytesFromBase64,
  base64FromBytes,
  fromJsonTimestamp,
  fromTimestamp,
  Rpc,
} from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export const protobufPackage = 'agent.v1';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/agent.v1.QueryParamsRequest',
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined,
  };
}
export const QueryParamsResponse = {
  typeUrl: '/agent.v1.QueryParamsResponse',
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryInferenceAgentRequest(): QueryInferenceAgentRequest {
  return {
    account: '',
  };
}
export const QueryInferenceAgentRequest = {
  typeUrl: '/agent.v1.QueryInferenceAgentRequest',
  encode(
    message: QueryInferenceAgentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryInferenceAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInferenceAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInferenceAgentRequest {
    const obj = createBaseQueryInferenceAgentRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    return obj;
  },
  toJSON(
    message: QueryInferenceAgentRequest,
  ): JsonSafe<QueryInferenceAgentRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentRequest>, I>>(
    object: I,
  ): QueryInferenceAgentRequest {
    const message = createBaseQueryInferenceAgentRequest();
    message.account = object.account ?? '';
    return message;
  },
};
function createBaseQueryInferenceAgentResponse(): QueryInferenceAgentResponse {
  return {
    inferenceAgent: undefined,
  };
}
export const QueryInferenceAgentResponse = {
  typeUrl: '/agent.v1.QueryInferenceAgentResponse',
  encode(
    message: QueryInferenceAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.inferenceAgent !== undefined) {
      InferenceAgent.encode(
        message.inferenceAgent,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryInferenceAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInferenceAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inferenceAgent = InferenceAgent.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInferenceAgentResponse {
    const obj = createBaseQueryInferenceAgentResponse();
    if (isSet(object.inferenceAgent))
      obj.inferenceAgent = InferenceAgent.fromJSON(object.inferenceAgent);
    return obj;
  },
  toJSON(
    message: QueryInferenceAgentResponse,
  ): JsonSafe<QueryInferenceAgentResponse> {
    const obj: any = {};
    message.inferenceAgent !== undefined &&
      (obj.inferenceAgent = message.inferenceAgent
        ? InferenceAgent.toJSON(message.inferenceAgent)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentResponse>, I>>(
    object: I,
  ): QueryInferenceAgentResponse {
    const message = createBaseQueryInferenceAgentResponse();
    if (object.inferenceAgent !== undefined && object.inferenceAgent !== null) {
      message.inferenceAgent = InferenceAgent.fromPartial(
        object.inferenceAgent,
      );
    }
    return message;
  },
};
function createBaseQueryInferenceAgentsRequest(): QueryInferenceAgentsRequest {
  return {
    limit: Long.UZERO,
    key: new Uint8Array(),
  };
}
export const QueryInferenceAgentsRequest = {
  typeUrl: '/agent.v1.QueryInferenceAgentsRequest',
  encode(
    message: QueryInferenceAgentsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryInferenceAgentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInferenceAgentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.uint64() as Long;
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInferenceAgentsRequest {
    const obj = createBaseQueryInferenceAgentsRequest();
    if (isSet(object.limit)) obj.limit = Long.fromValue(object.limit);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(
    message: QueryInferenceAgentsRequest,
  ): JsonSafe<QueryInferenceAgentsRequest> {
    const obj: any = {};
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentsRequest>, I>>(
    object: I,
  ): QueryInferenceAgentsRequest {
    const message = createBaseQueryInferenceAgentsRequest();
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromValue(object.limit);
    }
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};
function createBaseQueryInferenceAgentsResponse(): QueryInferenceAgentsResponse {
  return {
    inferenceAgents: [],
    nextKey: new Uint8Array(),
  };
}
export const QueryInferenceAgentsResponse = {
  typeUrl: '/agent.v1.QueryInferenceAgentsResponse',
  encode(
    message: QueryInferenceAgentsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.inferenceAgents) {
      InferenceAgent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(18).bytes(message.nextKey);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryInferenceAgentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInferenceAgentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inferenceAgents.push(
            InferenceAgent.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.nextKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInferenceAgentsResponse {
    const obj = createBaseQueryInferenceAgentsResponse();
    if (Array.isArray(object?.inferenceAgents))
      obj.inferenceAgents = object.inferenceAgents.map((e: any) =>
        InferenceAgent.fromJSON(e),
      );
    if (isSet(object.nextKey)) obj.nextKey = bytesFromBase64(object.nextKey);
    return obj;
  },
  toJSON(
    message: QueryInferenceAgentsResponse,
  ): JsonSafe<QueryInferenceAgentsResponse> {
    const obj: any = {};
    if (message.inferenceAgents) {
      obj.inferenceAgents = message.inferenceAgents.map((e) =>
        e ? InferenceAgent.toJSON(e) : undefined,
      );
    } else {
      obj.inferenceAgents = [];
    }
    message.nextKey !== undefined &&
      (obj.nextKey = base64FromBytes(
        message.nextKey !== undefined ? message.nextKey : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInferenceAgentsResponse>, I>>(
    object: I,
  ): QueryInferenceAgentsResponse {
    const message = createBaseQueryInferenceAgentsResponse();
    message.inferenceAgents =
      object.inferenceAgents?.map((e) => InferenceAgent.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  },
};
function createBaseQuerySessionRequest(): QuerySessionRequest {
  return {
    id: '',
  };
}
export const QuerySessionRequest = {
  typeUrl: '/agent.v1.QuerySessionRequest',
  encode(
    message: QuerySessionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionRequest {
    const obj = createBaseQuerySessionRequest();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QuerySessionRequest): JsonSafe<QuerySessionRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionRequest>, I>>(
    object: I,
  ): QuerySessionRequest {
    const message = createBaseQuerySessionRequest();
    message.id = object.id ?? '';
    return message;
  },
};
function createBaseQuerySessionResponse(): QuerySessionResponse {
  return {
    session: undefined,
  };
}
export const QuerySessionResponse = {
  typeUrl: '/agent.v1.QuerySessionResponse',
  encode(
    message: QuerySessionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.session = Session.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionResponse {
    const obj = createBaseQuerySessionResponse();
    if (isSet(object.session)) obj.session = Session.fromJSON(object.session);
    return obj;
  },
  toJSON(message: QuerySessionResponse): JsonSafe<QuerySessionResponse> {
    const obj: any = {};
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionResponse>, I>>(
    object: I,
  ): QuerySessionResponse {
    const message = createBaseQuerySessionResponse();
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    }
    return message;
  },
};
function createBaseQuerySessionByAgentRequest(): QuerySessionByAgentRequest {
  return {
    account: '',
    status: undefined,
    expireTime: Timestamp.fromPartial({}),
    limit: Long.UZERO,
    orderDesc: false,
    key: new Uint8Array(),
  };
}
export const QuerySessionByAgentRequest = {
  typeUrl: '/agent.v1.QuerySessionByAgentRequest',
  encode(
    message: QuerySessionByAgentRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }
    if (message.expireTime !== undefined) {
      Timestamp.encode(message.expireTime, writer.uint32(26).fork()).ldelim();
    }
    if (!message.limit.isZero()) {
      writer.uint32(32).uint64(message.limit);
    }
    if (message.orderDesc === true) {
      writer.uint32(40).bool(message.orderDesc);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySessionByAgentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionByAgentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.expireTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.limit = reader.uint64() as Long;
          break;
        case 5:
          message.orderDesc = reader.bool();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionByAgentRequest {
    const obj = createBaseQuerySessionByAgentRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.status)) obj.status = sessionStatusFromJSON(object.status);
    if (isSet(object.expireTime))
      obj.expireTime = fromJsonTimestamp(object.expireTime);
    if (isSet(object.limit)) obj.limit = Long.fromValue(object.limit);
    if (isSet(object.orderDesc)) obj.orderDesc = Boolean(object.orderDesc);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(
    message: QuerySessionByAgentRequest,
  ): JsonSafe<QuerySessionByAgentRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.status !== undefined &&
      (obj.status = sessionStatusToJSON(message.status));
    message.expireTime !== undefined &&
      (obj.expireTime = fromTimestamp(message.expireTime).toISOString());
    message.limit !== undefined &&
      (obj.limit = (message.limit || Long.UZERO).toString());
    message.orderDesc !== undefined && (obj.orderDesc = message.orderDesc);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentRequest>, I>>(
    object: I,
  ): QuerySessionByAgentRequest {
    const message = createBaseQuerySessionByAgentRequest();
    message.account = object.account ?? '';
    message.status = object.status ?? undefined;
    if (object.expireTime !== undefined && object.expireTime !== null) {
      message.expireTime = Timestamp.fromPartial(object.expireTime);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Long.fromValue(object.limit);
    }
    message.orderDesc = object.orderDesc ?? false;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};
function createBaseQuerySessionByAgentResponse(): QuerySessionByAgentResponse {
  return {
    sessions: [],
    nextKey: new Uint8Array(),
  };
}
export const QuerySessionByAgentResponse = {
  typeUrl: '/agent.v1.QuerySessionByAgentResponse',
  encode(
    message: QuerySessionByAgentResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.sessions) {
      Session.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(18).bytes(message.nextKey);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QuerySessionByAgentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySessionByAgentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessions.push(Session.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySessionByAgentResponse {
    const obj = createBaseQuerySessionByAgentResponse();
    if (Array.isArray(object?.sessions))
      obj.sessions = object.sessions.map((e: any) => Session.fromJSON(e));
    if (isSet(object.nextKey)) obj.nextKey = bytesFromBase64(object.nextKey);
    return obj;
  },
  toJSON(
    message: QuerySessionByAgentResponse,
  ): JsonSafe<QuerySessionByAgentResponse> {
    const obj: any = {};
    if (message.sessions) {
      obj.sessions = message.sessions.map((e) =>
        e ? Session.toJSON(e) : undefined,
      );
    } else {
      obj.sessions = [];
    }
    message.nextKey !== undefined &&
      (obj.nextKey = base64FromBytes(
        message.nextKey !== undefined ? message.nextKey : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySessionByAgentResponse>, I>>(
    object: I,
  ): QuerySessionByAgentResponse {
    const message = createBaseQuerySessionByAgentResponse();
    message.sessions =
      object.sessions?.map((e) => Session.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  },
};
function createBaseQueryVRFSeedRequest(): QueryVRFSeedRequest {
  return {
    account: '',
  };
}
export const QueryVRFSeedRequest = {
  typeUrl: '/agent.v1.QueryVRFSeedRequest',
  encode(
    message: QueryVRFSeedRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVRFSeedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVRFSeedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVRFSeedRequest {
    const obj = createBaseQueryVRFSeedRequest();
    if (isSet(object.account)) obj.account = String(object.account);
    return obj;
  },
  toJSON(message: QueryVRFSeedRequest): JsonSafe<QueryVRFSeedRequest> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVRFSeedRequest>, I>>(
    object: I,
  ): QueryVRFSeedRequest {
    const message = createBaseQueryVRFSeedRequest();
    message.account = object.account ?? '';
    return message;
  },
};
function createBaseQueryVRFSeedResponse(): QueryVRFSeedResponse {
  return {
    seed: new Uint8Array(),
  };
}
export const QueryVRFSeedResponse = {
  typeUrl: '/agent.v1.QueryVRFSeedResponse',
  encode(
    message: QueryVRFSeedResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryVRFSeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVRFSeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVRFSeedResponse {
    const obj = createBaseQueryVRFSeedResponse();
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    return obj;
  },
  toJSON(message: QueryVRFSeedResponse): JsonSafe<QueryVRFSeedResponse> {
    const obj: any = {};
    message.seed !== undefined &&
      (obj.seed = base64FromBytes(
        message.seed !== undefined ? message.seed : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVRFSeedResponse>, I>>(
    object: I,
  ): QueryVRFSeedResponse {
    const message = createBaseQueryVRFSeedResponse();
    message.seed = object.seed ?? new Uint8Array();
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of InferenceAgent items. */
  InferenceAgentRequest(
    request: QueryInferenceAgentRequest,
  ): Promise<QueryInferenceAgentResponse>;
  /** Queries a list of InferenceAgent items. */
  InferenceAgentsRequest(
    request: QueryInferenceAgentsRequest,
  ): Promise<QueryInferenceAgentsResponse>;
  /** Queries a list of Session items. */
  SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse>;
  /** Queries a list of Session items. */
  SessionByAgentRequest(
    request: QuerySessionByAgentRequest,
  ): Promise<QuerySessionByAgentResponse>;
  /** Queries a list of VRFSeed items. */
  VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.InferenceAgentRequest = this.InferenceAgentRequest.bind(this);
    this.InferenceAgentsRequest = this.InferenceAgentsRequest.bind(this);
    this.SessionRequest = this.SessionRequest.bind(this);
    this.SessionByAgentRequest = this.SessionByAgentRequest.bind(this);
    this.VRFSeedRequest = this.VRFSeedRequest.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('agent.v1.Query', 'Params', data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  InferenceAgentRequest(
    request: QueryInferenceAgentRequest,
  ): Promise<QueryInferenceAgentResponse> {
    const data = QueryInferenceAgentRequest.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Query',
      'InferenceAgentRequest',
      data,
    );
    return promise.then((data) =>
      QueryInferenceAgentResponse.decode(new _m0.Reader(data)),
    );
  }
  InferenceAgentsRequest(
    request: QueryInferenceAgentsRequest,
  ): Promise<QueryInferenceAgentsResponse> {
    const data = QueryInferenceAgentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Query',
      'InferenceAgentsRequest',
      data,
    );
    return promise.then((data) =>
      QueryInferenceAgentsResponse.decode(new _m0.Reader(data)),
    );
  }
  SessionRequest(request: QuerySessionRequest): Promise<QuerySessionResponse> {
    const data = QuerySessionRequest.encode(request).finish();
    const promise = this.rpc.request('agent.v1.Query', 'SessionRequest', data);
    return promise.then((data) =>
      QuerySessionResponse.decode(new _m0.Reader(data)),
    );
  }
  SessionByAgentRequest(
    request: QuerySessionByAgentRequest,
  ): Promise<QuerySessionByAgentResponse> {
    const data = QuerySessionByAgentRequest.encode(request).finish();
    const promise = this.rpc.request(
      'agent.v1.Query',
      'SessionByAgentRequest',
      data,
    );
    return promise.then((data) =>
      QuerySessionByAgentResponse.decode(new _m0.Reader(data)),
    );
  }
  VRFSeedRequest(request: QueryVRFSeedRequest): Promise<QueryVRFSeedResponse> {
    const data = QueryVRFSeedRequest.encode(request).finish();
    const promise = this.rpc.request('agent.v1.Query', 'VRFSeedRequest', data);
    return promise.then((data) =>
      QueryVRFSeedResponse.decode(new _m0.Reader(data)),
    );
  }
}
