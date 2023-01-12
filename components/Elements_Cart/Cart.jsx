import { useSelector, useDispatch } from "react-redux";
import { getCart, cutCartItem, clearCart } from "../../redux/cartSlice";
import { BsTrashFill } from "react-icons/bs";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { TfiClose } from "react-icons/tfi";
import Image from "next/image";
import { toast } from "react-hot-toast";
const Cart = ({ setActive }) => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    //main container
    <section className="pt-5 p-2">
      <div className="flex flex-col gap-y-3 w-full overflow-y-scroll h-modal">
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
                <button className="text-lg w-5 h-5">
                  <ChevronUpIcon />
                </button>
                1
                <button className="text-lg w-5 h-5">
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
      <div className="bg-zinc-200 rounded-md flex flex-col py-4">
        <div className="flex justify-between px-2">
          <p>Summary</p>
          <span>
            $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="px-2 flex gap-x-2">
          <button
            onClick={() => {
              setActive(false);
              document.body.style.overflow = "";
            }}
            className="h-12 bg-zinc-400 text-white grid place-content-center rounded-md"
          >
            <TfiClose className="w-12  text-xl" />
          </button>
          <button
            onClick={() => {
              if (!cart.length) return;
              toast.success("Cleared cart successfully!");
              dispatch(clearCart());
            }}
            className="h-12 bg-zinc-400 text-white grid place-content-center rounded-md"
          >
            Clear Cart
          </button>
          <button className="h-12 bg-zinc-400 text-white rounded-md w-full">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
