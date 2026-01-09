import BN from 'bn.js';
export interface VRFKeyData {
    privateKey: BN;
    privateKeyBuf: Uint8Array<ArrayBuffer>;
    publicKey: {
        x: string;
        y: string;
    };
}
export interface VRF {
    seed: Uint8Array;
    proof: Uint8Array;
    hashRandom: Uint8Array;
}
export declare function generateKey(): Promise<VRFKeyData>;
export declare function signMessage(privateKey: any, message: string, chatSeq?: number, isQuestion?: boolean): string;
export declare function processVRF(vrfSeed: Uint8Array<ArrayBufferLike>, keyData: VRFKeyData): {
    vrf: VRF;
    sessionId: string;
};
export declare function generateEphemeralKeyPair(): {
    privateKeyBytes: Uint8Array;
    publicKeyCompressed: Uint8Array;
};
export declare function Evaluate(privateKey: any, m: any): [Uint8Array, Uint8Array];
//# sourceMappingURL=vrf.d.ts.map