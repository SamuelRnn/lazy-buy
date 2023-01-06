import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()
export const {
  company,
  plan,
  product,
  review,
  transaction,
  user,
  $transaction,
  $disconnect,
} = new PrismaClient();
