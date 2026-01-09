/**
 * Codec registry configuration and utilities for Nesa blockchain types.
 * Provides type registration for custom protobuf message types used in the Nesa blockchain.
 */
import { Registry, GeneratedType } from '@cosmjs/proto-signing';
/**
 * Array of type registrations for Nesa-specific protobuf types.
 * Extends the default registry types with Nesa-specific message types.
 */
export declare const nesaRegistry: ReadonlyArray<[string, GeneratedType]>;
/**
 * Creates and returns a new Registry instance configured with Nesa-specific types.
 *
 * @returns A new Registry instance with Nesa types registered
 *
 * @example
 * ```typescript
 * // Get the configured registry
 * const registry = getRegistry();
 *
 * // Use the registry with a signing client
 * const client = await SigningStargateClient.connectWithSigner(
 *   rpcEndpoint,
 *   signer,
 *   { registry }
 * );
 * ```
 */
export declare function getRegistry(): Registry;
//# sourceMappingURL=codec-registry.d.ts.map