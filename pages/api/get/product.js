import { product } from "../../../prisma";

export async function getProduct(req, res) {
  const product = await product.findMany();
  return res.json(product);
}


