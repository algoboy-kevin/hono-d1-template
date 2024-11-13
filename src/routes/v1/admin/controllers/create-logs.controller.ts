import type { Context, Env } from 'hono';

import { errorResponseMessage } from '../../../../libs/custom-error-message';
import { createNewLogs } from '../libs';
import type { BodyCreateLogs } from '../routes';

export const createLogsController = async (c: Context<Env>) => {
  try {
    const body = (await c.req.json()) as BodyCreateLogs;
    const prisma = c.get('prisma');
    await createNewLogs(body, prisma);
    return c.text('Created!', 201);
  } catch (err) {
    return errorResponseMessage(err, c);
  }
};
