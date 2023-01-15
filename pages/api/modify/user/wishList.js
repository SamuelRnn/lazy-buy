import { user } from "../../../../prisma";

export default async function getWishList(req, res) {
  if (req.method !== "PATCH")
    return res.status(400).send({ message: "Not found" });

  const { product, email } = req.body;

  try {
    const userWishList = await user.findFirst({
      where: {
        email,
      },
      include: {
        wishList: true,
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
    const newWishList = userWishList.wishList.push(product);

    await user.update({
      where: {
        email,
      },
      data: {
        wishList: newWishList,
      },
    });

    return res.status(200).json(wishList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
