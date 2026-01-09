import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Long, DeepPartial, Exact } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "agent.v1";
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
export declare const EventRewardDistribution: {
    typeUrl: string;
    encode(message: EventRewardDistribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRewardDistribution;
    fromJSON(object: any): EventRewardDistribution;
    toJSON(message: EventRewardDistribution): JsonSafe<EventRewardDistribution>;
    fromPartial<I extends Exact<DeepPartial<EventRewardDistribution>, I>>(object: I): EventRewardDistribution;
};
export declare const Reward: {
    typeUrl: string;
    encode(message: Reward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reward;
    fromJSON(object: any): Reward;
    toJSON(message: Reward): JsonSafe<Reward>;
    fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward;
};
//# sourceMappingURL=events.d.ts.map