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

import { randomBytes as nodeRandomBytes } from 'crypto';
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
  uint256?: (
    x: BN | number | string | Buffer | Uint8Array,
    base?: number,
  ) => BN;
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

const randomBytes =
  typeof window === 'undefined'
    ? nodeRandomBytes
    : (length: number) => window.crypto.getRandomValues(new Uint8Array(length));

declare global {
  interface Window {
    Secp256k1?: Secp256k1Namespace;
  }
}

if (typeof window !== 'undefined' && !window.Secp256k1) {
  window.Secp256k1 = {} as Secp256k1Namespace;
}

export function uint256(x: any, base?: any) {
  return new BN(x, base);
}

export function rnd(P: any) {
  return uint256(randomBytes(32)).umod(P); //TODO red
}

const A = uint256(0);
const B = uint256(7);
const GX = uint256(
  '79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798',
  16,
);
const GY = uint256(
  '483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8',
  16,
);
const P = uint256(
  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F',
  16,
);
const N = uint256(
  'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141',
  16,
);
const _0 = uint256(0);
const _1 = uint256(1);

export function ecmul(_p: any, _d: any) {
  let R = [_0, _0, _0];

  if (_d == 0 || (_p[0] == 0 && _p[1] == 0)) {
    return R;
  }
  let T = [_p[0], _p[1], _p[2]];

  const d = _d.clone();
  while (d != 0) {
    if (d.testn(0)) {
      R = ecadd(T, R);
    }
    T = ecdouble(T);
    d.iushrn(1);
  }

  return R;
}

export function mulmod(a: any, b: any, P: any) {
  return a.mul(b).umod(P);
}

export function addmod(a: any, b: any, P: any) {
  return a.add(b).umod(P);
}

export function invmod(a: any, P: any) {
  return a.invm(P);
}

export function mulG(k: any) {
  const GinJ = AtoJ(GX, GY);
  const PUBinJ = ecmul(GinJ, k);
  return JtoA(PUBinJ);
}

export function assert(cond: any, msg: any) {
  if (!cond) {
    throw Error('assertion failed: ' + msg);
  }
}

export function ecsign(d: any, z: any) {
  assert(d != 0, 'd must not be 0');
  assert(z != 0, 'z must not be 0');
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const k = rnd(P);
    const R = mulG(k);
    if (R[0] == 0) continue;
    const s = mulmod(invmod(k, N), addmod(z, mulmod(R[0], d, N), N), N);
    if (s == 0) continue;
    if (s.testn(255)) continue;
    return { r: toHex(R[0]), s: toHex(s), v: R[1].testn(0) ? 1 : 0 };
  }
}

export function JtoA(p: any) {
  const zInv = invmod(p[2], P);
  const zInv2 = mulmod(zInv, zInv, P);
  return [mulmod(p[0], zInv2, P), mulmod(p[1], mulmod(zInv, zInv2, P), P)];
}

//formula from https://en.wikibooks.org/wiki/Cryptography/Prime_Curve/Jacobian_Coordinates
export function ecdouble(_p: any) {
  if (_p[1] == 0) {
    return [_1, _1, _0];
  }

  const z2 = mulmod(_p[2], _p[2], P);
  const m = addmod(
    mulmod(A, mulmod(z2, z2, P), P),
    mulmod(uint256(3), mulmod(_p[0], _p[0], P), P),
    P,
  );
  const y2 = mulmod(_p[1], _p[1], P);
  const s = mulmod(uint256(4), mulmod(_p[0], y2, P), P);

  const x = addmod(mulmod(m, m, P), negmod(mulmod(s, uint256(2), P), P), P);
  return [
    x,
    addmod(
      mulmod(m, addmod(s, negmod(x, P), P), P),
      negmod(mulmod(uint256(8), mulmod(y2, y2, P), P), P),
      P,
    ),
    mulmod(uint256(2), mulmod(_p[1], _p[2], P), P),
  ];
}

export function negmod(a: any, P: any) {
  return P.sub(a);
}

// formula from https://en.wikibooks.org/wiki/Cryptography/Prime_Curve/Jacobian_Coordinates
export function ecadd(_p: any, _q: any) {
  if (_q[0] == 0 && _q[1] == 0 && _q[2] == 0) {
    return _p;
  }

  let z2 = mulmod(_q[2], _q[2], P);
  const u1 = mulmod(_p[0], z2, P);
  const s1 = mulmod(_p[1], mulmod(z2, _q[2], P), P);
  z2 = mulmod(_p[2], _p[2], P);
  let u2 = mulmod(_q[0], z2, P);
  let s2 = mulmod(_q[1], mulmod(z2, _p[2], P), P);

  if (u1.eq(u2)) {
    if (!s1.eq(s2)) {
      return [_1, _1, _0];
    } else {
      return ecdouble(_p);
    }
  }

  u2 = addmod(u2, negmod(u1, P), P);
  z2 = mulmod(u2, u2, P);
  const t2 = mulmod(u1, z2, P);
  z2 = mulmod(u2, z2, P);
  s2 = addmod(s2, negmod(s1, P), P);
  const x = addmod(
    addmod(mulmod(s2, s2, P), negmod(z2, P), P),
    negmod(mulmod(uint256(2), t2, P), P),
    P,
  );
  return [
    x,
    addmod(
      mulmod(s2, addmod(t2, negmod(x, P), P), P),
      negmod(mulmod(s1, z2, P), P),
      P,
    ),
    mulmod(u2, mulmod(_p[2], _q[2], P), P),
  ];
}

export function AtoJ(x: any, y: any) {
  return [uint256(x), uint256(y), _1];
}

export function isValidPoint(x: any, y: any) {
  const yy = addmod(mulmod(mulmod(x, x, P), x, P), B, P);
  return yy.eq(mulmod(y, y, P));
}

export function toHex(bn: any) {
  return (
    '00000000000000000000000000000000000000000000000000000000000000000000000000000000' +
    bn.toString(16)
  ).slice(-64);
}

export function decompressKey(x: any, yBit: any) {
  const redP = BN.red('k256');
  x = x.toRed(redP);
  const y = x.redMul(x).redMul(x).redAdd(B.toRed(redP)).redSqrt();
  const sign = y.testn(0);
  return (sign != yBit ? y.redNeg() : y).fromRed();
}

export function generatePublicKeyFromPrivateKeyData(pk: any) {
  const p = mulG(pk);
  return { x: toHex(p[0]), y: toHex(p[1]) };
}

export function ecrecover(recId: any, sigr: any, sigs: any, message: any) {
  assert(recId >= 0 && recId <= 3, 'recId must be 0..3');
  assert(sigr != 0, 'sigr must not be 0');
  assert(sigs != 0, 'sigs must not be 0');
  const x = addmod(uint256(sigr), P.muln(recId >> 1), P);
  if (x.gte(P)) {
    return null;
  }
  const y = decompressKey(x, (recId & 1) == 1);
  const e = uint256(message);
  const eNeg = negmod(e, N);
  const rInv = invmod(sigr, N);
  const srInv = mulmod(rInv, sigs, N);
  const eNegrInv = mulmod(rInv, eNeg, N);
  const R = AtoJ(x, y);
  const G = AtoJ(GX, GY);
  const qinJ = ecadd(ecmul(G, eNegrInv), ecmul(R, srInv));
  const p = JtoA(qinJ);
  return { x: toHex(p[0]), y: toHex(p[1]) };
}

export function ecverify(Qx: any, Qy: any, sigr: any, sigs: any, z: any) {
  if (sigs == 0 || sigr == 0) {
    return false;
  }
  const w = invmod(sigs, N);
  const u1 = mulmod(z, w, N);
  const u2 = mulmod(sigr, w, N);
  const Q = AtoJ(Qx, Qy);
  const G = AtoJ(GX, GY);
  const RinJ = ecadd(ecmul(G, u1), ecmul(Q, u2));
  const r = JtoA(RinJ);
  return sigr.eq(r[0]);
}

if (typeof window !== 'undefined') {
  // @ts-expect-error 2769
  Object.assign(window.Secp256k1, {
    uint256,
    rnd,
    ecsign,
    ecmul,
    ecdouble,
    ecadd,
    mulmod,
    addmod,
    invmod,
    mulG,
    JtoA,
    AtoJ,
    isValidPoint,
    decompressKey,
    generatePublicKeyFromPrivateKeyData,
    ecrecover,
    ecverify,
  });
}

export default {
  uint256,
  rnd,
  ecmul,
  mulmod,
  addmod,
  invmod,
  mulG,
  ecsign,
  JtoA,
  ecdouble,
  ecadd,
  AtoJ,
  isValidPoint,
  toHex,
  decompressKey,
  generatePublicKeyFromPrivateKeyData,
  ecrecover,
  ecverify,
};
