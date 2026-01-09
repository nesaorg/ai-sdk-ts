/**
 *
 * Original: https://github.com/lionello/secp256k1-js
 *
 * Copyright 2018 Enuma Technologies Limited.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
import BN from 'bn.js';
export type BNTriple = [BN, BN, BN];
export type BNPair = [BN, BN];
export interface ECSignature {
    r: string;
    s: string;
    v: number;
}
export interface PublicKey {
    x: string;
    y: string;
}
export interface Secp256k1Namespace {
    uint256?: (x: BN | number | string | Buffer | Uint8Array, base?: number) => BN;
    rnd?: (P: BN) => BN;
    ecmul?: (p: BNTriple, d: BN) => BNTriple;
    mulmod?: (a: BN, b: BN, m: BN) => BN;
    addmod?: (a: BN, b: BN, m: BN) => BN;
    invmod?: (a: BN, m: BN) => BN;
    mulG?: (k: BN) => BNPair;
    ecsign?: (d: BN, z: BN) => ECSignature;
    JtoA?: (p: BNTriple) => BNPair;
    ecdouble?: (p: BNTriple) => BNTriple;
    ecadd?: (p: BNTriple, q: BNTriple) => BNTriple;
    AtoJ?: (x: BN, y: BN) => BNTriple;
    isValidPoint?: (x: BN, y: BN) => boolean;
    toHex?: (bn: BN) => string;
    decompressKey?: (x: BN, yBit: boolean) => BN;
    generatePublicKeyFromPrivateKeyData?: (pk: BN) => PublicKey;
    ecrecover?: (recId: number, r: BN, s: BN, message: BN) => PublicKey | null;
    ecverify?: (Qx: BN, Qy: BN, r: BN, s: BN, z: BN) => boolean;
}
declare global {
    interface Window {
        Secp256k1?: Secp256k1Namespace;
    }
}
export declare function uint256(x: any, base?: any): BN;
export declare function rnd(P: any): BN;
export declare function ecmul(_p: any, _d: any): BN[];
export declare function mulmod(a: any, b: any, P: any): any;
export declare function addmod(a: any, b: any, P: any): any;
export declare function invmod(a: any, P: any): any;
export declare function mulG(k: any): any[];
export declare function assert(cond: any, msg: any): void;
export declare function ecsign(d: any, z: any): {
    r: string;
    s: string;
    v: number;
};
export declare function JtoA(p: any): any[];
export declare function ecdouble(_p: any): any[];
export declare function negmod(a: any, P: any): any;
export declare function ecadd(_p: any, _q: any): any;
export declare function AtoJ(x: any, y: any): BN[];
export declare function isValidPoint(x: any, y: any): any;
export declare function toHex(bn: any): string;
export declare function decompressKey(x: any, yBit: any): any;
export declare function generatePublicKeyFromPrivateKeyData(pk: any): {
    x: string;
    y: string;
};
export declare function ecrecover(recId: any, sigr: any, sigs: any, message: any): {
    x: string;
    y: string;
} | null;
export declare function ecverify(Qx: any, Qy: any, sigr: any, sigs: any, z: any): any;
declare const _default: {
    uint256: typeof uint256;
    rnd: typeof rnd;
    ecmul: typeof ecmul;
    mulmod: typeof mulmod;
    addmod: typeof addmod;
    invmod: typeof invmod;
    mulG: typeof mulG;
    ecsign: typeof ecsign;
    JtoA: typeof JtoA;
    ecdouble: typeof ecdouble;
    ecadd: typeof ecadd;
    AtoJ: typeof AtoJ;
    isValidPoint: typeof isValidPoint;
    toHex: typeof toHex;
    decompressKey: typeof decompressKey;
    generatePublicKeyFromPrivateKeyData: typeof generatePublicKeyFromPrivateKeyData;
    ecrecover: typeof ecrecover;
    ecverify: typeof ecverify;
};
export default _default;
//# sourceMappingURL=secp256k1.d.ts.map