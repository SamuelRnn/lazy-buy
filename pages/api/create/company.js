import { company } from "../../../prisma";

export default async function createCompany(req, res) {
  const { name, password, city, country, plan } = req.body;

  if (!name || !password || !city || !country || !plan)
    return res.status(400).send({ message: "Not enough data" });

  await company.create({
    data: {
      ...req.body,
    },
  });

  res.status(200).json(req.body);
}
