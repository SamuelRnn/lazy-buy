import { user } from "../../../prisma";

export default async function getUser(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });
  const { page } = req.query;

  try {
    const count = await user.findMany({
      where: {
        isAdmin: false,
      },
    });

    const users = await user.findMany({
      where: {
        isAdmin: false,
      },
      skip: parseInt(page),
      take: 10,
    });
    return res.status(200).json({ count: count.length, data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
