/* eslint-disable */
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import _m0 from 'protobufjs/minimal.js';
import { isSet, fromJsonTimestamp, fromTimestamp, } from '../../helpers.js';
export const protobufPackage = 'dht.v1';
/** BondStatus defines the deposit status of a miner or Orchestrator. */
export var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (BondStatus = {}));
export function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'BOND_STATUS_UNSPECIFIED':
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case 'BOND_STATUS_UNBONDED':
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case 'BOND_STATUS_UNBONDING':
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case 'BOND_STATUS_BONDED':
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
export function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return 'BOND_STATUS_UNSPECIFIED';
        case BondStatus.BOND_STATUS_UNBONDED:
            return 'BOND_STATUS_UNBONDED';
        case BondStatus.BOND_STATUS_UNBONDING:
            return 'BOND_STATUS_UNBONDING';
        case BondStatus.BOND_STATUS_BONDED:
            return 'BOND_STATUS_BONDED';
        case BondStatus.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}
function createBaseUnbondingEntry() {
    return {
        nodeId: '',
        amount: Coin.fromPartial({}),
        completionTime: Timestamp.fromPartial({}),
        receiver: '',
    };
}
export const UnbondingEntry = {
    typeUrl: '/dht.v1.UnbondingEntry',
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== '') {
            writer.uint32(10).string(message.nodeId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.completionTime !== undefined) {
            Timestamp.encode(message.completionTime, writer.uint32(26).fork()).ldelim();
        }
        if (message.receiver !== '') {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeId = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.completionTime = Timestamp.decode(reader, reader.uint32());
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
        const obj = createBaseUnbondingEntry();
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.amount))
            obj.amount = Coin.fromJSON(object.amount);
        if (isSet(object.completionTime))
            obj.completionTime = fromJsonTimestamp(object.completionTime);
        if (isSet(object.receiver))
            obj.receiver = String(object.receiver);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined &&
            (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.completionTime !== undefined &&
            (obj.completionTime = fromTimestamp(message.completionTime).toISOString());
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingEntry();
        message.nodeId = object.nodeId ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        }
        if (object.completionTime !== undefined && object.completionTime !== null) {
            message.completionTime = Timestamp.fromPartial(object.completionTime);
        }
        message.receiver = object.receiver ?? '';
        return message;
    },
};
//# sourceMappingURL=deposit.js.map