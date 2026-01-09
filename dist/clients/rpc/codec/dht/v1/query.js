/* eslint-disable */
import { PageRequest, PageResponse, } from '../../cosmos/base/query/v1beta1/pagination.js';
import { Orchestrator, inferenceTypeFromJSON, availabilityFromJSON, inferenceTypeToJSON, availabilityToJSON, } from './orchestrator.js';
import { Params } from './params.js';
import { Node } from './node.js';
import { Miner } from './miner.js';
import { ReputationParams } from './reputation.js';
import { ModelConfig, TokenPrice } from './model.js';
import _m0 from 'protobufjs/minimal.js';
import { isSet, bytesFromBase64, base64FromBytes, } from '../../helpers.js';
export const protobufPackage = 'dht.v1';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/dht.v1.QueryParamsRequest',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({}),
    };
}
export const QueryParamsResponse = {
    typeUrl: '/dht.v1.QueryParamsResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryParamsResponse();
        if (isSet(object.params))
            obj.params = Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryGetModelRequest() {
    return {
        modelName: '',
    };
}
export const QueryGetModelRequest = {
    typeUrl: '/dht.v1.QueryGetModelRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.modelName !== '') {
            writer.uint32(10).string(message.modelName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetModelRequest();
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.modelName !== undefined && (obj.modelName = message.modelName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetModelRequest();
        message.modelName = object.modelName ?? '';
        return message;
    },
};
function createBaseQueryGetModelResponse() {
    return {
        model: undefined,
    };
}
export const QueryGetModelResponse = {
    typeUrl: '/dht.v1.QueryGetModelResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.model !== undefined) {
            DisplayModel.encode(message.model, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetModelResponse();
        if (isSet(object.model))
            obj.model = DisplayModel.fromJSON(object.model);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined &&
            (obj.model = message.model
                ? DisplayModel.toJSON(message.model)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetModelResponse();
        if (object.model !== undefined && object.model !== null) {
            message.model = DisplayModel.fromPartial(object.model);
        }
        return message;
    },
};
function createBaseQueryModelsRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryModelsRequest = {
    typeUrl: '/dht.v1.QueryModelsRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryModelsRequest();
        if (isSet(object.pagination))
            obj.pagination = PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModelsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryModelsResponse() {
    return {
        models: [],
        pagination: undefined,
    };
}
export const QueryModelsResponse = {
    typeUrl: '/dht.v1.QueryModelsResponse',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.models) {
            DisplayModel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryModelsResponse();
        if (Array.isArray(object?.models))
            obj.models = object.models.map((e) => DisplayModel.fromJSON(e));
        if (isSet(object.pagination))
            obj.pagination = PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map((e) => e ? DisplayModel.toJSON(e) : undefined);
        }
        else {
            obj.models = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModelsResponse();
        message.models =
            object.models?.map((e) => DisplayModel.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryGetNodeRequest() {
    return {
        nodeId: '',
    };
}
export const QueryGetNodeRequest = {
    typeUrl: '/dht.v1.QueryGetNodeRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== '') {
            writer.uint32(10).string(message.nodeId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetNodeRequest();
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNodeRequest();
        message.nodeId = object.nodeId ?? '';
        return message;
    },
};
function createBaseQueryGetNodeResponse() {
    return {
        node: undefined,
    };
}
export const QueryGetNodeResponse = {
    typeUrl: '/dht.v1.QueryGetNodeResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.node !== undefined) {
            Node.encode(message.node, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetNodeResponse();
        if (isSet(object.node))
            obj.node = Node.fromJSON(object.node);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.node !== undefined &&
            (obj.node = message.node ? Node.toJSON(message.node) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNodeResponse();
        if (object.node !== undefined && object.node !== null) {
            message.node = Node.fromPartial(object.node);
        }
        return message;
    },
};
function createBaseQueryGetMinerRequest() {
    return {
        nodeId: '',
    };
}
export const QueryGetMinerRequest = {
    typeUrl: '/dht.v1.QueryGetMinerRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== '') {
            writer.uint32(10).string(message.nodeId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetMinerRequest();
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetMinerRequest();
        message.nodeId = object.nodeId ?? '';
        return message;
    },
};
function createBaseQueryGetMinerResponse() {
    return {
        miner: undefined,
        node: undefined,
    };
}
export const QueryGetMinerResponse = {
    typeUrl: '/dht.v1.QueryGetMinerResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.miner !== undefined) {
            Miner.encode(message.miner, writer.uint32(10).fork()).ldelim();
        }
        if (message.node !== undefined) {
            Node.encode(message.node, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetMinerResponse();
        if (isSet(object.miner))
            obj.miner = Miner.fromJSON(object.miner);
        if (isSet(object.node))
            obj.node = Node.fromJSON(object.node);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.miner !== undefined &&
            (obj.miner = message.miner ? Miner.toJSON(message.miner) : undefined);
        message.node !== undefined &&
            (obj.node = message.node ? Node.toJSON(message.node) : undefined);
        return obj;
    },
    fromPartial(object) {
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
function createBaseQueryGetOrchestratorRequest() {
    return {
        nodeId: '',
    };
}
export const QueryGetOrchestratorRequest = {
    typeUrl: '/dht.v1.QueryGetOrchestratorRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== '') {
            writer.uint32(10).string(message.nodeId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetOrchestratorRequest();
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrchestratorRequest();
        message.nodeId = object.nodeId ?? '';
        return message;
    },
};
function createBaseQueryGetOrchestratorResponse() {
    return {
        orchestrator: undefined,
        node: undefined,
    };
}
export const QueryGetOrchestratorResponse = {
    typeUrl: '/dht.v1.QueryGetOrchestratorResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.orchestrator !== undefined) {
            Orchestrator.encode(message.orchestrator, writer.uint32(10).fork()).ldelim();
        }
        if (message.node !== undefined) {
            Node.encode(message.node, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetOrchestratorResponse();
        if (isSet(object.orchestrator))
            obj.orchestrator = Orchestrator.fromJSON(object.orchestrator);
        if (isSet(object.node))
            obj.node = Node.fromJSON(object.node);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.orchestrator !== undefined &&
            (obj.orchestrator = message.orchestrator
                ? Orchestrator.toJSON(message.orchestrator)
                : undefined);
        message.node !== undefined &&
            (obj.node = message.node ? Node.toJSON(message.node) : undefined);
        return obj;
    },
    fromPartial(object) {
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
function createBaseQueryGetOrchestratorsByParamsRequest() {
    return {
        inferenceType: 0,
        availability: 0,
        limit: 0,
        key: new Uint8Array(),
    };
}
export const QueryGetOrchestratorsByParamsRequest = {
    typeUrl: '/dht.v1.QueryGetOrchestratorsByParamsRequest',
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrchestratorsByParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inferenceType = reader.int32();
                    break;
                case 2:
                    message.availability = reader.int32();
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
    fromJSON(object) {
        const obj = createBaseQueryGetOrchestratorsByParamsRequest();
        if (isSet(object.inferenceType))
            obj.inferenceType = inferenceTypeFromJSON(object.inferenceType);
        if (isSet(object.availability))
            obj.availability = availabilityFromJSON(object.availability);
        if (isSet(object.limit))
            obj.limit = Number(object.limit);
        if (isSet(object.key))
            obj.key = bytesFromBase64(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inferenceType !== undefined &&
            (obj.inferenceType = inferenceTypeToJSON(message.inferenceType));
        message.availability !== undefined &&
            (obj.availability = availabilityToJSON(message.availability));
        message.limit !== undefined && (obj.limit = Math.round(message.limit));
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrchestratorsByParamsRequest();
        message.inferenceType = object.inferenceType ?? 0;
        message.availability = object.availability ?? 0;
        message.limit = object.limit ?? 0;
        message.key = object.key ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryGetOrchestratorsByParamsResponse() {
    return {
        orchestrators: [],
        nextKey: new Uint8Array(),
    };
}
export const QueryGetOrchestratorsByParamsResponse = {
    typeUrl: '/dht.v1.QueryGetOrchestratorsByParamsResponse',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orchestrators) {
            Orchestrator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextKey.length !== 0) {
            writer.uint32(18).bytes(message.nextKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrchestratorsByParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestrators.push(Orchestrator.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseQueryGetOrchestratorsByParamsResponse();
        if (Array.isArray(object?.orchestrators))
            obj.orchestrators = object.orchestrators.map((e) => Orchestrator.fromJSON(e));
        if (isSet(object.nextKey))
            obj.nextKey = bytesFromBase64(object.nextKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.orchestrators) {
            obj.orchestrators = message.orchestrators.map((e) => e ? Orchestrator.toJSON(e) : undefined);
        }
        else {
            obj.orchestrators = [];
        }
        message.nextKey !== undefined &&
            (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetOrchestratorsByParamsResponse();
        message.orchestrators =
            object.orchestrators?.map((e) => Orchestrator.fromPartial(e)) || [];
        message.nextKey = object.nextKey ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryGetAllOrchestratorRequest() {
    return {
        pagination: undefined,
    };
}
export const QueryGetAllOrchestratorRequest = {
    typeUrl: '/dht.v1.QueryGetAllOrchestratorRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryGetAllOrchestratorRequest();
        if (isSet(object.pagination))
            obj.pagination = PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllOrchestratorRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryGetAllOrchestratorResponse() {
    return {
        orchestrators: [],
        pagination: undefined,
    };
}
export const QueryGetAllOrchestratorResponse = {
    typeUrl: '/dht.v1.QueryGetAllOrchestratorResponse',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orchestrators) {
            Orchestrator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllOrchestratorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestrators.push(Orchestrator.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const obj = createBaseQueryGetAllOrchestratorResponse();
        if (Array.isArray(object?.orchestrators))
            obj.orchestrators = object.orchestrators.map((e) => Orchestrator.fromJSON(e));
        if (isSet(object.pagination))
            obj.pagination = PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.orchestrators) {
            obj.orchestrators = message.orchestrators.map((e) => e ? Orchestrator.toJSON(e) : undefined);
        }
        else {
            obj.orchestrators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllOrchestratorResponse();
        message.orchestrators =
            object.orchestrators?.map((e) => Orchestrator.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryReputationParamsRequest() {
    return {};
}
export const QueryReputationParamsRequest = {
    typeUrl: '/dht.v1.QueryReputationParamsRequest',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseQueryReputationParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryReputationParamsRequest();
        return message;
    },
};
function createBaseQueryReputationParamsResponse() {
    return {
        params: ReputationParams.fromPartial({}),
    };
}
export const QueryReputationParamsResponse = {
    typeUrl: '/dht.v1.QueryReputationParamsResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            ReputationParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryReputationParamsResponse();
        if (isSet(object.params))
            obj.params = ReputationParams.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params
                ? ReputationParams.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryReputationParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = ReputationParams.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryModelConfigRequest() {
    return {
        modelName: '',
    };
}
export const QueryModelConfigRequest = {
    typeUrl: '/dht.v1.QueryModelConfigRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.modelName !== '') {
            writer.uint32(10).string(message.modelName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryModelConfigRequest();
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.modelName !== undefined && (obj.modelName = message.modelName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModelConfigRequest();
        message.modelName = object.modelName ?? '';
        return message;
    },
};
function createBaseQueryModelConfigResponse() {
    return {
        config: ModelConfig.fromPartial({}),
    };
}
export const QueryModelConfigResponse = {
    typeUrl: '/dht.v1.QueryModelConfigResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            ModelConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryModelConfigResponse();
        if (isSet(object.config))
            obj.config = ModelConfig.fromJSON(object.config);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config
                ? ModelConfig.toJSON(message.config)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryModelConfigResponse();
        if (object.config !== undefined && object.config !== null) {
            message.config = ModelConfig.fromPartial(object.config);
        }
        return message;
    },
};
function createBaseDisplayModel() {
    return {
        creator: '',
        modelName: '',
        tokenPrice: TokenPrice.fromPartial({}),
        sWindow: [],
    };
}
export const DisplayModel = {
    typeUrl: '/dht.v1.DisplayModel',
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseDisplayModel();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.tokenPrice))
            obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
        if (Array.isArray(object?.sWindow))
            obj.sWindow = object.sWindow.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.tokenPrice !== undefined &&
            (obj.tokenPrice = message.tokenPrice
                ? TokenPrice.toJSON(message.tokenPrice)
                : undefined);
        if (message.sWindow) {
            obj.sWindow = message.sWindow.map((e) => e);
        }
        else {
            obj.sWindow = [];
        }
        return obj;
    },
    fromPartial(object) {
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
export class QueryClientImpl {
    constructor(rpc) {
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
    Params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    GetModel(request) {
        const data = QueryGetModelRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'GetModel', data);
        return promise.then((data) => QueryGetModelResponse.decode(new _m0.Reader(data)));
    }
    Models(request = {
        pagination: PageRequest.fromPartial({}),
    }) {
        const data = QueryModelsRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'Models', data);
        return promise.then((data) => QueryModelsResponse.decode(new _m0.Reader(data)));
    }
    GetNode(request) {
        const data = QueryGetNodeRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'GetNode', data);
        return promise.then((data) => QueryGetNodeResponse.decode(new _m0.Reader(data)));
    }
    GetMiner(request) {
        const data = QueryGetMinerRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'GetMiner', data);
        return promise.then((data) => QueryGetMinerResponse.decode(new _m0.Reader(data)));
    }
    GetOrchestrator(request) {
        const data = QueryGetOrchestratorRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'GetOrchestrator', data);
        return promise.then((data) => QueryGetOrchestratorResponse.decode(new _m0.Reader(data)));
    }
    GetAllOrchestrator(request = {
        pagination: PageRequest.fromPartial({}),
    }) {
        const data = QueryGetAllOrchestratorRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'GetAllOrchestrator', data);
        return promise.then((data) => QueryGetAllOrchestratorResponse.decode(new _m0.Reader(data)));
    }
    GetOrchestratorsByParams(request) {
        const data = QueryGetOrchestratorsByParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'GetOrchestratorsByParams', data);
        return promise.then((data) => QueryGetOrchestratorsByParamsResponse.decode(new _m0.Reader(data)));
    }
    ReputationParams(request = {}) {
        const data = QueryReputationParamsRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'ReputationParams', data);
        return promise.then((data) => QueryReputationParamsResponse.decode(new _m0.Reader(data)));
    }
    ModelConfig(request) {
        const data = QueryModelConfigRequest.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Query', 'ModelConfig', data);
        return promise.then((data) => QueryModelConfigResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=query.js.map