import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCartItem: (state, { payload: product }) => {
      state.push(product);
    },
    cutCartItem: (state, { payload: itemId }) => {
      const itemIndex = state.findIndex((i) => i.id === itemId);
      state.splice(itemIndex, 1);
    },
    decreaseItemQuantity: (state, { payload: itemId }) => {
      const item = state.find((i) => i.id === itemId);
      item.quantity--;
    },
    increaseItemQuantity: (state, { payload: itemId }) => {
      const item = state.find((i) => i.id === itemId);
      item.quantity++;
    },
    clearCart: () => [],
  },
});
export const {
  setCartItem,
  cutCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
//custom selector function => useSelector(getCart) instead of useSelector(state => state.cart)
export function getCart(state) {
  return state.cart;
}
export function getCartIds(state) {
  return state.cart.map((i) => i.id);
}
