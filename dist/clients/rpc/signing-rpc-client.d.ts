import { OfflineSigner } from '@cosmjs/proto-signing';
import { SigningStargateClient, SigningStargateClientOptions, Event } from '@cosmjs/stargate';
import { StdFee } from '@cosmjs/amino';
import { TokenPrice } from './codec/agent/v1/agent.js';
import { Coin } from './codec/cosmos/base/v1beta1/coin.js';
import { MsgRegisterModelResponse } from './codec/dht/v1/tx.js';
import { Long } from './codec/helpers.js';
import { RpcClient } from './rpc-client.js';
import { VRFKeyData, VRF as ProtoVRF } from './utils/vrf.js';
import { Logger } from '../../utils/logger.js';
/**
 * Parameters required to register a new AI inference session on the blockchain.
 * This interface defines the configuration needed to create and fund a session
 * for interacting with AI models on the Nesa network.
 */
export interface RegisterSessionParams {
    /**
     * Optional seed value used for generating verifiable random values (VRF).
     * If not provided, a random seed will be generated automatically.
     */
    sessionSeed?: string;
    /**
     * The name of the AI model to be used for this session.
     * Must match a supported model name on the Nesa network.
     */
    modelName: string;
    /**
     * The amount of tokens to lock for this session, represented as a string.
     * This amount will be locked from the sender's account for the duration of the session.
     */
    lockAmount: string;
    /**
     * The denomination of the tokens to be locked (e.g., 'untrn' for Nesa Testnet tokens).
     * If not specified, the network's default denomination will be used.
     */
    lockDenom?: string;
    /**
     * Optional transaction fee configuration.
     * If not provided, the network's default fee structure will be used.
     */
    fee?: StdFee;
    /**
     * Optional maximum unit price for the session.
     * If provided, session creation will fail if the unit price exceeds this value.
     *
     * Find the current price of a model using the `rpc.getTokenPrice` method.
     */
    maxUnitPrice?: TokenPrice;
}
/**
 * Represents a successfully registered AI session on the blockchain.
 * This interface contains all the metadata and proof of the session registration
 * that can be used to interact with the AI model.
 */
export interface RegisterSessionOnChain {
    /** The blockchain address that registered this session */
    account: string;
    /** Unique identifier for the registered session */
    sessionId: string;
    /**
     * The name of the AI model associated with this session.
     * This determines the capabilities and pricing of the AI service.
     */
    modelName: string;
    /**
     * The token price structure for this session, including the cost per token
     * and any applicable rate limits or pricing tiers.
     */
    tokenPrice: TokenPrice;
    /**
     * Verifiable Random Function (VRF) proof generated during session registration.
     * Used for cryptographic verification of the session's authenticity.
     */
    vrf: ProtoVRF;
    /**
     * The amount and denomination of tokens locked for this session.
     * These tokens are held in escrow until the session is completed or cancelled.
     */
    lockBalance: Coin;
    /**
     * The transaction hash of the blockchain transaction that created this session.
     * Can be used to look up the transaction in a block explorer.
     */
    transactionHash: string;
    /**
     * The block height at which the session was registered.
     * Used for tracking session age and blockchain state.
     */
    height: number;
    /**
     * Raw blockchain events emitted during session registration.
     * Contains detailed information about the session creation process.
     */
    events: readonly Event[];
}
export declare class SigningRpcClient extends RpcClient {
    readonly sign: SigningStargateClient;
    readonly senderAddress: string;
    static connectWithSigner(rpcEndpoint: string, signer: OfflineSigner, senderAddress: string, chainId: string | undefined, prefix: string, defaultDenom: string, defaultGasPrice: string, options: SigningStargateClientOptions & {
        logger?: Logger;
    }): Promise<SigningRpcClient>;
    private constructor();
    registerSession(keyData: VRFKeyData, params: RegisterSessionParams): Promise<RegisterSessionOnChain>;
    private generateVRF;
    registerModel(creator: string, modelName: string, allowList: string[], tokenPrice?: TokenPrice, fee?: StdFee | number | 'auto'): Promise<MsgRegisterModelResponse>;
    registerMiner(creator: string, nodeId: string, options?: {
        fee?: StdFee | number | 'auto';
        maxRetries?: number;
    }): Promise<{
        txHash: string;
    }>;
    registerNode(nodeId: string, publicName: string, version: string, networkAddress: string, walletAddress: string, vram: Long, networkRps: number, usingRelay: boolean, nextPings: Uint8Array[], options?: {
        fee?: StdFee | number | 'auto';
        maxRetries?: number;
    }): Promise<{
        txHash: string;
    }>;
    addMinerDeposit(nodeId: string, amountUnes: string, options?: {
        fee?: StdFee | 'auto';
        maxRetries?: number;
    }): Promise<{
        txHash: string;
    }>;
}
//# sourceMappingURL=signing-rpc-client.d.ts.map