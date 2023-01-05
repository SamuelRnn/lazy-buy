import { review } from "../../../prisma";

export default async function getReviewById(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const { reviewId } = req.query;
  const reviewFound = await review.findUnique({
    where: {
      id: reviewId,
    },
  });

  return res.status(200).json(reviewFound);
}