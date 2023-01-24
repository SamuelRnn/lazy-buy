import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: (pg) => `/api/get/company?page=${pg}`,
      providesTags: ["Company"],
    }),
    getCompany: builder.query({
      query: (email) => `/api/get/company/${email}`,
      providesTags: ["Company"],
    }),
    getProduct: builder.query({
      query: (productId) => `/api/get/product/${productId}`,
    }),

    getPlan: builder.query({
      query: () => `/api/get/plan`,
    }),

    getCompanyPlan: builder.query({
      query: (planType) => `/api/get/plan/${planType}`,
    }),
    //mutations
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/api/create/product",
        method: "POST",
        body: newProduct,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Company"],
    }),

    updateProduct: builder.mutation({
      query: (updatedProduct) => ({
        url: `/api/mod/product`,
        method: "PUT",
        body: updatedProduct,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Company"],
    }),

    updatePicture: builder.mutation({
      query: (updatePicture) => ({
        url: "/api/mod/company/picture",
        method: "PATCH",
        body: updatePicture,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Company"],
    }),
    updateAccount: builder.mutation({
      query: (updateAccount) => ({
        url: `/api/mod/company/account`,
        method: "PATCH",
        body: updateAccount,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Company"],
    }),
    deleteCompany: builder.mutation({
      query: (email) => ({
        url: `/api/delete/company/${email}`,
        method: "PATCH",
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Company"],
    }),
  }),
  tagTypes: ["Company"],
});

export const {
  useGetCompaniesQuery,
  useGetCompanyQuery,
  useLazyGetProductQuery,
  useGetPlanQuery,
  useLazyGetCompanyPlanQuery,
  //mutations
  useCreateProductMutation,
  useUpdateProductMutation,
  useUpdatePictureMutation,
  useUpdateAccountMutation,
  useDeleteCompanyMutation,
} = companyApi;
