import { OpenAPIHono } from '@hono/zod-openapi';
import { 
  adminAuthMiddleware, 
  prismaMiddleware 
} from '../../../middlewares';
import {
  createLogsController,
} from './controllers';
import {
  GetLogsRoute,
  PostCreateLogsRoute,
} from './routes';
import { getLogsController } from './controllers/get-logs.controller';

export const admin = new OpenAPIHono();

// middleware
admin.use(adminAuthMiddleware);
admin.use(prismaMiddleware);

// routes
admin.openapi(GetLogsRoute, getLogsController);
admin.openapi(PostCreateLogsRoute, createLogsController);
