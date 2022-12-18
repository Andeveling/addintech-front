import { Mail, Password } from "@/components"
import LayoutContent from "@/components/LayoutContent"
import { useAuth } from "@/hooks"
import { useAppDispatch } from "@/hooks/useAppDispatch"
import { setCredentials } from "@/redux/authSlice"
import { useLoginMutation } from "@/redux/userApiSlice"
import { PrivateRoutes } from "@/routes"
import { LoginRequestI } from "@/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Container, Grid, Input, Loading, Spacer, Text } from "@nextui-org/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { LoginSchema } from "./LoginSchema"

const Login = () => {
  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const user = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestI>({
    resolver: yupResolver(LoginSchema),
  })
  const onSubmit = handleSubmit((data) => {
    login(data)
      .unwrap()
      .then((res) => dispatch(setCredentials(res)))
      .then(() => navigate(PrivateRoutes.ADMIN))
  })

  useEffect(() => {
    if (user.auth) navigate(PrivateRoutes.ADMIN)
  }, [])

  return user.auth ? null : (
    <LayoutContent>
      <Spacer />
      <Container justify='center' css={{ maxW: 600, textAlign: "center" }} as={"form"} onSubmit={onSubmit}>
        <Text id='modal-title' size={18}>
          Welcome to{" "}
          <Text b size={18}>
            AddInTech
          </Text>{" "}
          store
        </Text>
        <Spacer />
        <Grid.Container gap={4}>
          <Grid xs={12} justify='center'>
            <Input
              clearable
              underlined
              fullWidth
              labelPlaceholder='email'
              size='lg'
              helperColor='error'
              helperText={errors.email?.message}
              contentLeft={<Mail fill='currentColor' />}
              {...register("email")}
            />
          </Grid>
          <Grid xs={12} justify='center'>
            <Input.Password
              clearable
              underlined
              fullWidth
              labelPlaceholder='Password'
              size='lg'
              helperColor='error'
              helperText={errors.password?.message}
              contentLeft={<Password fill='currentColor' />}
              {...register("password")}
            />
          </Grid>

          <Grid xs={12} justify='center'>
            <Button color='primary' size='lg' type='submit' disabled={isLoading}>
              {isLoading ? <Loading /> : <span>Login</span>}
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </LayoutContent>
  )
}
export default Login
