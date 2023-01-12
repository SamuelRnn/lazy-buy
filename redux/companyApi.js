import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery("http://localhost:3000"),
  endpoints: (builder) => ({
    getCompany: builder.query({
      query: (email) => `/api/get/company/${email}`,
      providesTags: ["Company"],
    }),
    getCompanyProducts: builder.query({
      query: (email) => `/api/get/company/products/${email}`,
    }),
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/api/create/product",
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Company"],
    }),
    updateVisible: builder.mutation({
      query: (updateVisible) => ({
        url: `/api/modify/product_visible?productId=${updateVisible}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Company"],
    }),
    updateActive: builder.mutation({
      query: (updateActive) => ({
        url: `/api/modify/product_active?productId=${updateActive}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Company"],
    }),
  }),
  tagTypes: ["Company"],
});

export const {
  useGetCompanyQuery,
  useGetCompanyProductsQuery,
  useCreateProductMutation,
  useUpdateActiveMutation,
  useUpdateVisibleMutation,
} = companyApi;
