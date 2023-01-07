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
    dev: (state, action) => {
      state.subtotal++;
    },
  },
});
export const { setCartItem, cutCartItem, dev } = cartSlice.actions;
//custom selector function => useSelector(getCart) instead of useSelector(state => state.counter)
export function getCart(state) {
  return state.cart;
}
