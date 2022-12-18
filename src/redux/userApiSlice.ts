import { LoginRequestI, UserI, UserResponseI } from "@/types/"
import { apiSlice } from "./apiSlice"

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<UserResponseI, LoginRequestI>({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation<void, UserI>({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = userApiSlice
