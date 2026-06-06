import { PrismaClient } from '@prisma/client';

export const prismaExtension = (prisma: PrismaClient) => {
  return prisma.$extends({
    query: {
      product: {
        async findMany({ args, query }) {
          // Since deletedAt is not in the schema, we cannot filter by it.
          // Removing the filter for now to fix the runtime error.
          return query(args);
        },
      },
    },
  });
};
