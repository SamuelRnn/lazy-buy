import { useSelector } from "react-redux";
import Layout from "../components/Layout";
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
      const response = await fetch(
        "http://localhost:3000/api/create/stripePy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );
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
      <div className="main flex flex-col gap-y-3 py-5">
        {cart.map((item) => (
          <div key={item.id} className="bg-zinc-400 p-4  rounded-md">
            <p>{item.name}</p>
            <p>{item.quantity} u</p>
            <p>$ {item.price} /u</p>
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
