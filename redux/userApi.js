import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: (email) => `/api/get/user/${email}`,
      providesTags: ["wishList"],
    }),
    addWishItem: builder.mutation({
      query: (addWishItem) => ({
        url: "/api/mod/user/wishList",
        method: "PATCH",
        body: addWishItem,
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["wishList"],
    }),
    deleteWishItem: builder.mutation({
      query: (deleteWishItem) => ({
        url: "/api/delete/user/wishItem",
        method: "DELETE",
        body: deleteWishItem,
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["wishList"],
    }),
  }),
  tagTypes: ["wishList"],
});

export const {
  useGetWishListQuery,
  useAddWishItemMutation,
  useDeleteWishItemMutation,
} = userApi;
