import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Timestamp } from '../../google/protobuf/timestamp.js';
import { Long, DeepPartial, Exact } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "dht.v1";
export interface Reputation {
    name: string;
    score: Long;
}
/** ReputationParams defines parameters for the reputation system */
export interface ReputationParams {
    /**
     * Reputation equation parameters
     * Completion reliability weight
     */
    alpha: string;
    /** Performance weight */
    beta: string;
    /** Efficiency score weight */
    wS: string;
    /** Time penalty weight */
    lambda: string;
    gamma: string;
    delta: string;
    /** Rew(default: 1.01) */
    rewardMultiplier: string;
    /** Pen_timeout(default: 0.8) */
    penaltyMultiplierTimeout: string;
    /**
     * Sigmoid reward function parameters (Ar, Br, Cr, Dr)
     * Reward sigmoid function parameter A (default: 1)
     */
    ar: string;
    /** Reward sigmoid function parameter B (default: 8) */
    br: string;
    /** Reward sigmoid function parameter C (default: 3.5) */
    cr: string;
    /** Reward sigmoid function parameter D (default: 0.010987) */
    dr: string;
    /**
     * Sigmoid penalty function parameters (Ap, Bp, Cp, Dp)
     * Penalty sigmoid function parameter A (default: 0.1)
     */
    ap: string;
    /** Penalty sigmoid function parameter B (default: 8) */
    bp: string;
    /** Penalty sigmoid function parameter C (default: 3.5) */
    cp: string;
    /** Penalty sigmoid function parameter D (default: 0.010987) */
    dp: string;
    /**
     * Fee distribution parameters
     * Nesa min distribution percentage (default: 0.1 = 10%)
     */
    minNesaPercent: string;
    /** Agent distribution percentage (default: 0.1 = 10%) */
    agentPercent: string;
    /** Max miner distribution percentage (default: 0.8 = 80%) */
    maxMinerPercent: string;
    /** Reputation reward percentage (default: 0.2 = 20%) */
    reputationRewardPercent: string;
    /**
     * Boundaries and factors
     * Max catch-up reward
     */
    catchUpCap: string;
    /** Min reputation value */
    rMin: string;
    /** Max reputation value */
    rMax: string;
    /** Timeout threshold multiplier */
    timeoutFactor: string;
    /** Non-response threshold multiplier */
    nonResponseFactor: string;
    /**
     * Model coefficients
     * Input size time coefficient
     */
    k1: string;
    /** Output size time coefficient */
    k2: string;
    /** Min execution time */
    minTime: string;
    /** Max execution time */
    maxTime: string;
    /** Window and validation */
    sWindowPerModel: number;
    validationEnabled: boolean;
    /** Default validation score */
    vDefault: string;
    /** Revenue account addresses(a pool reserved for platform development (PDP)) */
    nesaPdpAccount: string;
    /** Min penalty amount */
    minPenaltyAmount: Coin;
    /** Base penalty amount */
    basePenaltyAmount: Coin;
    catchUpPower: Long;
    catchUpStopAt: string;
}
/** RequestLog is a log of a request to a miner. */
export interface RequestLog {
    requestId: string;
    minerId: string;
    modelName: string;
    inputTokens: Long;
    outputTokens: Long;
    actualTime: Long;
    avgExecutionTime: string;
    eTime: string;
    sRaw: string;
    s: string;
    sMin: string;
    sMax: string;
    sRollingAfter: string;
    m: number;
    rBefore: string;
    rAfter: string;
    timestamp: Timestamp;
    tNorm: string;
    catchUpFactor: string;
    inferenceFee: Coin;
    minerReward: Coin;
    nesaReward: Coin;
    agentReward: Coin;
    minerPenalty: Coin;
    nonResponse: boolean;
    sessionId: string;
}
export declare const Reputation: {
    typeUrl: string;
    encode(message: Reputation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Reputation;
    fromJSON(object: any): Reputation;
    toJSON(message: Reputation): JsonSafe<Reputation>;
    fromPartial<I extends Exact<DeepPartial<Reputation>, I>>(object: I): Reputation;
};
export declare const ReputationParams: {
    typeUrl: string;
    encode(message: ReputationParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ReputationParams;
    fromJSON(object: any): ReputationParams;
    toJSON(message: ReputationParams): JsonSafe<ReputationParams>;
    fromPartial<I extends Exact<DeepPartial<ReputationParams>, I>>(object: I): ReputationParams;
};
export declare const RequestLog: {
    typeUrl: string;
    encode(message: RequestLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestLog;
    fromJSON(object: any): RequestLog;
    toJSON(message: RequestLog): JsonSafe<RequestLog>;
    fromPartial<I extends Exact<DeepPartial<RequestLog>, I>>(object: I): RequestLog;
};
//# sourceMappingURL=reputation.d.ts.map