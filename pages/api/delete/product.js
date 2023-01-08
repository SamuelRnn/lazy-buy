import { product } from "../../../prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE")
    return res.status(400).send({ message: "Not found" });

  const { productId } = req.query;
  await product.delete({
    where: {
      id: productId,
    },
  });
  res.status(202).json({ ok: true, message: "Product deleted successfully!" });
}
