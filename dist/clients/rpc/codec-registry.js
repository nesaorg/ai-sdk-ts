/**
 * Codec registry configuration and utilities for Nesa blockchain types.
 * Provides type registration for custom protobuf message types used in the Nesa blockchain.
 */
import { Registry } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';
import { MsgRegisterSession as ProtoMsgRegisterSession, MsgSubmitInferenceRequest as ProtoMsgSubmitInferenceRequest, MsgSubmitInferenceRequestResponse as ProtoMsgSubmitInferenceRequestResponse, VRF as ProtoVRF, } from './codec/agent/v1/tx.js';
import { MsgRegisterMiner as ProtoMsgRegisterMiner, MsgRegisterNode as ProtoMsgRegisterNode, MsgAddMinerDeposit as ProtoMsgAddMinerDeposit, MsgRegisterModel as ProtoMsgRegisterModel, } from './codec/dht/v1/tx.js';
/**
 * Array of type registrations for Nesa-specific protobuf types.
 * Extends the default registry types with Nesa-specific message types.
 */
export const nesaRegistry = [
    ...defaultRegistryTypes,
    [ProtoMsgRegisterNode.typeUrl, ProtoMsgRegisterNode],
    [ProtoMsgRegisterMiner.typeUrl, ProtoMsgRegisterMiner],
    [ProtoMsgAddMinerDeposit.typeUrl, ProtoMsgAddMinerDeposit],
    [ProtoMsgRegisterSession.typeUrl, ProtoMsgRegisterSession],
    [ProtoVRF.typeUrl, ProtoVRF],
    [ProtoMsgRegisterModel.typeUrl, ProtoMsgRegisterModel],
    [
        ProtoMsgSubmitInferenceRequest.typeUrl,
        ProtoMsgSubmitInferenceRequest,
    ],
    [
        ProtoMsgSubmitInferenceRequestResponse.typeUrl,
        ProtoMsgSubmitInferenceRequestResponse,
    ],
];
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
export function getRegistry() {
    const registry = new Registry();
    for (const [typeUrl, msgType] of nesaRegistry) {
        registry.register(typeUrl, msgType);
    }
    return registry;
}
//# sourceMappingURL=codec-registry.js.map