import { review, user } from "../../../prisma";

export default async function createReview(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { commentBody, rating, userEmail, productId } = req.body;

  if (!commentBody || !rating || !userEmail || !productId)
    return res.status(400).send({ message: "Not enough data" });

  const userFound = await user.findUnique({
    where: { email: userEmail },
    select: { id: true },
  });

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
