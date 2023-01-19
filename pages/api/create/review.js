import { review, user } from "../../../prisma";

export default async function createReview(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { commentBody, rating, userEmail, productId } = req.body;

  if (!commentBody || !rating || !userEmail || !productId)
    return res.status(400).send({ message: "Not enough data" });

  const userFound = await user.findUnique({
    where: { email: userEmail },
    include: { Transaction: true },
  });

  let aux = null;
  const checkProductTransaction = userFound.Transaction.forEach((t) => {
    if (t.productId === productId) return (aux = "found");
  });

  if (aux === null) return res.status(200).send("Forbbiden");

  await review.create({
    data: {
      commentBody,
      rating,
      userId: userFound.id,
      productId,
    },
  });

  return res.status(200).json(req.body);
}
