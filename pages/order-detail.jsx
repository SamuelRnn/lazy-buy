import Layout from "../components/MainLayout";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getCart } from "../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { getSession } from "../redux/accountSlice";
import { ImPriceTag } from "react-icons/im";
import { MdInventory } from "react-icons/md";

const OrderDetail = () => {
  const cart = useSelector(getCart);
  const { email } = useSelector((state) => state.account?.session);
  document.body.style.overflow = "";

  const handlePayment = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLIC_KEY);
    let order = cart.map((cartItem) => ({
      userEmail: email,
      id: cartItem.id,
      name: cartItem.name,
      unit_amount: cartItem.price,
      quantity: cartItem.quantity,
    }));
    try {
      const response = await fetch("/api/create/stripePy?pay=product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const data = await response.json();
      //toast.loading("Redirecting...");
      await stripe.redirectToCheckout({
        sessionId: data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Lazy Buy | Order detail">
      <h2 className="w-[95%] max-w-[1000px] mx-auto text-fondo-400 font-bold text-2xl mt-10 mb-8">Your order</h2>
      <div className="flex sm:hidden w-[95%] max-w-[1000px] mx-auto min-h-[300px] rounded-md bg-zinc-100 shadow-md shadow-zinc-400 py-8 px-4 flex-col justify-between mb-16">
          <div>
            <h2 className="text-lg font-medium text-gray-600">Products:
              <span className="ml-2 text-slate-500">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </h2>
            <h2 className="text-lg font-medium text-gray-600">Summary:
              <span className="ml-2 text-slate-500">
                ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </h2>
          </div>

          <button
              onClick={handlePayment}
              className="py-3 px-4 bg-fondo-400 text-zinc-100 rounded-md"
            >
              Go checkout
            </button>
      </div>
      
      <div className="hidden sm:grid grid_order mb-16">
        <div className="grid_products_order max-h-[400px] overflow-y-scroll">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-50 rounded-lg w-[160px] shadow-md shadow-zinc-400"
          >
            <div className="px-3 py-2 text-fondo-300">
              <h2 className=" overflow-hidden whitespace-nowrap text-ellipsis font-bold w-3/4">
                {item.name}
              </h2>
            </div>
            <Image
              alt={item.name}
              title={item.name}
              src={item.mainImage.url}
              width={320}
              height={100}
              className="w-[160px] h-[110px] object-cover"
            />
            <div className="bg-zinc-600 py-3 px-5 text-zinc-100 text-sm rounded-b-lg">
              <p className="flex font-bold">
                <ImPriceTag className="mr-1 mt-[5px]" />
                {item.price.toFixed(2)}
              </p>
              <p className="flex font-bold">
                <MdInventory className="mr-1 mt-[5px]" />
                {item.quantity}
              </p>
            </div>
          </div>
        ))}
        </div>
      <div className="flex rounded-md bg-zinc-100 shadow-md max-h-[400px] shadow-zinc-400 py-8 px-4 flex-col justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-600">Products:
              <span className="ml-2 text-slate-500">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </h2>
            <h2 className="text-lg font-medium text-gray-600">Summary:
              <span className="ml-2 text-slate-500">
                ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </h2>
          </div>

          <button
              onClick={handlePayment}
              className="py-3 px-4 bg-fondo-400 text-zinc-100 rounded-md"
            >
              Go checkout
            </button>
      </div>
      </div>
      {/* <div className="max-w-[1000px] mx-auto grid_order md:pl-4">
        <div className="hidden md:grid grid_products_order">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-50 rounded-lg w-[160px] shadow-md shadow-zinc-400"
          >
            <div className="px-3 py-2 text-fondo-300">
              <h2 className=" overflow-hidden whitespace-nowrap text-ellipsis font-bold w-3/4">
                {item.name}
              </h2>
            </div>
            <Image
              alt={item.name}
              title={item.name}
              src={item.mainImage.url}
              width={320}
              height={100}
              className="w-[160px] h-[110px] object-cover"
            />
            <div className="bg-zinc-600 py-3 px-5 text-zinc-100 text-sm rounded-b-lg">
              <p className="flex font-bold">
                <ImPriceTag className="mr-1 mt-[5px]" />
                {item.price.toFixed(2)}
              </p>
              <p className="flex font-bold">
                <MdInventory className="mr-1 mt-[5px]" />
                {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-zinc-200 rounded-lg right-0 py-4 h-55 shadow-md shadow-gray-500 border border-slate-300 gap-2 p-5 max-sm:w-[90%] min-h-[400px] flex flex-col justify-between">
          <div>
            <div className="flex items-center">
              <h2 className="text-lg font-medium text-gray-600">Products:</h2>
              <span className="text-lg font-medium ml-2">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <div className="my-4">
              <span className="text-gray-600">Summary:</span>
              <span className="text-lg font-medium ml-2">
                {" "}
                ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handlePayment}
              className="py-3 px-4 bg-fondo-400 text-zinc-100 rounded-md"
            >
              Go checkout
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="flex justify-center px-4 pb-3 mb-3 border-b">
          <p className="text-fondo-200 font-bold pr-1">Summary:</p>
          <div>
          <span className="text-slate-600 font-semibold">
            $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
          </div>
        </div> */}

    </Layout>
  );
};

export default OrderDetail;

{
  /* <div className="bg-white p-6 rounded-lg">
<div className="flex items-center justify-between">
  <div className="text-lg font-medium">Products</div>
  <div className="text-lg font-medium">   $
            {cart
              .reduce((acc, item) => acc + item.quantity, 0)
              .toFixed(2)}</div>
</div>
<div className="my-4">
  <span className="text-gray-600">Summary:</span>
  <span className="text-lg font-medium ml-2">   $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}</span>
</div>
</div> */
}
