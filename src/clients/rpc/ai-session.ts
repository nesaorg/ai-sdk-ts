/**
 * RPC-based AISession implementation.
 * Manages blockchain-registered sessions with VRF-based message signing.
 */
import { AISessionBase } from '../ai-session-base.js';
import { HeartBeatData } from '../ai-session-events.js';
import { AISessionBaseParams } from '../ai-session.types.js';
import { RegisterSessionOnChain } from './signing-rpc-client.js';
import { VRFKeyData, signMessage } from './utils/vrf.js';

/**
 * Constructor parameters for AISessionRpc.
 * Extends the base session parameters with RPC-specific fields.
 */
export interface AISessionRpcConstructorParams extends AISessionBaseParams {
  /**
   * Name of the AI model being used in this session.
   */
  modelName: string;

  /**
   * Blockchain-registered session information.
   */
  onChainData: RegisterSessionOnChain;

  /**
   * VRF key data for message signing.
   */
  vrfKey: VRFKeyData;
}

/**
 * RPC-based AISession implementation.
 * Manages blockchain-registered sessions with VRF-based message signing.
 */
export class AISessionRpc extends AISessionBase {
  /**
   * VRF key data for message signing.
   */
  private readonly vrfKey: VRFKeyData;

  /**
   * Blockchain-registered session information.
   */
  public readonly onChainData: RegisterSessionOnChain;

  /**
   * Creates a new AISessionRpc instance.
   * Automatically starts the heartbeat mechanism.
   *
   * @param params - Constructor parameters for the session
   */
  constructor(params: AISessionRpcConstructorParams) {
    super(params);

    this.vrfKey = params.vrfKey;
    this.onChainData = params.onChainData;
  }

  public static async initialize(
    config: AISessionRpcConstructorParams,
  ): Promise<AISessionRpc> {
    const session = new AISessionRpc(config);

    await session.startHeartbeat();

    return session;
  }

  /**
   * Gets the session ID from the blockchain-registered session.
   *
   * @returns Session ID as a string
   */
  public get id(): string {
    return this.onChainData.sessionId;
  }

  /**
   * Gets the model name from the blockchain-registered session.
   *
   * @returns Model name as a string
   */
  public get modelName(): string {
    return this.onChainData.modelName;
  }

  /**
   * Prepares a query for the RPC session.
   * Adds VRF signature to the query message.
   *
   * @param query - Query object containing sequence number and message
   * @returns Prepared query object with VRF signature
   */
  protected prepareQuery(query: { chat_seq: number; query: string }) {
    return {
      ...query,
      // total_payment: this.onChainData.lockBalance,
      signature_query: signMessage(
        this.vrfKey.privateKey,
        query.query,
        query.chat_seq,
        true,
      ),
    };
  }

  /**
   * Prepares heartbeat data for the RPC session.
   * Adds VRF signature to the heartbeat message.
   *
   * @param query - Base heartbeat query object
   * @returns Heartbeat data with VRF signature
   */
  protected prepareHeartbeat(query: { message: string }): HeartBeatData {
    return {
      ...query,
      signature_message: signMessage(this.vrfKey.privateKey, query.message),
    };
  }

  /**
   * Gets the protocols for WebSocket connections.
   * Returns undefined as RPC sessions don't use protocol headers.
   *
   * @returns undefined
   */
  protected getProtocols(): string | string[] | undefined {
    return undefined;
  }
}
