import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Products = ({ isActive }) => {
  let [isOpen, setIsOpen] = useState(true);
  
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    stock: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function handleSubmit() {
    console.log(input);

    closeModal()
  }

  return (
    <div>
      {isActive.products ? (
        <>
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
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 mb-5"
                      >
                        Create Product
                      </Dialog.Title>
                      <form
                        className="mt-2 flex flex-col gap-4"
                      >
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
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                            value={input.description}
                          />
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
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                            value={input.price}
                          />
                        </div>
                        <div className="flex justify-between">
                          <label htmlFor="picture" className="select-none">
                            Picture:
                          </label>
                          <input
                            id="picture"
                            type="file"
                            name="picture"
                            placeholder="e.g. 20"
                            className="outline-none"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                            value={input.picture}
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
                            max={99}
                            min={1}
                            onChange={(e) =>
                              setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                              })
                            }
                            value={input.stock}
                          />
                        </div>
                      </form>

                      <div className="mt-4">
                        <button
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={handleSubmit}
                        >
                          Create
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Products;
