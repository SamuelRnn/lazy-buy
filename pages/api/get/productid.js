import { product } from "../../../prisma";

export default async function getProductById(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const { productId } = req.query;
  const productFound = await product.findUnique({
    where: {
      id: productId,
    },
  });

  return res.status(200).json(productFound);
}
