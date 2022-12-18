import { useDeleteProductMutation } from "@/redux"
import { ProductI } from "@/types"
import { Button, Col, Modal, Text, Tooltip } from "@nextui-org/react"
import { useState } from "react"
import { DeleteIcon } from "./Icons/DeleteIcon"
import { IconButton } from "./Icons/IconButton"

const DeleteProduct = ({ id }: { id: ProductI["_id"] }) => {
  const [deleteProduct] = useDeleteProductMutation()
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => setVisible(false)
  const deleteHandle = (id: ProductI["_id"]) => {
    deleteProduct(id)
  }
  return (
    <Col css={{ d: "flex" }}>
      <Tooltip content='Delete Product' color='error' onClick={handler}>
        <IconButton>
          <DeleteIcon size={20} fill='#FF0080' />
        </IconButton>
      </Tooltip>
      <Modal closeButton aria-labelledby='modal-title' open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Are you sure you want to delete it?
          </Text>
        </Modal.Header>
        <Modal.Footer css={{ display: "flex", justifyContent: "center" }}>
          <Button auto flat color='error' onPress={() => deleteHandle(id)}>
            Yes
          </Button>
          <Button auto onPress={closeHandler}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  )
}
export default DeleteProduct
