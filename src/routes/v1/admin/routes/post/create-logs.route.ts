import { createRoute, z } from '@hono/zod-openapi';

const CreateLogsSchema = z.object({
  message: z.string().min(1).openapi({
    example: 'hello world',
  }),
});

export type BodyCreateLogs = z.infer<typeof CreateLogsSchema>;
export const PostCreateLogsRoute = createRoute({
  tags: ['admin'],
  method: 'post',
  path: '/logs',
  summary: 'create new logs (admin only)',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateLogsSchema,
        },
      },
    },
  },
  responses: {
    201: {
      content: {
        'text/plain': {
          schema: z.string(),
        },
      },
      description: 'Post sucess message',
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
