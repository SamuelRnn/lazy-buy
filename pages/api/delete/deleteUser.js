import { user } from "../../../prisma";

export default async function deleteUser(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { userEmail } = req.query;
    const userDelete = await user.update({
      where: {
        email: userEmail,
      },
      data: {
        isBanned: true,
      },
    });
    if(!userDelete)throw new Error("User not found")
    console.log(userDelete)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }
}
