/* eslint-disable */
import { Coin } from '../../base/v1beta1/coin.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'cosmos.bank.v1beta1';
function createBaseSendAuthorization() {
    return {
        spendLimit: [],
    };
}
export const SendAuthorization = {
    typeUrl: '/cosmos.bank.v1beta1.SendAuthorization',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.spendLimit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSendAuthorization();
        if (Array.isArray(object?.spendLimit))
            obj.spendLimit = object.spendLimit.map((e) => Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spendLimit = message.spendLimit.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.spendLimit = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSendAuthorization();
        message.spendLimit =
            object.spendLimit?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=authz.js.map