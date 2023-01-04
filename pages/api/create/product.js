import { product } from "../../../prisma";

export default async function createProduct(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { name, description, price, stock, isActive } = req.body;

  const { companyId } = req.query;

  if (!name || !description || !price || !stock)
    return res.status(400).send({ message: "Not enough data" });

  const newProduct = {
    name,
    slug: `09-${name.split(" ").join("-")}`,
    description,
    price,
    stock,
    isActive,
    companyId,
  };

  await product.create({
    data: {
      ...newProduct,
    },
  });

  return res.status(200).json(newProduct);
}
