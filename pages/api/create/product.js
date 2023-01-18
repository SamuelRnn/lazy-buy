import { product } from "../../../prisma";
import cloud from "../../../utils/cloudinary";

async function uploadImage(image) {
  const cloudUpload = await cloud.uploader.upload(image, {
    folder: "lazy-buy",
  });
  return cloudUpload;
}
function getSlug({ id, name }) {
  return `${id + ""}-${name.toLowerCase().split(" ").join("-")}`;
}

export default async function createProduct(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send({ message: "Not found" });
  }
  const productData = req.body;
  if (
    !productData.name ||
    !productData.description ||
    !productData.price ||
    !productData.mainImage ||
    !productData.stock ||
    !productData.companyId ||
    !productData.category
  ) {
    return res.status(400).json({
      message: "Incomplete data",
    });
  }

  const mainUpload = await uploadImage(productData.mainImage);
  productData.mainImage = {
    public_id: mainUpload.public_id,
    url: mainUpload.secure_url,
  };

  if (productData.carouselImages) {
    const promiseArray = productData.map((img) => uploadImage(img));
    const images = await Promise.all(promiseArray);
    productData.carouselImages = images;
  }
  //create product
  productData.slug = "available";
  let newProduct = await product.create({ data: productData });
  newProduct = await product.update({
    where: { id: newProduct.id },
    data: { slug: getSlug(newProduct) },
  });

  return res.status(201).json(newProduct);
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "8mb",
    },
  },
};
