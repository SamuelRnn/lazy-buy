import { product } from "../../../prisma";

export default async function deletePorduct(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { productId } = req.query;
    if (!productId) throw new Error("Id not found");

    const productAft = await product.findUnique({ where: { id: Number(productId) } });
    if (!productAft) throw new Error("Product not found");

    const productBanned = await product.update({
      where: { id: Number(productId) },
      data: {
        isActive: !productAft.isActive,
      },
    });

    return res.status(200).json(productBanned);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
}
