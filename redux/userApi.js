import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery("http://localhost:3000"),
  tagTypes: ["wishList"],
  endpoints: (builder) => ({
    getWishList: builder.query({
      query: (email) => `/api/get/user/whisList/${email}`,
    }),
    addWishItem: builder.mutation({
      query: (addWishItem) => ({
        url: "/api/mod/user/wishList",
        method: "PATCH",
        body: addWishItem,
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTahs: ["wishList"],
    }),
    deleteWishItem: builder.mutation({
      query: (deleteWishItem) => ({
        url: "/api/delete/user/wishItem",
        method: "DELETE",
        body: deleteWishItem,
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTahs: ["wishList"],
    }),
  }),
});

export const { useGetWishListQuery, useAddWishItemMutation } = userApi;
