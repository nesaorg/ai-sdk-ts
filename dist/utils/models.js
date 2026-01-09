import fetch from 'isomorphic-fetch';
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
export async function fetchModelParameters(modelName, options = {}) {
    if (!modelName?.trim()) {
        throw new Error('Model name is required');
    }
    const baseUrl = options.baseApiUrl?.trim() || 'https://api-test.nesa.ai';
    const url = new URL('models/by-name/parameters', baseUrl);
    url.searchParams.append('name', modelName);
    let response;
    try {
        response = await fetch(url.toString(), {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Failed to fetch model parameters: ${errorMessage}`);
    }
    if (!response.ok) {
        const errorText = await response.text().catch(() => 'Unknown error');
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }
    try {
        return (await response.json());
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Failed to parse model parameters: ${errorMessage}`);
    }
}
/**
 * Retrieves default parameters for a specific model.
 *
 * @param modelName - The name of the model
 * @param options - Configuration options
 * @returns A promise that resolves to the default parameters for the model
 * @throws {Error} If the request fails or returns an error status
 */
export async function getModelParameterDefaults(modelName, options = {}) {
    const { types_defaults } = await fetchModelParameters(modelName, options);
    return types_defaults;
}
//# sourceMappingURL=models.js.map