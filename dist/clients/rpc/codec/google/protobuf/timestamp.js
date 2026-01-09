/* eslint-disable */
import { Long, isSet } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'google.protobuf';
function createBaseTimestamp() {
    return {
        seconds: Long.ZERO,
        nanos: 0,
    };
}
export const Timestamp = {
    typeUrl: '/google.protobuf.Timestamp',
    encode(message, writer = _m0.Writer.create()) {
        if (!message.seconds.isZero()) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTimestamp();
        if (isSet(object.seconds))
            obj.seconds = Long.fromValue(object.seconds);
        if (isSet(object.nanos))
            obj.nanos = Number(object.nanos);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined &&
            (obj.seconds = (message.seconds || Long.ZERO).toString());
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = Long.fromValue(object.seconds);
        }
        message.nanos = object.nanos ?? 0;
        return message;
    },
};
//# sourceMappingURL=timestamp.js.map