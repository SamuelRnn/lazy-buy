import { review } from "../../../../prisma";

export default async function eraseReview(req, res) {
  if (req.method !== "DELETE")
    return res.status(405).json({ message: "Method not allowed" });

  const { id } = req.query;

  try {
    const check = await review.delete({ where: { id } });
    if (!check) throw new Error("Not Found");

    return res.status(200).json(check);
  } catch (error) {
    res.status(500).json({ error });
  }
}
