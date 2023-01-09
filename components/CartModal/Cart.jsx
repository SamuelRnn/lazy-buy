import { useSelector, useDispatch } from "react-redux";
import { dev, getCart } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleadd() {
    dispatch(dev());
  }
  return (
    <div className="p-4">
      <p>{cart.subtotal}</p>
      <button onClick={handleadd} className="p-2 bg-zinc-100">
        add
      </button>
    </div>
  );
};

export default Cart;
