import { PrismaClient } from "@prisma/client";
export const { company, plan, product, review, transaction, user } =
  new PrismaClient();
