import { user } from "../../../../prisma";

export default async function getWishList(req, res) {
  if (req.method !== "PATCH")
    return res.status(400).send({ message: "Not found" });

  const { product, email } = req.body;

  try {
    const userWishList = await user.findUnique({
      where: {
        email,
      },
    });
    
    if (!userWishList)
      return res
        .status(404)
        .json({ message: "User's wishList not found, email invalid" });

    const item = userWishList.wishList.find((p) => p.id === product.id);

    if (item)
      return res
        .status(404)
        .json({ message: "User's wish list item already exist" });

    await user.update({
      where: {
        email,
      },
      data: {
        wishList: [...userWishList.wishList, product],
      },
    });

    return res.status(200).send("added");
  } catch (error) {
    res.status(500).json({ error });
  }
}
