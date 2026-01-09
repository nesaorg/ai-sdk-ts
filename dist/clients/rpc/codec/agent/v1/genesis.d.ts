import { Params, InnerValues, InferenceAgent, Session, VrfSeed } from './agent.js';
import _m0 from 'protobufjs/minimal';
import { DeepPartial, Exact } from '../../helpers.js';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "agent.v1";
/** GenesisState defines the agent module's genesis state. */
export interface GenesisState {
    /** Params defines the parameters of the module. */
    params: Params;
    /** InnerValues defines the inner values of the module */
    innerValues: InnerValues;
    /** Agents defines the agents of the module */
    agents: InferenceAgent[];
    /** Sessions defines the sessions of the module */
    sessions: Session[];
    /** VrfSeeds defines the VRF seeds of the module */
    vrfSeeds: VrfSeed[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map