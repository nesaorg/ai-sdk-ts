/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "agent.v1";
/** AgentStatus enumerates the inference agent status. */
export enum AgentStatus {
  /** AGENT_STATUS_ACTIVE - AGENT_STATUS_ACTIVE represents the active status. */
  AGENT_STATUS_ACTIVE = 0,
  /** AGENT_STATUS_INACTIVE - AGENT_STATUS_INACTIVE represents the inactive status. */
  AGENT_STATUS_INACTIVE = 1,
  UNRECOGNIZED = -1,
}
export function agentStatusFromJSON(object: any): AgentStatus {
  switch (object) {
    case 0:
    case "AGENT_STATUS_ACTIVE":
      return AgentStatus.AGENT_STATUS_ACTIVE;
    case 1:
    case "AGENT_STATUS_INACTIVE":
      return AgentStatus.AGENT_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AgentStatus.UNRECOGNIZED;
  }
}
export function agentStatusToJSON(object: AgentStatus): string {
  switch (object) {
    case AgentStatus.AGENT_STATUS_ACTIVE:
      return "AGENT_STATUS_ACTIVE";
    case AgentStatus.AGENT_STATUS_INACTIVE:
      return "AGENT_STATUS_INACTIVE";
    case AgentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SessionStatus enumerates the statuses of a session. */
export enum SessionStatus {
  /** SESSION_STATUS_DEFAULT - SESSION_STATUS_DEFAULT is a placeholder and will not appear in session. */
  SESSION_STATUS_DEFAULT = 0,
  /**
   * SESSION_STATUS_PENDING - SESSION_STATUS_PENDING indicates the session is pending. It's waiting for
   * the payment to be submitted.
   */
  SESSION_STATUS_PENDING = 1,
  /** SESSION_STATUS_SUBMITTED - SESSION_STATUS_SUBMITTED indicates the payment has been submitted. */
  SESSION_STATUS_SUBMITTED = 2,
  UNRECOGNIZED = -1,
}
export function sessionStatusFromJSON(object: any): SessionStatus {
  switch (object) {
    case 0:
    case "SESSION_STATUS_DEFAULT":
      return SessionStatus.SESSION_STATUS_DEFAULT;
    case 1:
    case "SESSION_STATUS_PENDING":
      return SessionStatus.SESSION_STATUS_PENDING;
    case 2:
    case "SESSION_STATUS_SUBMITTED":
      return SessionStatus.SESSION_STATUS_SUBMITTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SessionStatus.UNRECOGNIZED;
  }
}
export function sessionStatusToJSON(object: SessionStatus): string {
  switch (object) {
    case SessionStatus.SESSION_STATUS_DEFAULT:
      return "SESSION_STATUS_DEFAULT";
    case SessionStatus.SESSION_STATUS_PENDING:
      return "SESSION_STATUS_PENDING";
    case SessionStatus.SESSION_STATUS_SUBMITTED:
      return "SESSION_STATUS_SUBMITTED";
    case SessionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the agent module's global params. */
export interface Params {
  /** The minimum coins that needs to be locked when user registers a session */
  userMinimumLock: Coin;
  /**
   * When the session is created, the time period that inference agent can
   * submit payment. After this period, the session will be automatically
   * canceled.
   */
  sessionTime: Duration;
  /**
   * Global vrf seed. Each user calculates their own vrf seed based on the
   * global vrf seed when vrf is initialized.
   */
  globalSeed: Uint8Array;
  /**
   * The minimum version number for agent registration/update,
   * registration/update is not allowed if the version number is lower than this
   * one
   */
  lowestAgentVersion: Long;
  /**
   * The highest version number of agent registration/update,
   * registration/update is not allowed if the version number is higher than
   * this
   */
  highestAgentVersion: Long;
  /**
   * The number of validators during the challenge.
   * When the number of agents with corresponding models is lower than this
   * number, the challenge will not be triggered.
   */
  validatorCount: Long;
  /**
   * The time an agent is valid on the chain after registration/update.
   * After this time is exceeded, the agent will be automatically marked as
   * invalid.
   */
  agentValidTime: Duration;
  /** The admin account of the agent module */
  admin: string;
}
/** InnerValues defines the values that changed by agent module. */
export interface InnerValues {
  /**
   * The seed used by the module for VRF. It changes with each block and each
   * usage.
   */
  seed: Uint8Array;
}
/**
 * The inference agent represents the registered entity on the chain that
 * provides the inference service.
 */
export interface InferenceAgent {
  /** The on-chain address of the inference agent */
  account: string;
  /** URL address that provides the inference service. */
  url: string;
  /** The version of the inference agent. */
  version: Long;
  /** The status of the inference agent. */
  status: AgentStatus;
  /** The timestamp that agent becomes inactive. */
  validUntil: Timestamp;
}
/** TokenPrice defines the price of the token used for payment. */
export interface TokenPrice {
  inputPrice: Coin;
  outputPrice: Coin;
}
/** Session represents an inference session. */
export interface Session {
  /** The ID of the session. It's compressed secp256k1 pubkey. */
  sessionId: string;
  /** The account of the user who created and pay for the session. */
  account: string;
  /** The name of the model used in the session */
  modelName: string;
  /** The account of the agent providing the model's inference service. */
  agentAccount: string;
  /** The amount of coins locked by the user to do inference. */
  userLock: Coin;
  /** the price of each token in session. */
  tokenPrice: TokenPrice;
  /** The expiration timestamp of the session. */
  expirationAt: Timestamp;
  /** The status of the session. */
  status: SessionStatus;
  /** The remaining available tokens for the user. */
  availableLock: Coin;
}
/** VrfSeed represents the VRF seed for each user. */
export interface VrfSeed {
  /** The account of the user. */
  account: string;
  /** The VRF seed for the user. */
  seed: Uint8Array;
}
function createBaseParams(): Params {
  return {
    userMinimumLock: Coin.fromPartial({}),
    sessionTime: Duration.fromPartial({}),
    globalSeed: new Uint8Array(),
    lowestAgentVersion: Long.UZERO,
    highestAgentVersion: Long.UZERO,
    validatorCount: Long.UZERO,
    agentValidTime: Duration.fromPartial({}),
    admin: ""
  };
}
export const Params = {
  typeUrl: "/agent.v1.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userMinimumLock !== undefined) {
      Coin.encode(message.userMinimumLock, writer.uint32(10).fork()).ldelim();
    }
    if (message.sessionTime !== undefined) {
      Duration.encode(message.sessionTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.globalSeed.length !== 0) {
      writer.uint32(26).bytes(message.globalSeed);
    }
    if (!message.lowestAgentVersion.isZero()) {
      writer.uint32(32).uint64(message.lowestAgentVersion);
    }
    if (!message.highestAgentVersion.isZero()) {
      writer.uint32(40).uint64(message.highestAgentVersion);
    }
    if (!message.validatorCount.isZero()) {
      writer.uint32(48).uint64(message.validatorCount);
    }
    if (message.agentValidTime !== undefined) {
      Duration.encode(message.agentValidTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.admin !== "") {
      writer.uint32(66).string(message.admin);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userMinimumLock = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sessionTime = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.globalSeed = reader.bytes();
          break;
        case 4:
          message.lowestAgentVersion = reader.uint64() as Long;
          break;
        case 5:
          message.highestAgentVersion = reader.uint64() as Long;
          break;
        case 6:
          message.validatorCount = reader.uint64() as Long;
          break;
        case 7:
          message.agentValidTime = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.userMinimumLock)) obj.userMinimumLock = Coin.fromJSON(object.userMinimumLock);
    if (isSet(object.sessionTime)) obj.sessionTime = Duration.fromJSON(object.sessionTime);
    if (isSet(object.globalSeed)) obj.globalSeed = bytesFromBase64(object.globalSeed);
    if (isSet(object.lowestAgentVersion)) obj.lowestAgentVersion = Long.fromValue(object.lowestAgentVersion);
    if (isSet(object.highestAgentVersion)) obj.highestAgentVersion = Long.fromValue(object.highestAgentVersion);
    if (isSet(object.validatorCount)) obj.validatorCount = Long.fromValue(object.validatorCount);
    if (isSet(object.agentValidTime)) obj.agentValidTime = Duration.fromJSON(object.agentValidTime);
    if (isSet(object.admin)) obj.admin = String(object.admin);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.userMinimumLock !== undefined && (obj.userMinimumLock = message.userMinimumLock ? Coin.toJSON(message.userMinimumLock) : undefined);
    message.sessionTime !== undefined && (obj.sessionTime = message.sessionTime ? Duration.toJSON(message.sessionTime) : undefined);
    message.globalSeed !== undefined && (obj.globalSeed = base64FromBytes(message.globalSeed !== undefined ? message.globalSeed : new Uint8Array()));
    message.lowestAgentVersion !== undefined && (obj.lowestAgentVersion = (message.lowestAgentVersion || Long.UZERO).toString());
    message.highestAgentVersion !== undefined && (obj.highestAgentVersion = (message.highestAgentVersion || Long.UZERO).toString());
    message.validatorCount !== undefined && (obj.validatorCount = (message.validatorCount || Long.UZERO).toString());
    message.agentValidTime !== undefined && (obj.agentValidTime = message.agentValidTime ? Duration.toJSON(message.agentValidTime) : undefined);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.userMinimumLock !== undefined && object.userMinimumLock !== null) {
      message.userMinimumLock = Coin.fromPartial(object.userMinimumLock);
    }
    if (object.sessionTime !== undefined && object.sessionTime !== null) {
      message.sessionTime = Duration.fromPartial(object.sessionTime);
    }
    message.globalSeed = object.globalSeed ?? new Uint8Array();
    if (object.lowestAgentVersion !== undefined && object.lowestAgentVersion !== null) {
      message.lowestAgentVersion = Long.fromValue(object.lowestAgentVersion);
    }
    if (object.highestAgentVersion !== undefined && object.highestAgentVersion !== null) {
      message.highestAgentVersion = Long.fromValue(object.highestAgentVersion);
    }
    if (object.validatorCount !== undefined && object.validatorCount !== null) {
      message.validatorCount = Long.fromValue(object.validatorCount);
    }
    if (object.agentValidTime !== undefined && object.agentValidTime !== null) {
      message.agentValidTime = Duration.fromPartial(object.agentValidTime);
    }
    message.admin = object.admin ?? "";
    return message;
  }
};
function createBaseInnerValues(): InnerValues {
  return {
    seed: new Uint8Array()
  };
}
export const InnerValues = {
  typeUrl: "/agent.v1.InnerValues",
  encode(message: InnerValues, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seed.length !== 0) {
      writer.uint32(10).bytes(message.seed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InnerValues {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seed = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InnerValues {
    const obj = createBaseInnerValues();
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    return obj;
  },
  toJSON(message: InnerValues): JsonSafe<InnerValues> {
    const obj: any = {};
    message.seed !== undefined && (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InnerValues>, I>>(object: I): InnerValues {
    const message = createBaseInnerValues();
    message.seed = object.seed ?? new Uint8Array();
    return message;
  }
};
function createBaseInferenceAgent(): InferenceAgent {
  return {
    account: "",
    url: "",
    version: Long.UZERO,
    status: 0,
    validUntil: Timestamp.fromPartial({})
  };
}
export const InferenceAgent = {
  typeUrl: "/agent.v1.InferenceAgent",
  encode(message: InferenceAgent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).uint64(message.version);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.validUntil !== undefined) {
      Timestamp.encode(message.validUntil, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InferenceAgent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInferenceAgent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.version = reader.uint64() as Long;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.validUntil = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InferenceAgent {
    const obj = createBaseInferenceAgent();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.url)) obj.url = String(object.url);
    if (isSet(object.version)) obj.version = Long.fromValue(object.version);
    if (isSet(object.status)) obj.status = agentStatusFromJSON(object.status);
    if (isSet(object.validUntil)) obj.validUntil = fromJsonTimestamp(object.validUntil);
    return obj;
  },
  toJSON(message: InferenceAgent): JsonSafe<InferenceAgent> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.url !== undefined && (obj.url = message.url);
    message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
    message.status !== undefined && (obj.status = agentStatusToJSON(message.status));
    message.validUntil !== undefined && (obj.validUntil = fromTimestamp(message.validUntil).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InferenceAgent>, I>>(object: I): InferenceAgent {
    const message = createBaseInferenceAgent();
    message.account = object.account ?? "";
    message.url = object.url ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = Long.fromValue(object.version);
    }
    message.status = object.status ?? 0;
    if (object.validUntil !== undefined && object.validUntil !== null) {
      message.validUntil = Timestamp.fromPartial(object.validUntil);
    }
    return message;
  }
};
function createBaseTokenPrice(): TokenPrice {
  return {
    inputPrice: Coin.fromPartial({}),
    outputPrice: Coin.fromPartial({})
  };
}
export const TokenPrice = {
  typeUrl: "/agent.v1.TokenPrice",
  encode(message: TokenPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputPrice !== undefined) {
      Coin.encode(message.inputPrice, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputPrice !== undefined) {
      Coin.encode(message.outputPrice, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputPrice = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.outputPrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenPrice {
    const obj = createBaseTokenPrice();
    if (isSet(object.inputPrice)) obj.inputPrice = Coin.fromJSON(object.inputPrice);
    if (isSet(object.outputPrice)) obj.outputPrice = Coin.fromJSON(object.outputPrice);
    return obj;
  },
  toJSON(message: TokenPrice): JsonSafe<TokenPrice> {
    const obj: any = {};
    message.inputPrice !== undefined && (obj.inputPrice = message.inputPrice ? Coin.toJSON(message.inputPrice) : undefined);
    message.outputPrice !== undefined && (obj.outputPrice = message.outputPrice ? Coin.toJSON(message.outputPrice) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TokenPrice>, I>>(object: I): TokenPrice {
    const message = createBaseTokenPrice();
    if (object.inputPrice !== undefined && object.inputPrice !== null) {
      message.inputPrice = Coin.fromPartial(object.inputPrice);
    }
    if (object.outputPrice !== undefined && object.outputPrice !== null) {
      message.outputPrice = Coin.fromPartial(object.outputPrice);
    }
    return message;
  }
};
function createBaseSession(): Session {
  return {
    sessionId: "",
    account: "",
    modelName: "",
    agentAccount: "",
    userLock: Coin.fromPartial({}),
    tokenPrice: TokenPrice.fromPartial({}),
    expirationAt: Timestamp.fromPartial({}),
    status: 0,
    availableLock: Coin.fromPartial({})
  };
}
export const Session = {
  typeUrl: "/agent.v1.Session",
  encode(message: Session, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.modelName !== "") {
      writer.uint32(26).string(message.modelName);
    }
    if (message.agentAccount !== "") {
      writer.uint32(34).string(message.agentAccount);
    }
    if (message.userLock !== undefined) {
      Coin.encode(message.userLock, writer.uint32(42).fork()).ldelim();
    }
    if (message.tokenPrice !== undefined) {
      TokenPrice.encode(message.tokenPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.expirationAt !== undefined) {
      Timestamp.encode(message.expirationAt, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.availableLock !== undefined) {
      Coin.encode(message.availableLock, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Session {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSession();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sessionId = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        case 3:
          message.modelName = reader.string();
          break;
        case 4:
          message.agentAccount = reader.string();
          break;
        case 5:
          message.userLock = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.tokenPrice = TokenPrice.decode(reader, reader.uint32());
          break;
        case 7:
          message.expirationAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.status = reader.int32() as any;
          break;
        case 9:
          message.availableLock = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Session {
    const obj = createBaseSession();
    if (isSet(object.sessionId)) obj.sessionId = String(object.sessionId);
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.modelName)) obj.modelName = String(object.modelName);
    if (isSet(object.agentAccount)) obj.agentAccount = String(object.agentAccount);
    if (isSet(object.userLock)) obj.userLock = Coin.fromJSON(object.userLock);
    if (isSet(object.tokenPrice)) obj.tokenPrice = TokenPrice.fromJSON(object.tokenPrice);
    if (isSet(object.expirationAt)) obj.expirationAt = fromJsonTimestamp(object.expirationAt);
    if (isSet(object.status)) obj.status = sessionStatusFromJSON(object.status);
    if (isSet(object.availableLock)) obj.availableLock = Coin.fromJSON(object.availableLock);
    return obj;
  },
  toJSON(message: Session): JsonSafe<Session> {
    const obj: any = {};
    message.sessionId !== undefined && (obj.sessionId = message.sessionId);
    message.account !== undefined && (obj.account = message.account);
    message.modelName !== undefined && (obj.modelName = message.modelName);
    message.agentAccount !== undefined && (obj.agentAccount = message.agentAccount);
    message.userLock !== undefined && (obj.userLock = message.userLock ? Coin.toJSON(message.userLock) : undefined);
    message.tokenPrice !== undefined && (obj.tokenPrice = message.tokenPrice ? TokenPrice.toJSON(message.tokenPrice) : undefined);
    message.expirationAt !== undefined && (obj.expirationAt = fromTimestamp(message.expirationAt).toISOString());
    message.status !== undefined && (obj.status = sessionStatusToJSON(message.status));
    message.availableLock !== undefined && (obj.availableLock = message.availableLock ? Coin.toJSON(message.availableLock) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Session>, I>>(object: I): Session {
    const message = createBaseSession();
    message.sessionId = object.sessionId ?? "";
    message.account = object.account ?? "";
    message.modelName = object.modelName ?? "";
    message.agentAccount = object.agentAccount ?? "";
    if (object.userLock !== undefined && object.userLock !== null) {
      message.userLock = Coin.fromPartial(object.userLock);
    }
    if (object.tokenPrice !== undefined && object.tokenPrice !== null) {
      message.tokenPrice = TokenPrice.fromPartial(object.tokenPrice);
    }
    if (object.expirationAt !== undefined && object.expirationAt !== null) {
      message.expirationAt = Timestamp.fromPartial(object.expirationAt);
    }
    message.status = object.status ?? 0;
    if (object.availableLock !== undefined && object.availableLock !== null) {
      message.availableLock = Coin.fromPartial(object.availableLock);
    }
    return message;
  }
};
function createBaseVrfSeed(): VrfSeed {
  return {
    account: "",
    seed: new Uint8Array()
  };
}
export const VrfSeed = {
  typeUrl: "/agent.v1.VrfSeed",
  encode(message: VrfSeed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.seed.length !== 0) {
      writer.uint32(18).bytes(message.seed);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VrfSeed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVrfSeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.seed = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VrfSeed {
    const obj = createBaseVrfSeed();
    if (isSet(object.account)) obj.account = String(object.account);
    if (isSet(object.seed)) obj.seed = bytesFromBase64(object.seed);
    return obj;
  },
  toJSON(message: VrfSeed): JsonSafe<VrfSeed> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.seed !== undefined && (obj.seed = base64FromBytes(message.seed !== undefined ? message.seed : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VrfSeed>, I>>(object: I): VrfSeed {
    const message = createBaseVrfSeed();
    message.account = object.account ?? "";
    message.seed = object.seed ?? new Uint8Array();
    return message;
  }
};
