import { product } from "../../../../prisma";

export default async function handler(req, res) {
  if (req.method !== "PATCH")
    return res.status(400).send({ message: "Not found" });

  const { productId } = req.query;

  const setActive = await product.findFirst({
    where: {
      id: parseInt(productId),
    },
  });

  await product.update({
    where: {
      id: parseInt(productId),
    },
    data: {
      isActive: !setActive.isActive,
    },
  });
  res.status(202).json({ ok: true, message: "Product modified successfully!" });
}
