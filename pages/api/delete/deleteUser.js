import { user } from "../../../prisma";

export default async function deleteUser(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { userEmail } = req.query;
    const prev = await user.findUnique({where:{email:userEmail}})
    const userDelete = await user.update({
      where: {
        email: userEmail,
      },
      data: {
        isBanned: !prev.isBanned,
      },
    });
    if(!userDelete)throw new Error("User not found");
    res.status(200).json(userDelete)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
