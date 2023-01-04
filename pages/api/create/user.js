import { user } from "../../../prisma";
import bcrypt from "bcryptjs";
import cloud from "../../../utils/cloudinary";

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

  const passwordHashed = await bcrypt.hash(password, 8);

  if (!fullName || !email || !password)
    return res.status(400).send({ message: "Not enough data" });

  const upToCloud = await cloud.uploader(profilePicture, {
    folder: "userProfilePictures",
  });

  const jsonProfilePicture = {
    public_id: upToCloud.public_id,
    url: upToCloud.secure_url,
  };

  await user.create({
    data: {
      ...req.body,
      password: passwordHashed,
      profilePicture: jsonProfilePicture,
    },
  });

  return res.status(200).json({
    ...req.body,
    password: passwordHashed,
    profilePicture: jsonProfilePicture,
  });
}
