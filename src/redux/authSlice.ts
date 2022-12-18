import type { UserResponseI } from "@/types"
import type { RootState } from "@/redux"
import { clearSessionStorage, persistSessionStorage } from "@/utilities/"
import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
  id: string | null
  username: string | null
  auth: boolean | null
  token: string | null
}

const EmptyAuthState: AuthState = {
  id: null,
  username: null,
  auth: null,
  token: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState: sessionStorage.getItem("auth") ? JSON.parse(sessionStorage.getItem("auth") as string) : EmptyAuthState,
  reducers: {
    setCredentials: (_state, action) => {
      persistSessionStorage<AuthState>(Key, action.payload)
      return action.payload
    },
    updateCredentials: (state, action) => {
      const result = { ...state, ...action.payload }
      persistSessionStorage<AuthState>(Key, result)
      return result
    },
    resetCredentials: () => {
      clearSessionStorage(Key)
      return EmptyAuthState
    },
  },
})

export const { setCredentials, updateCredentials, resetCredentials } = authSlice.actions
const Key = "auth"

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth
