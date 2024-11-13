import { PrismaD1 } from '@prisma/adapter-d1';
import { PrismaClient } from '@prisma/client';
import { type Env } from 'hono';
import { createMiddleware } from 'hono/factory';

export const prismaMiddleware = createMiddleware<Env>(async (c, next) => {
  // prevent reinitialization prisma
  if (!c.get('prisma')) {
    const adapter = new PrismaD1(c.env.DB);
    const prisma = new PrismaClient({ adapter });
    c.set('prisma', prisma);
  }
  await next();
});
