import { company } from "../../../../prisma";
import cloud from "../../../../utils/cloudinary";

export default async function handler(req, res) {
  if (req.method !== "PUT")
    return res.status(400).send({ message: "Not found" });

  const { email } = req.body;
  console.log("🚀 ~ file: index.js:8 ~ handler ~ req.body", req.body);

  delete req.body.id;
  try {
    const cloudUpload = await cloud.uploader.upload(req.body.profilePicture, {
      folder: "lazy-buy",
    });
    console.log("🚀 ~ file: index.js:16 ~ handler ~ cloudUpload", cloudUpload)
    const updatecompany = await company.update({
      where: {
        email,
      },
      data: {
        city: req.body.city,
        owner: req.body.owner,
        country: req.body.country,
        profilePicture: cloudUpload.secure_url,
        name: req.body.name,
      },
    });
    console.log(
      "🚀 ~ file: index.js:31 ~ handler ~ updatecompany",
      updatecompany
    );

    return res
      .status(202)
      .json({ ok: true, message: "Product modified successfully!" });
  } catch (error) {
    return res
      .status(404)
      .json({ ok: false, message: "Product hasn't been modified" });
  }
}
