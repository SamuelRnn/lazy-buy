import { user } from "../../../prisma";
import bcrypt from "bcryptjs";

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

  const passwordHash = await bcrypt.hash(password, 8);

  if (!fullName || !email || !password)
    return res.status(400).send({ message: "Not enough data" });

  await user.create({
    data: { ...req.body, password: passwordHash },
  });

  return res.status(200).json({ ...req.body, password: passwordHash });
}
