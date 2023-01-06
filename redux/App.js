import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const getApi = createApi({
    reducerPath: "getApi",
    baseQuery: fetchBaseQuery
})