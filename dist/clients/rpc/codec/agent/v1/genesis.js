/* eslint-disable */
import { Params, InnerValues, InferenceAgent, Session, VrfSeed, } from './agent.js';
import _m0 from 'protobufjs/minimal.js';
import { isSet } from '../../helpers.js';
export const protobufPackage = 'agent.v1';
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        innerValues: InnerValues.fromPartial({}),
        agents: [],
        sessions: [],
        vrfSeeds: [],
    };
}
export const GenesisState = {
    typeUrl: '/agent.v1.GenesisState',
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.innerValues !== undefined) {
            InnerValues.encode(message.innerValues, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.agents) {
            InferenceAgent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sessions) {
            Session.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.vrfSeeds) {
            VrfSeed.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.innerValues = InnerValues.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.agents.push(InferenceAgent.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sessions.push(Session.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.vrfSeeds.push(VrfSeed.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if (isSet(object.params))
            obj.params = Params.fromJSON(object.params);
        if (isSet(object.innerValues))
            obj.innerValues = InnerValues.fromJSON(object.innerValues);
        if (Array.isArray(object?.agents))
            obj.agents = object.agents.map((e) => InferenceAgent.fromJSON(e));
        if (Array.isArray(object?.sessions))
            obj.sessions = object.sessions.map((e) => Session.fromJSON(e));
        if (Array.isArray(object?.vrfSeeds))
            obj.vrfSeeds = object.vrfSeeds.map((e) => VrfSeed.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.innerValues !== undefined &&
            (obj.innerValues = message.innerValues
                ? InnerValues.toJSON(message.innerValues)
                : undefined);
        if (message.agents) {
            obj.agents = message.agents.map((e) => e ? InferenceAgent.toJSON(e) : undefined);
        }
        else {
            obj.agents = [];
        }
        if (message.sessions) {
            obj.sessions = message.sessions.map((e) => e ? Session.toJSON(e) : undefined);
        }
        else {
            obj.sessions = [];
        }
        if (message.vrfSeeds) {
            obj.vrfSeeds = message.vrfSeeds.map((e) => e ? VrfSeed.toJSON(e) : undefined);
        }
        else {
            obj.vrfSeeds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        if (object.innerValues !== undefined && object.innerValues !== null) {
            message.innerValues = InnerValues.fromPartial(object.innerValues);
        }
        message.agents =
            object.agents?.map((e) => InferenceAgent.fromPartial(e)) || [];
        message.sessions =
            object.sessions?.map((e) => Session.fromPartial(e)) || [];
        message.vrfSeeds =
            object.vrfSeeds?.map((e) => VrfSeed.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map