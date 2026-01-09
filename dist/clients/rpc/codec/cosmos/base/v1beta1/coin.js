/* eslint-disable */
import _m0 from 'protobufjs/minimal.js';
import { isSet } from '../../../helpers.js';
export const protobufPackage = 'cosmos.base.v1beta1';
function createBaseCoin() {
    return {
        denom: '',
        amount: '',
    };
}
export const Coin = {
    typeUrl: '/cosmos.base.v1beta1.Coin',
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCoin();
        if (isSet(object.denom))
            obj.denom = String(object.denom);
        if (isSet(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCoin();
        message.denom = object.denom ?? '';
        message.amount = object.amount ?? '';
        return message;
    },
};
function createBaseDecCoin() {
    return {
        denom: '',
        amount: '',
    };
}
export const DecCoin = {
    typeUrl: '/cosmos.base.v1beta1.DecCoin',
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDecCoin();
        if (isSet(object.denom))
            obj.denom = String(object.denom);
        if (isSet(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDecCoin();
        message.denom = object.denom ?? '';
        message.amount = object.amount ?? '';
        return message;
    },
};
//# sourceMappingURL=coin.js.map