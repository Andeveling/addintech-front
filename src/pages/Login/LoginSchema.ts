import * as yup from "yup"

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid mail").required(),
  password: yup.string().required(),
})
