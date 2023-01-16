import Layout from "../../components/MainLayout";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import {
  getCart,
  setCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cartSlice";
import { toast } from "react-hot-toast";

const Detail = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const accountType = useSelector((state) => state.account?.session.type);
  const cart = useSelector(getCart);

  const addItemToCart = () => {
    if (accountType === "company") {
      return toast.error("Company accounts can't buy or have a cart!");
    }
    const itemAlreadyExist = cart.find((item) => item.id === product.id);
    if (itemAlreadyExist) {
      return toast.error(`"${product.name}" is already in your cart!`);
    }

    dispatch(setCartItem({ ...product, quantity }));
    setQuantity(1);
    toast.success(`"${product.name}" added sucessfully to your cart :D`, {
      duration: 4000,
    });
  };

  return (
    <Layout title={"Lazy Buy | " + product.name}>
      <br />
      <br />
      <br />
      <div className="main">
        <button
          className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-fondo-300 rounded hover:bg-fondo-500 active:scale-75 transition-all ease-out"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
      <section>
        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
          <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <Image
                width={400}
                height={400}
                alt="Les Paul"
                src={product.mainImage.url}
                className="object-cover w-full aspect-square rounded-xl"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src={product.mainImage.url}
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src={product.mainImage.url}
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src={product.mainImage.url}
                  className="object-cover w-full aspect-square rounded-xl"
                />

                <Image
                  width={1500}
                  height={1000}
                  alt="Les Paul"
                  src={product.mainImage.url}
                  className="object-cover w-full aspect-square rounded-xl"
                />
              </div>
            </div>

            <div className="sticky top-10">
              <div className="flex justify-between mt-8">
                <div className="max-w-[35ch]">
                  <h1 className="text-2xl font-bold">{product.name}</h1>

                  <p className="mt-0.5 text-sm text-zinc-700">
                    {product.company.name}
                  </p>

                  <div className="mt-2 -ml-0.5 flex">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>

              <div className="prose max-w-none mt-10">
                <p>{product.description}</p>
                <p className="mt-8 text-zinc-600">
                  available stock: {product.stock}
                </p>
              </div>

              {/* <div className="pb-6 prose max-w-none">
                  <p>
                    The Ordinary es una marca que ofrece una variedad de
                    productos para el cuidado de la piel facial. Si buscas
                    protegerla y mantenerla en forma, esta puede ser una buena
                    opción. Libre de crueldad Este producto es elaborado sin
                    lastimar a ningún animal. Es vegano Este producto es
                    realizado en base a elementos naturales de origen vegetal.
                  </p>
                </div> */}

              <div className="mt-8">
                {/* //add props extra to model  */}
                {/* <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="flow-root">
                    <div className="-m-0.5 flex flex-wrap">
                      <label className="cursor-pointer p-0.5">
                        <span className=" border-rose-500 bg-fondo-200 inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Texas Tea
                        </span>
                      </label>

                      <label className="cursor-pointer p-0.5">
                        <span className=" border-rose-500 bg-fondo-200 inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Fiesta Red
                        </span>
                      </label>

                      <label className="cursor-pointer p-0.5">
                        <span className=" border-rose-500 bg-fondo-200 inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                          Cobalt Blue
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset> */}

                {/* <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>
                </fieldset> */}

                <div className="flex mt-8 flex-col gap-4">
                  <div>
                    {/*  <input
                      type="number"
                      value={cantidad}
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    /> */}
                  </div>
                  <div className="flex justify-between items-center mb-5 px-5">
                    <button
                      className="text-gray-200 px-2 py-2 bg-zinc-500 hover:bg-fondo-300 transition-colors  rounded-md"
                      onClick={() => {
                        if (quantity === 1)
                          return toast.error(
                            "Select at least 1 item, if you want to remove the item click on the trash can"
                          );

                        setQuantity(quantity - 1);
                      }}
                    >
                      <FiMinus className="text-xl" />
                    </button>
                    <span className="font-bold text-2xl">{quantity}</span>
                    <button
                      className="text-gray-200 px-2 py-2 bg-zinc-500 hover:bg-fondo-300 transition-colors  rounded-md"
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      <FiPlus className="text-xl" />
                    </button>
                  </div>

                  <button
                    disabled={cart.find((item) => item.id === product.id)}
                    className="block px-5 py-3 sm:ml-3 font-medium text-white bg-fondo-300 rounded hover:bg-fondo-500 active:scale-75 transition-all ease-out disabled:pointer-events-none disabled:bg-zinc-400 text-lg"
                    onClick={addItemToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Detail;

export async function getServerSideProps({ res, query: { slug } }) {
  const { product, $disconnect } = new PrismaClient();
  const fetchedProduct = await product.findUnique({
    where: { slug },
    include: {
      company: true,
    },
  });
  if (!fetchedProduct) {
    return {
      notFound: true,
    };
  }
  fetchedProduct.updatedAt = toString(fetchedProduct.updatedAt);
  fetchedProduct.createdAt = toString(fetchedProduct.createdAt);
  fetchedProduct.company.createdAt = toString(fetchedProduct.company.createdAt);
  fetchedProduct.company.updatedAt = toString(fetchedProduct.company.updatedAt);
  return {
    props: {
      product: fetchedProduct,
    },
  };
}
