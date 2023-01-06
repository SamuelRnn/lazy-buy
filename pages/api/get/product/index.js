import { product } from "../../../../prisma";
//------------------------------------------
//TODO: error managment
//------------------------------------------
export default async function getProduct(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Not found" });

  const filters = req.query

  const products = await product.findMany({
    where: {
      filters
    },
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

