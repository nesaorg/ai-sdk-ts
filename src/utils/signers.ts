/**
 * Signer utilities for Nesa SDK.
 * Provides various methods for creating OfflineSigner instances from different key sources.
 */
import {
  DirectSecp256k1HdWallet,
  DirectSecp256k1Wallet,
  OfflineSigner,
} from '@cosmjs/proto-signing';
import { fromHex } from '@cosmjs/encoding';
import { stringToPath } from '@cosmjs/crypto';

import { ChainInfo } from '../chains/types.js';
import { devnet } from '../chains/nesa.devnet.js';

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
export async function signerFromMnemonic(
  mnemonic: string,
  prefix: string,
  hdPath = "m/44'/118'/0'/0/0",
): Promise<OfflineSigner> {
  return DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix,
    hdPaths: [stringToPath(hdPath)],
  });
}

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
export async function signerFromPrivateKey(
  privKeyHex: string,
  prefix: string,
): Promise<OfflineSigner> {
  let hex = privKeyHex.trim();
  if (hex.startsWith('0x') || hex.startsWith('0X')) {
    hex = hex.slice(2);
  }

  const privKeyBytes = fromHex(hex);
  return DirectSecp256k1Wallet.fromKey(privKeyBytes, prefix);
}

/**
 * Checks if the Keplr wallet extension is present and properly configured.
 *
 * @returns true if Keplr is present and properly configured, false otherwise
 */
export function isKeplrPresent() {
  return !!window?.keplr?.enable && !!window?.keplr?.getOfflineSigner;
}

/**
 * Checks if the Leap wallet extension is present and properly configured.
 *
 * @returns true if Leap is present and properly configured, false otherwise
 */
export function isLeapPresent() {
  return !!window?.leap?.enable && !!window?.leap?.getOfflineSigner;
}

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
export async function signerFromKeplr(
  chainId: string,
  opts: { enable?: boolean; suggestedChainInfo?: ChainInfo } = {
    enable: true,
    suggestedChainInfo: devnet,
  },
): Promise<OfflineSigner> {
  if (false === isKeplrPresent()) {
    throw new Error('Keplr extension not found');
  }

  if (opts?.suggestedChainInfo) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await window.keplr!.experimentalSuggestChain?.(opts.suggestedChainInfo);
  }

  if (false !== opts?.enable) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await window.keplr!.enable(chainId);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return window.keplr!.getOfflineSigner!(chainId);
}

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
export async function signerFromLeap(
  chainId: string,
  opts: { enable?: boolean; suggestedChainInfo?: ChainInfo } = {
    enable: true,
    suggestedChainInfo: devnet,
  },
): Promise<OfflineSigner> {
  if (false === isLeapPresent()) {
    throw new Error('Leap extension not found');
  }

  if (opts?.suggestedChainInfo) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await window.leap!.experimentalSuggestChain?.(opts.suggestedChainInfo);
  }

  if (false !== opts?.enable) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await window.leap!.enable(chainId);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return window.leap!.getOfflineSigner!(chainId);
}
