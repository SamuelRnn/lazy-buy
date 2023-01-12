import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { getCart, setCartItem } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

//recibe 2 styles: "card" || "wider"
const Card = ({ product, style = "card" }) => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const accountType = useSelector((state) => state.account?.session.type);

  const addItemToCart = () => {
    if (accountType === "company") {
      return toast.error("Company accounts can't buy or have a cart!");
    }
    const itemAlreadyExist = cart.find((item) => item.id === product.id);
    if (itemAlreadyExist) {
      return toast.error(`"${product.name}" is already in your cart!`);
    }
    product.quantity = 1;
    dispatch(setCartItem(product));
    toast.success(`"${product.name}" added sucessfully to your cart :D`, {
      duration: 4000,
    });
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
                  "*".repeat(Math.round(5 - product.averageRating))
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
                <button className="text-fondo-300 hover:text-gray-200 px-2 py-2 hover:bg-zinc-500 transition-colors  rounded-md">
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
        <Link href={"/products/" + product.slug}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white h-[200px] w-[800px] rounded-lg shadow-xl hover:scale-110 transition-transform">
              <div className="p-6 flex">
                <div className="mr-6 h-[152px] w-[152px]">
                  <Image
                    src={product.mainImage.url}
                    alt="Adidas"
                    height={152}
                    width={152}
                    className="h-[152px] w-[152px] bg-white object-cover brightness-105 mix-blend-multiply"
                  />
                </div>
                <div className="w-full px-6 bg-zinc-100 rounded pt-4">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-xl text-gray-700">
                      {product.name}
                    </h3>
                    <h3>⭐{product.averageRating}</h3>
                  </div>
                  <h4 className="text-sm text-gray-500">
                    {product.company.name}
                  </h4>

                  <div className="mt-6">
                    <p className="font-mono font-bold text-2xl text-fondo-300">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      )}
    </>
  );
};

export default Card;
