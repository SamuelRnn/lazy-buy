import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import {
  PencilSquareIcon,
  XMarkIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import dashboardMiddleware from "../../utils/dashboardMiddleware";
import {
  useGetCompanyQuery,
  useCreateProductMutation,
  useUpdateActiveMutation,
  useUpdateVisibleMutation,
  useUpdateProductMutation,
} from "../../redux/companyApi";
import Spinner from "../../components/Spinners/Spinner";
import { toast } from "react-hot-toast";

const Products = ({ company: { email } }) => {
  const [updateActive] = useUpdateActiveMutation();
  const [updateVisible] = useUpdateVisibleMutation();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { isLoading, data: company } = useGetCompanyQuery(email);

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    mainImage: "",
    stock: "",
    isVisible: true,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function onCreate(input) {
    if (
      !input.name ||
      !input.description ||
      !input.category ||
      !input.price ||
      !input.mainImage ||
      !input.stock
    )
      return toast.error("Qué haces maquinola?");

    // parse values
    input.stock = parseInt(input.stock);
    input.price = parseFloat(input.price);
    input.companyId = company.id;

    if (isEdit) {
      await updateProduct(input);
    } else {
      await createProduct(input);
    }

    setInput({
      name: "",
      description: "",
      category: "",
      price: "",
      mainImage: "",
      stock: "",
      isVisible: true,
    });

    console.log(input);
    closeModal();
    setIsEdit(false);
  }

  async function onModify(productId) {
    console.log("🚀 ~ file: products.jsx:78 ~ onModify ~ productId", productId);
    const product = await fetch(
      `http://localhost:3000/api/get/product/${productId}`
    ).then((res) => res.json());
    input.name = product.name;
    input.description = product.description;
    input.price = product.price;
    input.mainImage = {
      url: product.mainImage.url,
      public_id: product.mainImage.public_id,
    };
    input.stock = product.stock;
    input.category = "";
    input.id = productId;
    console.log("🚀 ~ file: products.jsx:87 ~ onModify ~ input", input);

    openModal();
    setIsEdit(true);
  }

  return (
    <DashboardLayout className="relative">
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="text-right mt-10">
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Create Product
            </button>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="absolute w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 mb-5"
                      >
                        Create Product
                      </Dialog.Title>
                      <form className="mt-2 flex flex-col gap-4">
                        <div className="flex gap-3">
                          <label htmlFor="name" className="select-none">
                            Name:
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="e.g. MotherBoard"
                            className="outline-none focus:border-rose-600 w-full"
                            maxLength="19"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                            value={input.name}
                          />
                        </div>
                        <div className="flex gap-3">
                          <label htmlFor="description" className="select-none">
                            Description:
                          </label>
                          <textarea
                            id="description"
                            type="text"
                            name="description"
                            placeholder="e.g. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                            className="outline-none w-full resize-none px-1"
                            rows="4"
                            maxLength="127"
                            value={input.description}
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="flex gap-3">
                          <label htmlFor="category" className="select-none">
                            Category:
                          </label>
                          <select
                            name="category"
                            defaultValue={"Select Categorie"}
                            onChange={(e) =>
                              setInput({ ...input, category: e.target.value })
                            }
                          >
                            <option disabled value="Select Categorie">
                              Select Category
                            </option>
                            <option className="" value="Vatican City">
                              Textile
                            </option>
                            <option className="" value="Accessories">
                              Accessories
                            </option>
                            <option className="" value="Electronics">
                              Electronics
                            </option>
                            <option className="" value="Handicraft">
                              Handicraft
                            </option>
                          </select>
                        </div>
                        <div className="flex gap-3">
                          <label htmlFor="price" className="select-none">
                            Price:
                          </label>
                          <input
                            id="price"
                            type="number"
                            name="price"
                            placeholder="e.g. $9.99"
                            className="outline-none"
                            max={1000}
                            value={input.price}
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="flex gap-3">
                          <label htmlFor="mainImage" className="select-none">
                            Picture:
                          </label>
                          <input
                            id="picture"
                            type="text"
                            name="mainImage"
                            placeholder="e.g. https://res.cloudinary.com/dl5hwebwa/image/upload/v1673232713/lazy-buy/206750_001_ALT140_36ea6580-982e-4394-b619-92392c527865_gtbtvx.jpg"
                            className="outline-none"
                            value={
                              isEdit ? input.mainImage.url : input.mainImage
                            }
                            onChange={(e) =>
                              isEdit
                                ? setInput({
                                    ...input,
                                    [e.target.name]: {
                                      ...e.target.name,
                                      url: e.target.value,
                                    },
                                  })
                                : setInput({
                                    ...input,
                                    [e.target.name]: e.target.value,
                                  })
                            }
                          />
                        </div>
                        <div className="flex gap-5">
                          <label htmlFor="stock" className="select-none">
                            Stock:
                          </label>
                          <input
                            id="stock"
                            type="number"
                            name="stock"
                            placeholder="e.g. 75"
                            className="outline-none px-2"
                            max={100}
                            min={1}
                            value={input.stock}
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                          />
                        </div>
                      </form>
                      <div className="mt-4">
                        <button
                          onClick={() => onCreate(input)}
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          {isEdit ? "Modify" : "Create"}
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full gap-4 place-content-center py-5 ">
            {company.products &&
              company.products.map((p) => {
                return (
                  p.isActive && (
                    <div
                      key={p.id}
                      className={`flex flex-col mx- hover:cursor-pointer gap-5 text-center bg-zinc-100 border p-2 ${
                        !p.isVisible && "opacity-10"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="font-bold">{p.name}</h2>
                        <div className="flex gap-1">
                          <XMarkIcon
                            className="h-5 w-5 hover:text-red-800"
                            onClick={() => {
                              updateActive(p.id);
                            }}
                          />
                          <PencilSquareIcon
                            className="h-5 w-5 hover:text-red-800"
                            onClick={() => onModify(p.id)}
                          />
                          {p.isVisible ? (
                            <EyeSlashIcon
                              className="h-5 w-5 hover:text-red-800"
                              onClick={() => updateVisible(p.id)}
                            />
                          ) : (
                            <EyeIcon
                              className="h-5 w-5 hover:text-red-800"
                              onClick={() => updateVisible(p.id)}
                            />
                          )}
                        </div>
                      </div>
                      <picture className="self-center">
                        <img
                          src={p.mainImage.url}
                          alt={p.name}
                          className="object-cover w-full max-w-xs object-center h-full"
                        />
                      </picture>
                      <div className="flex justify-between p-1">
                        <h3 className="font-bold">Price:</h3>
                        <p>
                          $<span className="text-red-600">{p.price}</span>
                        </p>
                      </div>
                      <div className="flex justify-between p-1">
                        <h3 className="font-bold">Stock:</h3>
                        <p className="text-red-600">{p.stock}</p>
                      </div>
                    </div>
                  )
                );
              })}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Products;

export async function getServerSideProps(context) {
  return await dashboardMiddleware(context);
}
