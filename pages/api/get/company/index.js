import { company } from "../../../../prisma";

export default async function getCompany(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

    const {page} = req.query
  const count = await company.findMany()
  const companies = await company.findMany({
    take:10,
    skip: parseInt(page),
    include: {
      products: true,
    },
  });
  return res.status(200).json({count: count.length, data:companies});
}
