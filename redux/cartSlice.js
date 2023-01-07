import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItem: (state, action) => {},
    cutCartItem: (state, action) => {},
  },
});
export const { setCartItem, cutCartItem } = cartSlice.actions;
//custom selector function => useSelector(getCart) instead of useSelector(state => state.counter)
export default function getCart(state) {
  return state.counter;
}
