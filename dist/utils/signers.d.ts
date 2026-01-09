/**
 * Signer utilities for Nesa SDK.
 * Provides various methods for creating OfflineSigner instances from different key sources.
 */
import { OfflineSigner } from '@cosmjs/proto-signing';
import { ChainInfo } from '../chains/types.js';
declare global {
    interface Window {
        keplr?: CosmosExtensionInterface;
        leap?: CosmosExtensionInterface;
    }
}
interface CosmosExtensionInterface {
    /**
     * Suggests a chain to be added to the wallet.
     * @param chainInfo - Chain information to add
     */
    experimentalSuggestChain?(chainInfo: ChainInfo): Promise<void>;
    /**
     * Enables the wallet for a specific chain.
     * @param chainId - ID of the chain to enable
     */
    enable(chainId: string): Promise<void>;
    /**
     * Gets the offline signer for a specific chain.
     * @param chainId - ID of the chain
     */
    getOfflineSigner?(chainId: string): OfflineSigner;
}
/**
 * Creates an OfflineSigner from a BIP-39 mnemonic phrase.
 *
 * @param mnemonic - The 12- or 24-word BIP-39 mnemonic phrase
 * @param prefix - The bech32 address prefix (e.g., 'nesa')
 * @param hdPath - Optional HD path (defaults to "m/44'/118'/0'/0/0")
 * @returns Promise that resolves to an OfflineSigner instance
 *
 * @example
 * ```typescript
 * // Example usage
 * const signer = await signerFromMnemonic(
 *   'test test test test test test test test test test test test',
 *   'nesa'
 * );
 * ```
 */
export declare function signerFromMnemonic(mnemonic: string, prefix: string, hdPath?: string): Promise<OfflineSigner>;
/**
 * Creates an OfflineSigner from a raw secp256k1 private key.
 *
 * @param privKeyHex - The 64-character hex string (32 bytes) of the secp256k1 private key
 * @param prefix - The bech32 address prefix (e.g., 'nesa')
 * @returns Promise that resolves to an OfflineSigner instance
 *
 * @example
 * ```typescript
 * // Example usage
 * const signer = await signerFromPrivateKey(
 *   '<0x-prefixed hex string goes here>',
 *   'nesa'
 * );
 * ```
 */
export declare function signerFromPrivateKey(privKeyHex: string, prefix: string): Promise<OfflineSigner>;
/**
 * Checks if the Keplr wallet extension is present and properly configured.
 *
 * @returns true if Keplr is present and properly configured, false otherwise
 */
export declare function isKeplrPresent(): boolean;
/**
 * Checks if the Leap wallet extension is present and properly configured.
 *
 * @returns true if Leap is present and properly configured, false otherwise
 */
export declare function isLeapPresent(): boolean;
/**
 * Creates an OfflineSigner from the Keplr wallet extension.
 *
 * @param chainId - ID of the chain to connect to
 * @param opts - Optional configuration options
 * @param opts.enable - Whether to enable the wallet (defaults to true)
 * @returns Promise that resolves to an OfflineSigner instance
 *
 * @throws Error if Keplr extension is not found
 *
 * @example
 * ```typescript
 * // Example usage
 * const signer = await signerFromKeplr('nesa');
 * ```
 */
export declare function signerFromKeplr(chainId: string, opts?: {
    enable?: boolean;
    suggestedChainInfo?: ChainInfo;
}): Promise<OfflineSigner>;
/**
 * Creates an OfflineSigner from the Leap wallet extension.
 *
 * @param chainId - ID of the chain to connect to
 * @param opts - Optional configuration options
 * @param opts.enable - Whether to enable the wallet (defaults to true)
 * @returns Promise that resolves to an OfflineSigner instance
 *
 * @throws Error if Leap extension is not found
 *
 * @example
 * ```typescript
 * // Example usage
 * const signer = await signerFromLeap('nesa');
 * ```
 */
export declare function signerFromLeap(chainId: string, opts?: {
    enable?: boolean;
    suggestedChainInfo?: ChainInfo;
}): Promise<OfflineSigner>;
export {};
//# sourceMappingURL=signers.d.ts.map