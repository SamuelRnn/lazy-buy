import { user } from "../../../../prisma";
export default async function getWishList(req, res) {
  if (req.method !== "DELETE")
    return res.status(400).send({ message: "Not found" });

  const { id, email } = req.body;

  try {
    const userWishList = await user.findUnique({
      where: {
        email,
      }
    });
    if (!userWishList)
      return res
        .status(404)
        .json({ message: "User's wishList not found, email invalid" });
    const newWishList = userWishList.wishList.filter((i) => i.id !== id);
    await user.update({
      where: {
        email,
      },
      data: {
        wishList: [...newWishList],
      },
    });
    return res.status(200).json("Done");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}