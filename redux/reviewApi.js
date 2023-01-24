import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (productId) => ({
        url: `/api/get/reviews/${productId}`,
      }),
      providesTags: ["products"],
    }),
    addReview: builder.mutation({
      query: (addReview) => ({
        url: "/api/create/review",
        method: "POST",
        body: addReview,
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["products"],
    }),
    eraseReview: builder.mutation({
      query: (eraseReview) => ({
        url: `/api/delete/review/${eraseReview}`,
        method: "DELETE",
        header: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["products"],
    }),
  }),
  tagTypes: ["products"],
});

export const {
  useGetReviewsQuery,
  useAddReviewMutation,
  useEraseReviewMutation,
} = reviewApi;
