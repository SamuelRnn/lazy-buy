import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { getCart, setCartItem } from "../../redux/cartSlice";
import { useAddWishItemMutation } from "../../redux/userApi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useSession, getSession } from "next-auth/react";

//recibe 2 styles: "card" || "wider"
const Card = ({ product, style = "card" }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const [wishList] = useAddWishItemMutation();
  const accountType = useSelector((state) => state.account?.session.type);

  const addItemToCart = () => {
    if (accountType === "company") {
      return toast.error("Company accounts can't buy or have a cart!");
    }
    const itemAlreadyExist = cart.find((item) => item.id === product.id);
    if (itemAlreadyExist) {
      return toast.error(`"${product.name}" is already in your cart!`);
    }

    dispatch(setCartItem({ ...product, quantity: 1 }));
    toast.success(`"${product.name}" added sucessfully to your cart :D`, {
      duration: 4000,
    });
  };
  const addItemToWishList = async () => {
    const session = await getSession();

    if (accountType === "company") {
      return toast.error("Company accounts can't add or have a wish items!");
    }
    const result = await wishList({ email: session.user.email, product });

    if (result.error.originalStatus !== 200)
      return toast.error(`"${product.name}" is already in your wish list!`);

    return toast.success(
      `"${product.name}" added sucessfully to your wish list :D`,
      {
        duration: 4000,
      }
    );
  };

  return (
    <>
      {style === "card" && (
        <div className="mx-auto rounded-xl shadow-xl card_width border">
          <div className="py-4 px-4 flex flex-col gap-2 bg-zinc-100 rounded-t-lg">
            <h3 className="text-xl font-bold text-gray-600 w-full overflow-hidden whitespace-nowrap text-ellipsis">
              {product.name}
            </h3>
            <div className="flex justify-between items-center gap-x-10">
              <p className="text-gray-500 text-sm hover:underline cursor-pointer w-fit overflow-hidden text-ellipsis whitespace-nowrap">
                {product.company.name}
              </p>
              <span className="flex">
                {Array.from("*".repeat(Math.round(product.averageRating))).map(
                  (star, i) => (
                    <AiFillStar key={i} className="text-yellow-500" />
                  )
                )}
                {Array.from(
                  "*".repeat(5 - Math.round(product.averageRating))
                ).map((star, i) => (
                  <AiFillStar key={i} className="text-zinc-300" />
                ))}
              </span>
            </div>
          </div>
          <Link href={"/products/" + product.slug}>
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ bounce: false, duration: 0.25 }}
              >
                <Image
                  src={product.mainImage.url}
                  alt="Adidas"
                  height={200}
                  width={320}
                  className="h-[200px] object-cover transition-all"
                />
              </motion.div>
            </div>
          </Link>
          <div className="py-2 px-2 flex items-center justify-between bg-zinc-600 rounded-bl-lg rounded-br-lg">
            <span className="text-white font-bold px-2">
              ${product.price.toFixed(2)}
            </span>
            {accountType !== "company" && (
              <div className="flex">
                <button
                  className="text-fondo-300 hover:text-gray-200 px-2 py-2 hover:bg-zinc-500 transition-colors  rounded-md"
                  onClick={addItemToWishList}
                >
                  <FaRegHeart className="transition-all text-2xl" />
                </button>
                {/* button to add to cart */}
                <button
                  onClick={addItemToCart}
                  className="text-gray-200 px-2 py-2 hover:bg-zinc-500 transition-colors  rounded-md"
                >
                  <IoBagAdd className="transition-all text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* wider style for Card */}
      {style === "wider" && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="sm:hidden w-[320px] rounded-sm shadow-md shadow-zinc-300 overflow-hidden">
            <Image
              src={product.mainImage.url}
              alt="Adidas"
              height={140}
              width={320}
              className="w-[320px] h-[220px] bg-white object-cover"
            />
            <div className="p-2 bg-zinc-100">
              <div className="flex justify-between items-center">
                <h3 className="text-slate-600 font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                  {product.name}
                </h3>
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
              <h4 className="text-sm text-zinc-500 text-ellipsis overflow-hidden whitespace-nowrap">
                {product.company.name}
              </h4>
              <div className="flex justify-between items-center">
                <p className="font-bold text-slate-500">$ {product.price}</p>
                <button
                  className="text-fondo-300 hover:text-gray-200 px-2 py-2 transition-colors rounded-md"
                  onClick={addItemToWishList}
                >
                  <FaRegHeart className="transition-all text-2xl" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden sm:grid grid_search_card w-full rounded-sm shadow-md shadow-zinc-300 overflow-hidden">
            <div className="w-[160px] h-[140px] overflow-hidden">
              <Link href={"/products/" + product.slug}>
                <Image
                  src={product.mainImage.url}
                  width={160}
                  height={100}
                  alt={product.name}
                  className="w-[160px] h-[140px] object-cover hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
            <div className="p-4 max-w-full relative">
              <div className="flex items-center justify-between">
                <h2 className="text-zinc-600 text-lg sm:w-[250px] lg:w-[320px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {product.name}
                </h2>
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
              <p className="text-xs text-zinc-400 w-2/3 text-ellipsis overflow-hidden whitespace-nowrap">
                {product.company.name}
              </p>
              <p className="font-bold text-slate-600 mt-10">
                $ {product.price.toFixed(2)}
              </p>
              <div className="absolute  bottom-2 right-2">
                <button
                  title="Add to my wishlist"
                  className="text-fondo-300 px-2 py-2 transition-colors rounded-md hover:text-zinc-100 hover:bg-fondo-300"
                  onClick={addItemToWishList}
                >
                  <FaRegHeart className="transition-all text-2xl" />
                </button>
                <button
                  title="Add to my cart"
                  className="text-fondo-300 px-2 py-2 transition-colors rounded-md hover:text-zinc-100 hover:bg-fondo-300"
                  onClick={addItemToCart}
                >
                  <IoBagAdd className="transition-all text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Card;
