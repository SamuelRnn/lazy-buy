import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery("http://localhost:3000"),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (initialParams) => ({
        url: "/api/get/product",
        params: initialParams,
      }),
      providesTags: ["products"],
    }),
  }),
  tagTypes: ["products"],
});

export const { useGetProductsQuery } = productApi;
