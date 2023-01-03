import { company } from "../../../prisma";

export default async function createCompany(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { name, owner, password, city, country, plan, profilePicture } =
    req.body;

  if (
    !name ||
    !owner ||
    !password ||
    !city ||
    !country ||
    !plan ||
    !profilePicture
  )
    return res.status(400).send({ message: "Not enough data" });

  await company.create({
    data: {
      ...req.body,
    },
  });

  res.status(200).json(req.body);
}
