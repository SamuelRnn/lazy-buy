import { product } from "../../../../prisma";

export default async function getProduct(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Not found" });

  const products = await product.findMany({
    include: {
      company: {
        select: {
          name: true,
        },
      },
    },
  });

  return res.status(200).json(products);
}
