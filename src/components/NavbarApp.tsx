import { useAppDispatch, useAuth } from "@/hooks"
import { resetCredentials } from "@/redux/authSlice"
import { PrivateRoutes, PublicRoutes } from "@/routes"
import { Button, Navbar, Text } from "@nextui-org/react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Layout } from "./Layout"

const NavbarApp = () => {
  const user = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const logout = () => {
    dispatch(resetCredentials())
    navigate(PublicRoutes.HOME)
  }

  return (
    <Layout>
      <Navbar variant='sticky'>
        <Navbar.Brand>
          <Navbar.Toggle aria-label='toggle navigation' showIn='xs' />
          <Text
            b
            color='inherit'
            size='$3xl'
            weight='extrabold'
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              ml: 20,
            }}>
            AddInTech Fruits
          </Text>
        </Navbar.Brand>

        <Navbar.Content enableCursorHighlight hideIn='xs' variant='default'>
          <Navbar.Item activeColor='primary' isActive={location.pathname === PublicRoutes.HOME}>
            <Link to={PublicRoutes.HOME}>Home</Link>
          </Navbar.Item>
          {user.auth ? (
            <>
              <Navbar.Item activeColor='primary' isActive={location.pathname === PrivateRoutes.ADMIN}>
                <Link to={PrivateRoutes.ADMIN}>Admin</Link>
              </Navbar.Item>

              <Button size='sm' color='error' auto flat onPress={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Navbar.Item activeColor='primary' isActive={location.pathname === PublicRoutes.LOGIN}>
                <Link to={PublicRoutes.LOGIN}>Login</Link>
              </Navbar.Item>
              <Navbar.Item activeColor='primary' isActive={location.pathname === PublicRoutes.REGISTER}>
                <Link to={PublicRoutes.REGISTER}>Register</Link>
              </Navbar.Item>
            </>
          )}
        </Navbar.Content>

        <Navbar.Collapse>
          <Navbar.CollapseItem activeColor='primary' isActive={location.pathname === PublicRoutes.HOME}>
            <Link to={PublicRoutes.HOME}>Home</Link>
          </Navbar.CollapseItem>
          {user.auth ? (
            <>
              <Navbar.CollapseItem activeColor='primary' isActive={location.pathname === PrivateRoutes.ADMIN}>
                <Link to={PrivateRoutes.ADMIN}>Admin</Link>
              </Navbar.CollapseItem>
              <Button size='sm' color='error' auto flat onPress={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Navbar.CollapseItem activeColor='primary' isActive={location.pathname === PublicRoutes.LOGIN}>
                <Link to={PublicRoutes.LOGIN}>Login</Link>
              </Navbar.CollapseItem>
              <Navbar.CollapseItem activeColor='primary' isActive={location.pathname === PublicRoutes.REGISTER}>
                <Link to={PublicRoutes.REGISTER}>Register</Link>
              </Navbar.CollapseItem>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  )
}
export default NavbarApp
