import { plan } from "../../../prisma";

export default async function getPlanById(req, res) {
  if (req.method !== "GET")
    return res.status(400).send({ message: "Not found" });

  const { planId } = req.query;
  const planFound = await plan.findUnique({
    where: {
      id: planId,
    },
  });

  return res.status(200).json(planFound);
}