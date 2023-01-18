import { user } from "../../../../prisma";

export default async function getWishList(req, res) {
  if (req.method !== "GET")
    return res.status(404).send({ message: "Not found" });

  const { email } = req.query;
  
  try {
    const userWishList = await user.findUnique({
      where: {
        email,
      },
      select: {
        wishList: true,
      },
    });
    if (!userWishList)
      return res
        .status(404)
        .json({ message: "User's wishList not found, email invalid" });

    return res.status(200).json(userWishList.wishList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
