import { company } from "../../../../prisma";

export default async function createCompany(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, owner, city, country, email } = req.body;

  if (!name || !owner || !city || !country) {
    return res.status(400).json({
      message: "Datos incompletos, asegurese de llenar todos los campos",
    });
  }

  try {
    await company.update({
      where: {
        email,
      },
      data: {
        name,
        owner,
        city,
        country,
      },
    });

    return res.status(200).json("Updated");
  } catch (error) {
    return res.status(500).json({ error });
  }
}
