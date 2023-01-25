import Layout from "../../components/MainLayout";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import { BsEraserFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  getCart,
  setCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cartSlice";
import { toast } from "react-hot-toast";
import { Rate } from "antd";
import {
  useGetReviewsQuery,
  useAddReviewMutation,
  useEraseReviewMutation,
} from "../../redux/reviewApi";
import CardCarousel from "../../components/Elements_Cards/CardCarousel";

const Detail = ({ product, carousel }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const session = useSelector((state) => state.account?.session);
  const cart = useSelector(getCart);
  const { isFetching, data: reviews } = useGetReviewsQuery(product.id);
  const [addReview] = useAddReviewMutation();
  const [eraseReview] = useEraseReviewMutation();

  const [input, setInput] = useState({
    commentBody: "",
    rating: 1,
    userEmail: session.email,
    productId: product.id,
  });

  const addReviewToProduct = async (e) => {
    e.preventDefault();
    if (session.type === "company") {
      return toast.error("Company accounts can't give reviews!");
    }
    if (!input.commentBody)
      return toast.error("Invalid comment, please write something!");

    let aux = 0;
    let checkProductTransaction;

    const checkUserReview = reviews.forEach((r) => {
      if (r.user.email === session.email) aux = 1;
    });

    if (aux) {
      toast.error("Hey, isn't allowed give more than one review!");
    } else {
      checkProductTransaction = await addReview(input);

      if (checkProductTransaction.error?.data === "Forbbiden")
        toast.error("You haven't bought this product yet!");
    }

    setInput({
      commentBody: "",
      rating: 1,
      userEmail: session.email,
      productId: product.id,
    });
  };

  const addItemToCart = () => {
    if (session.type === "company") {
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

  const eraseComment = (id) => {
    try {
      eraseReview(id);
      toast.success("Get out of here!");
    } catch (error) {
      toast.error("Something happened D:!");
    }
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
        <div className="relative max-w-screen-xl px-1 py-8 mx-auto">
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
                    <span className="flex">
                      {Array.from(
                        "*".repeat(Math.round(product.averageRating))
                      ).map((star, i) => (
                        <AiFillStar key={i} className="text-yellow-500" />
                      ))}
                      {Array.from(
                        "*".repeat(5 - Math.round(product.averageRating))
                      ).map((star, i) => (
                        <AiFillStar key={i} className="text-zinc-300" />
                      ))}
                    </span>
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
                        if(quantity >= product.stock) return toast.error("You can't exceed the stock!")

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
                  <form onSubmit={addReviewToProduct} className="mb-5">
                    <div className="flex justify-center items-center gap-2">
                      <textarea
                        disabled={session.type === "user" ? false : true}
                        placeholder="Rate this product!"
                        rows={3}
                        cols={50}
                        maxLength={119}
                        className="resize-none p-1 border-solid border-2 border-slate-900 outline-none rounded disabled:cursor-not-allowed"
                        name="commentBody"
                        value={input.commentBody}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <button
                        disabled={session.type === "user" ? false : true}
                        type="submit"
                        className="px-5 py-7 bg-fondo-300 hover:bg-fondo-500 active:scale-75 disabled:pointer-events-none disabled:bg-zinc-400 text-lg rounded font-medium text-white cursor-pointer"
                      >
                        Post
                      </button>
                    </div>
                    <Rate
                      disabled={session.type === "user" ? false : true}
                      defaultValue={input.rating}
                      onChange={(e) => setInput({ ...input, rating: e })}
                      className="flex justify-center"
                    />
                  </form>
                  <div className="grid gap-4 place-content-center">
                    {reviews &&
                      reviews.map((r) => (
                        <div
                          key={r.id}
                          className="bg-slate-300 rounded p-2 relative w-[320px] sm:w-[420px]"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={r.user.profilePicture.url}
                              alt={r.user.userName}
                              width={64}
                              height={64}
                              className="object-cover rounded-full"
                            />
                            <p>{r.commentBody}</p>
                          </div>
                          <Rate
                            disabled={true}
                            defaultValue={r.rating}
                            className="flex justify-center"
                          />
                          {session.isAdmin && (
                            <BsEraserFill
                              className="absolute top-[-10px] right-1 text-3xl hover:cursor-pointer hover:text-fondo-500"
                              onClick={() => eraseComment(r.id)}
                            />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      {carousel.length ? (
        <>
          <h1 className="main home_titles">Related products</h1>
          <CardCarousel productArray={carousel} />
        </>
      ) : null}
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

  const carousel = await product.findMany({
    where: {
      OR: [
        {
          category: {
            contains: fetchedProduct.category,
          },
        },
      ],
      NOT: {
        name: {
          contains: fetchedProduct.name,
        },
      },
    },

    orderBy: {
      averageRating: "desc",
    },
    include: {
      company: true,
    },
  });
  /* {
    companyId:{
      contains: fetchedProduct.companyId
    }
  } */
  if (carousel.length) {
    for (let obj of carousel) {
      obj.createdAt = obj.createdAt.toString();
      obj.updatedAt = obj.updatedAt.toString();
      obj.company.updatedAt = obj.company.updatedAt.toString();
      obj.company.createdAt = obj.company.createdAt.toString();
    }
  }
  return {
    props: {
      product: fetchedProduct,
      carousel: carousel.length ? carousel : null,
    },
  };
}
