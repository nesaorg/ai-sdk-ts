/* eslint-disable */
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Long, isSet, DeepPartial, Exact } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export const protobufPackage = 'agent.v1';
/** EventRewardDistribution defines the reward distribution event */
export interface EventRewardDistribution {
  totalAmount: Coin;
  rewards: Reward[];
}
/** Reward defines the reward information for a specific miner. */
export interface Reward {
  account: string;
  amount: Coin;
  rate: Long;
}
function createBaseEventRewardDistribution(): EventRewardDistribution {
  return {
    totalAmount: Coin.fromPartial({}),
    rewards: [],
  };
}
export const EventRewardDistribution = {
  typeUrl: '/agent.v1.EventRewardDistribution',
  encode(
    message: EventRewardDistribution,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.totalAmount !== undefined) {
      Coin.encode(message.totalAmount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rewards) {
      Reward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventRewardDistribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRewardDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAmount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewards.push(Reward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventRewardDistribution {
    const obj = createBaseEventRewardDistribution();
    if (isSet(object.totalAmount))
      obj.totalAmount = Coin.fromJSON(object.totalAmount);
    if (Array.isArray(object?.rewards))
      obj.rewards = object.rewards.map((e: any) => Reward.fromJSON(e));
    return obj;
  },
  toJSON(message: EventRewardDistribution): JsonSafe<EventRewardDistribution> {
    const obj: any = {};
    message.totalAmount !== undefined &&
      (obj.totalAmount = message.totalAmount
        ? Coin.toJSON(message.totalAmount)
        : undefined);
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? Reward.toJSON(e) : undefined,
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventRewardDistribution>, I>>(
    object: I,
  ): EventRewardDistribution {
    const message = createBaseEventRewardDistribution();
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = Coin.fromPartial(object.totalAmount);
    }
    message.rewards = object.rewards?.map((e) => Reward.fromPartial(e)) || [];
    return message;
  },
};
function createBaseReward(): Reward {
  return {
    account: '',
    amount: Coin.fromPartial({}),
    rate: Long.UZERO,
  };
}
export const Reward = {
  typeUrl: '/agent.v1.Reward',
  encode(
    message: Reward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.account !== '') {
      writer.uint32(10).string(message.account);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (!message.rate.isZero()) {
      writer.uint32(24).uint64(message.rate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Reward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.rate = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reward {
    const obj = createBaseReward();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.rate)) obj.rate = Long.fromValue(object.rate);
    return obj;
  },
  toJSON(message: Reward): JsonSafe<Reward> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.rate !== undefined &&
      (obj.rate = (message.rate || Long.UZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward {
    const message = createBaseReward();
    message.account = object.account ?? '';
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    if (object.rate !== undefined && object.rate !== null) {
      message.rate = Long.fromValue(object.rate);
    }
    return message;
  },
};
