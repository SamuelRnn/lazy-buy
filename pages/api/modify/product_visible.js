import { product } from "../../../prisma";

export default async function handler(req, res) {
  if (req.method !== "PUT")
    return res.status(400).send({ message: "Not found" });

  const { productId } = req.query;
  console.log("🚀 ~ file: product_visible.js:8 ~ handler ~ productId", productId)

  const setVisible = await product.findFirst({
    where: {
      id: parseInt(productId),
    },
  });

  await product.update({
    where: {
      id: parseInt(productId),
    },
    data: {
      isVisible: !setVisible.isVisible,
    },
  });
  res.status(202).json({ ok: true, message: "Product modified successfully!" });
}
