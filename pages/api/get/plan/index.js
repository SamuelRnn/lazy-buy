import { plan } from "../../../../prisma";

export default async function getPlan(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const plans = await plan.findMany({
    orderBy: {
      productPriority: "desc",
    },
  });

  return res.status(200).json(plans);
}
