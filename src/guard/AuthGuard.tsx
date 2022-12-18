import { useAuth } from "@/hooks"
import { Navigate, Outlet } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "@/routes"

interface Props {
  privateValidation: boolean
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.ADMIN} />

export const AuthGuard = ({ privateValidation }: Props) => {
  const auth = useAuth()
  return auth.email ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  )
}

export default AuthGuard
