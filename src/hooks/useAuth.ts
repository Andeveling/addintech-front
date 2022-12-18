import { useMemo } from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "@/redux/authSlice"

export const useAuth = () => {
  const { id, email, token, auth } = useSelector(selectCurrentUser)
  return useMemo(() => ({ id, email, token, auth }), [id, email, token, auth])
}
