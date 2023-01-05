import { transaction } from "../../../prisma";

export default async function getTransactionById(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const { transactionId } = req.query;
  const transactionFound = await transaction.findUnique({
    where: {
      id: transactionId,
    },
  });

  return res.status(200).json(transactionFound);
}
