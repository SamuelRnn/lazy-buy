import { company } from "../../../prisma";
import bcrypt from "bcryptjs";
import cloud from "../../../utils/cloudinary";
//------------------------------------------
//TODO: foto no obligatoria en la creacion de la cuenta
//------------------------------------------

export default async function createCompany(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const companyData = req.body;
  if (
    !companyData.name ||
    !companyData.owner ||
    !companyData.email ||
    !companyData.password ||
    !companyData.city ||
    !companyData.country ||
    !companyData.plan ||
    !companyData.profilePicture
  ) {
    return res.status(400).json({
      message: "Datos incompletos, asegurese de llenar todos los campos",
    });
  }
  const hashedPassword = await bcrypt.hash(companyData.password, 8);
  companyData.password = hashedPassword;

  try {
    const cloudUpload = await cloud.uploader.upload(
      companyData.profilePicture,
      { folder: "lazy-buy" }
    );
    companyData.profilePicture = {
      public_id: cloudUpload.public_id,
      url: cloudUpload.secure_url,
    };

    const newCompany = await company.create({
      data: companyData,
    });
    return res.status(200).json(newCompany);
  } catch (error) {
    console.log({ error, message: error.message });
    return res.status(500).json({ error });
  }
}
