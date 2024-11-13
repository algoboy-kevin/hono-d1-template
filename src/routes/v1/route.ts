import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono } from '@hono/zod-openapi';

import { admin } from './admin';

export const v1 = new OpenAPIHono();

v1.get('/doc', swaggerUI({ url: '/doc' }));

// routes
v1.route('/admin', admin);

v1.get('/', (c) => {
  return c.text('Hello Hono from index route!', 200);
});
