import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery("http://localhost:3000"),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => ({
        url: "/api/get/product",
        params: filters,
      }),
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
