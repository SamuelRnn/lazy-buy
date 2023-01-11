import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery(process.env.NEXT_PUBLIC_BASE_URL),
  endpoints: (builder) => ({}),
});

export const {} = companyApi;
