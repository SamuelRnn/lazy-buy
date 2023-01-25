import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  cutCartItem,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cartSlice";
import { BsTrashFill, BsArrowRight } from "react-icons/bs";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/router";

const Cart = ({ setActive }) => {
  const router = useRouter();
  const cart = useSelector(getCart);
  const session = useSelector((state) => state.account.session);
  const dispatch = useDispatch();

  return (
    //main container
    <section className="pt-5 p-2">
      <div className="flex flex-col gap-y-3 w-full overflow-y-scroll h-modal mb-6">
        {/* product */}
        {cart.map((product) => (
          <div
            key={product.id}
            className="border border-zinc-300 rounded-md py-3 px-2 flex justify-between items-center gap-x-2"
          >
            {/* product resume */}
            <div className="flex items-center w-5/6">
              {/* product quantity */}
              <div className="w-8 flex flex-col items-center justify-between mr-2">
                <button
                  className="text-lg w-5 h-5"
                  onClick={() => {
                    if (product?.quantity >= product.stock)
                      return toast.error("You can't exceed the stock!");

                    dispatch(increaseItemQuantity(product.id));
                  }}
                >
                  <ChevronUpIcon />
                </button>
                {product.quantity}
                <button
                  className="text-lg w-5 h-5"
                  onClick={() => {
                    if (product.quantity === 1)
                      return toast.error(
                        "Select at least 1 item, if you want to remove the item click on the trash can"
                      );
                    dispatch(decreaseItemQuantity(product.id));
                  }}
                >
                  <ChevronDownIcon />
                </button>
              </div>
              <div className="overflow-hidden mr-2">
                <Image
                  alt={product.name}
                  width={60}
                  height={60}
                  src={product.mainImage.url}
                  className="w-14 h-14 object-cover rounded-md"
                />
              </div>
              <div className="w-4/6 flex flex-col justify-center">
                <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {product.name.toUpperCase()}
                </p>
                <span className="text-sm text-slate-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-slate-400">
                  ${(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            {/* delete button */}
            <button
              onClick={() => dispatch(cutCartItem(product.id))}
              className="text-gray-700 grid place-content-center w-12 h-12 hover:bg-zinc-500 hover:text-gray-200 rounded-md transition-color duration-200"
            >
              <BsTrashFill className="text-xl w-12" />
            </button>
          </div>
        ))}
      </div>
      <div className="bg-zinc-100 rounded-t-lg flex flex-col py-4 h-72 shadow-md shadow-gray-400 border border-slate-300 mr-4">
        <div className="flex justify-between px-4 pb-3 mb-3 border-b">
          <p className="text-fondo-200 font-bold">Summary :</p>
          <span className="text-slate-600 font-semibold">
            $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        {/* final buttons and message */}
        <div className="flex flex-col gap-y-2 justify-center h-[100px]">
          <div className="px-4 flex gap-x-2">
            <button
              title="Close cart"
              onClick={() => {
                setActive(false);
                setTimeout(() => (document.body.style.overflow = ""), 400);
              }}
              className="h-12 bg-zinc-400 text-white grid place-content-center rounded-md hover:bg-fondo-300
              transition-colors"
            >
              <TfiClose className="w-12  text-xl" />
            </button>
            <button
              title="Clear all"
              onClick={() => {
                if (!cart.length) return;
                toast.success("Cart cleared successfully!");
                dispatch(clearCart());
              }}
              className="h-12 bg-zinc-400 text-white grid place-content-center rounded-md hover:bg-fondo-300 transition-colors"
            >
              <BsTrashFill className="text-xl w-12" />
            </button>
            <button
              onClick={() => {
                router.push("/order-detail");
              }}
              className={`h-12 bg-zinc-400 text-white rounded-md w-full flex justify-center gap-x-4 items-center ${
                session !== "no-session"
                  ? "hover:bg-fondo-300 transition-colors"
                  : "pointer-events-none"
              }`}
            >
              <p>Checkout</p>
              <BsArrowRight className="text-2xl" />
            </button>
          </div>
          {session === "no-session" && (
            <p className="text-center text-sm text-fondo-400">
              Only registered users can purchase in our store, sign in now to
              continue!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
