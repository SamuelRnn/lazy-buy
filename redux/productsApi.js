import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  tagTypes: ["products", "allProducts"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => ({
        url: "/api/get/product",
        params: filters,
      }),
      providesTags: ["products"],
    }),
    getAllProducts: builder.query({
      query: (filter) =>
        `/api/get/product/admin/productDash?filterOne=${filter.one || "All"}&filterTwo=${filter.two === "true"?true:filter.two === "false"? false:"All"}&pg=${filter.pg}`,
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

export const {
  useGetProductsQuery,
  useGetAllProductsQuery,
  useDeleteProductMutation,
} = productApi;
