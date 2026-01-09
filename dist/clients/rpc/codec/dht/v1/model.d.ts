import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Long, DeepPartial, Exact } from '../../helpers.js';
import _m0 from 'protobufjs/minimal';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "dht.v1";
/** TokenPrice defines the price of a token */
export interface TokenPrice {
    inputPrice: Coin;
    outputPrice: Coin;
}
/** Model defines a model */
export interface Model {
    creator: string;
    modelName: string;
    tokenPrice: TokenPrice;
    sWindow?: ModelSWindow;
}
/** ModelConfig defines configuration parameters for a specific model */
export interface ModelConfig {
    /** Model name */
    modelName: string;
    /** Model size */
    modelSize: Long;
    /** Rolling/EMA average execution time */
    avgExecutionTime: string;
    /** Model specific input coefficient (optional) */
    k1Override?: string;
    /** Model specific output coefficient (optional) */
    k2Override?: string;
}
/** ModelSWindow maintains the last 100 S calculations for a model */
export interface ModelSWindow {
    /** S raw */
    sRaw: string[];
}
export declare const TokenPrice: {
    typeUrl: string;
    encode(message: TokenPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice;
    fromJSON(object: any): TokenPrice;
    toJSON(message: TokenPrice): JsonSafe<TokenPrice>;
    fromPartial<I extends Exact<DeepPartial<TokenPrice>, I>>(object: I): TokenPrice;
};
export declare const Model: {
    typeUrl: string;
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): JsonSafe<Model>;
    fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model;
};
export declare const ModelConfig: {
    typeUrl: string;
    encode(message: ModelConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModelConfig;
    fromJSON(object: any): ModelConfig;
    toJSON(message: ModelConfig): JsonSafe<ModelConfig>;
    fromPartial<I extends Exact<DeepPartial<ModelConfig>, I>>(object: I): ModelConfig;
};
export declare const ModelSWindow: {
    typeUrl: string;
    encode(message: ModelSWindow, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModelSWindow;
    fromJSON(object: any): ModelSWindow;
    toJSON(message: ModelSWindow): JsonSafe<ModelSWindow>;
    fromPartial<I extends Exact<DeepPartial<ModelSWindow>, I>>(object: I): ModelSWindow;
};
//# sourceMappingURL=model.d.ts.map