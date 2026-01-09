/* eslint-disable */
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Duration } from '../../google/protobuf/duration.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import { Long, isSet, bytesFromBase64, base64FromBytes, fromJsonTimestamp, fromTimestamp, } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'agent.v1';
/** AgentStatus enumerates the inference agent status. */
export var AgentStatus;
(function (AgentStatus) {
    /** AGENT_STATUS_ACTIVE - AGENT_STATUS_ACTIVE represents the active status. */
    AgentStatus[AgentStatus["AGENT_STATUS_ACTIVE"] = 0] = "AGENT_STATUS_ACTIVE";
    /** AGENT_STATUS_INACTIVE - AGENT_STATUS_INACTIVE represents the inactive status. */
    AgentStatus[AgentStatus["AGENT_STATUS_INACTIVE"] = 1] = "AGENT_STATUS_INACTIVE";
    AgentStatus[AgentStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AgentStatus || (AgentStatus = {}));
export function agentStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'AGENT_STATUS_ACTIVE':
            return AgentStatus.AGENT_STATUS_ACTIVE;
        case 1:
        case 'AGENT_STATUS_INACTIVE':
            return AgentStatus.AGENT_STATUS_INACTIVE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AgentStatus.UNRECOGNIZED;
    }
}
export function agentStatusToJSON(object) {
    switch (object) {
        case AgentStatus.AGENT_STATUS_ACTIVE:
            return 'AGENT_STATUS_ACTIVE';
        case AgentStatus.AGENT_STATUS_INACTIVE:
            return 'AGENT_STATUS_INACTIVE';
        case AgentStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/** SessionStatus enumerates the statuses of a session. */
export var SessionStatus;
(function (SessionStatus) {
    /** SESSION_STATUS_DEFAULT - SESSION_STATUS_DEFAULT is a placeholder and will not appear in session. */
    SessionStatus[SessionStatus["SESSION_STATUS_DEFAULT"] = 0] = "SESSION_STATUS_DEFAULT";
    /** SESSION_STATUS_PENDING - SESSION_STATUS_PENDING indicates the session is pending. It's waiting for the payment to be submitted. */
    SessionStatus[SessionStatus["SESSION_STATUS_PENDING"] = 1] = "SESSION_STATUS_PENDING";
    /** SESSION_STATUS_SUBMITTED - SESSION_STATUS_SUBMITTED indicates the payment has been submitted. */
    SessionStatus[SessionStatus["SESSION_STATUS_SUBMITTED"] = 2] = "SESSION_STATUS_SUBMITTED";
    SessionStatus[SessionStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SessionStatus || (SessionStatus = {}));
export function sessionStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'SESSION_STATUS_DEFAULT':
            return SessionStatus.SESSION_STATUS_DEFAULT;
        case 1:
        case 'SESSION_STATUS_PENDING':
            return SessionStatus.SESSION_STATUS_PENDING;
        case 2:
        case 'SESSION_STATUS_SUBMITTED':
            return SessionStatus.SESSION_STATUS_SUBMITTED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return SessionStatus.UNRECOGNIZED;
    }
}
export function sessionStatusToJSON(object) {
    switch (object) {
        case SessionStatus.SESSION_STATUS_DEFAULT:
            return 'SESSION_STATUS_DEFAULT';
        case SessionStatus.SESSION_STATUS_PENDING:
            return 'SESSION_STATUS_PENDING';
        case SessionStatus.SESSION_STATUS_SUBMITTED:
            return 'SESSION_STATUS_SUBMITTED';
        case SessionStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseParams() {
    return {
        agentMinimumLock: Coin.fromPartial({}),
        userMinimumLock: Coin.fromPartial({}),
        sessionTime: Duration.fromPartial({}),
        challengeTime: Duration.fromPartial({}),
        globalSeed: new Uint8Array(),
        lowestAgentVersion: Long.UZERO,
        highestAgentVersion: Long.UZERO,
        challengeRate: Long.UZERO,
        validatorCount: Long.UZERO,
        challengeRound: Long.UZERO,
        challengeCidTime: Duration.fromPartial({}),
        challengeReplyTime: Duration.fromPartial({}),
        challengeMerkleTime: Duration.fromPartial({}),
        challengeOriginTime: Duration.fromPartial({}),
        agentValidTime: Duration.fromPartial({}),
        admin: '',
    };
}
export const Params = {
    typeUrl: '/agent.v1.Params',
    encode(message, writer = _m0.Writer.create()) {
        if (message.agentMinimumLock !== undefined) {
            Coin.encode(message.agentMinimumLock, writer.uint32(10).fork()).ldelim();
        }
        if (message.userMinimumLock !== undefined) {
            Coin.encode(message.userMinimumLock, writer.uint32(18).fork()).ldelim();
        }
        if (message.sessionTime !== undefined) {
            Duration.encode(message.sessionTime, writer.uint32(26).fork()).ldelim();
        }
        if (message.challengeTime !== undefined) {
            Duration.encode(message.challengeTime, writer.uint32(34).fork()).ldelim();
        }
        if (message.globalSeed.length !== 0) {
            writer.uint32(42).bytes(message.globalSeed);
        }
        if (!message.lowestAgentVersion.isZero()) {
            writer.uint32(48).uint64(message.lowestAgentVersion);
        }
        if (!message.highestAgentVersion.isZero()) {
            writer.uint32(56).uint64(message.highestAgentVersion);
        }
        if (!message.challengeRate.isZero()) {
            writer.uint32(64).uint64(message.challengeRate);
        }
        if (!message.validatorCount.isZero()) {
            writer.uint32(72).uint64(message.validatorCount);
        }
        if (!message.challengeRound.isZero()) {
            writer.uint32(80).uint64(message.challengeRound);
        }
        if (message.challengeCidTime !== undefined) {
            Duration.encode(message.challengeCidTime, writer.uint32(90).fork()).ldelim();
        }
        if (message.challengeReplyTime !== undefined) {
            Duration.encode(message.challengeReplyTime, writer.uint32(98).fork()).ldelim();
        }
        if (message.challengeMerkleTime !== undefined) {
            Duration.encode(message.challengeMerkleTime, writer.uint32(106).fork()).ldelim();
        }
        if (message.challengeOriginTime !== undefined) {
            Duration.encode(message.challengeOriginTime, writer.uint32(114).fork()).ldelim();
        }
        if (message.agentValidTime !== undefined) {
            Duration.encode(message.agentValidTime, writer.uint32(122).fork()).ldelim();
        }
        if (message.admin !== '') {
            writer.uint32(130).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.agentMinimumLock = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userMinimumLock = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sessionTime = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.challengeTime = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.globalSeed = reader.bytes();
                    break;
                case 6:
                    message.lowestAgentVersion = reader.uint64();
                    break;
                case 7:
                    message.highestAgentVersion = reader.uint64();
                    break;
                case 8:
                    message.challengeRate = reader.uint64();
                    break;
                case 9:
                    message.validatorCount = reader.uint64();
                    break;
                case 10:
                    message.challengeRound = reader.uint64();
                    break;
                case 11:
                    message.challengeCidTime = Duration.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.challengeReplyTime = Duration.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.challengeMerkleTime = Duration.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.challengeOriginTime = Duration.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.agentValidTime = Duration.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if (isSet(object.agentMinimumLock))
            obj.agentMinimumLock = Coin.fromJSON(object.agentMinimumLock);
        if (isSet(object.userMinimumLock))
            obj.userMinimumLock = Coin.fromJSON(object.userMinimumLock);
        if (isSet(object.sessionTime))
            obj.sessionTime = Duration.fromJSON(object.sessionTime);
        if (isSet(object.challengeTime))
            obj.challengeTime = Duration.fromJSON(object.challengeTime);
        if (isSet(object.globalSeed))
            obj.globalSeed = bytesFromBase64(object.globalSeed);
        if (isSet(object.lowestAgentVersion))
            obj.lowestAgentVersion = Long.fromValue(object.lowestAgentVersion);
        if (isSet(object.highestAgentVersion))
            obj.highestAgentVersion = Long.fromValue(object.highestAgentVersion);
        if (isSet(object.challengeRate))
            obj.challengeRate = Long.fromValue(object.challengeRate);
        if (isSet(object.validatorCount))
            obj.validatorCount = Long.fromValue(object.validatorCount);
        if (isSet(object.challengeRound))
            obj.challengeRound = Long.fromValue(object.challengeRound);
        if (isSet(object.challengeCidTime))
            obj.challengeCidTime = Duration.fromJSON(object.challengeCidTime);
        if (isSet(object.challengeReplyTime))
            obj.challengeReplyTime = Duration.fromJSON(object.challengeReplyTime);
        if (isSet(object.challengeMerkleTime))
            obj.challengeMerkleTime = Duration.fromJSON(object.challengeMerkleTime);
        if (isSet(object.challengeOriginTime))
            obj.challengeOriginTime = Duration.fromJSON(object.challengeOriginTime);
        if (isSet(object.agentValidTime))
            obj.agentValidTime = Duration.fromJSON(object.agentValidTime);
        if (isSet(object.admin))
            obj.admin = String(object.admin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.agentMinimumLock !== undefined &&
            (obj.agentMinimumLock = message.agentMinimumLock
                ? Coin.toJSON(message.agentMinimumLock)
                : undefined);
        message.userMinimumLock !== undefined &&
            (obj.userMinimumLock = message.userMinimumLock
                ? Coin.toJSON(message.userMinimumLock)
                : undefined);
        message.sessionTime !== undefined &&
            (obj.sessionTime = message.sessionTime
                ? Duration.toJSON(message.sessionTime)
                : undefined);
        message.challengeTime !== undefined &&
            (obj.challengeTime = message.challengeTime
                ? Duration.toJSON(message.challengeTime)
                : undefined);
        message.globalSeed !== undefined &&
            (obj.globalSeed = base64FromBytes(message.globalSeed !== undefined
                ? message.globalSeed
                : new Uint8Array()));
        message.lowestAgentVersion !== undefined &&
            (obj.lowestAgentVersion = (message.lowestAgentVersion || Long.UZERO).toString());
        message.highestAgentVersion !== undefined &&
            (obj.highestAgentVersion = (message.highestAgentVersion || Long.UZERO).toString());
        message.challengeRate !== undefined &&
            (obj.challengeRate = (message.challengeRate || Long.UZERO).toString());
        message.validatorCount !== undefined &&
            (obj.validatorCount = (message.validatorCount || Long.UZERO).toString());
        message.challengeRound !== undefined &&
            (obj.challengeRound = (message.challengeRound || Long.UZERO).toString());
        message.challengeCidTime !== undefined &&
            (obj.challengeCidTime = message.challengeCidTime
                ? Duration.toJSON(message.challengeCidTime)
                : undefined);
        message.challengeReplyTime !== undefined &&
            (obj.challengeReplyTime = message.challengeReplyTime
                ? Duration.toJSON(message.challengeReplyTime)
                : undefined);
        message.challengeMerkleTime !== undefined &&
            (obj.challengeMerkleTime = message.challengeMerkleTime
                ? Duration.toJSON(message.challengeMerkleTime)
                : undefined);
        message.challengeOriginTime !== undefined &&
            (obj.challengeOriginTime = message.challengeOriginTime
                ? Duration.toJSON(message.challengeOriginTime)
                : undefined);
        message.agentValidTime !== undefined &&
            (obj.agentValidTime = message.agentValidTime
                ? Duration.toJSON(message.agentValidTime)
                : undefined);
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.agentMinimumLock !== undefined &&
            object.agentMinimumLock !== null) {
            message.agentMinimumLock = Coin.fromPartial(object.agentMinimumLock);
        }
        if (object.userMinimumLock !== undefined &&
            object.userMinimumLock !== null) {
            message.userMinimumLock = Coin.fromPartial(object.userMinimumLock);
        }
        if (object.sessionTime !== undefined && object.sessionTime !== null) {
            message.sessionTime = Duration.fromPartial(object.sessionTime);
        }
        if (object.challengeTime !== undefined && object.challengeTime !== null) {
            message.challengeTime = Duration.fromPartial(object.challengeTime);
        }
        message.globalSeed = object.globalSeed ?? new Uint8Array();
        if (object.lowestAgentVersion !== undefined &&
            object.lowestAgentVersion !== null) {
            message.lowestAgentVersion = Long.fromValue(object.lowestAgentVersion);
        }
        if (object.highestAgentVersion !== undefined &&
            object.highestAgentVersion !== null) {
            message.highestAgentVersion = Long.fromValue(object.highestAgentVersion);
        }
        if (object.challengeRate !== undefined && object.challengeRate !== null) {
            message.challengeRate = Long.fromValue(object.challengeRate);
        }
        if (object.validatorCount !== undefined && object.validatorCount !== null) {
            message.validatorCount = Long.fromValue(object.validatorCount);
        }
        if (object.challengeRound !== undefined && object.challengeRound !== null) {
            message.challengeRound = Long.fromValue(object.challengeRound);
        }
        if (object.challengeCidTime !== undefined &&
            object.challengeCidTime !== null) {
            message.challengeCidTime = Duration.fromPartial(object.challengeCidTime);
        }
        if (object.challengeReplyTime !== undefined &&
            object.challengeReplyTime !== null) {
            message.challengeReplyTime = Duration.fromPartial(object.challengeReplyTime);
        }
        if (object.challengeMerkleTime !== undefined &&
            object.challengeMerkleTime !== null) {
            message.challengeMerkleTime = Duration.fromPartial(object.challengeMerkleTime);
        }
        if (object.challengeOriginTime !== undefined &&
            object.challengeOriginTime !== null) {
            message.challengeOriginTime = Duration.fromPartial(object.challengeOriginTime);
        }
        if (object.agentValidTime !== undefined && object.agentValidTime !== null) {
            message.agentValidTime = Duration.fromPartial(object.agentValidTime);
        }
        message.admin = object.admin ?? '';
        return message;
    },
};
function createBaseInnerValues() {
    return {
        seed: new Uint8Array(),
    };
}
export const InnerValues = {
    typeUrl: '/agent.v1.InnerValues',
    encode(message, writer = _m0.Writer.create()) {
        if (message.seed.length !== 0) {
            writer.uint32(10).bytes(message.seed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerValues();
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
        const obj = createBaseInnerValues();
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
        const message = createBaseInnerValues();
        message.seed = object.seed ?? new Uint8Array();
        return message;
    },
};
function createBasePrestige() {
    return {
        count: Long.UZERO,
        total: Long.UZERO,
    };
}
export const Prestige = {
    typeUrl: '/agent.v1.Prestige',
    encode(message, writer = _m0.Writer.create()) {
        if (!message.count.isZero()) {
            writer.uint32(8).uint64(message.count);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrestige();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = reader.uint64();
                    break;
                case 2:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePrestige();
        if (isSet(object.count))
            obj.count = Long.fromValue(object.count);
        if (isSet(object.total))
            obj.total = Long.fromValue(object.total);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined &&
            (obj.count = (message.count || Long.UZERO).toString());
        message.total !== undefined &&
            (obj.total = (message.total || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrestige();
        if (object.count !== undefined && object.count !== null) {
            message.count = Long.fromValue(object.count);
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = Long.fromValue(object.total);
        }
        return message;
    },
};
function createBaseInferenceAgent() {
    return {
        account: '',
        url: '',
        version: Long.UZERO,
        prestige: Prestige.fromPartial({}),
        status: 0,
        validUntil: Timestamp.fromPartial({}),
    };
}
export const InferenceAgent = {
    typeUrl: '/agent.v1.InferenceAgent',
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
        if (message.prestige !== undefined) {
            Prestige.encode(message.prestige, writer.uint32(34).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.validUntil !== undefined) {
            Timestamp.encode(message.validUntil, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInferenceAgent();
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
                    message.prestige = Prestige.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status = reader.int32();
                    break;
                case 6:
                    message.validUntil = Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseInferenceAgent();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.url))
            obj.url = String(object.url);
        if (isSet(object.version))
            obj.version = Long.fromValue(object.version);
        if (isSet(object.prestige))
            obj.prestige = Prestige.fromJSON(object.prestige);
        if (isSet(object.status))
            obj.status = agentStatusFromJSON(object.status);
        if (isSet(object.validUntil))
            obj.validUntil = fromJsonTimestamp(object.validUntil);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.url !== undefined && (obj.url = message.url);
        message.version !== undefined &&
            (obj.version = (message.version || Long.UZERO).toString());
        message.prestige !== undefined &&
            (obj.prestige = message.prestige
                ? Prestige.toJSON(message.prestige)
                : undefined);
        message.status !== undefined &&
            (obj.status = agentStatusToJSON(message.status));
        message.validUntil !== undefined &&
            (obj.validUntil = fromTimestamp(message.validUntil).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInferenceAgent();
        message.account = object.account ?? '';
        message.url = object.url ?? '';
        if (object.version !== undefined && object.version !== null) {
            message.version = Long.fromValue(object.version);
        }
        if (object.prestige !== undefined && object.prestige !== null) {
            message.prestige = Prestige.fromPartial(object.prestige);
        }
        message.status = object.status ?? 0;
        if (object.validUntil !== undefined && object.validUntil !== null) {
            message.validUntil = Timestamp.fromPartial(object.validUntil);
        }
        return message;
    },
};
function createBaseTokenPrice() {
    return {
        inputPrice: Coin.fromPartial({}),
        outputPrice: Coin.fromPartial({}),
    };
}
export const TokenPrice = {
    typeUrl: '/agent.v1.TokenPrice',
    encode(message, writer = _m0.Writer.create()) {
        if (message.inputPrice !== undefined) {
            Coin.encode(message.inputPrice, writer.uint32(10).fork()).ldelim();
        }
        if (message.outputPrice !== undefined) {
            Coin.encode(message.outputPrice, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputPrice = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.outputPrice = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTokenPrice();
        if (isSet(object.inputPrice))
            obj.inputPrice = Coin.fromJSON(object.inputPrice);
        if (isSet(object.outputPrice))
            obj.outputPrice = Coin.fromJSON(object.outputPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inputPrice !== undefined &&
            (obj.inputPrice = message.inputPrice
                ? Coin.toJSON(message.inputPrice)
                : undefined);
        message.outputPrice !== undefined &&
            (obj.outputPrice = message.outputPrice
                ? Coin.toJSON(message.outputPrice)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenPrice();
        if (object.inputPrice !== undefined && object.inputPrice !== null) {
            message.inputPrice = Coin.fromPartial(object.inputPrice);
        }
        if (object.outputPrice !== undefined && object.outputPrice !== null) {
            message.outputPrice = Coin.fromPartial(object.outputPrice);
        }
        return message;
    },
};
function createBasePaymentContribution() {
    return {
        account: '',
        rate: Long.UZERO,
        amount: undefined,
    };
}
export const PaymentContribution = {
    typeUrl: '/agent.v1.PaymentContribution',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        if (!message.rate.isZero()) {
            writer.uint32(16).uint64(message.rate);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaymentContribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.rate = reader.uint64();
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
        const obj = createBasePaymentContribution();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.rate))
            obj.rate = Long.fromValue(object.rate);
        if (isSet(object.amount))
            obj.amount = Coin.fromJSON(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.rate !== undefined &&
            (obj.rate = (message.rate || Long.UZERO).toString());
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePaymentContribution();
        message.account = object.account ?? '';
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = Long.fromValue(object.rate);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        }
        return message;
    },
};
function createBasePayment() {
    return {
        inputTokens: [],
        outputTokens: [],
        merkleRoot: new Uint8Array(),
        contributions: [],
    };
}
export const Payment = {
    typeUrl: '/agent.v1.Payment',
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.inputTokens) {
            writer.uint64(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.outputTokens) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.merkleRoot.length !== 0) {
            writer.uint32(26).bytes(message.merkleRoot);
        }
        for (const v of message.contributions) {
            PaymentContribution.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.inputTokens.push(reader.uint64());
                        }
                    }
                    else {
                        message.inputTokens.push(reader.uint64());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.outputTokens.push(reader.uint64());
                        }
                    }
                    else {
                        message.outputTokens.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.merkleRoot = reader.bytes();
                    break;
                case 4:
                    message.contributions.push(PaymentContribution.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePayment();
        if (Array.isArray(object?.inputTokens))
            obj.inputTokens = object.inputTokens.map((e) => Long.fromValue(e));
        if (Array.isArray(object?.outputTokens))
            obj.outputTokens = object.outputTokens.map((e) => Long.fromValue(e));
        if (isSet(object.merkleRoot))
            obj.merkleRoot = bytesFromBase64(object.merkleRoot);
        if (Array.isArray(object?.contributions))
            obj.contributions = object.contributions.map((e) => PaymentContribution.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.inputTokens) {
            obj.inputTokens = message.inputTokens.map((e) => (e || Long.UZERO).toString());
        }
        else {
            obj.inputTokens = [];
        }
        if (message.outputTokens) {
            obj.outputTokens = message.outputTokens.map((e) => (e || Long.UZERO).toString());
        }
        else {
            obj.outputTokens = [];
        }
        message.merkleRoot !== undefined &&
            (obj.merkleRoot = base64FromBytes(message.merkleRoot !== undefined
                ? message.merkleRoot
                : new Uint8Array()));
        if (message.contributions) {
            obj.contributions = message.contributions.map((e) => e ? PaymentContribution.toJSON(e) : undefined);
        }
        else {
            obj.contributions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePayment();
        message.inputTokens =
            object.inputTokens?.map((e) => Long.fromValue(e)) || [];
        message.outputTokens =
            object.outputTokens?.map((e) => Long.fromValue(e)) || [];
        message.merkleRoot = object.merkleRoot ?? new Uint8Array();
        message.contributions =
            object.contributions?.map((e) => PaymentContribution.fromPartial(e)) ||
                [];
        return message;
    },
};
function createBaseIncome() {
    return {
        amount: [],
    };
}
export const Income = {
    typeUrl: '/agent.v1.Income',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncome();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseIncome();
        if (Array.isArray(object?.amount))
            obj.amount = object.amount.map((e) => Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncome();
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSession() {
    return {
        sessionId: '',
        account: '',
        modelName: '',
        agentAccount: '',
        userLock: Coin.fromPartial({}),
        tokenPrice: TokenPrice.fromPartial({}),
        expirationAt: Timestamp.fromPartial({}),
        payment: undefined,
        status: 0,
        availableLock: Coin.fromPartial({}),
    };
}
export const Session = {
    typeUrl: '/agent.v1.Session',
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
        if (message.agentAccount !== '') {
            writer.uint32(34).string(message.agentAccount);
        }
        if (message.userLock !== undefined) {
            Coin.encode(message.userLock, writer.uint32(42).fork()).ldelim();
        }
        if (message.tokenPrice !== undefined) {
            TokenPrice.encode(message.tokenPrice, writer.uint32(50).fork()).ldelim();
        }
        if (message.expirationAt !== undefined) {
            Timestamp.encode(message.expirationAt, writer.uint32(58).fork()).ldelim();
        }
        if (message.payment !== undefined) {
            Payment.encode(message.payment, writer.uint32(66).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(72).int32(message.status);
        }
        if (message.availableLock !== undefined) {
            Coin.encode(message.availableLock, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSession();
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
                    message.agentAccount = reader.string();
                    break;
                case 5:
                    message.userLock = Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.expirationAt = Timestamp.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.payment = Payment.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.status = reader.int32();
                    break;
                case 11:
                    message.availableLock = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSession();
        if (isSet(object.sessionId))
            obj.sessionId = String(object.sessionId);
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.agentAccount))
            obj.agentAccount = String(object.agentAccount);
        if (isSet(object.userLock))
            obj.userLock = Coin.fromJSON(object.userLock);
        if (isSet(object.tokenPrice))
            obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
        if (isSet(object.expirationAt))
            obj.expirationAt = fromJsonTimestamp(object.expirationAt);
        if (isSet(object.payment))
            obj.payment = Payment.fromJSON(object.payment);
        if (isSet(object.status))
            obj.status = sessionStatusFromJSON(object.status);
        if (isSet(object.availableLock))
            obj.availableLock = Coin.fromJSON(object.availableLock);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        message.account !== undefined && (obj.account = message.account);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.agentAccount !== undefined &&
            (obj.agentAccount = message.agentAccount);
        message.userLock !== undefined &&
            (obj.userLock = message.userLock
                ? Coin.toJSON(message.userLock)
                : undefined);
        message.tokenPrice !== undefined &&
            (obj.tokenPrice = message.tokenPrice
                ? TokenPrice.toJSON(message.tokenPrice)
                : undefined);
        message.expirationAt !== undefined &&
            (obj.expirationAt = fromTimestamp(message.expirationAt).toISOString());
        message.payment !== undefined &&
            (obj.payment = message.payment
                ? Payment.toJSON(message.payment)
                : undefined);
        message.status !== undefined &&
            (obj.status = sessionStatusToJSON(message.status));
        message.availableLock !== undefined &&
            (obj.availableLock = message.availableLock
                ? Coin.toJSON(message.availableLock)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSession();
        message.sessionId = object.sessionId ?? '';
        message.account = object.account ?? '';
        message.modelName = object.modelName ?? '';
        message.agentAccount = object.agentAccount ?? '';
        if (object.userLock !== undefined && object.userLock !== null) {
            message.userLock = Coin.fromPartial(object.userLock);
        }
        if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
            message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
        }
        if (object.expirationAt !== undefined && object.expirationAt !== null) {
            message.expirationAt = Timestamp.fromPartial(object.expirationAt);
        }
        if (object.payment !== undefined && object.payment !== null) {
            message.payment = Payment.fromPartial(object.payment);
        }
        message.status = object.status ?? 0;
        if (object.availableLock !== undefined && object.availableLock !== null) {
            message.availableLock = Coin.fromPartial(object.availableLock);
        }
        return message;
    },
};
function createBaseVrfSeed() {
    return {
        account: '',
        seed: new Uint8Array(),
    };
}
export const VrfSeed = {
    typeUrl: '/agent.v1.VrfSeed',
    encode(message, writer = _m0.Writer.create()) {
        if (message.account !== '') {
            writer.uint32(10).string(message.account);
        }
        if (message.seed.length !== 0) {
            writer.uint32(18).bytes(message.seed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVrfSeed();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
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
        const obj = createBaseVrfSeed();
        if (isSet(object.account))
            obj.account = String(object.account);
        if (isSet(object.seed))
            obj.seed = bytesFromBase64(object.seed);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.seed !== undefined &&
            (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVrfSeed();
        message.account = object.account ?? '';
        message.seed = object.seed ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=agent.js.map