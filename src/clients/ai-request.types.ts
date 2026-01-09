/**
 * Configuration options for AI request timeouts.
 * Used to control how long to wait for responses from the AI agent.
 */
export interface AIRequestConfig {
  /**
   * Timeout in milliseconds for time-to-first-byte (TTFB) of the response.
   * If not specified, defaults to implementation-specific timeout.
   */
  timeoutTtfb?: number;

  /**
   * Timeout in milliseconds for the complete response result.
   * If not specified, defaults to implementation-specific timeout.
   */
  timeoutResult?: number;

  /**
   * Whether to send the input request raw, without processing.
   */
  passthroughRequest?: boolean;
}

/**
 * Message structure for AI requests.
 * Represents a single interaction in the conversation.
 */
export interface AIRequestMessage {
  /**
   * Role of the message sender.
   * Must be either 'user' or 'assistant'.
   */
  role: 'user' | 'assistant';

  /**
   * Content of the message.
   * Optional if the message is purely contextual.
   */
  content?: string;

  /**
   * Contextual information for the message.
   * Used to provide additional context without affecting the conversation flow.
   */
  context?: string;
}

/**
 * Low-Rank Adaptation (LoRA) configuration for AI requests.
 * Allows applying pre-trained model adaptations to modify model behavior.
 */
export interface AIRequestLoRA {
  /**
   * ID of the LoRA to apply.
   * This should be a valid LoRA ID from the Nesa LoRA database.
   */
  lora_id: string;

  /**
   * Optional version ID of the LoRA.
   * If not provided, uses the most recent version.
   */
  lora_version_id?: number;

  /**
   * Scale factor for the LoRA.
   * Controls the strength of the adaptation effect.
   */
  scale: number;
}

/**
 * Structure for AI requests sent to the AI agent.
 * Contains conversation history, model-specific parameters, and optional LoRA adaptations.
 * Uses camelCase for all property names.
 */
export interface AIRequest {
  /**
   * Array of messages representing the conversation history.
   * Must contain at least one message.
   */
  messages: AIRequestMessage[];

  /**
   * Optional array of Low-Rank Adaptations (LoRA) to apply to the model.
   * Each LoRA adaptation modifies the model's behavior in a specific way.
   * Multiple LoRAs can be combined by specifying an array.
   */
  low_rank_adaptations?: AIRequestLoRA[];

  /**
   * Model-specific parameters for the request.
   * The structure of these parameters depends on the specific AI model being used.
   */
  model_params: { [property: string]: any };

  /**
   * Optional subject for the request.
   * For debugging purposes.
   */
  subject?: string;

  /**
   * Optional configuration for request timeouts.
   * If not provided, defaults to implementation-specific timeouts.
   */
  requestConfig?: AIRequestConfig;
}
