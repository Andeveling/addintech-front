import * as yup from "yup"

export const CreateProductSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().positive().required().typeError("required Number"),
  image: yup
    .mixed()
    .test("fileSize", "The file is too large", (value) => {
      if (!value.length) return true // attachment is optional
      return value[0].size <= 200000
    })
    .required(),
})

export const UpdateProductSchema = yup.object().shape({
  title: yup.string().nullable(),
  description: yup.string().nullable(),
  price: yup.number().positive().nullable().typeError("required Number"),
  image: yup.mixed().test("fileSize", "The file is too large", (value) => {
    if (!value.length) return true // attachment is optional
    return value[0].size <= 200000
  }),
})
