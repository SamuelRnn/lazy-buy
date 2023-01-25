import { produceWithPatches } from "immer";
import { review, user, product } from "../../../prisma";

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

  const prod = await product.findUnique({
    where: {
      id: productId,
    },
    include: { reviews: true },
  });

  const reviewCounts = prod.reviews.length
  const newRating = prod.reviews.reduce((acc, r) => acc + r.rating, 0) / reviewCounts

  await product.update({
    where: {
      id: productId
    },
    data: {
      averageRating: parseFloat(newRating.toFixed(2))
    }
  })

  return res.status(200).json(req.body);
}
