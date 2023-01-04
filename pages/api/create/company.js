import { company } from "../../../prisma";
import bcrypt from "bcryptjs";
import cloud from "../../../utils/cloudinary";

export default async function createCompany(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { name, owner, password, city, country, plan, profilePicture } =
    req.body;

  if (
    !name ||
    !owner ||
    !password ||
    !city ||
    !country ||
    !plan ||
    !profilePicture
  )
    return res.status(400).send({ message: "Not enough data" });

  const passwordHash = await bcrypt.hash(password, 8);

  const upToCloud = await cloud.uploader.upload(profilePicture, {
    folder: "userProfilePictures",
  });

  const jsonProfilePicture = {
    public_id: upToCloud.public_id,
    url: upToCloud.secure_url,
  };

  await company.create({
    data: {
      ...req.body,
      password: passwordHash,
      profilePicture: jsonProfilePicture,
    },
  });

  return res.status(200).json({
    ...req.body,
    password: passwordHash,
    profilePicture: jsonProfilePicture,
  });
}
