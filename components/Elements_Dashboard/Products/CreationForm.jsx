import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholder from "../../../public/no_image.jpg";
import MiniSpinner from "../../Spinners/MiniSpinner";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../../redux/companyApi";
import validateProduct from "../../../utils/validateProductCreation";
import { toast } from "react-hot-toast";

function getFileAsDataURI(image) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const dataURI = e.target.result;
      resolve(dataURI);
    };

    reader.readAsDataURL(image);
  });
}

const CreationForm = ({ product, setActive, companyId, companyPlan }) => {
  const [updateProduct] = useUpdateProductMutation();
  const [createProduct] = useCreateProductMutation();
  const [hasChanged, setIfChanged] = useState(false);
  const [isSubmitLoading, triggerSubmitLoading] = useState(false);
  //initial state if product not provided
  const initialForm = {
    name: "",
    description: "",
    category: "Handicraft",
    price: 0,
    mainImage: "",
    stock: 0,
    isVisible: true, //cambiar a condicional
  };
  const [form, setForm] = useState(product || initialForm);
  const [imagePreview, setImagePreview] = useState(product || placeholder);

  const closeModal = () => {
    setActive(false);
    setTimeout(() => (document.body.style.overflow = ""), 400);
  };

  const handleImageChange = (event) => {
    if (!hasChanged) {
      setIfChanged(true);
    }
    setForm((data) => ({ ...data, mainImage: "" }));
    const url = URL.createObjectURL(event.target.files[0]);
    setImagePreview(url);
  };

  const handleChange = ({ target: { name, value } }) => {
    if (!hasChanged) {
      setIfChanged(true);
    }
    setForm((data) => ({ ...data, [name]: value }));
  };

  // creates a new product
  const handleSubmit = async (event) => {
    event.preventDefault();
    triggerSubmitLoading(true);
    const validationResult = validateProduct(form);
    let file = document.getElementById("product_file").files[0];

    if (!validationResult.ok) {
      toast.error(validationResult.error);
      triggerSubmitLoading(false);
      return;
    }
    if (!file) {
      toast.error("You must provide an image for your product");
      triggerSubmitLoading(false);
      return;
    }
    file = await getFileAsDataURI(file);

    const newProduct = {
      ...form,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      mainImage: file,
      companyId,
    };
    await createProduct(newProduct);

    triggerSubmitLoading(false);
    closeModal();
  };

  // updates the existing product
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();

    if (!hasChanged) {
      closeModal();
    }

    triggerSubmitLoading(true);
    let file = document.getElementById("product_file").files[0];

    const newProduct = {
      productId: form.id,
      name: form.name,
      description: form.description,
      category: form.category,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
    };

    if (file) {
      file = await getFileAsDataURI(file);
      newProduct.mainImage = file;
    }
    await updateProduct(newProduct);

    triggerSubmitLoading(false);
    closeModal();
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="fixed modal_bg h-screen w-screen top-0 right-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ bounce: true, ease: "backInOut" }}
          className="p-4 rounded-lg bg-zinc-100 overflow-x-hidden h-[80vh] w-product_form"
        >
          <form onSubmit={product ? handleUpdateSubmit : handleSubmit}>
            <div className="sm:flex justify-between gap-x-8 items-center">
              {/* Product name */}
              <div className="w-full">
                <label className="flex flex-col">
                  Product name
                  <input
                    type="text"
                    name="name"
                    className="input_class"
                    onChange={handleChange}
                    value={form.name}
                  />
                </label>
                <div className="flex mt-4 justify-between gap-x-4">
                  {/* Price */}
                  <label>
                    <p>Price</p>
                    <input
                      type="number"
                      name="price"
                      className="input_class w-full"
                      onChange={handleChange}
                      value={form.price}
                    />
                  </label>
                  {/* Stock */}
                  <label>
                    <p>Stock</p>
                    <input
                      type="number"
                      name="stock"
                      className="input_class w-full"
                      onChange={handleChange}
                      value={form.stock}
                    />
                  </label>
                </div>

                {/* Category Select */}
                <div className="mt-4">
                  <p>Category</p>
                  <select
                    name="category"
                    className="input_class w-full"
                    onChange={handleChange}
                    defaultValue={form.category}
                  >
                    <option value="Handicraft">Handicraft</option>
                    <option value="Textile">Textile</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
              </div>

              {/* Image */}
              <div className="max-sm:mt-12 flex flex-col justify-center">
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  id="product_file"
                  onChange={handleImageChange}
                />
                <Image
                  alt="product image"
                  className=" min-w-[200px] h-[200px] object-cover rounded-md"
                  src={form.mainImage?.url || imagePreview}
                  width={100}
                  height={100}
                />
                <label
                  htmlFor="product_file"
                  className="px-2 text-center bg-fondo-300 py-3 text-zinc-200 py-3 rounded mt-3 cursor-pointer"
                >
                  Select an image
                </label>
              </div>
            </div>

            {/* Description */}
            <label className="mt-4">
              <p>Description</p>
              <textarea
                onChange={handleChange}
                name="description"
                className="input_class resize-none w-full h-[160px]"
                value={form.description}
              />
            </label>
            <div className="flex gap-4 w-full mt-6 justify-between max-sm:flex-col">
              <button
                type="button"
                className="bg-fondo-300 text-zinc-200 py-3 px-5 rounded "
                onClick={closeModal}
              >
                Return to products
              </button>
              <button
                disabled={
                  (product && !hasChanged) ||
                  !form.name ||
                  !form.description ||
                  !form.name ||
                  form.price <= 0 ||
                  form.stock <= 0
                }
                type="submit"
                className="bg-fondo-300 text-zinc-200 py-3 px-5 rounded flex items-center justify-center disabled:bg-zinc-300"
              >
                Submit Changes
                {isSubmitLoading && (
                  <MiniSpinner className="border-zinc-200 ml-2" />
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CreationForm;
