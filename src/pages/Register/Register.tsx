import { Mail, Password } from "@/components"
import LayoutContent from "@/components/LayoutContent"
import { useAuth } from "@/hooks"
import { useRegisterMutation } from "@/redux/userApiSlice"
import { PrivateRoutes, PublicRoutes } from "@/routes"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Container, Grid, Input, Loading, Spacer, Text } from "@nextui-org/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { RegisterSchema } from "./RegisterSchema"

interface RegisterValues {
  email: string
  password: string
  passwordConfirm: string
}

const Register = () => {
  const navigate = useNavigate()
  const user = useAuth()
  const [registerUser, { isLoading }] = useRegisterMutation()

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(RegisterSchema),
  })
  const onSubmit = handleSubmit(({ email, password }) => {
    registerUser({ email, password }).then(() => navigate(PublicRoutes.LOGIN))
  })

  useEffect(() => {
    if (user.auth) navigate(PrivateRoutes.ADMIN)
  }, [])

  return user.auth ? null : (
    <LayoutContent>
      <Spacer />
      <Container justify='center' css={{ maxW: 600, textAlign: "center" }} as={"form"} onSubmit={onSubmit}>
        <Text id='modal-title' size={18}>
          Register in{" "}
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
              color={errors.email ? "error" : "default"}
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
              color={errors.password ? "error" : "default"}
              helperColor='error'
              helperText={errors.password?.message}
              contentLeft={<Password fill='currentColor' />}
              {...register("password")}
            />
          </Grid>
          <Grid xs={12} justify='center'>
            <Input.Password
              clearable
              underlined
              fullWidth
              labelPlaceholder='Confirm Password'
              size='lg'
              color={errors.passwordConfirm ? "error" : "default"}
              helperColor='error'
              helperText={errors.passwordConfirm?.message}
              contentLeft={<Password fill='currentColor' />}
              {...register("passwordConfirm")}
            />
          </Grid>
          <Grid xs={12} justify='center'>
            <Button type='submit' color='primary' size='lg' disabled={isLoading}>
              {isLoading ? <Loading /> : <span>Register</span>}
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </LayoutContent>
  )
}
export default Register
