import { AIRequest } from '../../clients/ai-request.types.js';

export const ModelName = {
  text: 'meta-llama/Llama-3.2-1B-Instruct',
  video: 'Lykon/DreamShaper_4-steps'.toLowerCase(),
  image: 'stabilityai/sdxl-turbo',
} as const;

export type ModelNameType = keyof typeof ModelName;

export const createTestRequest = (modelName: ModelNameType): AIRequest => {
  const baseRequest: Omit<AIRequest, 'model_params'> = {
    messages: [
      {
        content: 'Hello, world!',
        role: 'user',
      },
    ],
  };

  switch (modelName) {
    case 'video':
      return {
        ...baseRequest,
        requestConfig: { timeoutTtfb: 60000 },
        messages: [
          {
            content: 'food',
            context: '',
            role: 'user',
          },
        ],
        model_params: {},
      };
    case 'image':
      return {
        ...baseRequest,
        messages: [
          {
            content: 'food',
            context: '',
            role: 'user',
          },
        ],
        model_params: {},
      };
    case 'text':
    default:
      return {
        ...baseRequest,
        model_params: {},
      };
  }
};

export const TEST_REQUESTS = {
  text: createTestRequest('text'),
  image: createTestRequest('image'),
  video: createTestRequest('video'),
};
