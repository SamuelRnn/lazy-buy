import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery("http://localhost:3000"),
  endpoints: (builder) => ({
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
        body: JSON.stringify(newProduct),
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
  }),
  tagTypes: ["Company"],
});

export const {
  useGetCompanyQuery,
  useLazyGetProductQuery,
  useGetPlanQuery,
  useLazyGetCompanyPlanQuery,
  //mutations
  useCreateProductMutation,
  useUpdateProductMutation,
  useUpdatePictureMutation,
  useUpdateAccountMutation,
} = companyApi;
