import type { D1Database } from '@cloudflare/workers-types';
import type { PrismaClient } from '@prisma/client';
import {} from 'hono';

declare module 'hono' {
  // @ts-ignore
  interface Env {
    Variables: {
      prisma: PrismaClient;
      userId: string;
      jwtPayload: any;
    };
    Bindings: {
      DB: D1Database;
      SECRET_KEY: string;
      HX_SECRET: string;
      //JOBQUEUE: Queue;
      //BUCKET: R2Bucket;
    };
  }
}
