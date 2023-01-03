import { user } from "../../../prisma";

export default async function createUser(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const {
    isAdmin,
    fullName,
    userName,
    email,
    password,
    profilePicture,
    city,
    country,
  } = req.body;

  if (!fullName || !email || !password)
    return res.status(400).send({ message: "Not enough data" });

  await user.create({
    data: { ...req.body },
  });

  return res.status(200).json(req.body);
}
