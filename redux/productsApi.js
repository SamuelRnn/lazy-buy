import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  tagTypes: ["products","allProducts"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => ({
        url: "/api/get/product",
        params: filters,
      }),
      providesTags: ["products"],
    }),
    getAllProducts: builder.query({
      query:()=> "/api/get/product?dash=true",
      providesTags: ["allProducts"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/delete/deleteProduct?productId=${id}`,
        method: "PATCH",
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["allProducts"],
    }),    
  }),
});

export const { useGetProductsQuery,useGetAllProductsQuery, useDeleteProductMutation } = productApi;
