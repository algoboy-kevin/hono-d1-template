import { type PrismaClient } from '@prisma/client';

export const createNewLogs = async (
  data: any,
  prisma: PrismaClient,
) => {
  const res = await prisma.logs.create({
    data: {
      ...data,
    },
  });
  return res;
};
