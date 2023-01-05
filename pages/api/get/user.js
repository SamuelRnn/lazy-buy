import { user } from "../../../prisma";

export default async function getProduct(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const users = await user.findMany();

  return res.status(200).json(users);
}