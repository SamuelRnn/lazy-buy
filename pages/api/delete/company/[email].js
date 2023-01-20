import { company } from "../../../../prisma";

export default async function deleteCompany(req, res) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.query;
    const companyBan = await company.findUnique({ where: { email } });

    await company.update({
      where: {
        email,
      },
      data: {
        isBanned: !companyBan.isBanned,
      },
    });

    if (!companyBan)
      return res
        .status(404)
        .json({ message: "Company not found, email invalid" });
        
    res.status(200).json(companyBan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
