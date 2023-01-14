import { plan } from "../../../prisma";

export default async function createPlan(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const {
    planType,
    productsLimit,
    activeProductsLimit,
    productPriority,
    price,
  } = req.body;

  if (
    !planType ||
    !productsLimit ||
    !activeProductsLimit ||
    !productPriority ||
    !price
  )

    return res.status(400).send({ message: "Not enough data" });

    

  await plan.create({
    data: {
      ...req.body,
    },
  });

  return res.status(200).json(req.body);
}
