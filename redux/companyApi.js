import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery("http://localhost:3000"),
  endpoints: (builder) => ({
    getCompany: builder.query({
      query: (email) => `/api/get/company/${email}`,
    }),
  }),
});

export const { useGetCompanyQuery } = companyApi;
