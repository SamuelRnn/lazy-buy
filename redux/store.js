import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { productApi } from "./productsApi";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  cart: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(productApi.middleware),
});

//optional
