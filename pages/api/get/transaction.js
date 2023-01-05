import { transaction } from "../../../prisma";

export default async function getTransaction(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const transactions = await transaction.findMany();

  return res.status(200).json(transactions);
}
