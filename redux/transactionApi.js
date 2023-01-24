import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (pg) => `/api/get/transactions?page=${pg}`,
      providesTags: ["transactions"],
    }),
  }),
  tagTypes: ["transactions"],
});

export const { useGetTransactionsQuery } = transactionApi;
