/**
 * Represents the type of a model parameter field.
 */
export type ModelParameterType = 'text' | 'slider' | 'step' | 'number' | 'boolean' | 'file' | 'select';
/**
 * Configuration for a model parameter field.
 */
export interface ModelParameterConfig {
    /** The data type of the parameter */
    type: ModelParameterType;
    /** The default value for the parameter */
    value: unknown;
    /** Minimum value (for numeric/slider types) */
    min?: number;
    /** Maximum value (for numeric/slider types) */
    max?: number;
    /** Step size (for numeric/slider types) */
    step?: number;
    /** Whether the parameter is required (default: true) */
    required?: boolean;
}
/**
 * Response structure for model parameters API.
 */
export interface NesaModelParametersResponse {
    /** Detailed configuration for each parameter type */
    types: Record<string, ModelParameterConfig>;
    /** Default values for all parameters */
    types_defaults: Record<string, unknown>;
}
/**
 * Fetches model parameters from the Nesa API.
 *
 * @param modelName - The name of the model to fetch parameters for
 * @param options - Configuration options
 * @param options.baseApiUrl - Base URL for the Nesa API
 * @returns A promise that resolves to the model parameters
 * @throws {Error} If the request fails or returns an error status
 * @throws {Error} If the model name is not provided
 *
 * @example
 * ```typescript
 * const params = await fetchModelParameters('meta-llama/llama-3.2-1b-instruct');
 * console.log(params);
 * ```
 */
export declare function fetchModelParameters(modelName: string, options?: {
    baseApiUrl?: string;
}): Promise<NesaModelParametersResponse>;
/**
 * Retrieves default parameters for a specific model.
 *
 * @param modelName - The name of the model
 * @param options - Configuration options
 * @returns A promise that resolves to the default parameters for the model
 * @throws {Error} If the request fails or returns an error status
 */
export declare function getModelParameterDefaults(modelName: string, options?: {
    baseApiUrl?: string;
}): Promise<Record<string, unknown>>;
//# sourceMappingURL=models.d.ts.map