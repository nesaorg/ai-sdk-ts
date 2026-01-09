/* eslint-disable */
import { Params, TokenPrice, Payment, agentStatusFromJSON, agentStatusToJSON, } from './agent.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { RequestLog } from '../../dht/v1/reputation.js';
import { Long, isSet, bytesFromBase64, base64FromBytes, } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'agent.v1';
function createBaseMsgUpdateParams() {
    return {
        authority: '',
        params: Params.fromPartial({}),
    };
}
export const MsgUpdateParams = {
    typeUrl: '/agent.v1.MsgUpdateParams',
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
    typeUrl: '/agent.v1.MsgUpdateParamsResponse',
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
function createBaseMsgRegisterInferenceAgent() {
    return {
        account: '',
        url: '',
        version: Long.UZERO,
        sender: '',
    };
}
export const MsgRegisterInferenceAgent = {
    typeUrl: '/agent.v1.MsgRegisterInferenceAgent',
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.version = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterInferenceAgent();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.url))
            obj.url = String(object.url);
        if (isSet(object.version))
            obj.version = Long.fromValue(object.version);
        if (isSet(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.url !== undefined && (obj.url = message.url);
        message.version !== undefined &&
            (obj.version = (message.version || Long.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
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
function createBaseMsgRegisterInferenceAgentResponse() {
    return {};
}
export const MsgRegisterInferenceAgentResponse = {
    typeUrl: '/agent.v1.MsgRegisterInferenceAgentResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRegisterInferenceAgentResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRegisterInferenceAgentResponse();
        return message;
    },
};
function createBaseMsgUpdateInferenceAgent() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.version = reader.uint64();
                    break;
                case 4:
                    message.status = reader.int32();
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
    fromJSON(object) {
        const obj = createBaseMsgUpdateInferenceAgent();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.url))
            obj.url = String(object.url);
        if (isSet(object.version))
            obj.version = Long.fromValue(object.version);
        if (isSet(object.status))
            obj.status = agentStatusFromJSON(object.status);
        if (isSet(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
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
function createBaseMsgUpdateInferenceAgentResponse() {
    return {};
}
export const MsgUpdateInferenceAgentResponse = {
    typeUrl: '/agent.v1.MsgUpdateInferenceAgentResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgUpdateInferenceAgentResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateInferenceAgentResponse();
        return message;
    },
};
function createBaseMsgRemoveInferenceAgent() {
    return {
        account: '',
        sender: '',
    };
}
export const MsgRemoveInferenceAgent = {
    typeUrl: '/agent.v1.MsgRemoveInferenceAgent',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        if (message.sender !== '') {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgRemoveInferenceAgent();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveInferenceAgent();
        message.account = object.account ?? '';
        message.sender = object.sender ?? '';
        return message;
    },
};
function createBaseMsgRemoveInferenceAgentResponse() {
    return {};
}
export const MsgRemoveInferenceAgentResponse = {
    typeUrl: '/agent.v1.MsgRemoveInferenceAgentResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgRemoveInferenceAgentResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveInferenceAgentResponse();
        return message;
    },
};
function createBaseVRF() {
    return {
        seed: new Uint8Array(),
        proof: new Uint8Array(),
        hashRandom: new Uint8Array(),
    };
}
export const VRF = {
    typeUrl: '/agent.v1.VRF',
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseVRF();
        if (isSet(object.seed))
            obj.seed = bytesFromBase64(object.seed);
        if (isSet(object.proof))
            obj.proof = bytesFromBase64(object.proof);
        if (isSet(object.hashRandom))
            obj.hashRandom = bytesFromBase64(object.hashRandom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.seed !== undefined &&
            (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.hashRandom !== undefined &&
            (obj.hashRandom = base64FromBytes(message.hashRandom !== undefined
                ? message.hashRandom
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVRF();
        message.seed = object.seed ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.hashRandom = object.hashRandom ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgRegisterSession() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterSession();
        if (isSet(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.lockBalance))
            obj.lockBalance = Coin.fromJSON(object.lockBalance);
        if (isSet(object.vrf))
            obj.vrf = VRF.fromJSON(object.vrf);
        if (isSet(object.tokenPrice))
            obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
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
function createBaseMsgRegisterSessionResponse() {
    return {
        account: '',
        modelName: '',
    };
}
export const MsgRegisterSessionResponse = {
    typeUrl: '/agent.v1.MsgRegisterSessionResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        if (message.modelName !== '') {
            writer.uint32(18).string(message.modelName);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgRegisterSessionResponse();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterSessionResponse();
        message.account = object.account ?? '';
        message.modelName = object.modelName ?? '';
        return message;
    },
};
function createBaseMsgCancelSession() {
    return {
        sessionId: '',
        account: '',
    };
}
export const MsgCancelSession = {
    typeUrl: '/agent.v1.MsgCancelSession',
    encode(message, writer = _m0.Writer.create()) {
        if (message.sessionId !== '') {
            writer.uint32(10).string(message.sessionId);
        }
        if (message.account !== '') {
            writer.uint32(18).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgCancelSession();
        if (isSet(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if (isSet(object.account))
            obj.account = String(object.account);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelSession();
        message.sessionId = object.sessionId ?? '';
        message.account = object.account ?? '';
        return message;
    },
};
function createBaseMsgCancelSessionResponse() {
    return {};
}
export const MsgCancelSessionResponse = {
    typeUrl: '/agent.v1.MsgCancelSessionResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgCancelSessionResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelSessionResponse();
        return message;
    },
};
function createBaseMsgSubmitInferenceRequest() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.inputTokens = reader.uint64();
                    break;
                case 7:
                    message.outputTokens = reader.uint64();
                    break;
                case 8:
                    message.actualTime = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseMsgSubmitInferenceRequest();
        if (isSet(object.requestId))
            obj.requestId = String(object.requestId);
        if (isSet(object.sender))
            obj.sender = String(object.sender);
        if (isSet(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
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
function createBaseMsgSubmitInferenceRequestResponse() {
    return {
        requestLog: RequestLog.fromPartial({}),
    };
}
export const MsgSubmitInferenceRequestResponse = {
    typeUrl: '/agent.v1.MsgSubmitInferenceRequestResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.requestLog !== undefined) {
            RequestLog.encode(message.requestLog, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgSubmitInferenceRequestResponse();
        if (isSet(object.requestLog))
            obj.requestLog = RequestLog.fromJSON(object.requestLog);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.requestLog !== undefined &&
            (obj.requestLog = message.requestLog
                ? RequestLog.toJSON(message.requestLog)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitInferenceRequestResponse();
        if (object.requestLog !== undefined && object.requestLog !== null) {
            message.requestLog = RequestLog.fromPartial(object.requestLog);
        }
        return message;
    },
};
function createBaseMsgSubmitPayment() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.inferenceCount = reader.uint64();
                    break;
                case 6:
                    message.totalInputTokens = reader.uint64();
                    break;
                case 7:
                    message.totalOutputTokens = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitPayment();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if (isSet(object.payment))
            obj.payment = Payment.fromJSON(object.payment);
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
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.payment !== undefined &&
            (obj.payment = message.payment
                ? Payment.toJSON(message.payment)
                : undefined);
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.inferenceCount !== undefined &&
            (obj.inferenceCount = (message.inferenceCount || Long.UZERO).toString());
        message.totalInputTokens !== undefined &&
            (obj.totalInputTokens = (message.totalInputTokens || Long.UZERO).toString());
        message.totalOutputTokens !== undefined &&
            (obj.totalOutputTokens = (message.totalOutputTokens || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
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
        if (object.totalInputTokens !== undefined &&
            object.totalInputTokens !== null) {
            message.totalInputTokens = Long.fromValue(object.totalInputTokens);
        }
        if (object.totalOutputTokens !== undefined &&
            object.totalOutputTokens !== null) {
            message.totalOutputTokens = Long.fromValue(object.totalOutputTokens);
        }
        return message;
    },
};
function createBaseMsgSubmitPaymentResponse() {
    return {};
}
export const MsgSubmitPaymentResponse = {
    typeUrl: '/agent.v1.MsgSubmitPaymentResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgSubmitPaymentResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitPaymentResponse();
        return message;
    },
};
function createBaseMsgDeleteExpiredSession() {
    return {
        account: '',
        sessionId: '',
    };
}
export const MsgDeleteExpiredSession = {
    typeUrl: '/agent.v1.MsgDeleteExpiredSession',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        if (message.sessionId !== '') {
            writer.uint32(18).string(message.sessionId);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseMsgDeleteExpiredSession();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.sessionId))
            obj.sessionId = String(object.sessionId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteExpiredSession();
        message.account = object.account ?? '';
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};
function createBaseMsgDeleteExpiredSessionResponse() {
    return {};
}
export const MsgDeleteExpiredSessionResponse = {
    typeUrl: '/agent.v1.MsgDeleteExpiredSessionResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        const obj = createBaseMsgDeleteExpiredSessionResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteExpiredSessionResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
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
    UpdateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'UpdateParams', data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }
    RegisterInferenceAgent(request) {
        const data = MsgRegisterInferenceAgent.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'RegisterInferenceAgent', data);
        return promise.then((data) => MsgRegisterInferenceAgentResponse.decode(new _m0.Reader(data)));
    }
    UpdateInferenceAgent(request) {
        const data = MsgUpdateInferenceAgent.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'UpdateInferenceAgent', data);
        return promise.then((data) => MsgUpdateInferenceAgentResponse.decode(new _m0.Reader(data)));
    }
    RemoveInferenceAgent(request) {
        const data = MsgRemoveInferenceAgent.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'RemoveInferenceAgent', data);
        return promise.then((data) => MsgRemoveInferenceAgentResponse.decode(new _m0.Reader(data)));
    }
    RegisterSession(request) {
        const data = MsgRegisterSession.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'RegisterSession', data);
        return promise.then((data) => MsgRegisterSessionResponse.decode(new _m0.Reader(data)));
    }
    CancelSession(request) {
        const data = MsgCancelSession.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'CancelSession', data);
        return promise.then((data) => MsgCancelSessionResponse.decode(new _m0.Reader(data)));
    }
    SubmitPayment(request) {
        const data = MsgSubmitPayment.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'SubmitPayment', data);
        return promise.then((data) => MsgSubmitPaymentResponse.decode(new _m0.Reader(data)));
    }
    SubmitInferenceRequest(request) {
        const data = MsgSubmitInferenceRequest.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'SubmitInferenceRequest', data);
        return promise.then((data) => MsgSubmitInferenceRequestResponse.decode(new _m0.Reader(data)));
    }
    DeleteExpiredSession(request) {
        const data = MsgDeleteExpiredSession.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Msg', 'DeleteExpiredSession', data);
        return promise.then((data) => MsgDeleteExpiredSessionResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.js.map