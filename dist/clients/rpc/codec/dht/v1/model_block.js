/* eslint-disable */
import _m0 from 'protobufjs/minimal.js';
import { isSet } from '../../helpers.js';
export const protobufPackage = 'dht.v1';
function createBaseModelBlock() {
    return {
        modelName: '',
        nodeId: '',
        blockId: 0,
        cid: '',
    };
}
export const ModelBlock = {
    typeUrl: '/dht.v1.ModelBlock',
    encode(message, writer = _m0.Writer.create()) {
        if (message.modelName !== '') {
            writer.uint32(10).string(message.modelName);
        }
        if (message.nodeId !== '') {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.blockId !== 0) {
            writer.uint32(24).uint32(message.blockId);
        }
        if (message.cid !== '') {
            writer.uint32(34).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModelBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelName = reader.string();
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.blockId = reader.uint32();
                    break;
                case 4:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModelBlock();
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.blockId))
            obj.blockId = Number(object.blockId);
        if (isSet(object.cid))
            obj.cid = String(object.cid);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.blockId !== undefined &&
            (obj.blockId = Math.round(message.blockId));
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModelBlock();
        message.modelName = object.modelName ?? '';
        message.nodeId = object.nodeId ?? '';
        message.blockId = object.blockId ?? 0;
        message.cid = object.cid ?? '';
        return message;
    },
};
//# sourceMappingURL=model_block.js.map