import { review } from "../../../prisma";

export default async function createReview(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { commentTitle, commentBody, rating, userId, productId } = req.body;

  if (!commentTitle || !commentBody || !rating || !userId || !productId)
    return res.status(400).send({ message: "Not enough data" });

  await review.create({
    data: {
      ...req.body,
    },
  });

  return res.status(200).json(req.body);
}
