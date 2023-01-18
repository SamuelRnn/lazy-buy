import { decrypt,encrypt } from "../../utils/encrypt";

export default async function test(req, res) {
    if (req.method !== "GET") {
      return res.status(400).send({ message: "Not found" });
    }

    const {text} = req.query
    const textEn = encrypt(text,"elnazareno")

    const textDe = decrypt(textEn,"elnazareno")

    res.json({en:textEn,de:textDe})


}