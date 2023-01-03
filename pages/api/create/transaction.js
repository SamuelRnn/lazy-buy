import { transaction } from "../../../prisma";

export default async function createTransaction(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { userId, productId } = req.body;
  const { companyId } = req.query;

  if (!companyId || !userId || !productId)
    return res.status(400).send({ message: "Not enough data" });

  await transaction.create({
    data: {
      companyId,
      ...req.body,
    },
  });

  return res.status(200).json(req.body);
}
