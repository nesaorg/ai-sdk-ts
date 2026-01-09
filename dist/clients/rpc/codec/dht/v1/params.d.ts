import { Coin } from '../../cosmos/base/v1beta1/coin.js';
import { Duration } from '../../google/protobuf/duration.js';
import { TokenPrice } from './model.js';
import _m0 from 'protobufjs/minimal';
import { DeepPartial, Exact } from '../../helpers.js';
import { JsonSafe } from '../../json-safe.js';
export declare const protobufPackage = "dht.v1";
/** Params defines the parameters for the module. */
export interface Params {
    adminAccount: string;
    orchestratorMinDeposit: Coin;
    minerMinDeposit: Coin;
    orchestratorUnbondingPeriod: Duration;
    minerUnbondingPeriod: Duration;
    labelAdminAccount: string;
    reputationAdminAccount: string;
    priceTokenDenoms: string[];
    modelDefaultTokenPrice?: TokenPrice;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
//# sourceMappingURL=params.d.ts.map