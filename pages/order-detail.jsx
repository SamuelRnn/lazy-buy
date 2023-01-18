import Layout from "../components/MainLayout";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getCart } from "../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";

const OrderDetail = () => {
  const cart = useSelector(getCart);
  document.body.style.overflow = "";

  const handlePayment = async () => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLIC_KEY);
    let order = cart.map((cartItem) => ({
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
            className="bg-zinc-200 p-3  rounded-md content-center "
          >
            <Image
              src={item.mainImage.url}
              alt={item.name}
              height={200}
              width={320}
              className="h-[200px] object-cover transition-all "
            />
            <p className="font-bold text-lg text-gray-700">{item.name}</p>
            <p className="font-bold text-sm text-gray-700">{item.quantity} u</p>
            <p className="font-bold text-sm text-gray-700">$ {item.price} /u</p>
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
