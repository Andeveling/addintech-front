import Footer from "@/components/Footer"
import { Home } from "@/pages/Home"
import { PrivateRoutes, PublicRoutes } from "@/routes"
import { NextUIProvider, globalCss } from "@nextui-org/react"
import { lazy, Suspense } from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import NavbarApp from "./components/NavbarApp"
import { AuthGuard } from "./guard"
import { store } from "./redux"
import { addInTechTheme } from "./theme/theme"
import { RoutesWithNoFound } from "./utilities"
import Loader from "./components/Loader"

const globalStyles = globalCss({
  "&a:hover": {
    textDecoration: "none",
  },
  a: {
    textDecoration: "none",
  },
})

const Login = lazy(() => import("./pages/Login/Login"))
const Register = lazy(() => import("./pages/Register/Register"))
const Private = lazy(() => import("./pages/Private/Private"))

function App() {
  globalStyles()
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <NextUIProvider theme={addInTechTheme}>
            <NavbarApp />
            <RoutesWithNoFound>
              <Route path={PublicRoutes.HOME} element={<Home />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={PrivateRoutes.ADMIN} element={<Private />} />
              </Route>
            </RoutesWithNoFound>
            <Footer />
          </NextUIProvider>
        </Provider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
