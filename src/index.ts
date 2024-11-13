import { OpenAPIHono } from '@hono/zod-openapi';
import { cors } from 'hono/cors';

import { v1 } from './routes';
import { setupSwagger } from './swagger/setup';
// import { queueConsumer } from './worker/consumer'; // disable jobs
// import { scheduled } from './worker/scheduled';

const app = new OpenAPIHono();

setupSwagger(app);
// global middleware
app.use('*', cors());
// routes
app.route('/v1', v1);

export default {
  fetch: app.fetch,
  // queue: queueConsumer,
  // scheduled: scheduled,
};
