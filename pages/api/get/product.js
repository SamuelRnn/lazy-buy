import { product } from "../../../prisma";

export default async function getProduct(req, res) {
  const products = await product.findMany();
  return res.status(200).json(products);
}
