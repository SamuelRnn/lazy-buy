import { company } from "../../../../prisma";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return res.status(400).send({ message: "Not found" });
  }

  const { email, profilePicture } = req.body;
  delete req.body.id;
  try {
    const updatePicture = await company.update({
      where: {
        email,
      },
      data: {
        profilePicture,
      },
    });

    return res
      .status(202)
      .json({ ok: true, message: "Product modified successfully!" });
  } catch (error) {
    return res
      .status(404)
      .json({ ok: false, message: "Product hasn't been modified" });
  }
}
