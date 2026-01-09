/* eslint-disable */
import { Coin } from '../../base/v1beta1/coin.js';
import { Input, Output } from './bank.js';
import _m0 from 'protobufjs/minimal.js';
import { isSet } from '../../../helpers.js';
export const protobufPackage = 'cosmos.bank.v1beta1';
function createBaseMsgSend() {
    return {
        fromAddress: '',
        toAddress: '',
        amount: [],
    };
}
export const MsgSend = {
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromAddress !== '') {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== '') {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSend();
        if (isSet(object.fromAddress))
            obj.fromAddress = String(object.fromAddress);
        if (isSet(object.toAddress))
            obj.toAddress = String(object.toAddress);
        if (Array.isArray(object?.amount))
            obj.amount = object.amount.map((e) => Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined &&
            (obj.fromAddress = message.fromAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.fromAddress = object.fromAddress ?? '';
        message.toAddress = object.toAddress ?? '';
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgSendResponse() {
    return {};
}
export const MsgSendResponse = {
    typeUrl: '/cosmos.bank.v1beta1.MsgSendResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgSendResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
};
function createBaseMsgMultiSend() {
    return {
        inputs: [],
        outputs: [],
    };
}
export const MsgMultiSend = {
    typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend',
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.inputs) {
            Input.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.outputs) {
            Output.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(Input.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.outputs.push(Output.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgMultiSend();
        if (Array.isArray(object?.inputs))
            obj.inputs = object.inputs.map((e) => Input.fromJSON(e));
        if (Array.isArray(object?.outputs))
            obj.outputs = object.outputs.map((e) => Output.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map((e) => (e ? Input.toJSON(e) : undefined));
        }
        else {
            obj.inputs = [];
        }
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => e ? Output.toJSON(e) : undefined);
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMultiSend();
        message.inputs = object.inputs?.map((e) => Input.fromPartial(e)) || [];
        message.outputs = object.outputs?.map((e) => Output.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgMultiSendResponse() {
    return {};
}
export const MsgMultiSendResponse = {
    typeUrl: '/cosmos.bank.v1beta1.MsgMultiSendResponse',
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseMsgMultiSendResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgMultiSendResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Send = this.Send.bind(this);
        this.MultiSend = this.MultiSend.bind(this);
    }
    Send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request('cosmos.bank.v1beta1.Msg', 'Send', data);
        return promise.then((data) => MsgSendResponse.decode(new _m0.Reader(data)));
    }
    MultiSend(request) {
        const data = MsgMultiSend.encode(request).finish();
        const promise = this.rpc.request('cosmos.bank.v1beta1.Msg', 'MultiSend', data);
        return promise.then((data) => MsgMultiSendResponse.decode(new _m0.Reader(data)));
    }
}
//# sourceMappingURL=tx.js.map