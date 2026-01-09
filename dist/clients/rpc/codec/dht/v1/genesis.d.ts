import { Params } from './params.js';
import { Model, ModelConfig } from './model.js';
import { Node } from './node.js';
import { Miner } from './miner.js';
import { Orchestrator } from './orchestrator.js';
import { UnbondingEntry } from './deposit.js';
import { ReputationParams } from './reputation.js';
import _m0 from 'protobufjs/minimal';
import { DeepPartial, Exact } from '../../helpers.js';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "dht.v1";
/** OrchestratorMiner defines an association between an orchestrator and a miner. */
export interface OrchestratorMiner {
    orchestratorId: string;
    minerId: string;
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
}
export declare const OrchestratorMiner: {
    typeUrl: string;
    encode(message: OrchestratorMiner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrchestratorMiner;
    fromJSON(object: any): OrchestratorMiner;
    toJSON(message: OrchestratorMiner): JsonSafe<OrchestratorMiner>;
    fromPartial<I extends Exact<DeepPartial<OrchestratorMiner>, I>>(object: I): OrchestratorMiner;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map