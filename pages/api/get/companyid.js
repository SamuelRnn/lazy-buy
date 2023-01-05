import { company } from "../../../prisma";

export default async function getCompanyById(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const { companyId } = req.query;
  const companyFound = await company.findUnique({
    where: {
      id: companyId,
    },
  });

  return res.status(200).json(companyFound);
}
