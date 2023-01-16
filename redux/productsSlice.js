import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedPage: 1,
  prevFilters: null,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.selectedPage = payload;
    },
    setPrevFilters: (state, { payload }) => {
      state.prevFilters = payload;
    },
  },
});

export const { setPage, setPrevFilters } = productSlice.actions;

export function getPage(state) {
  return state.products.selectedPage;
}
export function getPrevFilters(state) {
  return state.products.prevFilters;
}
