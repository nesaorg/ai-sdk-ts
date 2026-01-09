/* eslint-disable */
import { Params } from './params.js';
import { Model, ModelConfig } from './model.js';
import { Node } from './node.js';
import { Miner } from './miner.js';
import { Orchestrator } from './orchestrator.js';
import { UnbondingEntry } from './deposit.js';
import { ReputationParams } from './reputation.js';
import _m0 from 'protobufjs/minimal.js';
import { isSet } from '../../helpers.js';
export const protobufPackage = 'dht.v1';
function createBaseOrchestratorMiner() {
    return {
        orchestratorId: '',
        minerId: '',
    };
}
export const OrchestratorMiner = {
    typeUrl: '/dht.v1.OrchestratorMiner',
    encode(message, writer = _m0.Writer.create()) {
        if (message.orchestratorId !== '') {
            writer.uint32(10).string(message.orchestratorId);
        }
        if (message.minerId !== '') {
            writer.uint32(18).string(message.minerId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrchestratorMiner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestratorId = reader.string();
                    break;
                case 2:
                    message.minerId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseOrchestratorMiner();
        if (isSet(object.orchestratorId))
            obj.orchestratorId = String(object.orchestratorId);
        if (isSet(object.minerId))
            obj.minerId = String(object.minerId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.orchestratorId !== undefined &&
            (obj.orchestratorId = message.orchestratorId);
        message.minerId !== undefined && (obj.minerId = message.minerId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOrchestratorMiner();
        message.orchestratorId = object.orchestratorId ?? '';
        message.minerId = object.minerId ?? '';
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        model: [],
        node: [],
        miner: [],
        orchestrator: [],
        orchestratorMiner: [],
        minerUnbonding: [],
        orchestratorUnbonding: [],
        modelCreators: [],
        modelAllowList: [],
        modelConfigs: [],
        reputationParams: ReputationParams.fromPartial({}),
    };
}
export const GenesisState = {
    typeUrl: '/dht.v1.GenesisState',
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.model) {
            Model.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.node) {
            Node.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.miner) {
            Miner.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.orchestrator) {
            Orchestrator.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.orchestratorMiner) {
            OrchestratorMiner.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.minerUnbonding) {
            UnbondingEntry.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.orchestratorUnbonding) {
            UnbondingEntry.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.modelCreators) {
            writer.uint32(82).string(v);
        }
        for (const v of message.modelAllowList) {
            writer.uint32(90).string(v);
        }
        for (const v of message.modelConfigs) {
            ModelConfig.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.reputationParams !== undefined) {
            ReputationParams.encode(message.reputationParams, writer.uint32(106).fork()).ldelim();
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
                    message.model.push(Model.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.node.push(Node.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.miner.push(Miner.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.orchestrator.push(Orchestrator.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.orchestratorMiner.push(OrchestratorMiner.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.minerUnbonding.push(UnbondingEntry.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.orchestratorUnbonding.push(UnbondingEntry.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.modelCreators.push(reader.string());
                    break;
                case 11:
                    message.modelAllowList.push(reader.string());
                    break;
                case 12:
                    message.modelConfigs.push(ModelConfig.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.reputationParams = ReputationParams.decode(reader, reader.uint32());
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
        if (Array.isArray(object?.model))
            obj.model = object.model.map((e) => Model.fromJSON(e));
        if (Array.isArray(object?.node))
            obj.node = object.node.map((e) => Node.fromJSON(e));
        if (Array.isArray(object?.miner))
            obj.miner = object.miner.map((e) => Miner.fromJSON(e));
        if (Array.isArray(object?.orchestrator))
            obj.orchestrator = object.orchestrator.map((e) => Orchestrator.fromJSON(e));
        if (Array.isArray(object?.orchestratorMiner))
            obj.orchestratorMiner = object.orchestratorMiner.map((e) => OrchestratorMiner.fromJSON(e));
        if (Array.isArray(object?.minerUnbonding))
            obj.minerUnbonding = object.minerUnbonding.map((e) => UnbondingEntry.fromJSON(e));
        if (Array.isArray(object?.orchestratorUnbonding))
            obj.orchestratorUnbonding = object.orchestratorUnbonding.map((e) => UnbondingEntry.fromJSON(e));
        if (Array.isArray(object?.modelCreators))
            obj.modelCreators = object.modelCreators.map((e) => String(e));
        if (Array.isArray(object?.modelAllowList))
            obj.modelAllowList = object.modelAllowList.map((e) => String(e));
        if (Array.isArray(object?.modelConfigs))
            obj.modelConfigs = object.modelConfigs.map((e) => ModelConfig.fromJSON(e));
        if (isSet(object.reputationParams))
            obj.reputationParams = ReputationParams.fromJSON(object.reputationParams);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.model) {
            obj.model = message.model.map((e) => (e ? Model.toJSON(e) : undefined));
        }
        else {
            obj.model = [];
        }
        if (message.node) {
            obj.node = message.node.map((e) => (e ? Node.toJSON(e) : undefined));
        }
        else {
            obj.node = [];
        }
        if (message.miner) {
            obj.miner = message.miner.map((e) => (e ? Miner.toJSON(e) : undefined));
        }
        else {
            obj.miner = [];
        }
        if (message.orchestrator) {
            obj.orchestrator = message.orchestrator.map((e) => e ? Orchestrator.toJSON(e) : undefined);
        }
        else {
            obj.orchestrator = [];
        }
        if (message.orchestratorMiner) {
            obj.orchestratorMiner = message.orchestratorMiner.map((e) => e ? OrchestratorMiner.toJSON(e) : undefined);
        }
        else {
            obj.orchestratorMiner = [];
        }
        if (message.minerUnbonding) {
            obj.minerUnbonding = message.minerUnbonding.map((e) => e ? UnbondingEntry.toJSON(e) : undefined);
        }
        else {
            obj.minerUnbonding = [];
        }
        if (message.orchestratorUnbonding) {
            obj.orchestratorUnbonding = message.orchestratorUnbonding.map((e) => e ? UnbondingEntry.toJSON(e) : undefined);
        }
        else {
            obj.orchestratorUnbonding = [];
        }
        if (message.modelCreators) {
            obj.modelCreators = message.modelCreators.map((e) => e);
        }
        else {
            obj.modelCreators = [];
        }
        if (message.modelAllowList) {
            obj.modelAllowList = message.modelAllowList.map((e) => e);
        }
        else {
            obj.modelAllowList = [];
        }
        if (message.modelConfigs) {
            obj.modelConfigs = message.modelConfigs.map((e) => e ? ModelConfig.toJSON(e) : undefined);
        }
        else {
            obj.modelConfigs = [];
        }
        message.reputationParams !== undefined &&
            (obj.reputationParams = message.reputationParams
                ? ReputationParams.toJSON(message.reputationParams)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        message.model = object.model?.map((e) => Model.fromPartial(e)) || [];
        message.node = object.node?.map((e) => Node.fromPartial(e)) || [];
        message.miner = object.miner?.map((e) => Miner.fromPartial(e)) || [];
        message.orchestrator =
            object.orchestrator?.map((e) => Orchestrator.fromPartial(e)) || [];
        message.orchestratorMiner =
            object.orchestratorMiner?.map((e) => OrchestratorMiner.fromPartial(e)) ||
                [];
        message.minerUnbonding =
            object.minerUnbonding?.map((e) => UnbondingEntry.fromPartial(e)) || [];
        message.orchestratorUnbonding =
            object.orchestratorUnbonding?.map((e) => UnbondingEntry.fromPartial(e)) ||
                [];
        message.modelCreators = object.modelCreators?.map((e) => e) || [];
        message.modelAllowList = object.modelAllowList?.map((e) => e) || [];
        message.modelConfigs =
            object.modelConfigs?.map((e) => ModelConfig.fromPartial(e)) || [];
        if (object.reputationParams !== undefined &&
            object.reputationParams !== null) {
            message.reputationParams = ReputationParams.fromPartial(object.reputationParams);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map