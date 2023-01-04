import { company } from "../../../prisma";

export default async function handler(req, res) {
  if (req.method !== "DELETE")
    return res.status(400).send({ message: "Not found" });

  const { id: companyId } = req.query;
  await company.delete({
    where: {
      id: companyId,
    },
  });
  res.status(202).json({ ok: true, message: "Company deleted successfully!" });
}
