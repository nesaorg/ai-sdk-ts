import BN from 'bn.js';
import { sha512, sha256 } from '@cosmjs/crypto';
import CryptoJS from 'crypto-js';
import elliptic from 'elliptic';
import crypto from 'isomorphic-webcrypto';
import { ecsign, generatePublicKeyFromPrivateKeyData, uint256, } from '../../../vendor/secp256k1.js';
export async function generateKey() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const privateKeyBuf = array;
    const privateKey = uint256(privateKeyBuf, 16);
    const publicKey = generatePublicKeyFromPrivateKeyData(privateKey);
    return { privateKey, privateKeyBuf, publicKey };
}
export function signMessage(privateKey, message, chatSeq, isQuestion) {
    let messageData;
    if (isQuestion) {
        const sortSignDataHash = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
        messageData = `${sortSignDataHash}|${chatSeq}`;
    }
    else {
        messageData = message;
    }
    const signDataHash = CryptoJS.SHA256(messageData).toString(CryptoJS.enc.Hex);
    const digest = uint256(signDataHash, 16);
    const signature = ecsign(privateKey, digest);
    let sigV = signature.v.toString().length < 2
        ? `0${signature.v.toString()}`
        : signature.v.toString();
    sigV = sigV.length < 2 ? `0${sigV}` : sigV;
    const signatureData = `${signature.r}${signature.s}${sigV}`;
    return signatureData;
}
export function processVRF(vrfSeed, keyData) {
    const publicKeyY = BigInt(`0x${keyData.publicKey.y}`);
    let compressedPublicKey = '';
    if (publicKeyY % 2n === 0n) {
        compressedPublicKey = '02' + keyData.publicKey.x;
    }
    else {
        compressedPublicKey = '03' + keyData.publicKey.x;
    }
    const [hash, proof] = Evaluate(keyData.privateKeyBuf, vrfSeed);
    return {
        vrf: { seed: vrfSeed, proof, hashRandom: hash },
        sessionId: compressedPublicKey,
    };
}
export function generateEphemeralKeyPair() {
    // eslint-disable-next-line import/no-named-as-default-member
    const ec = new elliptic.ec('secp256k1');
    const keyPair = ec.genKeyPair();
    const privateKeyBytes = new Uint8Array(keyPair.getPrivate().toArray('be', 32));
    const publicKeyCompressed = new Uint8Array(keyPair.getPublic().encodeCompressed());
    return { privateKeyBytes, publicKeyCompressed };
}
export function Evaluate(privateKey, m) {
    // eslint-disable-next-line import/no-named-as-default-member
    const ec = new elliptic.ec('secp256k1');
    const currentKey = ec.keyFromPrivate(privateKey);
    const r = ec.genKeyPair();
    const rBN = r.getPrivate();
    const toBytesInt32 = (num) => {
        return new Uint8Array([
            (num & 0xff000000) >> 24,
            (num & 0x00ff0000) >> 16,
            (num & 0x0000ff00) >> 8,
            num & 0x000000ff,
        ]);
    };
    const Unmarshal = (data) => {
        // @ts-expect-error 18049
        const byteLen = (ec.n.bitLength() + 7) >> 3;
        ec.g.mul(10);
        if ((data[0] & ~1) != 2) {
            return [null, null];
        }
        if (data.length != 1 + byteLen)
            return [null, null];
        const tx = new BN(data.slice(1, 1 + byteLen));
        try {
            const p = ec.curve.pointFromX(tx);
            return [p.x, p.y];
        }
        catch (e) {
            return [null, null];
        }
    };
    const H1 = (m) => {
        let x = null, y = null;
        // @ts-expect-error 18049
        const byteLen = (ec.n.bitLength() + 7) >> 3;
        let i = 0;
        while (x == null && i < 100) {
            const res = sha512(new Uint8Array([...toBytesInt32(i), ...m]));
            const r = [2, ...res];
            [x, y] = Unmarshal(r.slice(0, byteLen + 1));
            i++;
        }
        return ec.curve.point(x, y);
    };
    const pointH = H1(m);
    const point = pointH.mul(privateKey);
    const vrf = point.encode();
    const rgPoint = ec.curve.g.mul(rBN);
    const rhPoint = pointH.mul(rBN);
    const b = [
        ...ec.curve.g.encode(),
        ...pointH.encode(),
        // @ts-expect-error 2554
        ...currentKey.getPublic().encode(),
        ...vrf,
        ...rgPoint.encode(),
        ...rhPoint.encode(),
    ];
    const one = new BN(1);
    const H2 = (m) => {
        // @ts-expect-error 18049
        const byteLen = (ec.n.bitLength() + 7) >> 3;
        let i = 0;
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const res = sha512(new Uint8Array([...toBytesInt32(i), ...m]));
            const k = new BN(res.slice(0, byteLen));
            if (k.cmp(ec.curve.n.sub(one)) == -1) {
                return k.add(one);
            }
            i++;
        }
    };
    const s = H2(b);
    const t = rBN.sub(s.mul(currentKey.getPrivate())).umod(ec.curve.n);
    const index = sha256(new Uint8Array(vrf));
    const buf = [
        ...new Array(32 - s.byteLength()).fill(0),
        ...s.toArray(),
        ...new Array(32 - t.byteLength()).fill(0),
        ...t.toArray(),
        ...vrf,
    ];
    return [index, buf];
}
//# sourceMappingURL=vrf.js.map