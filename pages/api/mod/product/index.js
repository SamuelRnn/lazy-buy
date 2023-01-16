import { product } from "../../../../prisma";
import cloud from "../../../../utils/cloudinary";

async function uploadImage(image) {
  const cloudUpload = await cloud.uploader.upload(image, {
    folder: "lazy-buy",
  });
  return cloudUpload;
}
async function destroyImage(public_id) {
  await cloud.uploader.destroy(public_id, {
    invalidate: true,
  });
}
function getSlug({ id, name }) {
  return `${id + ""}-${name.toLowerCase().split(" ").join("-")}`;
}

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not Allowed" });
  }
  const updatedProduct = req.body;

  //delete from visible
  if (updatedProduct.hasOwnProperty("isVisible")) {
    await product.update({
      where: { id: updatedProduct.productId },
      data: { isVisible: updatedProduct.isVisible },
    });
    return res.status(204).json({ message: "Updated Correctly" });
  }

  //update visibility
  if (updatedProduct.triggerDelete) {
    await product.update({
      where: { id: updatedProduct.productId },
      data: { isActive: false },
    });
    return res.status(204).json({ message: "Updated Correctly" });
  }

  //if body is a normal update request

  const foundProduct = await product.findUnique({
    where: { id: updatedProduct.productId },
  });
  if (typeof updatedProduct.mainImage === "string") {
    await destroyImage(foundProduct.mainImage.public_id);
    const newUpload = await uploadImage(updatedProduct.mainImage);
    updatedProduct.mainImage = {
      public_id: newUpload.public_id,
      url: newUpload.secure_url,
    };
  }
  //parsing data
  if (foundProduct.name !== updatedProduct.name) {
    updatedProduct.slug = getSlug({
      id: foundProduct.id,
      name: updatedProduct.name,
    });
  }
  updatedProduct.price = parseFloat(updatedProduct.price);
  updatedProduct.stock = parseInt(updatedProduct.stock);

  //remove unnecesary data
  delete updatedProduct.productId;
  await product.update({
    where: { id: foundProduct.id },
    data: updatedProduct,
  });
  console.log("producto actualizado llego", updatedProduct);
  res.status(204).json({ message: "Updated Correctly" });
}
