import { transaction } from "../../../../prisma";

export default async function getTransaction(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });
  const { page } = req.query;
  const count = await transaction.findMany();
  const transactions = await transaction.findMany({
    skip: parseInt(page),
    take: 10,
    include: { company: true, user: true, product: true },
  });

  return res.status(200).json({ count: count.length, data: transactions });
}
