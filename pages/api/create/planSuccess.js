import { company } from "../../../prisma";

export default async function handleSuccess(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }
  console.log(req.body)
  const contante = await company.update({
    where: {
      email: req.body.email,
    },
    data: {
      plan: req.body.planType,
    },
  });
  

  return res.status(200).json(contante);
}
