import { company } from "../../../prisma";

export default async function getCompany(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const companies = await company.findMany();

  return res.status(200).json(companies);
}
