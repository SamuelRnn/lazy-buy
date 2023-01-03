import { product } from "../../../prisma";

export default async function createProduct(req, res) {
  const { name, description, price, stock, isActive, companyId } = req.body;

  if (!name || !description || !price || !stock)
    return res.status(400).send({ message: "Not enough data" });

  const newProduct = {
    name,
    slug: `09-${name.split(" ").join('-')}`,
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
