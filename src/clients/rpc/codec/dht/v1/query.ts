/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from '../../cosmos/base/query/v1beta1/pagination.js';
import {
  InferenceType,
  Availability,
  Orchestrator,
  inferenceTypeFromJSON,
  availabilityFromJSON,
  inferenceTypeToJSON,
  availabilityToJSON,
} from './orchestrator.js';
import { Params } from './params.js';
import { Node } from './node.js';
import { Miner } from './miner.js';
import { ReputationParams } from './reputation.js';
import { ModelConfig, TokenPrice } from './model.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
import {
  DeepPartial,
  Exact,
  isSet,
  bytesFromBase64,
  base64FromBytes,
  Rpc,
} from '../../helpers.js';
export const protobufPackage = 'dht.v1';
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
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
export interface QueryReputationParamsRequest {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: '/dht.v1.QueryParamsRequest',
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
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: '/dht.v1.QueryParamsResponse',
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
function createBaseQueryGetModelRequest(): QueryGetModelRequest {
  return {
    modelName: '',
  };
}
export const QueryGetModelRequest = {
  typeUrl: '/dht.v1.QueryGetModelRequest',
  encode(
    message: QueryGetModelRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.modelName !== '') {
      writer.uint32(10).string(message.modelName);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetModelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetModelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetModelRequest {
    const obj = createBaseQueryGetModelRequest();
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    return obj;
  },
  toJSON(message: QueryGetModelRequest): JsonSafe<QueryGetModelRequest> {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetModelRequest>, I>>(
    object: I,
  ): QueryGetModelRequest {
    const message = createBaseQueryGetModelRequest();
    message.modelName = object.modelName ?? '';
    return message;
  },
};
function createBaseQueryGetModelResponse(): QueryGetModelResponse {
  return {
    model: undefined,
  };
}
export const QueryGetModelResponse = {
  typeUrl: '/dht.v1.QueryGetModelResponse',
  encode(
    message: QueryGetModelResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.model !== undefined) {
      DisplayModel.encode(message.model, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetModelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetModelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.model = DisplayModel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetModelResponse {
    const obj = createBaseQueryGetModelResponse();
    if (isSet(object.model)) obj.model = DisplayModel.fromJSON(object.model);
    return obj;
  },
  toJSON(message: QueryGetModelResponse): JsonSafe<QueryGetModelResponse> {
    const obj: any = {};
    message.model !== undefined &&
      (obj.model = message.model
        ? DisplayModel.toJSON(message.model)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetModelResponse>, I>>(
    object: I,
  ): QueryGetModelResponse {
    const message = createBaseQueryGetModelResponse();
    if (object.model !== undefined && object.model !== null) {
      message.model = DisplayModel.fromPartial(object.model);
    }
    return message;
  },
};
function createBaseQueryModelsRequest(): QueryModelsRequest {
  return {
    pagination: undefined,
  };
}
export const QueryModelsRequest = {
  typeUrl: '/dht.v1.QueryModelsRequest',
  encode(
    message: QueryModelsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModelsRequest {
    const obj = createBaseQueryModelsRequest();
    if (isSet(object.pagination))
      obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryModelsRequest): JsonSafe<QueryModelsRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModelsRequest>, I>>(
    object: I,
  ): QueryModelsRequest {
    const message = createBaseQueryModelsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryModelsResponse(): QueryModelsResponse {
  return {
    models: [],
    pagination: undefined,
  };
}
export const QueryModelsResponse = {
  typeUrl: '/dht.v1.QueryModelsResponse',
  encode(
    message: QueryModelsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.models) {
      DisplayModel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(DisplayModel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModelsResponse {
    const obj = createBaseQueryModelsResponse();
    if (Array.isArray(object?.models))
      obj.models = object.models.map((e: any) => DisplayModel.fromJSON(e));
    if (isSet(object.pagination))
      obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryModelsResponse): JsonSafe<QueryModelsResponse> {
    const obj: any = {};
    if (message.models) {
      obj.models = message.models.map((e) =>
        e ? DisplayModel.toJSON(e) : undefined,
      );
    } else {
      obj.models = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModelsResponse>, I>>(
    object: I,
  ): QueryModelsResponse {
    const message = createBaseQueryModelsResponse();
    message.models =
      object.models?.map((e) => DisplayModel.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGetNodeRequest(): QueryGetNodeRequest {
  return {
    nodeId: '',
  };
}
export const QueryGetNodeRequest = {
  typeUrl: '/dht.v1.QueryGetNodeRequest',
  encode(
    message: QueryGetNodeRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nodeId !== '') {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetNodeRequest {
    const obj = createBaseQueryGetNodeRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: QueryGetNodeRequest): JsonSafe<QueryGetNodeRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNodeRequest>, I>>(
    object: I,
  ): QueryGetNodeRequest {
    const message = createBaseQueryGetNodeRequest();
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};
function createBaseQueryGetNodeResponse(): QueryGetNodeResponse {
  return {
    node: undefined,
  };
}
export const QueryGetNodeResponse = {
  typeUrl: '/dht.v1.QueryGetNodeResponse',
  encode(
    message: QueryGetNodeResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetNodeResponse {
    const obj = createBaseQueryGetNodeResponse();
    if (isSet(object.node)) obj.node = Node.fromJSON(object.node);
    return obj;
  },
  toJSON(message: QueryGetNodeResponse): JsonSafe<QueryGetNodeResponse> {
    const obj: any = {};
    message.node !== undefined &&
      (obj.node = message.node ? Node.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetNodeResponse>, I>>(
    object: I,
  ): QueryGetNodeResponse {
    const message = createBaseQueryGetNodeResponse();
    if (object.node !== undefined && object.node !== null) {
      message.node = Node.fromPartial(object.node);
    }
    return message;
  },
};
function createBaseQueryGetMinerRequest(): QueryGetMinerRequest {
  return {
    nodeId: '',
  };
}
export const QueryGetMinerRequest = {
  typeUrl: '/dht.v1.QueryGetMinerRequest',
  encode(
    message: QueryGetMinerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nodeId !== '') {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetMinerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMinerRequest {
    const obj = createBaseQueryGetMinerRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(message: QueryGetMinerRequest): JsonSafe<QueryGetMinerRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMinerRequest>, I>>(
    object: I,
  ): QueryGetMinerRequest {
    const message = createBaseQueryGetMinerRequest();
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};
function createBaseQueryGetMinerResponse(): QueryGetMinerResponse {
  return {
    miner: undefined,
    node: undefined,
  };
}
export const QueryGetMinerResponse = {
  typeUrl: '/dht.v1.QueryGetMinerResponse',
  encode(
    message: QueryGetMinerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.miner !== undefined) {
      Miner.encode(message.miner, writer.uint32(10).fork()).ldelim();
    }
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetMinerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMinerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.miner = Miner.decode(reader, reader.uint32());
          break;
        case 2:
          message.node = Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetMinerResponse {
    const obj = createBaseQueryGetMinerResponse();
    if (isSet(object.miner)) obj.miner = Miner.fromJSON(object.miner);
    if (isSet(object.node)) obj.node = Node.fromJSON(object.node);
    return obj;
  },
  toJSON(message: QueryGetMinerResponse): JsonSafe<QueryGetMinerResponse> {
    const obj: any = {};
    message.miner !== undefined &&
      (obj.miner = message.miner ? Miner.toJSON(message.miner) : undefined);
    message.node !== undefined &&
      (obj.node = message.node ? Node.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetMinerResponse>, I>>(
    object: I,
  ): QueryGetMinerResponse {
    const message = createBaseQueryGetMinerResponse();
    if (object.miner !== undefined && object.miner !== null) {
      message.miner = Miner.fromPartial(object.miner);
    }
    if (object.node !== undefined && object.node !== null) {
      message.node = Node.fromPartial(object.node);
    }
    return message;
  },
};
function createBaseQueryGetOrchestratorRequest(): QueryGetOrchestratorRequest {
  return {
    nodeId: '',
  };
}
export const QueryGetOrchestratorRequest = {
  typeUrl: '/dht.v1.QueryGetOrchestratorRequest',
  encode(
    message: QueryGetOrchestratorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nodeId !== '') {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetOrchestratorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorRequest {
    const obj = createBaseQueryGetOrchestratorRequest();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    return obj;
  },
  toJSON(
    message: QueryGetOrchestratorRequest,
  ): JsonSafe<QueryGetOrchestratorRequest> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorRequest>, I>>(
    object: I,
  ): QueryGetOrchestratorRequest {
    const message = createBaseQueryGetOrchestratorRequest();
    message.nodeId = object.nodeId ?? '';
    return message;
  },
};
function createBaseQueryGetOrchestratorResponse(): QueryGetOrchestratorResponse {
  return {
    orchestrator: undefined,
    node: undefined,
  };
}
export const QueryGetOrchestratorResponse = {
  typeUrl: '/dht.v1.QueryGetOrchestratorResponse',
  encode(
    message: QueryGetOrchestratorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.orchestrator !== undefined) {
      Orchestrator.encode(
        message.orchestrator,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrator = Orchestrator.decode(reader, reader.uint32());
          break;
        case 2:
          message.node = Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorResponse {
    const obj = createBaseQueryGetOrchestratorResponse();
    if (isSet(object.orchestrator))
      obj.orchestrator = Orchestrator.fromJSON(object.orchestrator);
    if (isSet(object.node)) obj.node = Node.fromJSON(object.node);
    return obj;
  },
  toJSON(
    message: QueryGetOrchestratorResponse,
  ): JsonSafe<QueryGetOrchestratorResponse> {
    const obj: any = {};
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator
        ? Orchestrator.toJSON(message.orchestrator)
        : undefined);
    message.node !== undefined &&
      (obj.node = message.node ? Node.toJSON(message.node) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetOrchestratorResponse>, I>>(
    object: I,
  ): QueryGetOrchestratorResponse {
    const message = createBaseQueryGetOrchestratorResponse();
    if (object.orchestrator !== undefined && object.orchestrator !== null) {
      message.orchestrator = Orchestrator.fromPartial(object.orchestrator);
    }
    if (object.node !== undefined && object.node !== null) {
      message.node = Node.fromPartial(object.node);
    }
    return message;
  },
};
function createBaseQueryGetOrchestratorsByParamsRequest(): QueryGetOrchestratorsByParamsRequest {
  return {
    inferenceType: 0,
    availability: 0,
    limit: 0,
    key: new Uint8Array(),
  };
}
export const QueryGetOrchestratorsByParamsRequest = {
  typeUrl: '/dht.v1.QueryGetOrchestratorsByParamsRequest',
  encode(
    message: QueryGetOrchestratorsByParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.inferenceType !== 0) {
      writer.uint32(8).int32(message.inferenceType);
    }
    if (message.availability !== 0) {
      writer.uint32(16).int32(message.availability);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint32(message.limit);
    }
    if (message.key.length !== 0) {
      writer.uint32(34).bytes(message.key);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetOrchestratorsByParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorsByParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inferenceType = reader.int32() as any;
          break;
        case 2:
          message.availability = reader.int32() as any;
          break;
        case 3:
          message.limit = reader.uint32();
          break;
        case 4:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetOrchestratorsByParamsRequest {
    const obj = createBaseQueryGetOrchestratorsByParamsRequest();
    if (isSet(object.inferenceType))
      obj.inferenceType = inferenceTypeFromJSON(object.inferenceType);
    if (isSet(object.availability))
      obj.availability = availabilityFromJSON(object.availability);
    if (isSet(object.limit)) obj.limit = Number(object.limit);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(
    message: QueryGetOrchestratorsByParamsRequest,
  ): JsonSafe<QueryGetOrchestratorsByParamsRequest> {
    const obj: any = {};
    message.inferenceType !== undefined &&
      (obj.inferenceType = inferenceTypeToJSON(message.inferenceType));
    message.availability !== undefined &&
      (obj.availability = availabilityToJSON(message.availability));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsRequest>, I>,
  >(object: I): QueryGetOrchestratorsByParamsRequest {
    const message = createBaseQueryGetOrchestratorsByParamsRequest();
    message.inferenceType = object.inferenceType ?? 0;
    message.availability = object.availability ?? 0;
    message.limit = object.limit ?? 0;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};
function createBaseQueryGetOrchestratorsByParamsResponse(): QueryGetOrchestratorsByParamsResponse {
  return {
    orchestrators: [],
    nextKey: new Uint8Array(),
  };
}
export const QueryGetOrchestratorsByParamsResponse = {
  typeUrl: '/dht.v1.QueryGetOrchestratorsByParamsResponse',
  encode(
    message: QueryGetOrchestratorsByParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.orchestrators) {
      Orchestrator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextKey.length !== 0) {
      writer.uint32(18).bytes(message.nextKey);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetOrchestratorsByParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrchestratorsByParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrators.push(
            Orchestrator.decode(reader, reader.uint32()),
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
  fromJSON(object: any): QueryGetOrchestratorsByParamsResponse {
    const obj = createBaseQueryGetOrchestratorsByParamsResponse();
    if (Array.isArray(object?.orchestrators))
      obj.orchestrators = object.orchestrators.map((e: any) =>
        Orchestrator.fromJSON(e),
      );
    if (isSet(object.nextKey)) obj.nextKey = bytesFromBase64(object.nextKey);
    return obj;
  },
  toJSON(
    message: QueryGetOrchestratorsByParamsResponse,
  ): JsonSafe<QueryGetOrchestratorsByParamsResponse> {
    const obj: any = {};
    if (message.orchestrators) {
      obj.orchestrators = message.orchestrators.map((e) =>
        e ? Orchestrator.toJSON(e) : undefined,
      );
    } else {
      obj.orchestrators = [];
    }
    message.nextKey !== undefined &&
      (obj.nextKey = base64FromBytes(
        message.nextKey !== undefined ? message.nextKey : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryGetOrchestratorsByParamsResponse>, I>,
  >(object: I): QueryGetOrchestratorsByParamsResponse {
    const message = createBaseQueryGetOrchestratorsByParamsResponse();
    message.orchestrators =
      object.orchestrators?.map((e) => Orchestrator.fromPartial(e)) || [];
    message.nextKey = object.nextKey ?? new Uint8Array();
    return message;
  },
};
function createBaseQueryGetAllOrchestratorRequest(): QueryGetAllOrchestratorRequest {
  return {
    pagination: undefined,
  };
}
export const QueryGetAllOrchestratorRequest = {
  typeUrl: '/dht.v1.QueryGetAllOrchestratorRequest',
  encode(
    message: QueryGetAllOrchestratorRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetAllOrchestratorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllOrchestratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAllOrchestratorRequest {
    const obj = createBaseQueryGetAllOrchestratorRequest();
    if (isSet(object.pagination))
      obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryGetAllOrchestratorRequest,
  ): JsonSafe<QueryGetAllOrchestratorRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorRequest>, I>>(
    object: I,
  ): QueryGetAllOrchestratorRequest {
    const message = createBaseQueryGetAllOrchestratorRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryGetAllOrchestratorResponse(): QueryGetAllOrchestratorResponse {
  return {
    orchestrators: [],
    pagination: undefined,
  };
}
export const QueryGetAllOrchestratorResponse = {
  typeUrl: '/dht.v1.QueryGetAllOrchestratorResponse',
  encode(
    message: QueryGetAllOrchestratorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.orchestrators) {
      Orchestrator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGetAllOrchestratorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllOrchestratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestrators.push(
            Orchestrator.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetAllOrchestratorResponse {
    const obj = createBaseQueryGetAllOrchestratorResponse();
    if (Array.isArray(object?.orchestrators))
      obj.orchestrators = object.orchestrators.map((e: any) =>
        Orchestrator.fromJSON(e),
      );
    if (isSet(object.pagination))
      obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryGetAllOrchestratorResponse,
  ): JsonSafe<QueryGetAllOrchestratorResponse> {
    const obj: any = {};
    if (message.orchestrators) {
      obj.orchestrators = message.orchestrators.map((e) =>
        e ? Orchestrator.toJSON(e) : undefined,
      );
    } else {
      obj.orchestrators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetAllOrchestratorResponse>, I>>(
    object: I,
  ): QueryGetAllOrchestratorResponse {
    const message = createBaseQueryGetAllOrchestratorResponse();
    message.orchestrators =
      object.orchestrators?.map((e) => Orchestrator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryReputationParamsRequest(): QueryReputationParamsRequest {
  return {};
}
export const QueryReputationParamsRequest = {
  typeUrl: '/dht.v1.QueryReputationParamsRequest',
  encode(
    _: QueryReputationParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryReputationParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReputationParamsRequest();
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
  fromJSON(_: any): QueryReputationParamsRequest {
    const obj = createBaseQueryReputationParamsRequest();
    return obj;
  },
  toJSON(
    _: QueryReputationParamsRequest,
  ): JsonSafe<QueryReputationParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReputationParamsRequest>, I>>(
    _: I,
  ): QueryReputationParamsRequest {
    const message = createBaseQueryReputationParamsRequest();
    return message;
  },
};
function createBaseQueryReputationParamsResponse(): QueryReputationParamsResponse {
  return {
    params: ReputationParams.fromPartial({}),
  };
}
export const QueryReputationParamsResponse = {
  typeUrl: '/dht.v1.QueryReputationParamsResponse',
  encode(
    message: QueryReputationParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      ReputationParams.encode(
        message.params,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryReputationParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReputationParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = ReputationParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReputationParamsResponse {
    const obj = createBaseQueryReputationParamsResponse();
    if (isSet(object.params))
      obj.params = ReputationParams.fromJSON(object.params);
    return obj;
  },
  toJSON(
    message: QueryReputationParamsResponse,
  ): JsonSafe<QueryReputationParamsResponse> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params
        ? ReputationParams.toJSON(message.params)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryReputationParamsResponse>, I>>(
    object: I,
  ): QueryReputationParamsResponse {
    const message = createBaseQueryReputationParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = ReputationParams.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryModelConfigRequest(): QueryModelConfigRequest {
  return {
    modelName: '',
  };
}
export const QueryModelConfigRequest = {
  typeUrl: '/dht.v1.QueryModelConfigRequest',
  encode(
    message: QueryModelConfigRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.modelName !== '') {
      writer.uint32(10).string(message.modelName);
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryModelConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModelConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modelName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModelConfigRequest {
    const obj = createBaseQueryModelConfigRequest();
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    return obj;
  },
  toJSON(message: QueryModelConfigRequest): JsonSafe<QueryModelConfigRequest> {
    const obj: any = {};
    message.modelName !== undefined && (obj.modelName = message.modelName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModelConfigRequest>, I>>(
    object: I,
  ): QueryModelConfigRequest {
    const message = createBaseQueryModelConfigRequest();
    message.modelName = object.modelName ?? '';
    return message;
  },
};
function createBaseQueryModelConfigResponse(): QueryModelConfigResponse {
  return {
    config: ModelConfig.fromPartial({}),
  };
}
export const QueryModelConfigResponse = {
  typeUrl: '/dht.v1.QueryModelConfigResponse',
  encode(
    message: QueryModelConfigResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.config !== undefined) {
      ModelConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryModelConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModelConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ModelConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModelConfigResponse {
    const obj = createBaseQueryModelConfigResponse();
    if (isSet(object.config)) obj.config = ModelConfig.fromJSON(object.config);
    return obj;
  },
  toJSON(
    message: QueryModelConfigResponse,
  ): JsonSafe<QueryModelConfigResponse> {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? ModelConfig.toJSON(message.config)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModelConfigResponse>, I>>(
    object: I,
  ): QueryModelConfigResponse {
    const message = createBaseQueryModelConfigResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = ModelConfig.fromPartial(object.config);
    }
    return message;
  },
};
function createBaseDisplayModel(): DisplayModel {
  return {
    creator: '',
    modelName: '',
    tokenPrice: TokenPrice.fromPartial({}),
    sWindow: [],
  };
}
export const DisplayModel = {
  typeUrl: '/dht.v1.DisplayModel',
  encode(
    message: DisplayModel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.modelName !== '') {
      writer.uint32(18).string(message.modelName);
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sWindow) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DisplayModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisplayModel();
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
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        case 5:
          message.sWindow.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisplayModel {
    const obj = createBaseDisplayModel();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.tokenPrice))
      obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    if (Array.isArray(object?.sWindow))
      obj.sWindow = object.sWindow.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: DisplayModel): JsonSafe<DisplayModel> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.tokenPrice !== undefined &&
      (obj.tokenPrice = message.tokenPrice
        ? TokenPrice.toJSON(message.tokenPrice)
        : undefined);
    if (message.sWindow) {
      obj.sWindow = message.sWindow.map((e) => e);
    } else {
      obj.sWindow = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DisplayModel>, I>>(
    object: I,
  ): DisplayModel {
    const message = createBaseDisplayModel();
    message.creator = object.creator ?? '';
    message.modelName = object.modelName ?? '';
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    message.sWindow = object.sWindow?.map((e) => e) || [];
    return message;
  },
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
  GetOrchestrator(
    request: QueryGetOrchestratorRequest,
  ): Promise<QueryGetOrchestratorResponse>;
  /** GetAllOrchestrator queries a list of GetAllOrchestrator items. */
  GetAllOrchestrator(
    request?: QueryGetAllOrchestratorRequest,
  ): Promise<QueryGetAllOrchestratorResponse>;
  /** GetOrchestratorsByParams queries a list of GetOrchestratorsByParams items. */
  GetOrchestratorsByParams(
    request: QueryGetOrchestratorsByParamsRequest,
  ): Promise<QueryGetOrchestratorsByParamsResponse>;
  /** ReputationParams queries the reputation parameters. */
  ReputationParams(
    request?: QueryReputationParamsRequest,
  ): Promise<QueryReputationParamsResponse>;
  /** ModelConfig queries the model configuration. */
  ModelConfig(
    request: QueryModelConfigRequest,
  ): Promise<QueryModelConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GetModel = this.GetModel.bind(this);
    this.Models = this.Models.bind(this);
    this.GetNode = this.GetNode.bind(this);
    this.GetMiner = this.GetMiner.bind(this);
    this.GetOrchestrator = this.GetOrchestrator.bind(this);
    this.GetAllOrchestrator = this.GetAllOrchestrator.bind(this);
    this.GetOrchestratorsByParams = this.GetOrchestratorsByParams.bind(this);
    this.ReputationParams = this.ReputationParams.bind(this);
    this.ModelConfig = this.ModelConfig.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'Params', data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  GetModel(request: QueryGetModelRequest): Promise<QueryGetModelResponse> {
    const data = QueryGetModelRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'GetModel', data);
    return promise.then((data) =>
      QueryGetModelResponse.decode(new _m0.Reader(data)),
    );
  }
  Models(
    request: QueryModelsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryModelsResponse> {
    const data = QueryModelsRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'Models', data);
    return promise.then((data) =>
      QueryModelsResponse.decode(new _m0.Reader(data)),
    );
  }
  GetNode(request: QueryGetNodeRequest): Promise<QueryGetNodeResponse> {
    const data = QueryGetNodeRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'GetNode', data);
    return promise.then((data) =>
      QueryGetNodeResponse.decode(new _m0.Reader(data)),
    );
  }
  GetMiner(request: QueryGetMinerRequest): Promise<QueryGetMinerResponse> {
    const data = QueryGetMinerRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'GetMiner', data);
    return promise.then((data) =>
      QueryGetMinerResponse.decode(new _m0.Reader(data)),
    );
  }
  GetOrchestrator(
    request: QueryGetOrchestratorRequest,
  ): Promise<QueryGetOrchestratorResponse> {
    const data = QueryGetOrchestratorRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'GetOrchestrator', data);
    return promise.then((data) =>
      QueryGetOrchestratorResponse.decode(new _m0.Reader(data)),
    );
  }
  GetAllOrchestrator(
    request: QueryGetAllOrchestratorRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryGetAllOrchestratorResponse> {
    const data = QueryGetAllOrchestratorRequest.encode(request).finish();
    const promise = this.rpc.request(
      'dht.v1.Query',
      'GetAllOrchestrator',
      data,
    );
    return promise.then((data) =>
      QueryGetAllOrchestratorResponse.decode(new _m0.Reader(data)),
    );
  }
  GetOrchestratorsByParams(
    request: QueryGetOrchestratorsByParamsRequest,
  ): Promise<QueryGetOrchestratorsByParamsResponse> {
    const data = QueryGetOrchestratorsByParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'dht.v1.Query',
      'GetOrchestratorsByParams',
      data,
    );
    return promise.then((data) =>
      QueryGetOrchestratorsByParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  ReputationParams(
    request: QueryReputationParamsRequest = {},
  ): Promise<QueryReputationParamsResponse> {
    const data = QueryReputationParamsRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'ReputationParams', data);
    return promise.then((data) =>
      QueryReputationParamsResponse.decode(new _m0.Reader(data)),
    );
  }
  ModelConfig(
    request: QueryModelConfigRequest,
  ): Promise<QueryModelConfigResponse> {
    const data = QueryModelConfigRequest.encode(request).finish();
    const promise = this.rpc.request('dht.v1.Query', 'ModelConfig', data);
    return promise.then((data) =>
      QueryModelConfigResponse.decode(new _m0.Reader(data)),
    );
  }
}
