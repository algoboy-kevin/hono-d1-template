import type { Context, Env } from 'hono';

import { errorResponseMessage } from '../../../../libs/custom-error-message';

export const getLogsController = async (c: Context<Env>) => {
  try {
    const prisma = c.get('prisma');
    const logs = await prisma.logs.findMany({
        orderBy: {
            created_at: 'desc'
        }
    })

    return c.json(logs, 200);
  } catch (err) {
    return errorResponseMessage(err, c);
  }
};
