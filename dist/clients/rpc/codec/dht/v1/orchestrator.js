/* eslint-disable */
import { bondStatusFromJSON, bondStatusToJSON } from './deposit.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Reputation } from './reputation.js';
import { Long, isSet } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'dht.v1';
/** Availability defines the availability of an Orchestrator. */
export var Availability;
(function (Availability) {
    Availability[Availability["READY"] = 0] = "READY";
    Availability[Availability["LOADING"] = 1] = "LOADING";
    Availability[Availability["IDLE"] = 2] = "IDLE";
    Availability[Availability["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Availability || (Availability = {}));
export function availabilityFromJSON(object) {
    switch (object) {
        case 0:
        case 'READY':
            return Availability.READY;
        case 1:
        case 'LOADING':
            return Availability.LOADING;
        case 2:
        case 'IDLE':
            return Availability.IDLE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Availability.UNRECOGNIZED;
    }
}
export function availabilityToJSON(object) {
    switch (object) {
        case Availability.READY:
            return 'READY';
        case Availability.LOADING:
            return 'LOADING';
        case Availability.IDLE:
            return 'IDLE';
        case Availability.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
/** InferenceType defines the inference type of an Orchestrator. */
export var InferenceType;
(function (InferenceType) {
    InferenceType[InferenceType["DISTRIBUTED"] = 0] = "DISTRIBUTED";
    InferenceType[InferenceType["NON_DISTRIBUTED"] = 1] = "NON_DISTRIBUTED";
    InferenceType[InferenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(InferenceType || (InferenceType = {}));
export function inferenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'DISTRIBUTED':
            return InferenceType.DISTRIBUTED;
        case 1:
        case 'NON_DISTRIBUTED':
            return InferenceType.NON_DISTRIBUTED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return InferenceType.UNRECOGNIZED;
    }
}
export function inferenceTypeToJSON(object) {
    switch (object) {
        case InferenceType.DISTRIBUTED:
            return 'DISTRIBUTED';
        case InferenceType.NON_DISTRIBUTED:
            return 'NON_DISTRIBUTED';
        case InferenceType.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseOrchestrator() {
    return {
        nodeId: '',
        modelName: '',
        inferenceType: 0,
        status: 0,
        blockCount: [],
        bondStatus: 0,
        deposit: Coin.fromPartial({}),
        reputations: [],
    };
}
export const Orchestrator = {
    typeUrl: '/dht.v1.Orchestrator',
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== '') {
            writer.uint32(10).string(message.nodeId);
        }
        if (message.modelName !== '') {
            writer.uint32(18).string(message.modelName);
        }
        if (message.inferenceType !== 0) {
            writer.uint32(24).int32(message.inferenceType);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        writer.uint32(42).fork();
        for (const v of message.blockCount) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.bondStatus !== 0) {
            writer.uint32(48).int32(message.bondStatus);
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reputations) {
            Reputation.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrchestrator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeId = reader.string();
                    break;
                case 2:
                    message.modelName = reader.string();
                    break;
                case 3:
                    message.inferenceType = reader.int32();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
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
                case 6:
                    message.bondStatus = reader.int32();
                    break;
                case 7:
                    message.deposit = Coin.decode(reader, reader.uint32());
                    break;
                case 8:
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
        const obj = createBaseOrchestrator();
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.inferenceType))
            obj.inferenceType = inferenceTypeFromJSON(object.inferenceType);
        if (isSet(object.status))
            obj.status = availabilityFromJSON(object.status);
        if (Array.isArray(object?.blockCount))
            obj.blockCount = object.blockCount.map((e) => Long.fromValue(e));
        if (isSet(object.bondStatus))
            obj.bondStatus = bondStatusFromJSON(object.bondStatus);
        if (isSet(object.deposit))
            obj.deposit = Coin.fromJSON(object.deposit);
        if (Array.isArray(object?.reputations))
            obj.reputations = object.reputations.map((e) => Reputation.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.inferenceType !== undefined &&
            (obj.inferenceType = inferenceTypeToJSON(message.inferenceType));
        message.status !== undefined &&
            (obj.status = availabilityToJSON(message.status));
        if (message.blockCount) {
            obj.blockCount = message.blockCount.map((e) => (e || Long.UZERO).toString());
        }
        else {
            obj.blockCount = [];
        }
        message.bondStatus !== undefined &&
            (obj.bondStatus = bondStatusToJSON(message.bondStatus));
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? Coin.toJSON(message.deposit)
                : undefined);
        if (message.reputations) {
            obj.reputations = message.reputations.map((e) => e ? Reputation.toJSON(e) : undefined);
        }
        else {
            obj.reputations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOrchestrator();
        message.nodeId = object.nodeId ?? '';
        message.modelName = object.modelName ?? '';
        message.inferenceType = object.inferenceType ?? 0;
        message.status = object.status ?? 0;
        message.blockCount = object.blockCount?.map((e) => Long.fromValue(e)) || [];
        message.bondStatus = object.bondStatus ?? 0;
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Coin.fromPartial(object.deposit);
        }
        message.reputations =
            object.reputations?.map((e) => Reputation.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=orchestrator.js.map