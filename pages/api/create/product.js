import { product } from "../../../prisma";
import cloud from "../../../utils/cloudinary";

export default async function createProduct(req, res) {
  if (req.method !== "POST")
    return res.status(400).send({ message: "Not found" });

  const { name, description, price, image, stock, isActive } = req.body;

  const { companyId } = req.query;

  if (!name || !description || !price || !stock)
    return res.status(400).send({ message: "Not enough data" });

  const upToCloud = await cloud.uploader.upload(image, {
    folder: "userProfilePictures",
  });

  const jsonProfilePicture = {
    public_id: upToCloud.public_id,
    url: upToCloud.secure_url,
  };

  const newProduct = {
    name,
    slug: `09-${name.split(" ").join("-")}`,
    description,
    price,
    image: jsonProfilePicture,
    stock,
    isActive,
    companyId,
  };

  await product.create({
    data: {
      ...newProduct,
    },
  });

  return res.status(200).json(newProduct);
}
