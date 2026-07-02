/* eslint-disable */
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "dht.v1";
/** DistributionConfig defines the distribution configuration. */
export interface DistributionConfig {
  /** TGE end block height */
  postTgeBlock: Long;
  /** Exchange rate between USDC and NES */
  exchangeRate: string;
  /** Exchange rate update interval (seconds), default is 60 seconds */
  exchangeRateUpdateInterval: Long;
  /** Last exchange rate update time */
  lastExchangeRateUpdateTime: Timestamp;
  /** Minimum claimable reward amount in USDC */
  minClaimReward: Long;
}
function createBaseDistributionConfig(): DistributionConfig {
  return {
    postTgeBlock: Long.ZERO,
    exchangeRate: "",
    exchangeRateUpdateInterval: Long.ZERO,
    lastExchangeRateUpdateTime: Timestamp.fromPartial({}),
    minClaimReward: Long.ZERO
  };
}
export const DistributionConfig = {
  typeUrl: "/dht.v1.DistributionConfig",
  encode(message: DistributionConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.postTgeBlock.isZero()) {
      writer.uint32(8).int64(message.postTgeBlock);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    if (!message.exchangeRateUpdateInterval.isZero()) {
      writer.uint32(24).int64(message.exchangeRateUpdateInterval);
    }
    if (message.lastExchangeRateUpdateTime !== undefined) {
      Timestamp.encode(message.lastExchangeRateUpdateTime, writer.uint32(34).fork()).ldelim();
    }
    if (!message.minClaimReward.isZero()) {
      writer.uint32(40).int64(message.minClaimReward);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DistributionConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistributionConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.postTgeBlock = reader.int64() as Long;
          break;
        case 2:
          message.exchangeRate = reader.string();
          break;
        case 3:
          message.exchangeRateUpdateInterval = reader.int64() as Long;
          break;
        case 4:
          message.lastExchangeRateUpdateTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.minClaimReward = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistributionConfig {
    const obj = createBaseDistributionConfig();
    if (isSet(object.postTgeBlock)) obj.postTgeBlock = Long.fromValue(object.postTgeBlock);
    if (isSet(object.exchangeRate)) obj.exchangeRate = String(object.exchangeRate);
    if (isSet(object.exchangeRateUpdateInterval)) obj.exchangeRateUpdateInterval = Long.fromValue(object.exchangeRateUpdateInterval);
    if (isSet(object.lastExchangeRateUpdateTime)) obj.lastExchangeRateUpdateTime = fromJsonTimestamp(object.lastExchangeRateUpdateTime);
    if (isSet(object.minClaimReward)) obj.minClaimReward = Long.fromValue(object.minClaimReward);
    return obj;
  },
  toJSON(message: DistributionConfig): JsonSafe<DistributionConfig> {
    const obj: any = {};
    message.postTgeBlock !== undefined && (obj.postTgeBlock = (message.postTgeBlock || Long.ZERO).toString());
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    message.exchangeRateUpdateInterval !== undefined && (obj.exchangeRateUpdateInterval = (message.exchangeRateUpdateInterval || Long.ZERO).toString());
    message.lastExchangeRateUpdateTime !== undefined && (obj.lastExchangeRateUpdateTime = fromTimestamp(message.lastExchangeRateUpdateTime).toISOString());
    message.minClaimReward !== undefined && (obj.minClaimReward = (message.minClaimReward || Long.ZERO).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DistributionConfig>, I>>(object: I): DistributionConfig {
    const message = createBaseDistributionConfig();
    if (object.postTgeBlock !== undefined && object.postTgeBlock !== null) {
      message.postTgeBlock = Long.fromValue(object.postTgeBlock);
    }
    message.exchangeRate = object.exchangeRate ?? "";
    if (object.exchangeRateUpdateInterval !== undefined && object.exchangeRateUpdateInterval !== null) {
      message.exchangeRateUpdateInterval = Long.fromValue(object.exchangeRateUpdateInterval);
    }
    if (object.lastExchangeRateUpdateTime !== undefined && object.lastExchangeRateUpdateTime !== null) {
      message.lastExchangeRateUpdateTime = Timestamp.fromPartial(object.lastExchangeRateUpdateTime);
    }
    if (object.minClaimReward !== undefined && object.minClaimReward !== null) {
      message.minClaimReward = Long.fromValue(object.minClaimReward);
    }
    return message;
  }
};
