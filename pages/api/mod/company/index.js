import { company } from "../../../../prisma";
import cloud from "../../../../utils/cloudinary";

export default async function handler(req, res) {
  if (req.method !== "PUT")
    return res.status(400).send({ message: "Not found" });

  const { email } = req.body;

  delete req.body.id;
  try {
    const cloudUpload = await cloud.uploader.upload(
      companyData.profilePicture,
      { folder: "lazy-buy" }
    );
    companyData.profilePicture = {
      public_id: cloudUpload.public_id,
      url: cloudUpload.secure_url,
    };

    const updatecompany = await company.update({
      where: {
        email,
      },
      data: { ...req.body },
    });

    return res
      .status(202)
      .json({ ok: true, message: "Product modified successfully!" });
  } catch (error) {
    return res
      .status(404)
      .json({ ok: false, message: "Product hasn't been modified" });
  }
}
