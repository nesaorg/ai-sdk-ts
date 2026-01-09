/* eslint-disable */
import { Params } from './params.js';
import { TokenPrice, ModelConfig } from './model.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { availabilityFromJSON, inferenceTypeFromJSON, availabilityToJSON, inferenceTypeToJSON, } from './orchestrator.js';
import { Reputation, ReputationParams } from './reputation.js';
import { Long, isSet, bytesFromBase64, base64FromBytes, } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'dht.v1';
function createBaseMsgUpdateParams() {
    return {
        authority: '',
        params: Params.fromPartial({}),
    };
}
export const MsgUpdateParams = {
    typeUrl: '/dht.v1.MsgUpdateParams',
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgUpdateParams();
        if (isSet(object.authority))
            obj.authority = String(object.authority);
        if (isSet(object.params))
            obj.params = Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? '';
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: '/dht.v1.MsgUpdateParamsResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateParamsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
function createBaseMsgRegisterModel() {
    return {
        creator: '',
        modelName: '',
        allowList: [],
        tokenPrice: undefined,
    };
}
export const MsgRegisterModel = {
    typeUrl: '/dht.v1.MsgRegisterModel',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.modelName !== '') {
            writer.uint32(18).string(message.modelName);
        }
        for (const v of message.allowList) {
            writer.uint32(34).string(v);
        }
        if (message.tokenPrice !== undefined) {
            TokenPrice.encode(message.tokenPrice, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterModel();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (Array.isArray(object?.allowList))
            obj.allowList = object.allowList.map((e) => String(e));
        if (isSet(object.tokenPrice))
            obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        if (message.allowList) {
            obj.allowList = message.allowList.map((e) => e);
        }
        else {
            obj.allowList = [];
        }
        message.tokenPrice !== undefined &&
            (obj.tokenPrice = message.tokenPrice
                ? TokenPrice.toJSON(message.tokenPrice)
                : undefined);
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgRegisterModelResponse() {
    return {};
}
export const MsgRegisterModelResponse = {
    typeUrl: '/dht.v1.MsgRegisterModelResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRegisterModelResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterModelResponse();
        return message;
    },
};
function createBaseMsgDeleteModel() {
    return {
        creator: '',
        modelName: '',
    };
}
export const MsgDeleteModel = {
    typeUrl: '/dht.v1.MsgDeleteModel',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.modelName !== '') {
            writer.uint32(18).string(message.modelName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgDeleteModel();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteModel();
        message.creator = object.creator ?? '';
        message.modelName = object.modelName ?? '';
        return message;
    },
};
function createBaseMsgDeleteModelResponse() {
    return {};
}
export const MsgDeleteModelResponse = {
    typeUrl: '/dht.v1.MsgDeleteModelResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgDeleteModelResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteModelResponse();
        return message;
    },
};
function createBaseMsgSetModelConfig() {
    return {
        creator: '',
        config: ModelConfig.fromPartial({}),
    };
}
export const MsgSetModelConfig = {
    typeUrl: '/dht.v1.MsgSetModelConfig',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.config !== undefined) {
            ModelConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgSetModelConfig();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.config))
            obj.config = ModelConfig.fromJSON(object.config);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.config !== undefined &&
            (obj.config = message.config
                ? ModelConfig.toJSON(message.config)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetModelConfig();
        message.creator = object.creator ?? '';
        if (object.config !== undefined && object.config !== null) {
            message.config = ModelConfig.fromPartial(object.config);
        }
        return message;
    },
};
function createBaseMsgSetModelConfigResponse() {
    return {};
}
export const MsgSetModelConfigResponse = {
    typeUrl: '/dht.v1.MsgSetModelConfigResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSetModelConfigResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetModelConfigResponse();
        return message;
    },
};
function createBaseMsgRegisterNode() {
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
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(82).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.vram = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterNode();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.publicName))
            obj.publicName = String(object.publicName);
        if (isSet(object.version))
            obj.version = String(object.version);
        if (isSet(object.networkAddress))
            obj.networkAddress = String(object.networkAddress);
        if (isSet(object.walletAddress))
            obj.walletAddress = String(object.walletAddress);
        if (isSet(object.vram))
            obj.vram = Long.fromValue(object.vram);
        if (isSet(object.networkRps))
            obj.networkRps = Number(object.networkRps);
        if (isSet(object.usingRelay))
            obj.usingRelay = Boolean(object.usingRelay);
        if (Array.isArray(object?.nextPings))
            obj.nextPings = object.nextPings.map((e) => bytesFromBase64(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
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
            obj.nextPings = message.nextPings.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.nextPings = [];
        }
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgRegisterNodeResponse() {
    return {};
}
export const MsgRegisterNodeResponse = {
    typeUrl: '/dht.v1.MsgRegisterNodeResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRegisterNodeResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterNodeResponse();
        return message;
    },
};
function createBaseMsgDeleteNode() {
    return {
        creator: '',
        nodeId: '',
    };
}
export const MsgDeleteNode = {
    typeUrl: '/dht.v1.MsgDeleteNode',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgDeleteNode();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteNode();
        message.creator = object.creator ?? '';
        message.nodeId = object.nodeId ?? '';
        return message;
    },
};
function createBaseMsgDeleteNodeResponse() {
    return {};
}
export const MsgDeleteNodeResponse = {
    typeUrl: '/dht.v1.MsgDeleteNodeResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgDeleteNodeResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteNodeResponse();
        return message;
    },
};
function createBaseMsgRegisterMiner() {
    return {
        creator: '',
        nodeId: '',
    };
}
export const MsgRegisterMiner = {
    typeUrl: '/dht.v1.MsgRegisterMiner',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterMiner();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterMiner();
        message.creator = object.creator ?? '';
        message.nodeId = object.nodeId ?? '';
        return message;
    },
};
function createBaseMsgRegisterMinerResponse() {
    return {};
}
export const MsgRegisterMinerResponse = {
    typeUrl: '/dht.v1.MsgRegisterMinerResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRegisterMinerResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterMinerResponse();
        return message;
    },
};
function createBaseMsgUpdateMiner() {
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
    encode(message, writer = _m0.Writer.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.cumulativePenalty) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.sRolling !== '') {
            writer.uint32(50).string(message.sRolling);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgUpdateMiner();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.reputationValue))
            obj.reputationValue = String(object.reputationValue);
        if (Array.isArray(object?.cumulativeReward))
            obj.cumulativeReward = object.cumulativeReward.map((e) => Coin.fromJSON(e));
        if (Array.isArray(object?.cumulativePenalty))
            obj.cumulativePenalty = object.cumulativePenalty.map((e) => Coin.fromJSON(e));
        if (isSet(object.sRolling))
            obj.sRolling = String(object.sRolling);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.reputationValue !== undefined &&
            (obj.reputationValue = message.reputationValue);
        if (message.cumulativeReward) {
            obj.cumulativeReward = message.cumulativeReward.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.cumulativeReward = [];
        }
        if (message.cumulativePenalty) {
            obj.cumulativePenalty = message.cumulativePenalty.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.cumulativePenalty = [];
        }
        message.sRolling !== undefined && (obj.sRolling = message.sRolling);
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgUpdateMinerResponse() {
    return {};
}
export const MsgUpdateMinerResponse = {
    typeUrl: '/dht.v1.MsgUpdateMinerResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateMinerResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateMinerResponse();
        return message;
    },
};
function createBaseMsgDeleteMiner() {
    return {
        creator: '',
        nodeId: '',
    };
}
export const MsgDeleteMiner = {
    typeUrl: '/dht.v1.MsgDeleteMiner',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgDeleteMiner();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteMiner();
        message.creator = object.creator ?? '';
        message.nodeId = object.nodeId ?? '';
        return message;
    },
};
function createBaseMsgDeleteMinerResponse() {
    return {};
}
export const MsgDeleteMinerResponse = {
    typeUrl: '/dht.v1.MsgDeleteMinerResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgDeleteMinerResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteMinerResponse();
        return message;
    },
};
function createBaseMsgRegisterOrchestrator() {
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
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(42).string(v);
        }
        if (message.inferenceType !== 0) {
            writer.uint32(48).int32(message.inferenceType);
        }
        if (message.modelName !== '') {
            writer.uint32(58).string(message.modelName);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.status = reader.int32();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.blockCount.push(reader.uint64());
                        }
                    }
                    else {
                        message.blockCount.push(reader.uint64());
                    }
                    break;
                case 5:
                    message.minerIds.push(reader.string());
                    break;
                case 6:
                    message.inferenceType = reader.int32();
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterOrchestrator();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.status))
            obj.status = availabilityFromJSON(object.status);
        if (Array.isArray(object?.blockCount))
            obj.blockCount = object.blockCount.map((e) => Long.fromValue(e));
        if (Array.isArray(object?.minerIds))
            obj.minerIds = object.minerIds.map((e) => String(e));
        if (isSet(object.inferenceType))
            obj.inferenceType = inferenceTypeFromJSON(object.inferenceType);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.status !== undefined &&
            (obj.status = availabilityToJSON(message.status));
        if (message.blockCount) {
            obj.blockCount = message.blockCount.map((e) => (e || Long.UZERO).toString());
        }
        else {
            obj.blockCount = [];
        }
        if (message.minerIds) {
            obj.minerIds = message.minerIds.map((e) => e);
        }
        else {
            obj.minerIds = [];
        }
        message.inferenceType !== undefined &&
            (obj.inferenceType = inferenceTypeToJSON(message.inferenceType));
        message.modelName !== undefined && (obj.modelName = message.modelName);
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgRegisterOrchestratorResponse() {
    return {};
}
export const MsgRegisterOrchestratorResponse = {
    typeUrl: '/dht.v1.MsgRegisterOrchestratorResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRegisterOrchestratorResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterOrchestratorResponse();
        return message;
    },
};
function createBaseMsgDeleteOrchestrator() {
    return {
        creator: '',
        nodeId: '',
    };
}
export const MsgDeleteOrchestrator = {
    typeUrl: '/dht.v1.MsgDeleteOrchestrator',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgDeleteOrchestrator();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteOrchestrator();
        message.creator = object.creator ?? '';
        message.nodeId = object.nodeId ?? '';
        return message;
    },
};
function createBaseMsgDeleteOrchestratorResponse() {
    return {};
}
export const MsgDeleteOrchestratorResponse = {
    typeUrl: '/dht.v1.MsgDeleteOrchestratorResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgDeleteOrchestratorResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteOrchestratorResponse();
        return message;
    },
};
function createBaseMsgAddMinerDeposit() {
    return {
        depositor: '',
        nodeId: '',
        amount: Coin.fromPartial({}),
    };
}
export const MsgAddMinerDeposit = {
    typeUrl: '/dht.v1.MsgAddMinerDeposit',
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgAddMinerDeposit();
        if (isSet(object.depositor))
            obj.depositor = String(object.depositor);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.amount))
            obj.amount = Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddMinerDeposit();
        message.depositor = object.depositor ?? '';
        message.nodeId = object.nodeId ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        }
        return message;
    },
};
function createBaseMsgAddMinerDepositResponse() {
    return {};
}
export const MsgAddMinerDepositResponse = {
    typeUrl: '/dht.v1.MsgAddMinerDepositResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgAddMinerDepositResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgAddMinerDepositResponse();
        return message;
    },
};
function createBaseMsgWithdrawMiner() {
    return {
        depositor: '',
        nodeId: '',
        amount: Coin.fromPartial({}),
        receiver: '',
    };
}
export const MsgWithdrawMiner = {
    typeUrl: '/dht.v1.MsgWithdrawMiner',
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgWithdrawMiner();
        if (isSet(object.depositor))
            obj.depositor = String(object.depositor);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.amount))
            obj.amount = Coin.fromJSON(object.amount);
        if (isSet(object.receiver))
            obj.receiver = String(object.receiver);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgWithdrawMinerResponse() {
    return {};
}
export const MsgWithdrawMinerResponse = {
    typeUrl: '/dht.v1.MsgWithdrawMinerResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgWithdrawMinerResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawMinerResponse();
        return message;
    },
};
function createBaseMsgAddOrchestratorDeposit() {
    return {
        depositor: '',
        nodeId: '',
        amount: Coin.fromPartial({}),
    };
}
export const MsgAddOrchestratorDeposit = {
    typeUrl: '/dht.v1.MsgAddOrchestratorDeposit',
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgAddOrchestratorDeposit();
        if (isSet(object.depositor))
            obj.depositor = String(object.depositor);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.amount))
            obj.amount = Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddOrchestratorDeposit();
        message.depositor = object.depositor ?? '';
        message.nodeId = object.nodeId ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        }
        return message;
    },
};
function createBaseMsgAddOrchestratorDepositResponse() {
    return {};
}
export const MsgAddOrchestratorDepositResponse = {
    typeUrl: '/dht.v1.MsgAddOrchestratorDepositResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgAddOrchestratorDepositResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgAddOrchestratorDepositResponse();
        return message;
    },
};
function createBaseMsgWithdrawOrchestrator() {
    return {
        depositor: '',
        nodeId: '',
        amount: Coin.fromPartial({}),
        receiver: '',
    };
}
export const MsgWithdrawOrchestrator = {
    typeUrl: '/dht.v1.MsgWithdrawOrchestrator',
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgWithdrawOrchestrator();
        if (isSet(object.depositor))
            obj.depositor = String(object.depositor);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.amount))
            obj.amount = Coin.fromJSON(object.amount);
        if (isSet(object.receiver))
            obj.receiver = String(object.receiver);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgWithdrawOrchestratorResponse() {
    return {};
}
export const MsgWithdrawOrchestratorResponse = {
    typeUrl: '/dht.v1.MsgWithdrawOrchestratorResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgWithdrawOrchestratorResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawOrchestratorResponse();
        return message;
    },
};
function createBaseMsgUpdateNodeLabel() {
    return {
        creator: '',
        nodeId: '',
        labels: [],
    };
}
export const MsgUpdateNodeLabel = {
    typeUrl: '/dht.v1.MsgUpdateNodeLabel',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        for (const v of message.labels) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgUpdateNodeLabel();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (Array.isArray(object?.labels))
            obj.labels = object.labels.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        if (message.labels) {
            obj.labels = message.labels.map((e) => e);
        }
        else {
            obj.labels = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateNodeLabel();
        message.creator = object.creator ?? '';
        message.nodeId = object.nodeId ?? '';
        message.labels = object.labels?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgUpdateNodeLabelResponse() {
    return {};
}
export const MsgUpdateNodeLabelResponse = {
    typeUrl: '/dht.v1.MsgUpdateNodeLabelResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateNodeLabelResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateNodeLabelResponse();
        return message;
    },
};
function createBaseMsgUpdateModel() {
    return {
        account: '',
        modelName: '',
        allowList: [],
        tokenPrice: TokenPrice.fromPartial({}),
    };
}
export const MsgUpdateModel = {
    typeUrl: '/dht.v1.MsgUpdateModel',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        if (message.modelName !== '') {
            writer.uint32(18).string(message.modelName);
        }
        for (const v of message.allowList) {
            writer.uint32(26).string(v);
        }
        if (message.tokenPrice !== undefined) {
            TokenPrice.encode(message.tokenPrice, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgUpdateModel();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (Array.isArray(object?.allowList))
            obj.allowList = object.allowList.map((e) => String(e));
        if (isSet(object.tokenPrice))
            obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        if (message.allowList) {
            obj.allowList = message.allowList.map((e) => e);
        }
        else {
            obj.allowList = [];
        }
        message.tokenPrice !== undefined &&
            (obj.tokenPrice = message.tokenPrice
                ? TokenPrice.toJSON(message.tokenPrice)
                : undefined);
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgUpdateModelResponse() {
    return {};
}
export const MsgUpdateModelResponse = {
    typeUrl: '/dht.v1.MsgUpdateModelResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateModelResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateModelResponse();
        return message;
    },
};
function createBaseMsgUpdateModelCreatorAllowList() {
    return {
        account: '',
        modelCreators: [],
    };
}
export const MsgUpdateModelCreatorAllowList = {
    typeUrl: '/dht.v1.MsgUpdateModelCreatorAllowList',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        for (const v of message.modelCreators) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgUpdateModelCreatorAllowList();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (Array.isArray(object?.modelCreators))
            obj.modelCreators = object.modelCreators.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        if (message.modelCreators) {
            obj.modelCreators = message.modelCreators.map((e) => e);
        }
        else {
            obj.modelCreators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateModelCreatorAllowList();
        message.account = object.account ?? '';
        message.modelCreators = object.modelCreators?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgUpdateModelCreatorAllowListResponse() {
    return {};
}
export const MsgUpdateModelCreatorAllowListResponse = {
    typeUrl: '/dht.v1.MsgUpdateModelCreatorAllowListResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateModelCreatorAllowListResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateModelCreatorAllowListResponse();
        return message;
    },
};
function createBaseMsgUpdateOrchestratorReputation() {
    return {
        creator: '',
        nodeId: '',
        reputations: [],
    };
}
export const MsgUpdateOrchestratorReputation = {
    typeUrl: '/dht.v1.MsgUpdateOrchestratorReputation',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        for (const v of message.reputations) {
            Reputation.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgUpdateOrchestratorReputation();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (Array.isArray(object?.reputations))
            obj.reputations = object.reputations.map((e) => Reputation.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        if (message.reputations) {
            obj.reputations = message.reputations.map((e) => e ? Reputation.toJSON(e) : undefined);
        }
        else {
            obj.reputations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateOrchestratorReputation();
        message.creator = object.creator ?? '';
        message.nodeId = object.nodeId ?? '';
        message.reputations =
            object.reputations?.map((e) => Reputation.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgUpdateOrchestratorReputationResponse() {
    return {};
}
export const MsgUpdateOrchestratorReputationResponse = {
    typeUrl: '/dht.v1.MsgUpdateOrchestratorReputationResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateOrchestratorReputationResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateOrchestratorReputationResponse();
        return message;
    },
};
function createBaseMsgSetReputationParams() {
    return {
        creator: '',
        params: ReputationParams.fromPartial({}),
    };
}
export const MsgSetReputationParams = {
    typeUrl: '/dht.v1.MsgSetReputationParams',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.params !== undefined) {
            ReputationParams.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgSetReputationParams();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.params))
            obj.params = ReputationParams.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.params !== undefined &&
            (obj.params = message.params
                ? ReputationParams.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetReputationParams();
        message.creator = object.creator ?? '';
        if (object.params !== undefined && object.params !== null) {
            message.params = ReputationParams.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgSetReputationParamsResponse() {
    return {};
}
export const MsgSetReputationParamsResponse = {
    typeUrl: '/dht.v1.MsgSetReputationParamsResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSetReputationParamsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetReputationParamsResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
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
    UpdateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'UpdateParams', data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
    UpdateModelCreatorAllowList(request) {
        const data = MsgUpdateModelCreatorAllowList.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'UpdateModelCreatorAllowList', data);
        return promise.then((data) => MsgUpdateModelCreatorAllowListResponse.decode(new _m0.Reader(data)));
    }
    RegisterModel(request) {
        const data = MsgRegisterModel.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'RegisterModel', data);
        return promise.then((data) => MsgRegisterModelResponse.decode(new _m0.Reader(data)));
    }
    UpdateModel(request) {
        const data = MsgUpdateModel.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'UpdateModel', data);
        return promise.then((data) => MsgUpdateModelResponse.decode(new _m0.Reader(data)));
    }
    DeleteModel(request) {
        const data = MsgDeleteModel.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'DeleteModel', data);
        return promise.then((data) => MsgDeleteModelResponse.decode(new _m0.Reader(data)));
    }
    SetModelConfig(request) {
        const data = MsgSetModelConfig.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'SetModelConfig', data);
        return promise.then((data) => MsgSetModelConfigResponse.decode(new _m0.Reader(data)));
    }
    RegisterNode(request) {
        const data = MsgRegisterNode.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'RegisterNode', data);
        return promise.then((data) => MsgRegisterNodeResponse.decode(new _m0.Reader(data)));
    }
    DeleteNode(request) {
        const data = MsgDeleteNode.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'DeleteNode', data);
        return promise.then((data) => MsgDeleteNodeResponse.decode(new _m0.Reader(data)));
    }
    RegisterMiner(request) {
        const data = MsgRegisterMiner.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'RegisterMiner', data);
        return promise.then((data) => MsgRegisterMinerResponse.decode(new _m0.Reader(data)));
    }
    DeleteMiner(request) {
        const data = MsgDeleteMiner.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'DeleteMiner', data);
        return promise.then((data) => MsgDeleteMinerResponse.decode(new _m0.Reader(data)));
    }
    UpdateMiner(request) {
        const data = MsgUpdateMiner.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'UpdateMiner', data);
        return promise.then((data) => MsgUpdateMinerResponse.decode(new _m0.Reader(data)));
    }
    RegisterOrchestrator(request) {
        const data = MsgRegisterOrchestrator.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'RegisterOrchestrator', data);
        return promise.then((data) => MsgRegisterOrchestratorResponse.decode(new _m0.Reader(data)));
    }
    DeleteOrchestrator(request) {
        const data = MsgDeleteOrchestrator.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'DeleteOrchestrator', data);
        return promise.then((data) => MsgDeleteOrchestratorResponse.decode(new _m0.Reader(data)));
    }
    AddMinerDeposit(request) {
        const data = MsgAddMinerDeposit.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'AddMinerDeposit', data);
        return promise.then((data) => MsgAddMinerDepositResponse.decode(new _m0.Reader(data)));
    }
    WithdrawMiner(request) {
        const data = MsgWithdrawMiner.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'WithdrawMiner', data);
        return promise.then((data) => MsgWithdrawMinerResponse.decode(new _m0.Reader(data)));
    }
    AddOrchestratorDeposit(request) {
        const data = MsgAddOrchestratorDeposit.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'AddOrchestratorDeposit', data);
        return promise.then((data) => MsgAddOrchestratorDepositResponse.decode(new _m0.Reader(data)));
    }
    WithdrawOrchestrator(request) {
        const data = MsgWithdrawOrchestrator.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'WithdrawOrchestrator', data);
        return promise.then((data) => MsgWithdrawOrchestratorResponse.decode(new _m0.Reader(data)));
    }
    UpdateNodeLabel(request) {
        const data = MsgUpdateNodeLabel.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'UpdateNodeLabel', data);
        return promise.then((data) => MsgUpdateNodeLabelResponse.decode(new _m0.Reader(data)));
    }
    UpdateOrchestratorReputation(request) {
        const data = MsgUpdateOrchestratorReputation.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'UpdateOrchestratorReputation', data);
        return promise.then((data) => MsgUpdateOrchestratorReputationResponse.decode(new _m0.Reader(data)));
    }
    SetReputationParams(request) {
        const data = MsgSetReputationParams.encode(request).finish();
        const promise = this.rpc.request('dht.v1.Msg', 'SetReputationParams', data);
        return promise.then((data) => MsgSetReputationParamsResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.js.map