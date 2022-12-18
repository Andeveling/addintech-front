import { useAuth } from "@/hooks"
import { useUpdateProductMutation } from "@/redux"
import { CreateProductI, ProductI } from "@/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Col, Grid, Input, Modal, Text, Textarea, Tooltip } from "@nextui-org/react"
import { ReactNode, useState } from "react"
import { useForm } from "react-hook-form"
import { EditIcon } from "./Icons/EditIcon"
import { IconButton } from "./Icons/IconButton"
import { UpdateProductSchema } from "./ProductSchema"
import EditProductForm from "./EditProductForm"

const EditProductModal = ({ product, form }: { product: ProductI; form: ReactNode }) => {
  const user = useAuth()
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => setVisible(false)
  const [updateProduct] = useUpdateProductMutation()
  return (
    <>
      <Col id={product._id + "edit-modal"} css={{ d: "flex" }}>
        <Tooltip content='Edit Product'>
          <IconButton onClick={handler}>
            <EditIcon size={20} fill='#979797' />
          </IconButton>
        </Tooltip>
      </Col>
      <Modal id={product._id + "editmodal"} closeButton open={visible} blur onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title-edit' size={18}>
            <Text b size={18}>
              Edit Product
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>{form}</Modal.Body>
      </Modal>
    </>
  )
}
export default EditProductModal
