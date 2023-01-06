import { product } from "../../../../prisma";

export default async function getProductById(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Not found" });

  let { id } = req.query;
  id = parseInt(id);
  const productFound = await product.findUnique({
    where: { id },
  });

  return res.status(200).json(productFound);
}
