import { useAuth } from "@/hooks"
import { useUpdateProductMutation } from "@/redux"
import { CreateProductI, ProductI } from "@/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Col, Grid, Input, Modal, Text, Textarea, Tooltip } from "@nextui-org/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { EditIcon } from "./Icons/EditIcon"
import { IconButton } from "./Icons/IconButton"
import { UpdateProductSchema } from "./ProductSchema"

const EditProductsForm = ({ product }: { product: ProductI }) => {
  const user = useAuth()
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => setVisible(false)
  const [updateProduct] = useUpdateProductMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Partial<CreateProductI>>({
    resolver: yupResolver(UpdateProductSchema),
  })
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData()
    data.title && formData.append("title", data.title)
    data.price && formData.append("price", data.price.toString())
    data.description && formData.append("description", data.description)
    if (data.image) {
      for (let filo of data.image) {
        formData.append("image", filo)
      }
    }

    updateProduct({ _id: product._id, product: Object.fromEntries(formData) })
      .unwrap()
      .then((res) => console.log(res))
      .then(() => reset())
      .then(() => closeHandler())
  })

  return (
    <>
      <Col id={product._id + "edit-modal"} css={{ d: "flex" }}>
        <Tooltip content='Edit Product'>
          <IconButton onClick={handler}>
            <EditIcon size={20} fill='#979797' />
          </IconButton>
        </Tooltip>
      </Col>
      <Modal
        id={product._id + "editmodal"}
        closeButton
        open={visible}
        blur
        onClose={closeHandler}
        as='form'
        onSubmit={onSubmit}>
        <Modal.Header>
          <Text id='modal-title-edit' size={18}>
            <Text b size={18}>
              Edit Product
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={2}>
            <Grid xs={12}>
              <Input
                id='title-edit'
                aria-label='title-edit'
                type='text'
                bordered
                fullWidth
                color='primary'
                size='lg'
                label='Title'
                placeholder={product.title}
                helperColor='error'
                helperText={errors.title?.message}
                {...register("title")}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                id='price-edit'
                clearable
                bordered
                type='number'
                fullWidth
                color='primary'
                size='lg'
                label='Price'
                placeholder={product.price.toString()}
                helperColor='error'
                min={0}
                helperText={errors.price?.message}
                {...register("price")}
              />
            </Grid>
            <Grid xs={12}>
              <Textarea
                id='description-edit'
                fullWidth
                bordered
                color='primary'
                size='lg'
                placeholder={product.description.toString()}
                label='Description'
                helperColor='error'
                helperText={errors.description?.message}
                {...register("description")}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                id='image-edit'
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
          <Button auto color='primary' type='submit'>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default EditProductsForm
