import _m0 from 'protobufjs/minimal';
import { DeepPartial, Exact } from '../../../helpers.js';
import { JsonSafe } from '../../../json-safe.js';
export declare const protobufPackage = "nesaorg.nesachain.dht.module.v1";
/** Module is the config object for the module. */
export interface Module {
    /**
     * authority defines the custom module authority. If not set, defaults to the
     * governance module.
     */
    authority: string;
}
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): JsonSafe<Module>;
    fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module;
};
//# sourceMappingURL=module.d.ts.map