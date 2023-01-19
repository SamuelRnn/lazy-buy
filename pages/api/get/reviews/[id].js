import { product } from "../../../../prisma";

export default async function getPlanById(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const { id } = req.query;

  const planFound = await product.findUnique({
    where: { id: parseInt(id) },
    include: { reviews: { include: { user: true } } },
  });
  
  return res.status(200).json(planFound.reviews);
}
