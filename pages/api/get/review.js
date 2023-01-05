import { review } from "../../../prisma";

export default async function getReview(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const reviews = await review.findMany();

  return res.status(200).json(reviews);
}