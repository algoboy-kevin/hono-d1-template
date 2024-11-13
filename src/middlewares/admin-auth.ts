import { type Env } from 'hono';
import { createMiddleware } from 'hono/factory';

export const adminAuthMiddleware = createMiddleware<Env>(async (c, next) => {
  const secret_key = c.req.header('secret_key');

  if (!secret_key) return c.text('unauthorization', 401);
  if (!c.env.SECRET_KEY) return c.text('unauthorization', 401);
  if (secret_key !== c.env.SECRET_KEY) return c.text('unauthorization', 401);

  // pass
  await next();
});
