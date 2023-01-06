import { company } from "../../../../prisma";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  const { userName, email, password } = req.body;

  if (req.method !== "POST")
    return res
      .status(500)
      .json({ message: "HTTP method not valid only POST accepted" });

  if (!req.body)
    return res.status(404).json({ message: "Don't have form data...!" });

  await fetch

  if (checkUser)
    return res.status(422).json({ message: "User Already Exists...!" });

  const hashPassword = await hash(password, 12);

  try {
    const newUser = await prisma.user.create({
      data: {
        userName,
        email,
        password: hashPassword,
      },
    });

    return res.status(201).json({ status: true, user: newUser });
  } catch (error) {
    return res.status(404).json({ error: "Something happened" });
  }
}
