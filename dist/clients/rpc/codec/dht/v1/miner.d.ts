import { BondStatus } from './deposit.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import _m0 from 'protobufjs/minimal';
import { DeepPartial, Exact } from '../../helpers.js';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "dht.v1";
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
export declare const Miner: {
    typeUrl: string;
    encode(message: Miner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Miner;
    fromJSON(object: any): Miner;
    toJSON(message: Miner): JsonSafe<Miner>;
    fromPartial<I extends Exact<DeepPartial<Miner>, I>>(object: I): Miner;
};
export declare const MinerReputation: {
    typeUrl: string;
    encode(message: MinerReputation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinerReputation;
    fromJSON(object: any): MinerReputation;
    toJSON(message: MinerReputation): JsonSafe<MinerReputation>;
    fromPartial<I extends Exact<DeepPartial<MinerReputation>, I>>(object: I): MinerReputation;
};
//# sourceMappingURL=miner.d.ts.map