import { ProductI } from "@/types"
import { currencyFormatter } from "@/utilities"
import { Card, Col, Text, Badge, Row, Modal, Image } from "@nextui-org/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }: { product: ProductI }) => {
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
    console.log("closed")
  }
  return (
    <>
      <Card
        isHoverable
        isPressable
        variant='flat'
        css={{
          minW: 360,
          maxW: 360,
          opacity: 0.9,
          transition: 100,
          "&:hover": {
            opacity: 1,
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
          },
        }}
        onPress={handler}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
              <Badge size='xs' disableOutline color='primary'>
                {"fuits"}
              </Badge>
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image src={product.image} objectFit='cover' width='100%' height={140} alt={product.title} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start", bg: "$gray900" }}>
          <Row wrap='wrap' justify='space-between' align='center'>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }} b>
              {product.title}
            </Text>
            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
              {currencyFormatter(product.price)}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
      <Modal noPadding open={visible} onClose={closeHandler}>
        <Modal.Header css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}>
          <Text color='#363449'></Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src='https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
export default ProductCard
