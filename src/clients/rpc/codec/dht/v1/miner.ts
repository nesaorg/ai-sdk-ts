/* eslint-disable */
import { BondStatus, bondStatusFromJSON, bondStatusToJSON } from './deposit.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import _m0 from 'protobufjs/minimal';
import {
  isSet,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  fromTimestamp,
} from '../../helpers.js';
import { JsonSafe } from '../../json-safe.js';
export const protobufPackage = 'dht.v1';
/** Miner defines a miner of a model. */
export interface Miner {
  nodeId: string;
  bondStatus: BondStatus;
  deposit: Coin;
  reputation: MinerReputation;
}
/** MinerReputation defines the reputation state of a miner */
export interface MinerReputation {
  /** Reputation R */
  reputationValue: string;
  /** Cumulative reward */
  cumulativeReward: Coin[];
  /** Cumulative penalty */
  cumulativePenalty: Coin[];
  /** Rolling efficiency average */
  sRolling: string;
  /** Last active at */
  lastActiveAt: Timestamp;
}
function createBaseMiner(): Miner {
  return {
    nodeId: '',
    bondStatus: 0,
    deposit: Coin.fromPartial({}),
    reputation: MinerReputation.fromPartial({}),
  };
}
export const Miner = {
  typeUrl: '/dht.v1.Miner',
  encode(message: Miner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeId !== '') {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.bondStatus !== 0) {
      writer.uint32(72).int32(message.bondStatus);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(82).fork()).ldelim();
    }
    if (message.reputation !== undefined) {
      MinerReputation.encode(
        message.reputation,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Miner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMiner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 9:
          message.bondStatus = reader.int32() as any;
          break;
        case 10:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 11:
          message.reputation = MinerReputation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Miner {
    const obj = createBaseMiner();
    if (isSet(object.nodeId)) obj.nodeId = String(object.nodeId);
    if (isSet(object.bondStatus))
      obj.bondStatus = bondStatusFromJSON(object.bondStatus);
    if (isSet(object.deposit)) obj.deposit = Coin.fromJSON(object.deposit);
    if (isSet(object.reputation))
      obj.reputation = MinerReputation.fromJSON(object.reputation);
    return obj;
  },
  toJSON(message: Miner): JsonSafe<Miner> {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.bondStatus !== undefined &&
      (obj.bondStatus = bondStatusToJSON(message.bondStatus));
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? Coin.toJSON(message.deposit)
        : undefined);
    message.reputation !== undefined &&
      (obj.reputation = message.reputation
        ? MinerReputation.toJSON(message.reputation)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Miner>, I>>(object: I): Miner {
    const message = createBaseMiner();
    message.nodeId = object.nodeId ?? '';
    message.bondStatus = object.bondStatus ?? 0;
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromPartial(object.deposit);
    }
    if (object.reputation !== undefined && object.reputation !== null) {
      message.reputation = MinerReputation.fromPartial(object.reputation);
    }
    return message;
  },
};
function createBaseMinerReputation(): MinerReputation {
  return {
    reputationValue: '',
    cumulativeReward: [],
    cumulativePenalty: [],
    sRolling: '',
    lastActiveAt: Timestamp.fromPartial({}),
  };
}
export const MinerReputation = {
  typeUrl: '/dht.v1.MinerReputation',
  encode(
    message: MinerReputation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.reputationValue !== '') {
      writer.uint32(10).string(message.reputationValue);
    }
    for (const v of message.cumulativeReward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.cumulativePenalty) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sRolling !== '') {
      writer.uint32(34).string(message.sRolling);
    }
    if (message.lastActiveAt !== undefined) {
      Timestamp.encode(message.lastActiveAt, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MinerReputation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinerReputation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reputationValue = reader.string();
          break;
        case 2:
          message.cumulativeReward.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.cumulativePenalty.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sRolling = reader.string();
          break;
        case 5:
          message.lastActiveAt = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MinerReputation {
    const obj = createBaseMinerReputation();
    if (isSet(object.reputationValue))
      obj.reputationValue = String(object.reputationValue);
    if (Array.isArray(object?.cumulativeReward))
      obj.cumulativeReward = object.cumulativeReward.map((e: any) =>
        Coin.fromJSON(e),
      );
    if (Array.isArray(object?.cumulativePenalty))
      obj.cumulativePenalty = object.cumulativePenalty.map((e: any) =>
        Coin.fromJSON(e),
      );
    if (isSet(object.sRolling)) obj.sRolling = String(object.sRolling);
    if (isSet(object.lastActiveAt))
      obj.lastActiveAt = fromJsonTimestamp(object.lastActiveAt);
    return obj;
  },
  toJSON(message: MinerReputation): JsonSafe<MinerReputation> {
    const obj: any = {};
    message.reputationValue !== undefined &&
      (obj.reputationValue = message.reputationValue);
    if (message.cumulativeReward) {
      obj.cumulativeReward = message.cumulativeReward.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.cumulativeReward = [];
    }
    if (message.cumulativePenalty) {
      obj.cumulativePenalty = message.cumulativePenalty.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.cumulativePenalty = [];
    }
    message.sRolling !== undefined && (obj.sRolling = message.sRolling);
    message.lastActiveAt !== undefined &&
      (obj.lastActiveAt = fromTimestamp(message.lastActiveAt).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MinerReputation>, I>>(
    object: I,
  ): MinerReputation {
    const message = createBaseMinerReputation();
    message.reputationValue = object.reputationValue ?? '';
    message.cumulativeReward =
      object.cumulativeReward?.map((e) => Coin.fromPartial(e)) || [];
    message.cumulativePenalty =
      object.cumulativePenalty?.map((e) => Coin.fromPartial(e)) || [];
    message.sRolling = object.sRolling ?? '';
    if (object.lastActiveAt !== undefined && object.lastActiveAt !== null) {
      message.lastActiveAt = Timestamp.fromPartial(object.lastActiveAt);
    }
    return message;
  },
};
