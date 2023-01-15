import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholder from "../../../public/no_image.jpg";
import MiniSpinner from "../../Spinners/MiniSpinner";
import { useCreateProductMutation } from "../../../redux/companyApi";

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

const CreationForm = ({ product, setActive }) => {
  console.log(product);
  const [createProduct] = useCreateProductMutation();
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
    const url = URL.createObjectURL(event.target.files[0]);
    setImagePreview(url);
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    triggerSubmitLoading(true);

    let file = document.getElementById("product_file").files[0];
    file = await getFileAsDataURI(file);

    const newProduct = {
      ...form,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      mainImage: file,
      companyId: "335d4af5-5489-4ae4-b60b-311ea82687d5",
    };

    await createProduct(newProduct);

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
        className="absolute modal_bg h-screen w-screen top-0 right-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          transition={{ bounce: true, ease: "backInOut" }}
          className="p-4 rounded-lg bg-zinc-100 overflow-x-hidden h-[80vh] w-product_form"
        >
          <form onSubmit={handleSubmit}>
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
                type="submit"
                className="bg-fondo-300 text-zinc-200 py-3 px-5 rounded flex items-center justify-center"
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
