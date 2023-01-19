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
      const hh = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Lazy Buy | Order detail">
      <h2 className="main text-fondo-400 font-bold text-2xl">Your order</h2>
      <div className="main flex gap-2 gap-y-3 py-5 ">
        {cart.map((item) => (
          <div
            key={item.id}
            className="relative bg-zinc-50 rounded-lg w-[250px] sm:w-[320px] md:w-[720px] shadow-md shadow-zinc-400"
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
      <div className="main flex justify-end">
        <button
          onClick={handlePayment}
          className="py-3 px-4 bg-fondo-400 text-zinc-100 rounded-md"
        >
          Go checkout
        </button>
      </div>
    </Layout>
  );
};

export default OrderDetail;
