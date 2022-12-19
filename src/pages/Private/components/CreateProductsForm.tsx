import { CreateProductI } from "@/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Grid, Input, Loading, Modal, Spacer, Text, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { CreateProductSchema } from "./ProductSchema"
import { useCreateProductMutation } from "@/redux"
import { useAuth } from "@/hooks"

const CreateProductsForm = () => {
  const user = useAuth()
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => setVisible(false)
  const [createProduct, { data, isLoading }] = useCreateProductMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProductI>({
    resolver: yupResolver(CreateProductSchema),
  })
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("price", data.price.toString())
    formData.append("description", data.description)
    if (data.image) {
      for (let filo of data.image) {
        formData.append("image", filo)
      }
      createProduct(formData)
        .unwrap()
        .then(() => reset())
        .then(() => closeHandler())
    }
  })

  return (
    <>
      <Button auto shadow onPress={handler}>
        <Text color='$white' b>
          + Add Product
        </Text>
      </Button>
      <Spacer />
      <Modal closeButton open={visible} onClose={closeHandler} blur as='form' onSubmit={onSubmit}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            <Text b size={18}>
              Create a Product
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Input
                clearable
                bordered
                fullWidth
                color='primary'
                size='lg'
                label='Title'
                placeholder='Title Product'
                helperColor='error'
                helperText={errors.title?.message}
                {...register("title")}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                clearable
                bordered
                type='number'
                fullWidth
                color='primary'
                size='lg'
                label='Price'
                placeholder='Price'
                helperColor='error'
                min={0}
                helperText={errors.price?.message}
                {...register("price")}
              />
            </Grid>
            <Grid xs={12}>
              <Textarea
                fullWidth
                bordered
                color='primary'
                size='lg'
                placeholder='Description'
                label='Description'
                helperColor='error'
                helperText={errors.description?.message}
                {...register("description")}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                type='file'
                label='Image'
                size='xl'
                bordered
                css={{ display: "grid", alignItems: "center" }}
                helperColor='error'
                helperText={errors.image?.message}
                {...register("image")}
              />
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer justify='space-between'>
          <Button auto flat color='error' onPress={closeHandler}>
            Close
          </Button>
          <Button auto color='primary' type='submit' disabled={isLoading}>
            {isLoading ? <Loading /> : <span>Create</span>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default CreateProductsForm
