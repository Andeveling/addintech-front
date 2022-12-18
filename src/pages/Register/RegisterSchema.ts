import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
  email: yup.string().email("Invalid mail").required(),
  password: yup.string().required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
})
