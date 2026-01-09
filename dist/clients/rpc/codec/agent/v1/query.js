/* eslint-disable */
import { Params, InferenceAgent, Session, sessionStatusFromJSON, sessionStatusToJSON, } from './agent.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import { Long, isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp, } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'agent.v1';
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: '/agent.v1.QueryParamsRequest',
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
        params: undefined,
    };
}
export const QueryParamsResponse = {
    typeUrl: '/agent.v1.QueryParamsResponse',
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
function createBaseQueryInferenceAgentRequest() {
    return {
        account: '',
    };
}
export const QueryInferenceAgentRequest = {
    typeUrl: '/agent.v1.QueryInferenceAgentRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryInferenceAgentRequest();
        if (isSet(object.account))
            obj.account = String(object.account);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInferenceAgentRequest();
        message.account = object.account ?? '';
        return message;
    },
};
function createBaseQueryInferenceAgentResponse() {
    return {
        inferenceAgent: undefined,
    };
}
export const QueryInferenceAgentResponse = {
    typeUrl: '/agent.v1.QueryInferenceAgentResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.inferenceAgent !== undefined) {
            InferenceAgent.encode(message.inferenceAgent, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInferenceAgentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inferenceAgent = InferenceAgent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryInferenceAgentResponse();
        if (isSet(object.inferenceAgent))
            obj.inferenceAgent = InferenceAgent.fromJSON(object.inferenceAgent);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inferenceAgent !== undefined &&
            (obj.inferenceAgent = message.inferenceAgent
                ? InferenceAgent.toJSON(message.inferenceAgent)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInferenceAgentResponse();
        if (object.inferenceAgent !== undefined && object.inferenceAgent !== null) {
            message.inferenceAgent = InferenceAgent.fromPartial(object.inferenceAgent);
        }
        return message;
    },
};
function createBaseQueryInferenceAgentsRequest() {
    return {
        limit: Long.UZERO,
        key: new Uint8Array(),
    };
}
export const QueryInferenceAgentsRequest = {
    typeUrl: '/agent.v1.QueryInferenceAgentsRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (!message.limit.isZero()) {
            writer.uint32(8).uint64(message.limit);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInferenceAgentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseQueryInferenceAgentsRequest();
        if (isSet(object.limit))
            obj.limit = Long.fromValue(object.limit);
        if (isSet(object.key))
            obj.key = bytesFromBase64(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.limit !== undefined &&
            (obj.limit = (message.limit || Long.UZERO).toString());
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInferenceAgentsRequest();
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Long.fromValue(object.limit);
        }
        message.key = object.key ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryInferenceAgentsResponse() {
    return {
        inferenceAgents: [],
        nextKey: new Uint8Array(),
    };
}
export const QueryInferenceAgentsResponse = {
    typeUrl: '/agent.v1.QueryInferenceAgentsResponse',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.inferenceAgents) {
            InferenceAgent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextKey.length !== 0) {
            writer.uint32(18).bytes(message.nextKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInferenceAgentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inferenceAgents.push(InferenceAgent.decode(reader, reader.uint32()));
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
        const obj = createBaseQueryInferenceAgentsResponse();
        if (Array.isArray(object?.inferenceAgents))
            obj.inferenceAgents = object.inferenceAgents.map((e) => InferenceAgent.fromJSON(e));
        if (isSet(object.nextKey))
            obj.nextKey = bytesFromBase64(object.nextKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.inferenceAgents) {
            obj.inferenceAgents = message.inferenceAgents.map((e) => e ? InferenceAgent.toJSON(e) : undefined);
        }
        else {
            obj.inferenceAgents = [];
        }
        message.nextKey !== undefined &&
            (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInferenceAgentsResponse();
        message.inferenceAgents =
            object.inferenceAgents?.map((e) => InferenceAgent.fromPartial(e)) || [];
        message.nextKey = object.nextKey ?? new Uint8Array();
        return message;
    },
};
function createBaseQuerySessionRequest() {
    return {
        id: '',
    };
}
export const QuerySessionRequest = {
    typeUrl: '/agent.v1.QuerySessionRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQuerySessionRequest();
        if (isSet(object.id))
            obj.id = String(object.id);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionRequest();
        message.id = object.id ?? '';
        return message;
    },
};
function createBaseQuerySessionResponse() {
    return {
        session: undefined,
    };
}
export const QuerySessionResponse = {
    typeUrl: '/agent.v1.QuerySessionResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.session !== undefined) {
            Session.encode(message.session, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQuerySessionResponse();
        if (isSet(object.session))
            obj.session = Session.fromJSON(object.session);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined &&
            (obj.session = message.session
                ? Session.toJSON(message.session)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionResponse();
        if (object.session !== undefined && object.session !== null) {
            message.session = Session.fromPartial(object.session);
        }
        return message;
    },
};
function createBaseQuerySessionByAgentRequest() {
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
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.status = reader.int32();
                    break;
                case 3:
                    message.expireTime = Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.limit = reader.uint64();
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
    fromJSON(object) {
        const obj = createBaseQuerySessionByAgentRequest();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.status))
            obj.status = sessionStatusFromJSON(object.status);
        if (isSet(object.expireTime))
            obj.expireTime = fromJsonTimestamp(object.expireTime);
        if (isSet(object.limit))
            obj.limit = Long.fromValue(object.limit);
        if (isSet(object.orderDesc))
            obj.orderDesc = Boolean(object.orderDesc);
        if (isSet(object.key))
            obj.key = bytesFromBase64(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.status !== undefined &&
            (obj.status = sessionStatusToJSON(message.status));
        message.expireTime !== undefined &&
            (obj.expireTime = fromTimestamp(message.expireTime).toISOString());
        message.limit !== undefined &&
            (obj.limit = (message.limit || Long.UZERO).toString());
        message.orderDesc !== undefined && (obj.orderDesc = message.orderDesc);
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
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
function createBaseQuerySessionByAgentResponse() {
    return {
        sessions: [],
        nextKey: new Uint8Array(),
    };
}
export const QuerySessionByAgentResponse = {
    typeUrl: '/agent.v1.QuerySessionByAgentResponse',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sessions) {
            Session.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextKey.length !== 0) {
            writer.uint32(18).bytes(message.nextKey);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQuerySessionByAgentResponse();
        if (Array.isArray(object?.sessions))
            obj.sessions = object.sessions.map((e) => Session.fromJSON(e));
        if (isSet(object.nextKey))
            obj.nextKey = bytesFromBase64(object.nextKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.sessions) {
            obj.sessions = message.sessions.map((e) => e ? Session.toJSON(e) : undefined);
        }
        else {
            obj.sessions = [];
        }
        message.nextKey !== undefined &&
            (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySessionByAgentResponse();
        message.sessions =
            object.sessions?.map((e) => Session.fromPartial(e)) || [];
        message.nextKey = object.nextKey ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryVRFSeedRequest() {
    return {
        account: '',
    };
}
export const QueryVRFSeedRequest = {
    typeUrl: '/agent.v1.QueryVRFSeedRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryVRFSeedRequest();
        if (isSet(object.account))
            obj.account = String(object.account);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVRFSeedRequest();
        message.account = object.account ?? '';
        return message;
    },
};
function createBaseQueryVRFSeedResponse() {
    return {
        seed: new Uint8Array(),
    };
}
export const QueryVRFSeedResponse = {
    typeUrl: '/agent.v1.QueryVRFSeedResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.seed.length !== 0) {
            writer.uint32(10).bytes(message.seed);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        const obj = createBaseQueryVRFSeedResponse();
        if (isSet(object.seed))
            obj.seed = bytesFromBase64(object.seed);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.seed !== undefined &&
            (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVRFSeedResponse();
        message.seed = object.seed ?? new Uint8Array();
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.InferenceAgentRequest = this.InferenceAgentRequest.bind(this);
        this.InferenceAgentsRequest = this.InferenceAgentsRequest.bind(this);
        this.SessionRequest = this.SessionRequest.bind(this);
        this.SessionByAgentRequest = this.SessionByAgentRequest.bind(this);
        this.VRFSeedRequest = this.VRFSeedRequest.bind(this);
    }
    Params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    InferenceAgentRequest(request) {
        const data = QueryInferenceAgentRequest.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Query', 'InferenceAgentRequest', data);
        return promise.then((data) => QueryInferenceAgentResponse.decode(new _m0.Reader(data)));
    }
    InferenceAgentsRequest(request) {
        const data = QueryInferenceAgentsRequest.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Query', 'InferenceAgentsRequest', data);
        return promise.then((data) => QueryInferenceAgentsResponse.decode(new _m0.Reader(data)));
    }
    SessionRequest(request) {
        const data = QuerySessionRequest.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Query', 'SessionRequest', data);
        return promise.then((data) => QuerySessionResponse.decode(new _m0.Reader(data)));
    }
    SessionByAgentRequest(request) {
        const data = QuerySessionByAgentRequest.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Query', 'SessionByAgentRequest', data);
        return promise.then((data) => QuerySessionByAgentResponse.decode(new _m0.Reader(data)));
    }
    VRFSeedRequest(request) {
        const data = QueryVRFSeedRequest.encode(request).finish();
        const promise = this.rpc.request('agent.v1.Query', 'VRFSeedRequest', data);
        return promise.then((data) => QueryVRFSeedResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=query.js.map