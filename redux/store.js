import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { accountSlice } from "./accountSlice";
import { productSlice } from "./productsSlice";
import { productApi } from "./productsApi";
import { companyApi } from "./companyApi";
import { userApi } from "./userApi";
import { reviewApi } from "./reviewApi";
import { transactionApi } from "./transactionApi";
// import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// export default storage;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "account"],
};

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [companyApi.reducerPath]: companyApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  [transactionApi.reducerPath]: transactionApi.reducer,
  products: productSlice.reducer,
  cart: cartSlice.reducer,
  account: accountSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(productApi.middleware)
      .concat(companyApi.middleware)
      .concat(userApi.middleware)
      .concat(reviewApi.middleware)
      .concat(transactionApi.middleware),
});

//optional
