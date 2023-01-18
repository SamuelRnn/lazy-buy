import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  endpoints: (builder) => ({
    getuserEmail: builder.query({
      query: () => `/api/get/user/email`,
    }),
    getuserName: builder.query({
      query: () => `/api/get/userName`,
    }),
    getprofilePictur: builder.query({
      query: () => `/api/get/profilePicture`,
    }),
  }),
  tagTypes: ["User"],
});

export const { useGetUserQuery } = userApi;
