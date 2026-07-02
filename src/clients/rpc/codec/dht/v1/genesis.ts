/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Params } from "./params";
import { Model, ModelConfig } from "./model";
import { Node } from "./node";
import { Miner } from "./miner";
import { Orchestrator } from "./orchestrator";
import { UnbondingEntry } from "./deposit";
import { ReputationParams } from "./reputation";
import { DistributionConfig } from "./tge";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "dht.v1";
/** OrchestratorMiner defines an association between an orchestrator and a miner. */
export interface OrchestratorMiner {
  orchestratorId: string;
  minerId: string;
}
export interface TGEReward {
  address: string;
  reward: Coin;
}
/** GenesisState defines the dht module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  model: Model[];
  node: Node[];
  miner: Miner[];
  orchestrator: Orchestrator[];
  orchestratorMiner: OrchestratorMiner[];
  minerUnbonding: UnbondingEntry[];
  orchestratorUnbonding: UnbondingEntry[];
  modelCreators: string[];
  modelAllowList: string[];
  modelConfigs: ModelConfig[];
  reputationParams: ReputationParams;
  distributionConfig: DistributionConfig;
  tgeReward: TGEReward[];
}
function createBaseOrchestratorMiner(): OrchestratorMiner {
  return {
    orchestratorId: "",
    minerId: ""
  };
}
export const OrchestratorMiner = {
  typeUrl: "/dht.v1.OrchestratorMiner",
  encode(message: OrchestratorMiner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orchestratorId !== "") {
      writer.uint32(10).string(message.orchestratorId);
    }
    if (message.minerId !== "") {
      writer.uint32(18).string(message.minerId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OrchestratorMiner {
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
  fromJSON(object: any): OrchestratorMiner {
    const obj = createBaseOrchestratorMiner();
    if (isSet(object.orchestratorId)) obj.orchestratorId = String(object.orchestratorId);
    if (isSet(object.minerId)) obj.minerId = String(object.minerId);
    return obj;
  },
  toJSON(message: OrchestratorMiner): JsonSafe<OrchestratorMiner> {
    const obj: any = {};
    message.orchestratorId !== undefined && (obj.orchestratorId = message.orchestratorId);
    message.minerId !== undefined && (obj.minerId = message.minerId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OrchestratorMiner>, I>>(object: I): OrchestratorMiner {
    const message = createBaseOrchestratorMiner();
    message.orchestratorId = object.orchestratorId ?? "";
    message.minerId = object.minerId ?? "";
    return message;
  }
};
function createBaseTGEReward(): TGEReward {
  return {
    address: "",
    reward: Coin.fromPartial({})
  };
}
export const TGEReward = {
  typeUrl: "/dht.v1.TGEReward",
  encode(message: TGEReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TGEReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTGEReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.reward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TGEReward {
    const obj = createBaseTGEReward();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.reward)) obj.reward = Coin.fromJSON(object.reward);
    return obj;
  },
  toJSON(message: TGEReward): JsonSafe<TGEReward> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TGEReward>, I>>(object: I): TGEReward {
    const message = createBaseTGEReward();
    message.address = object.address ?? "";
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = Coin.fromPartial(object.reward);
    }
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
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
    distributionConfig: DistributionConfig.fromPartial({}),
    tgeReward: []
  };
}
export const GenesisState = {
  typeUrl: "/dht.v1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.model) {
      Model.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.node) {
      Node.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.miner) {
      Miner.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.orchestrator) {
      Orchestrator.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.orchestratorMiner) {
      OrchestratorMiner.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.minerUnbonding) {
      UnbondingEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.orchestratorUnbonding) {
      UnbondingEntry.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.modelCreators) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.modelAllowList) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.modelConfigs) {
      ModelConfig.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.reputationParams !== undefined) {
      ReputationParams.encode(message.reputationParams, writer.uint32(106).fork()).ldelim();
    }
    if (message.distributionConfig !== undefined) {
      DistributionConfig.encode(message.distributionConfig, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.tgeReward) {
      TGEReward.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
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
        case 14:
          message.distributionConfig = DistributionConfig.decode(reader, reader.uint32());
          break;
        case 15:
          message.tgeReward.push(TGEReward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.model)) obj.model = object.model.map((e: any) => Model.fromJSON(e));
    if (Array.isArray(object?.node)) obj.node = object.node.map((e: any) => Node.fromJSON(e));
    if (Array.isArray(object?.miner)) obj.miner = object.miner.map((e: any) => Miner.fromJSON(e));
    if (Array.isArray(object?.orchestrator)) obj.orchestrator = object.orchestrator.map((e: any) => Orchestrator.fromJSON(e));
    if (Array.isArray(object?.orchestratorMiner)) obj.orchestratorMiner = object.orchestratorMiner.map((e: any) => OrchestratorMiner.fromJSON(e));
    if (Array.isArray(object?.minerUnbonding)) obj.minerUnbonding = object.minerUnbonding.map((e: any) => UnbondingEntry.fromJSON(e));
    if (Array.isArray(object?.orchestratorUnbonding)) obj.orchestratorUnbonding = object.orchestratorUnbonding.map((e: any) => UnbondingEntry.fromJSON(e));
    if (Array.isArray(object?.modelCreators)) obj.modelCreators = object.modelCreators.map((e: any) => String(e));
    if (Array.isArray(object?.modelAllowList)) obj.modelAllowList = object.modelAllowList.map((e: any) => String(e));
    if (Array.isArray(object?.modelConfigs)) obj.modelConfigs = object.modelConfigs.map((e: any) => ModelConfig.fromJSON(e));
    if (isSet(object.reputationParams)) obj.reputationParams = ReputationParams.fromJSON(object.reputationParams);
    if (isSet(object.distributionConfig)) obj.distributionConfig = DistributionConfig.fromJSON(object.distributionConfig);
    if (Array.isArray(object?.tgeReward)) obj.tgeReward = object.tgeReward.map((e: any) => TGEReward.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.model) {
      obj.model = message.model.map(e => e ? Model.toJSON(e) : undefined);
    } else {
      obj.model = [];
    }
    if (message.node) {
      obj.node = message.node.map(e => e ? Node.toJSON(e) : undefined);
    } else {
      obj.node = [];
    }
    if (message.miner) {
      obj.miner = message.miner.map(e => e ? Miner.toJSON(e) : undefined);
    } else {
      obj.miner = [];
    }
    if (message.orchestrator) {
      obj.orchestrator = message.orchestrator.map(e => e ? Orchestrator.toJSON(e) : undefined);
    } else {
      obj.orchestrator = [];
    }
    if (message.orchestratorMiner) {
      obj.orchestratorMiner = message.orchestratorMiner.map(e => e ? OrchestratorMiner.toJSON(e) : undefined);
    } else {
      obj.orchestratorMiner = [];
    }
    if (message.minerUnbonding) {
      obj.minerUnbonding = message.minerUnbonding.map(e => e ? UnbondingEntry.toJSON(e) : undefined);
    } else {
      obj.minerUnbonding = [];
    }
    if (message.orchestratorUnbonding) {
      obj.orchestratorUnbonding = message.orchestratorUnbonding.map(e => e ? UnbondingEntry.toJSON(e) : undefined);
    } else {
      obj.orchestratorUnbonding = [];
    }
    if (message.modelCreators) {
      obj.modelCreators = message.modelCreators.map(e => e);
    } else {
      obj.modelCreators = [];
    }
    if (message.modelAllowList) {
      obj.modelAllowList = message.modelAllowList.map(e => e);
    } else {
      obj.modelAllowList = [];
    }
    if (message.modelConfigs) {
      obj.modelConfigs = message.modelConfigs.map(e => e ? ModelConfig.toJSON(e) : undefined);
    } else {
      obj.modelConfigs = [];
    }
    message.reputationParams !== undefined && (obj.reputationParams = message.reputationParams ? ReputationParams.toJSON(message.reputationParams) : undefined);
    message.distributionConfig !== undefined && (obj.distributionConfig = message.distributionConfig ? DistributionConfig.toJSON(message.distributionConfig) : undefined);
    if (message.tgeReward) {
      obj.tgeReward = message.tgeReward.map(e => e ? TGEReward.toJSON(e) : undefined);
    } else {
      obj.tgeReward = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.model = object.model?.map(e => Model.fromPartial(e)) || [];
    message.node = object.node?.map(e => Node.fromPartial(e)) || [];
    message.miner = object.miner?.map(e => Miner.fromPartial(e)) || [];
    message.orchestrator = object.orchestrator?.map(e => Orchestrator.fromPartial(e)) || [];
    message.orchestratorMiner = object.orchestratorMiner?.map(e => OrchestratorMiner.fromPartial(e)) || [];
    message.minerUnbonding = object.minerUnbonding?.map(e => UnbondingEntry.fromPartial(e)) || [];
    message.orchestratorUnbonding = object.orchestratorUnbonding?.map(e => UnbondingEntry.fromPartial(e)) || [];
    message.modelCreators = object.modelCreators?.map(e => e) || [];
    message.modelAllowList = object.modelAllowList?.map(e => e) || [];
    message.modelConfigs = object.modelConfigs?.map(e => ModelConfig.fromPartial(e)) || [];
    if (object.reputationParams !== undefined && object.reputationParams !== null) {
      message.reputationParams = ReputationParams.fromPartial(object.reputationParams);
    }
    if (object.distributionConfig !== undefined && object.distributionConfig !== null) {
      message.distributionConfig = DistributionConfig.fromPartial(object.distributionConfig);
    }
    message.tgeReward = object.tgeReward?.map(e => TGEReward.fromPartial(e)) || [];
    return message;
  }
};
