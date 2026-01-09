/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, } from '../../../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'cosmos.base.query.v1beta1';
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: Long.UZERO,
        limit: Long.UZERO,
        countTotal: false,
        reverse: false,
    };
}
export const PageRequest = {
    typeUrl: '/cosmos.base.query.v1beta1.PageRequest',
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (!message.offset.isZero()) {
            writer.uint32(16).uint64(message.offset);
        }
        if (!message.limit.isZero()) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePageRequest();
        if (isSet(object.key))
            obj.key = bytesFromBase64(object.key);
        if (isSet(object.offset))
            obj.offset = Long.fromValue(object.offset);
        if (isSet(object.limit))
            obj.limit = Long.fromValue(object.limit);
        if (isSet(object.countTotal))
            obj.countTotal = Boolean(object.countTotal);
        if (isSet(object.reverse))
            obj.reverse = Boolean(object.reverse);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.offset !== undefined &&
            (obj.offset = (message.offset || Long.UZERO).toString());
        message.limit !== undefined &&
            (obj.limit = (message.limit || Long.UZERO).toString());
        message.countTotal !== undefined && (obj.countTotal = message.countTotal);
        message.reverse !== undefined && (obj.reverse = message.reverse);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array();
        if (object.offset !== undefined && object.offset !== null) {
            message.offset = Long.fromValue(object.offset);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = Long.fromValue(object.limit);
        }
        message.countTotal = object.countTotal ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    },
};
function createBasePageResponse() {
    return {
        nextKey: new Uint8Array(),
        total: Long.UZERO,
    };
}
export const PageResponse = {
    typeUrl: '/cosmos.base.query.v1beta1.PageResponse',
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
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
        const obj = createBasePageResponse();
        if (isSet(object.nextKey))
            obj.nextKey = bytesFromBase64(object.nextKey);
        if (isSet(object.total))
            obj.total = Long.fromValue(object.total);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nextKey !== undefined &&
            (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        message.total !== undefined &&
            (obj.total = (message.total || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.nextKey = object.nextKey ?? new Uint8Array();
        if (object.total !== undefined && object.total !== null) {
            message.total = Long.fromValue(object.total);
        }
        return message;
    },
};
//# sourceMappingURL=pagination.js.map