import { company } from "../../../../prisma";
import simulateDelay from "../../../../utils/simulateDelay";
export default async function getCompanyById(req, res) {
  if (req.method !== "GET")
    return res.status(400).json({ message: "Not found" });

  const all = req.query.email;

  const [email, page] = all.split("lazy");
  const mm = all.includes("lazy");

  if (!mm) {
    const em = await company.findUnique({
      where: { email: all },
      include: {
        products: {
          where: {
            isActive: true,
          },
          orderBy: {
            updatedAt: "desc",
          },
        },
        transactions: { include: { product: true } },
      },
    });
    return res.status(200).json(em);
  }

  try {
    const co = await company.findUnique({
      where: { email },
      include: {
        products: {
          where: {
            isActive: true,
          },
        },
      },
    });
    const companyF = await company.findUnique({
      where: { email },
      include: {
        products: {
          where: {
            isActive: true,
          },
          orderBy: {
            updatedAt: "desc",
          },
          skip: parseInt(page),
          take: 10,
        },
        transactions: { include: { product: true } },
      },
    });

    await simulateDelay(1);
    if (!companyF) {
      return res.status(404).json({ message: "Company not found, id invalid" });
    }
    return res.status(200).json({ co: co.products.length, companyF });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}
