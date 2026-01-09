/* eslint-disable */
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import { Long, isSet, fromJsonTimestamp, fromTimestamp, } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'dht.v1';
function createBaseReputation() {
    return {
        name: '',
        score: Long.ZERO,
    };
}
export const Reputation = {
    typeUrl: '/dht.v1.Reputation',
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (!message.score.isZero()) {
            writer.uint32(16).int64(message.score);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseReputation();
        if (isSet(object.name))
            obj.name = String(object.name);
        if (isSet(object.score))
            obj.score = Long.fromValue(object.score);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.score !== undefined &&
            (obj.score = (message.score || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReputation();
        message.name = object.name ?? '';
        if (object.score !== undefined && object.score !== null) {
            message.score = Long.fromValue(object.score);
        }
        return message;
    },
};
function createBaseReputationParams() {
    return {
        alpha: '',
        beta: '',
        wS: '',
        lambda: '',
        gamma: '',
        delta: '',
        rewardMultiplier: '',
        penaltyMultiplierTimeout: '',
        ar: '',
        br: '',
        cr: '',
        dr: '',
        ap: '',
        bp: '',
        cp: '',
        dp: '',
        minNesaPercent: '',
        agentPercent: '',
        maxMinerPercent: '',
        reputationRewardPercent: '',
        catchUpCap: '',
        rMin: '',
        rMax: '',
        timeoutFactor: '',
        nonResponseFactor: '',
        k1: '',
        k2: '',
        minTime: '',
        maxTime: '',
        sWindowPerModel: 0,
        validationEnabled: false,
        vDefault: '',
        nesaPdpAccount: '',
        minPenaltyAmount: Coin.fromPartial({}),
        basePenaltyAmount: Coin.fromPartial({}),
        catchUpPower: Long.UZERO,
        catchUpStopAt: '',
    };
}
export const ReputationParams = {
    typeUrl: '/dht.v1.ReputationParams',
    encode(message, writer = _m0.Writer.create()) {
        if (message.alpha !== '') {
            writer.uint32(10).string(message.alpha);
        }
        if (message.beta !== '') {
            writer.uint32(18).string(message.beta);
        }
        if (message.wS !== '') {
            writer.uint32(26).string(message.wS);
        }
        if (message.lambda !== '') {
            writer.uint32(34).string(message.lambda);
        }
        if (message.gamma !== '') {
            writer.uint32(42).string(message.gamma);
        }
        if (message.delta !== '') {
            writer.uint32(50).string(message.delta);
        }
        if (message.rewardMultiplier !== '') {
            writer.uint32(58).string(message.rewardMultiplier);
        }
        if (message.penaltyMultiplierTimeout !== '') {
            writer.uint32(66).string(message.penaltyMultiplierTimeout);
        }
        if (message.ar !== '') {
            writer.uint32(74).string(message.ar);
        }
        if (message.br !== '') {
            writer.uint32(82).string(message.br);
        }
        if (message.cr !== '') {
            writer.uint32(90).string(message.cr);
        }
        if (message.dr !== '') {
            writer.uint32(98).string(message.dr);
        }
        if (message.ap !== '') {
            writer.uint32(106).string(message.ap);
        }
        if (message.bp !== '') {
            writer.uint32(114).string(message.bp);
        }
        if (message.cp !== '') {
            writer.uint32(122).string(message.cp);
        }
        if (message.dp !== '') {
            writer.uint32(130).string(message.dp);
        }
        if (message.minNesaPercent !== '') {
            writer.uint32(138).string(message.minNesaPercent);
        }
        if (message.agentPercent !== '') {
            writer.uint32(146).string(message.agentPercent);
        }
        if (message.maxMinerPercent !== '') {
            writer.uint32(154).string(message.maxMinerPercent);
        }
        if (message.reputationRewardPercent !== '') {
            writer.uint32(162).string(message.reputationRewardPercent);
        }
        if (message.catchUpCap !== '') {
            writer.uint32(178).string(message.catchUpCap);
        }
        if (message.rMin !== '') {
            writer.uint32(186).string(message.rMin);
        }
        if (message.rMax !== '') {
            writer.uint32(194).string(message.rMax);
        }
        if (message.timeoutFactor !== '') {
            writer.uint32(202).string(message.timeoutFactor);
        }
        if (message.nonResponseFactor !== '') {
            writer.uint32(210).string(message.nonResponseFactor);
        }
        if (message.k1 !== '') {
            writer.uint32(218).string(message.k1);
        }
        if (message.k2 !== '') {
            writer.uint32(226).string(message.k2);
        }
        if (message.minTime !== '') {
            writer.uint32(234).string(message.minTime);
        }
        if (message.maxTime !== '') {
            writer.uint32(242).string(message.maxTime);
        }
        if (message.sWindowPerModel !== 0) {
            writer.uint32(248).uint32(message.sWindowPerModel);
        }
        if (message.validationEnabled === true) {
            writer.uint32(256).bool(message.validationEnabled);
        }
        if (message.vDefault !== '') {
            writer.uint32(266).string(message.vDefault);
        }
        if (message.nesaPdpAccount !== '') {
            writer.uint32(274).string(message.nesaPdpAccount);
        }
        if (message.minPenaltyAmount !== undefined) {
            Coin.encode(message.minPenaltyAmount, writer.uint32(282).fork()).ldelim();
        }
        if (message.basePenaltyAmount !== undefined) {
            Coin.encode(message.basePenaltyAmount, writer.uint32(290).fork()).ldelim();
        }
        if (!message.catchUpPower.isZero()) {
            writer.uint32(296).uint64(message.catchUpPower);
        }
        if (message.catchUpStopAt !== '') {
            writer.uint32(306).string(message.catchUpStopAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputationParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alpha = reader.string();
                    break;
                case 2:
                    message.beta = reader.string();
                    break;
                case 3:
                    message.wS = reader.string();
                    break;
                case 4:
                    message.lambda = reader.string();
                    break;
                case 5:
                    message.gamma = reader.string();
                    break;
                case 6:
                    message.delta = reader.string();
                    break;
                case 7:
                    message.rewardMultiplier = reader.string();
                    break;
                case 8:
                    message.penaltyMultiplierTimeout = reader.string();
                    break;
                case 9:
                    message.ar = reader.string();
                    break;
                case 10:
                    message.br = reader.string();
                    break;
                case 11:
                    message.cr = reader.string();
                    break;
                case 12:
                    message.dr = reader.string();
                    break;
                case 13:
                    message.ap = reader.string();
                    break;
                case 14:
                    message.bp = reader.string();
                    break;
                case 15:
                    message.cp = reader.string();
                    break;
                case 16:
                    message.dp = reader.string();
                    break;
                case 17:
                    message.minNesaPercent = reader.string();
                    break;
                case 18:
                    message.agentPercent = reader.string();
                    break;
                case 19:
                    message.maxMinerPercent = reader.string();
                    break;
                case 20:
                    message.reputationRewardPercent = reader.string();
                    break;
                case 22:
                    message.catchUpCap = reader.string();
                    break;
                case 23:
                    message.rMin = reader.string();
                    break;
                case 24:
                    message.rMax = reader.string();
                    break;
                case 25:
                    message.timeoutFactor = reader.string();
                    break;
                case 26:
                    message.nonResponseFactor = reader.string();
                    break;
                case 27:
                    message.k1 = reader.string();
                    break;
                case 28:
                    message.k2 = reader.string();
                    break;
                case 29:
                    message.minTime = reader.string();
                    break;
                case 30:
                    message.maxTime = reader.string();
                    break;
                case 31:
                    message.sWindowPerModel = reader.uint32();
                    break;
                case 32:
                    message.validationEnabled = reader.bool();
                    break;
                case 33:
                    message.vDefault = reader.string();
                    break;
                case 34:
                    message.nesaPdpAccount = reader.string();
                    break;
                case 35:
                    message.minPenaltyAmount = Coin.decode(reader, reader.uint32());
                    break;
                case 36:
                    message.basePenaltyAmount = Coin.decode(reader, reader.uint32());
                    break;
                case 37:
                    message.catchUpPower = reader.uint64();
                    break;
                case 38:
                    message.catchUpStopAt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseReputationParams();
        if (isSet(object.alpha))
            obj.alpha = String(object.alpha);
        if (isSet(object.beta))
            obj.beta = String(object.beta);
        if (isSet(object.wS))
            obj.wS = String(object.wS);
        if (isSet(object.lambda))
            obj.lambda = String(object.lambda);
        if (isSet(object.gamma))
            obj.gamma = String(object.gamma);
        if (isSet(object.delta))
            obj.delta = String(object.delta);
        if (isSet(object.rewardMultiplier))
            obj.rewardMultiplier = String(object.rewardMultiplier);
        if (isSet(object.penaltyMultiplierTimeout))
            obj.penaltyMultiplierTimeout = String(object.penaltyMultiplierTimeout);
        if (isSet(object.ar))
            obj.ar = String(object.ar);
        if (isSet(object.br))
            obj.br = String(object.br);
        if (isSet(object.cr))
            obj.cr = String(object.cr);
        if (isSet(object.dr))
            obj.dr = String(object.dr);
        if (isSet(object.ap))
            obj.ap = String(object.ap);
        if (isSet(object.bp))
            obj.bp = String(object.bp);
        if (isSet(object.cp))
            obj.cp = String(object.cp);
        if (isSet(object.dp))
            obj.dp = String(object.dp);
        if (isSet(object.minNesaPercent))
            obj.minNesaPercent = String(object.minNesaPercent);
        if (isSet(object.agentPercent))
            obj.agentPercent = String(object.agentPercent);
        if (isSet(object.maxMinerPercent))
            obj.maxMinerPercent = String(object.maxMinerPercent);
        if (isSet(object.reputationRewardPercent))
            obj.reputationRewardPercent = String(object.reputationRewardPercent);
        if (isSet(object.catchUpCap))
            obj.catchUpCap = String(object.catchUpCap);
        if (isSet(object.rMin))
            obj.rMin = String(object.rMin);
        if (isSet(object.rMax))
            obj.rMax = String(object.rMax);
        if (isSet(object.timeoutFactor))
            obj.timeoutFactor = String(object.timeoutFactor);
        if (isSet(object.nonResponseFactor))
            obj.nonResponseFactor = String(object.nonResponseFactor);
        if (isSet(object.k1))
            obj.k1 = String(object.k1);
        if (isSet(object.k2))
            obj.k2 = String(object.k2);
        if (isSet(object.minTime))
            obj.minTime = String(object.minTime);
        if (isSet(object.maxTime))
            obj.maxTime = String(object.maxTime);
        if (isSet(object.sWindowPerModel))
            obj.sWindowPerModel = Number(object.sWindowPerModel);
        if (isSet(object.validationEnabled))
            obj.validationEnabled = Boolean(object.validationEnabled);
        if (isSet(object.vDefault))
            obj.vDefault = String(object.vDefault);
        if (isSet(object.nesaPdpAccount))
            obj.nesaPdpAccount = String(object.nesaPdpAccount);
        if (isSet(object.minPenaltyAmount))
            obj.minPenaltyAmount = Coin.fromJSON(object.minPenaltyAmount);
        if (isSet(object.basePenaltyAmount))
            obj.basePenaltyAmount = Coin.fromJSON(object.basePenaltyAmount);
        if (isSet(object.catchUpPower))
            obj.catchUpPower = Long.fromValue(object.catchUpPower);
        if (isSet(object.catchUpStopAt))
            obj.catchUpStopAt = String(object.catchUpStopAt);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.alpha !== undefined && (obj.alpha = message.alpha);
        message.beta !== undefined && (obj.beta = message.beta);
        message.wS !== undefined && (obj.wS = message.wS);
        message.lambda !== undefined && (obj.lambda = message.lambda);
        message.gamma !== undefined && (obj.gamma = message.gamma);
        message.delta !== undefined && (obj.delta = message.delta);
        message.rewardMultiplier !== undefined &&
            (obj.rewardMultiplier = message.rewardMultiplier);
        message.penaltyMultiplierTimeout !== undefined &&
            (obj.penaltyMultiplierTimeout = message.penaltyMultiplierTimeout);
        message.ar !== undefined && (obj.ar = message.ar);
        message.br !== undefined && (obj.br = message.br);
        message.cr !== undefined && (obj.cr = message.cr);
        message.dr !== undefined && (obj.dr = message.dr);
        message.ap !== undefined && (obj.ap = message.ap);
        message.bp !== undefined && (obj.bp = message.bp);
        message.cp !== undefined && (obj.cp = message.cp);
        message.dp !== undefined && (obj.dp = message.dp);
        message.minNesaPercent !== undefined &&
            (obj.minNesaPercent = message.minNesaPercent);
        message.agentPercent !== undefined &&
            (obj.agentPercent = message.agentPercent);
        message.maxMinerPercent !== undefined &&
            (obj.maxMinerPercent = message.maxMinerPercent);
        message.reputationRewardPercent !== undefined &&
            (obj.reputationRewardPercent = message.reputationRewardPercent);
        message.catchUpCap !== undefined && (obj.catchUpCap = message.catchUpCap);
        message.rMin !== undefined && (obj.rMin = message.rMin);
        message.rMax !== undefined && (obj.rMax = message.rMax);
        message.timeoutFactor !== undefined &&
            (obj.timeoutFactor = message.timeoutFactor);
        message.nonResponseFactor !== undefined &&
            (obj.nonResponseFactor = message.nonResponseFactor);
        message.k1 !== undefined && (obj.k1 = message.k1);
        message.k2 !== undefined && (obj.k2 = message.k2);
        message.minTime !== undefined && (obj.minTime = message.minTime);
        message.maxTime !== undefined && (obj.maxTime = message.maxTime);
        message.sWindowPerModel !== undefined &&
            (obj.sWindowPerModel = Math.round(message.sWindowPerModel));
        message.validationEnabled !== undefined &&
            (obj.validationEnabled = message.validationEnabled);
        message.vDefault !== undefined && (obj.vDefault = message.vDefault);
        message.nesaPdpAccount !== undefined &&
            (obj.nesaPdpAccount = message.nesaPdpAccount);
        message.minPenaltyAmount !== undefined &&
            (obj.minPenaltyAmount = message.minPenaltyAmount
                ? Coin.toJSON(message.minPenaltyAmount)
                : undefined);
        message.basePenaltyAmount !== undefined &&
            (obj.basePenaltyAmount = message.basePenaltyAmount
                ? Coin.toJSON(message.basePenaltyAmount)
                : undefined);
        message.catchUpPower !== undefined &&
            (obj.catchUpPower = (message.catchUpPower || Long.UZERO).toString());
        message.catchUpStopAt !== undefined &&
            (obj.catchUpStopAt = message.catchUpStopAt);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReputationParams();
        message.alpha = object.alpha ?? '';
        message.beta = object.beta ?? '';
        message.wS = object.wS ?? '';
        message.lambda = object.lambda ?? '';
        message.gamma = object.gamma ?? '';
        message.delta = object.delta ?? '';
        message.rewardMultiplier = object.rewardMultiplier ?? '';
        message.penaltyMultiplierTimeout = object.penaltyMultiplierTimeout ?? '';
        message.ar = object.ar ?? '';
        message.br = object.br ?? '';
        message.cr = object.cr ?? '';
        message.dr = object.dr ?? '';
        message.ap = object.ap ?? '';
        message.bp = object.bp ?? '';
        message.cp = object.cp ?? '';
        message.dp = object.dp ?? '';
        message.minNesaPercent = object.minNesaPercent ?? '';
        message.agentPercent = object.agentPercent ?? '';
        message.maxMinerPercent = object.maxMinerPercent ?? '';
        message.reputationRewardPercent = object.reputationRewardPercent ?? '';
        message.catchUpCap = object.catchUpCap ?? '';
        message.rMin = object.rMin ?? '';
        message.rMax = object.rMax ?? '';
        message.timeoutFactor = object.timeoutFactor ?? '';
        message.nonResponseFactor = object.nonResponseFactor ?? '';
        message.k1 = object.k1 ?? '';
        message.k2 = object.k2 ?? '';
        message.minTime = object.minTime ?? '';
        message.maxTime = object.maxTime ?? '';
        message.sWindowPerModel = object.sWindowPerModel ?? 0;
        message.validationEnabled = object.validationEnabled ?? false;
        message.vDefault = object.vDefault ?? '';
        message.nesaPdpAccount = object.nesaPdpAccount ?? '';
        if (object.minPenaltyAmount !== undefined &&
            object.minPenaltyAmount !== null) {
            message.minPenaltyAmount = Coin.fromPartial(object.minPenaltyAmount);
        }
        if (object.basePenaltyAmount !== undefined &&
            object.basePenaltyAmount !== null) {
            message.basePenaltyAmount = Coin.fromPartial(object.basePenaltyAmount);
        }
        if (object.catchUpPower !== undefined && object.catchUpPower !== null) {
            message.catchUpPower = Long.fromValue(object.catchUpPower);
        }
        message.catchUpStopAt = object.catchUpStopAt ?? '';
        return message;
    },
};
function createBaseRequestLog() {
    return {
        requestId: '',
        minerId: '',
        modelName: '',
        inputTokens: Long.UZERO,
        outputTokens: Long.UZERO,
        actualTime: Long.UZERO,
        avgExecutionTime: '',
        eTime: '',
        sRaw: '',
        s: '',
        sMin: '',
        sMax: '',
        sRollingAfter: '',
        m: 0,
        rBefore: '',
        rAfter: '',
        timestamp: Timestamp.fromPartial({}),
        tNorm: '',
        catchUpFactor: '',
        inferenceFee: Coin.fromPartial({}),
        minerReward: Coin.fromPartial({}),
        nesaReward: Coin.fromPartial({}),
        agentReward: Coin.fromPartial({}),
        minerPenalty: Coin.fromPartial({}),
        nonResponse: false,
        sessionId: '',
    };
}
export const RequestLog = {
    typeUrl: '/dht.v1.RequestLog',
    encode(message, writer = _m0.Writer.create()) {
        if (message.requestId !== '') {
            writer.uint32(10).string(message.requestId);
        }
        if (message.minerId !== '') {
            writer.uint32(18).string(message.minerId);
        }
        if (message.modelName !== '') {
            writer.uint32(26).string(message.modelName);
        }
        if (!message.inputTokens.isZero()) {
            writer.uint32(32).uint64(message.inputTokens);
        }
        if (!message.outputTokens.isZero()) {
            writer.uint32(40).uint64(message.outputTokens);
        }
        if (!message.actualTime.isZero()) {
            writer.uint32(48).uint64(message.actualTime);
        }
        if (message.avgExecutionTime !== '') {
            writer.uint32(58).string(message.avgExecutionTime);
        }
        if (message.eTime !== '') {
            writer.uint32(66).string(message.eTime);
        }
        if (message.sRaw !== '') {
            writer.uint32(74).string(message.sRaw);
        }
        if (message.s !== '') {
            writer.uint32(82).string(message.s);
        }
        if (message.sMin !== '') {
            writer.uint32(90).string(message.sMin);
        }
        if (message.sMax !== '') {
            writer.uint32(98).string(message.sMax);
        }
        if (message.sRollingAfter !== '') {
            writer.uint32(106).string(message.sRollingAfter);
        }
        if (message.m !== 0) {
            writer.uint32(112).uint32(message.m);
        }
        if (message.rBefore !== '') {
            writer.uint32(122).string(message.rBefore);
        }
        if (message.rAfter !== '') {
            writer.uint32(130).string(message.rAfter);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(message.timestamp, writer.uint32(138).fork()).ldelim();
        }
        if (message.tNorm !== '') {
            writer.uint32(146).string(message.tNorm);
        }
        if (message.catchUpFactor !== '') {
            writer.uint32(154).string(message.catchUpFactor);
        }
        if (message.inferenceFee !== undefined) {
            Coin.encode(message.inferenceFee, writer.uint32(162).fork()).ldelim();
        }
        if (message.minerReward !== undefined) {
            Coin.encode(message.minerReward, writer.uint32(170).fork()).ldelim();
        }
        if (message.nesaReward !== undefined) {
            Coin.encode(message.nesaReward, writer.uint32(178).fork()).ldelim();
        }
        if (message.agentReward !== undefined) {
            Coin.encode(message.agentReward, writer.uint32(186).fork()).ldelim();
        }
        if (message.minerPenalty !== undefined) {
            Coin.encode(message.minerPenalty, writer.uint32(194).fork()).ldelim();
        }
        if (message.nonResponse === true) {
            writer.uint32(200).bool(message.nonResponse);
        }
        if (message.sessionId !== '') {
            writer.uint32(210).string(message.sessionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.string();
                    break;
                case 2:
                    message.minerId = reader.string();
                    break;
                case 3:
                    message.modelName = reader.string();
                    break;
                case 4:
                    message.inputTokens = reader.uint64();
                    break;
                case 5:
                    message.outputTokens = reader.uint64();
                    break;
                case 6:
                    message.actualTime = reader.uint64();
                    break;
                case 7:
                    message.avgExecutionTime = reader.string();
                    break;
                case 8:
                    message.eTime = reader.string();
                    break;
                case 9:
                    message.sRaw = reader.string();
                    break;
                case 10:
                    message.s = reader.string();
                    break;
                case 11:
                    message.sMin = reader.string();
                    break;
                case 12:
                    message.sMax = reader.string();
                    break;
                case 13:
                    message.sRollingAfter = reader.string();
                    break;
                case 14:
                    message.m = reader.uint32();
                    break;
                case 15:
                    message.rBefore = reader.string();
                    break;
                case 16:
                    message.rAfter = reader.string();
                    break;
                case 17:
                    message.timestamp = Timestamp.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.tNorm = reader.string();
                    break;
                case 19:
                    message.catchUpFactor = reader.string();
                    break;
                case 20:
                    message.inferenceFee = Coin.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.minerReward = Coin.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.nesaReward = Coin.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.agentReward = Coin.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.minerPenalty = Coin.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.nonResponse = reader.bool();
                    break;
                case 26:
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
        const obj = createBaseRequestLog();
        if (isSet(object.requestId))
            obj.requestId = String(object.requestId);
        if (isSet(object.minerId))
            obj.minerId = String(object.minerId);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.inputTokens))
            obj.inputTokens = Long.fromValue(object.inputTokens);
        if (isSet(object.outputTokens))
            obj.outputTokens = Long.fromValue(object.outputTokens);
        if (isSet(object.actualTime))
            obj.actualTime = Long.fromValue(object.actualTime);
        if (isSet(object.avgExecutionTime))
            obj.avgExecutionTime = String(object.avgExecutionTime);
        if (isSet(object.eTime))
            obj.eTime = String(object.eTime);
        if (isSet(object.sRaw))
            obj.sRaw = String(object.sRaw);
        if (isSet(object.s))
            obj.s = String(object.s);
        if (isSet(object.sMin))
            obj.sMin = String(object.sMin);
        if (isSet(object.sMax))
            obj.sMax = String(object.sMax);
        if (isSet(object.sRollingAfter))
            obj.sRollingAfter = String(object.sRollingAfter);
        if (isSet(object.m))
            obj.m = Number(object.m);
        if (isSet(object.rBefore))
            obj.rBefore = String(object.rBefore);
        if (isSet(object.rAfter))
            obj.rAfter = String(object.rAfter);
        if (isSet(object.timestamp))
            obj.timestamp = fromJsonTimestamp(object.timestamp);
        if (isSet(object.tNorm))
            obj.tNorm = String(object.tNorm);
        if (isSet(object.catchUpFactor))
            obj.catchUpFactor = String(object.catchUpFactor);
        if (isSet(object.inferenceFee))
            obj.inferenceFee = Coin.fromJSON(object.inferenceFee);
        if (isSet(object.minerReward))
            obj.minerReward = Coin.fromJSON(object.minerReward);
        if (isSet(object.nesaReward))
            obj.nesaReward = Coin.fromJSON(object.nesaReward);
        if (isSet(object.agentReward))
            obj.agentReward = Coin.fromJSON(object.agentReward);
        if (isSet(object.minerPenalty))
            obj.minerPenalty = Coin.fromJSON(object.minerPenalty);
        if (isSet(object.nonResponse))
            obj.nonResponse = Boolean(object.nonResponse);
        if (isSet(object.sessionId))
            obj.sessionId = String(object.sessionId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = message.requestId);
        message.minerId !== undefined && (obj.minerId = message.minerId);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.inputTokens !== undefined &&
            (obj.inputTokens = (message.inputTokens || Long.UZERO).toString());
        message.outputTokens !== undefined &&
            (obj.outputTokens = (message.outputTokens || Long.UZERO).toString());
        message.actualTime !== undefined &&
            (obj.actualTime = (message.actualTime || Long.UZERO).toString());
        message.avgExecutionTime !== undefined &&
            (obj.avgExecutionTime = message.avgExecutionTime);
        message.eTime !== undefined && (obj.eTime = message.eTime);
        message.sRaw !== undefined && (obj.sRaw = message.sRaw);
        message.s !== undefined && (obj.s = message.s);
        message.sMin !== undefined && (obj.sMin = message.sMin);
        message.sMax !== undefined && (obj.sMax = message.sMax);
        message.sRollingAfter !== undefined &&
            (obj.sRollingAfter = message.sRollingAfter);
        message.m !== undefined && (obj.m = Math.round(message.m));
        message.rBefore !== undefined && (obj.rBefore = message.rBefore);
        message.rAfter !== undefined && (obj.rAfter = message.rAfter);
        message.timestamp !== undefined &&
            (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
        message.tNorm !== undefined && (obj.tNorm = message.tNorm);
        message.catchUpFactor !== undefined &&
            (obj.catchUpFactor = message.catchUpFactor);
        message.inferenceFee !== undefined &&
            (obj.inferenceFee = message.inferenceFee
                ? Coin.toJSON(message.inferenceFee)
                : undefined);
        message.minerReward !== undefined &&
            (obj.minerReward = message.minerReward
                ? Coin.toJSON(message.minerReward)
                : undefined);
        message.nesaReward !== undefined &&
            (obj.nesaReward = message.nesaReward
                ? Coin.toJSON(message.nesaReward)
                : undefined);
        message.agentReward !== undefined &&
            (obj.agentReward = message.agentReward
                ? Coin.toJSON(message.agentReward)
                : undefined);
        message.minerPenalty !== undefined &&
            (obj.minerPenalty = message.minerPenalty
                ? Coin.toJSON(message.minerPenalty)
                : undefined);
        message.nonResponse !== undefined &&
            (obj.nonResponse = message.nonResponse);
        message.sessionId !== undefined && (obj.sessionId = message.sessionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRequestLog();
        message.requestId = object.requestId ?? '';
        message.minerId = object.minerId ?? '';
        message.modelName = object.modelName ?? '';
        if (object.inputTokens !== undefined && object.inputTokens !== null) {
            message.inputTokens = Long.fromValue(object.inputTokens);
        }
        if (object.outputTokens !== undefined && object.outputTokens !== null) {
            message.outputTokens = Long.fromValue(object.outputTokens);
        }
        if (object.actualTime !== undefined && object.actualTime !== null) {
            message.actualTime = Long.fromValue(object.actualTime);
        }
        message.avgExecutionTime = object.avgExecutionTime ?? '';
        message.eTime = object.eTime ?? '';
        message.sRaw = object.sRaw ?? '';
        message.s = object.s ?? '';
        message.sMin = object.sMin ?? '';
        message.sMax = object.sMax ?? '';
        message.sRollingAfter = object.sRollingAfter ?? '';
        message.m = object.m ?? 0;
        message.rBefore = object.rBefore ?? '';
        message.rAfter = object.rAfter ?? '';
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Timestamp.fromPartial(object.timestamp);
        }
        message.tNorm = object.tNorm ?? '';
        message.catchUpFactor = object.catchUpFactor ?? '';
        if (object.inferenceFee !== undefined && object.inferenceFee !== null) {
            message.inferenceFee = Coin.fromPartial(object.inferenceFee);
        }
        if (object.minerReward !== undefined && object.minerReward !== null) {
            message.minerReward = Coin.fromPartial(object.minerReward);
        }
        if (object.nesaReward !== undefined && object.nesaReward !== null) {
            message.nesaReward = Coin.fromPartial(object.nesaReward);
        }
        if (object.agentReward !== undefined && object.agentReward !== null) {
            message.agentReward = Coin.fromPartial(object.agentReward);
        }
        if (object.minerPenalty !== undefined && object.minerPenalty !== null) {
            message.minerPenalty = Coin.fromPartial(object.minerPenalty);
        }
        message.nonResponse = object.nonResponse ?? false;
        message.sessionId = object.sessionId ?? '';
        return message;
    },
};
//# sourceMappingURL=reputation.js.map