import { createRoute, z } from '@hono/zod-openapi';

export const GetLogsRoute = createRoute({
  tags: ['admin'],
  method: 'get',
  path: '/logs',
  summary: 'get all logs (admin only)',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.any(),
        },
      },
      description: 'Retrieve the logs',
    },
    400: {
      content: {
        'text/plain': {
          schema: z.string(),
        },
      },
      description: 'error message',
    },
  },
  security: [
    {
      secret_key: [],
    },
  ],
});
