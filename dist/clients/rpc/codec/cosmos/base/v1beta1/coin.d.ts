import _m0 from 'protobufjs/minimal';
import { DeepPartial, Exact } from '../../../helpers.js';
import { JsonSafe } from '../../../json-safe.js';
export declare const protobufPackage = "cosmos.base.v1beta1";
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
    denom: string;
    amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
    denom: string;
    amount: string;
}
export declare const Coin: {
    typeUrl: string;
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): JsonSafe<Coin>;
    fromPartial<I extends Exact<DeepPartial<Coin>, I>>(object: I): Coin;
};
export declare const DecCoin: {
    typeUrl: string;
    encode(message: DecCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecCoin;
    fromJSON(object: any): DecCoin;
    toJSON(message: DecCoin): JsonSafe<DecCoin>;
    fromPartial<I extends Exact<DeepPartial<DecCoin>, I>>(object: I): DecCoin;
};
//# sourceMappingURL=coin.d.ts.map