import { RootState } from "@/redux"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dev = process.env.NODE_ENV !== "production"
export const baseUrl = dev ? "http://localhost:3001" : "https://addintechfruits.onrender.com"

const baseQuery = fetchBaseQuery({
  baseUrl,
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
