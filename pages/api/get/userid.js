import { user } from "../../../prisma";

export default async function getUserById(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const { userId } = req.query;
  const userFound = await user.findUnique({
    where: {
      id: userId,
    },
  });

  return res.status(200).json(userFound);
}
