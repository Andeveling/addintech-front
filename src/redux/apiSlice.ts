import { RootState } from "@/redux"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers
  },
})
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({}),
})
