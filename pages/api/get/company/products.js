import { company } from "../../../../prisma";
import simulateDelay from "../../../../utils/simulateDelay";
export default async function getCompanyById(req, res) {
  if (req.method !== "GET")
    return res.status(400).json({ message: "Not found" });

  const { email } = req.query;
  try {
    const companyFound = await company.findUnique({
      where: { email },
      include: {
        products: true,
      },
    });
    await simulateDelay(3);
    if (!companyFound) {
      return res.status(404).json({ message: "Company not found, id invalid" });
    }
    return res.status(200).json(companyFound);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
