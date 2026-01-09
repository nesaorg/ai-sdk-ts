import { BondStatus } from './deposit.js';
import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Reputation } from './reputation.js';
import { Long, DeepPartial, Exact } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "dht.v1";
/** Availability defines the availability of an Orchestrator. */
export declare enum Availability {
    READY = 0,
    LOADING = 1,
    IDLE = 2,
    UNRECOGNIZED = -1
}
export declare function availabilityFromJSON(object: any): Availability;
export declare function availabilityToJSON(object: Availability): string;
/** InferenceType defines the inference type of an Orchestrator. */
export declare enum InferenceType {
    DISTRIBUTED = 0,
    NON_DISTRIBUTED = 1,
    UNRECOGNIZED = -1
}
export declare function inferenceTypeFromJSON(object: any): InferenceType;
export declare function inferenceTypeToJSON(object: InferenceType): string;
/** Orchestrator defines an orchestrator of a model. */
export interface Orchestrator {
    nodeId: string;
    modelName: string;
    inferenceType: InferenceType;
    status: Availability;
    blockCount: Long[];
    bondStatus: BondStatus;
    deposit: Coin;
    reputations: Reputation[];
}
export declare const Orchestrator: {
    typeUrl: string;
    encode(message: Orchestrator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Orchestrator;
    fromJSON(object: any): Orchestrator;
    toJSON(message: Orchestrator): JsonSafe<Orchestrator>;
    fromPartial<I extends Exact<DeepPartial<Orchestrator>, I>>(object: I): Orchestrator;
};
//# sourceMappingURL=orchestrator.d.ts.map