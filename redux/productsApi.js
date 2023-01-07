import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery("http://localhost:3000"),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters = null) => ({
        url: "/api/get/product",
        params: filters,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;
