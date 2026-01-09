/* eslint-disable */
import { Long, isSet, bytesFromBase64, base64FromBytes, } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'dht.v1';
function createBaseNode() {
    return {
        nodeId: '',
        publicName: '',
        version: '',
        networkAddress: '',
        walletAddress: '',
        vram: Long.UZERO,
        networkRps: 0,
        nextPings: [],
        usingRelay: false,
        labels: [],
    };
}
export const Node = {
    typeUrl: '/dht.v1.Node',
    encode(message, writer = _m0.Writer.create()) {
        if (message.nodeId !== '') {
            writer.uint32(10).string(message.nodeId);
        }
        if (message.publicName !== '') {
            writer.uint32(18).string(message.publicName);
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        if (message.networkAddress !== '') {
            writer.uint32(34).string(message.networkAddress);
        }
        if (message.walletAddress !== '') {
            writer.uint32(42).string(message.walletAddress);
        }
        if (!message.vram.isZero()) {
            writer.uint32(48).uint64(message.vram);
        }
        if (message.networkRps !== 0) {
            writer.uint32(57).double(message.networkRps);
        }
        for (const v of message.nextPings) {
            writer.uint32(66).bytes(v);
        }
        if (message.usingRelay === true) {
            writer.uint32(72).bool(message.usingRelay);
        }
        for (const v of message.labels) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeId = reader.string();
                    break;
                case 2:
                    message.publicName = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.networkAddress = reader.string();
                    break;
                case 5:
                    message.walletAddress = reader.string();
                    break;
                case 6:
                    message.vram = reader.uint64();
                    break;
                case 7:
                    message.networkRps = reader.double();
                    break;
                case 8:
                    message.nextPings.push(reader.bytes());
                    break;
                case 9:
                    message.usingRelay = reader.bool();
                    break;
                case 10:
                    message.labels.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseNode();
        if (isSet(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if (isSet(object.publicName))
            obj.publicName = String(object.publicName);
        if (isSet(object.version))
            obj.version = String(object.version);
        if (isSet(object.networkAddress))
            obj.networkAddress = String(object.networkAddress);
        if (isSet(object.walletAddress))
            obj.walletAddress = String(object.walletAddress);
        if (isSet(object.vram))
            obj.vram = Long.fromValue(object.vram);
        if (isSet(object.networkRps))
            obj.networkRps = Number(object.networkRps);
        if (Array.isArray(object?.nextPings))
            obj.nextPings = object.nextPings.map((e) => bytesFromBase64(e));
        if (isSet(object.usingRelay))
            obj.usingRelay = Boolean(object.usingRelay);
        if (Array.isArray(object?.labels))
            obj.labels = object.labels.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.publicName !== undefined && (obj.publicName = message.publicName);
        message.version !== undefined && (obj.version = message.version);
        message.networkAddress !== undefined &&
            (obj.networkAddress = message.networkAddress);
        message.walletAddress !== undefined &&
            (obj.walletAddress = message.walletAddress);
        message.vram !== undefined &&
            (obj.vram = (message.vram || Long.UZERO).toString());
        message.networkRps !== undefined && (obj.networkRps = message.networkRps);
        if (message.nextPings) {
            obj.nextPings = message.nextPings.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.nextPings = [];
        }
        message.usingRelay !== undefined && (obj.usingRelay = message.usingRelay);
        if (message.labels) {
            obj.labels = message.labels.map((e) => e);
        }
        else {
            obj.labels = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNode();
        message.nodeId = object.nodeId ?? '';
        message.publicName = object.publicName ?? '';
        message.version = object.version ?? '';
        message.networkAddress = object.networkAddress ?? '';
        message.walletAddress = object.walletAddress ?? '';
        if (object.vram !== undefined && object.vram !== null) {
            message.vram = Long.fromValue(object.vram);
        }
        message.networkRps = object.networkRps ?? 0;
        message.nextPings = object.nextPings?.map((e) => e) || [];
        message.usingRelay = object.usingRelay ?? false;
        message.labels = object.labels?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=node.js.map