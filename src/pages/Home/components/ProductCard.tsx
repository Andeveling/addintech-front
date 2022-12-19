import { ProductI } from "@/types"
import { currencyFormatter } from "@/utilities"
import { Badge, Button, Card, Col, Image, Modal, Row, Text } from "@nextui-org/react"
import { useState } from "react"
import { baseUrl, dev } from "@/redux"

const ProductCard = ({ product }: { product: ProductI }) => {
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => setVisible(false)

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
          <Card.Image
            src={baseUrl + "/" + product.image}
            objectFit='cover'
            width='100%'
            height={140}
            alt={product.title}
          />
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
      <Modal closeButton noPadding open={visible} onClose={closeHandler}>
        <Modal.Header
          css={{
            bg: "$accents9",
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            height: 60,
            zIndex: "$1",
            display: "flex",
            justifyContent: "space-between",
            pl: 10,
            pr: 10,
          }}>
          <Text
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            size='$3xl'
            weight='extrabold'>
            {product.title}
          </Text>
          <Button color='error' bordered rounded size='xs' auto onPress={closeHandler}>
            Close
          </Button>
        </Modal.Header>
        <Modal.Body css={{ width: "100%", p: 0 }}>
          <Image showSkeleton src={baseUrl + "/" + product.image} objectFit='cover' width='100%' height={440} />
        </Modal.Body>
        <Modal.Footer
          css={{
            bg: "$accents9",
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            minHeight: 60,
            zIndex: "$1",
            display: "flex",
            justifyContent: "space-between",
            pl: 10,
            pr: 10,
          }}>
          <Text size='xl' color='$white'>
            {product.description}
          </Text>
          <Text size='xl' color='$white'>
            {currencyFormatter(product.price)}
          </Text>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProductCard
