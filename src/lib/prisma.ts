import { PrismaClient } from "@prisma/client";
import { prismaExtension } from "./prisma-extension";

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof prismaExtension> | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  prismaExtension(
    new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["query"] : [],
    })
  );

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
