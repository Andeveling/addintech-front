import ProductsContext from "@/context/ProductsContext"
import { currencyFormatter } from "@/utilities"
import { Card, Col, Row, Tooltip, Text } from "@nextui-org/react"
import { useContext } from "react"
import DeleteProduct from "./DeleteProduct"
import EditProductsForm from "./EditProductForm"
import { EyeIcon } from "./Icons/EyeIcon"
import { IconButton } from "./Icons/IconButton"

const TableProducts = () => {
  const { products } = useContext(ProductsContext)
  return (
    <>
      <Card css={{ p: 2, mt: 10, pl: 10 }}>
        <table aria-label='table-products' style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th style={{ maxWidth: 80, textAlign: "right" }}>Price</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {products &&
              products?.map((product, index) => {
                return (
                  <tr key={product._id}>
                    <td>{product.title}</td>
                    <td style={{ textAlign: "right", paddingRight: 10 }}>{currencyFormatter(product.price)}</td>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <Row justify='center' align='center' css={{ maxWidth: 80 }}>
                        <Col css={{ d: "flex" }}>
                          <Tooltip content='Details'>
                            <IconButton onClick={() => console.log("View user", product._id)}>
                              <EyeIcon size={20} fill='#979797' />
                            </IconButton>
                          </Tooltip>
                        </Col>
                        <EditProductsForm product={product} />
                        <DeleteProduct id={product._id} />
                      </Row>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </Card>
    </>
  )
}
export default TableProducts
