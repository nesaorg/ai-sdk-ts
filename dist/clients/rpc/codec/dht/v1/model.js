/* eslint-disable */
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Long, isSet } from '../../helpers.js';
import _m0 from 'protobufjs/minimal.js';
export const protobufPackage = 'dht.v1';
function createBaseTokenPrice() {
    return {
        inputPrice: Coin.fromPartial({}),
        outputPrice: Coin.fromPartial({}),
    };
}
export const TokenPrice = {
    typeUrl: '/dht.v1.TokenPrice',
    encode(message, writer = _m0.Writer.create()) {
        if (message.inputPrice !== undefined) {
            Coin.encode(message.inputPrice, writer.uint32(10).fork()).ldelim();
        }
        if (message.outputPrice !== undefined) {
            Coin.encode(message.outputPrice, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputPrice = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.outputPrice = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTokenPrice();
        if (isSet(object.inputPrice))
            obj.inputPrice = Coin.fromJSON(object.inputPrice);
        if (isSet(object.outputPrice))
            obj.outputPrice = Coin.fromJSON(object.outputPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.inputPrice !== undefined &&
            (obj.inputPrice = message.inputPrice
                ? Coin.toJSON(message.inputPrice)
                : undefined);
        message.outputPrice !== undefined &&
            (obj.outputPrice = message.outputPrice
                ? Coin.toJSON(message.outputPrice)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenPrice();
        if (object.inputPrice !== undefined && object.inputPrice !== null) {
            message.inputPrice = Coin.fromPartial(object.inputPrice);
        }
        if (object.outputPrice !== undefined && object.outputPrice !== null) {
            message.outputPrice = Coin.fromPartial(object.outputPrice);
        }
        return message;
    },
};
function createBaseModel() {
    return {
        creator: '',
        modelName: '',
        tokenPrice: TokenPrice.fromPartial({}),
        sWindow: undefined,
    };
}
export const Model = {
    typeUrl: '/dht.v1.Model',
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.modelName !== '') {
            writer.uint32(18).string(message.modelName);
        }
        if (message.tokenPrice !== undefined) {
            TokenPrice.encode(message.tokenPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.sWindow !== undefined) {
            ModelSWindow.encode(message.sWindow, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.modelName = reader.string();
                    break;
                case 4:
                    message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sWindow = ModelSWindow.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModel();
        if (isSet(object.creator))
            obj.creator = String(object.creator);
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.tokenPrice))
            obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
        if (isSet(object.sWindow))
            obj.sWindow = ModelSWindow.fromJSON(object.sWindow);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.tokenPrice !== undefined &&
            (obj.tokenPrice = message.tokenPrice
                ? TokenPrice.toJSON(message.tokenPrice)
                : undefined);
        message.sWindow !== undefined &&
            (obj.sWindow = message.sWindow
                ? ModelSWindow.toJSON(message.sWindow)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModel();
        message.creator = object.creator ?? '';
        message.modelName = object.modelName ?? '';
        if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
            message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
        }
        if (object.sWindow !== undefined && object.sWindow !== null) {
            message.sWindow = ModelSWindow.fromPartial(object.sWindow);
        }
        return message;
    },
};
function createBaseModelConfig() {
    return {
        modelName: '',
        modelSize: Long.UZERO,
        avgExecutionTime: '',
        k1Override: undefined,
        k2Override: undefined,
    };
}
export const ModelConfig = {
    typeUrl: '/dht.v1.ModelConfig',
    encode(message, writer = _m0.Writer.create()) {
        if (message.modelName !== '') {
            writer.uint32(10).string(message.modelName);
        }
        if (!message.modelSize.isZero()) {
            writer.uint32(16).uint64(message.modelSize);
        }
        if (message.avgExecutionTime !== '') {
            writer.uint32(26).string(message.avgExecutionTime);
        }
        if (message.k1Override !== undefined) {
            writer.uint32(34).string(message.k1Override);
        }
        if (message.k2Override !== undefined) {
            writer.uint32(42).string(message.k2Override);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModelConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelName = reader.string();
                    break;
                case 2:
                    message.modelSize = reader.uint64();
                    break;
                case 3:
                    message.avgExecutionTime = reader.string();
                    break;
                case 4:
                    message.k1Override = reader.string();
                    break;
                case 5:
                    message.k2Override = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModelConfig();
        if (isSet(object.modelName))
            obj.modelName = String(object.modelName);
        if (isSet(object.modelSize))
            obj.modelSize = Long.fromValue(object.modelSize);
        if (isSet(object.avgExecutionTime))
            obj.avgExecutionTime = String(object.avgExecutionTime);
        if (isSet(object.k1Override))
            obj.k1Override = String(object.k1Override);
        if (isSet(object.k2Override))
            obj.k2Override = String(object.k2Override);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.modelSize !== undefined &&
            (obj.modelSize = (message.modelSize || Long.UZERO).toString());
        message.avgExecutionTime !== undefined &&
            (obj.avgExecutionTime = message.avgExecutionTime);
        message.k1Override !== undefined && (obj.k1Override = message.k1Override);
        message.k2Override !== undefined && (obj.k2Override = message.k2Override);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModelConfig();
        message.modelName = object.modelName ?? '';
        if (object.modelSize !== undefined && object.modelSize !== null) {
            message.modelSize = Long.fromValue(object.modelSize);
        }
        message.avgExecutionTime = object.avgExecutionTime ?? '';
        message.k1Override = object.k1Override ?? undefined;
        message.k2Override = object.k2Override ?? undefined;
        return message;
    },
};
function createBaseModelSWindow() {
    return {
        sRaw: [],
    };
}
export const ModelSWindow = {
    typeUrl: '/dht.v1.ModelSWindow',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sRaw) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModelSWindow();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sRaw.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModelSWindow();
        if (Array.isArray(object?.sRaw))
            obj.sRaw = object.sRaw.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.sRaw) {
            obj.sRaw = message.sRaw.map((e) => e);
        }
        else {
            obj.sRaw = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModelSWindow();
        message.sRaw = object.sRaw?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=model.js.map