/* eslint-disable */
import _m0 from 'protobufjs/minimal.js';
import { isSet } from '../../../helpers.js';
export const protobufPackage = 'nesaorg.nesachain.agent.module.v1';
function createBaseModule() {
    return {
        authority: '',
    };
}
export const Module = {
    typeUrl: '/nesaorg.nesachain.agent.module.v1.Module',
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModule();
        if (isSet(object.authority))
            obj.authority = String(object.authority);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.authority = object.authority ?? '';
        return message;
    },
};
//# sourceMappingURL=module.js.map