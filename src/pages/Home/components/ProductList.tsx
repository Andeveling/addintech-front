import ProductsContext from "@/context/ProductsContext"
import { Grid } from "@nextui-org/react"
import { useContext } from "react"
import ProductCard from "./ProductCard"

const ProductList = () => {
  const { products } = useContext(ProductsContext)
  let content = null
  if (products)
    content = products.map((product) => {
      return (
        <Grid xs={12} sm={4} md={3} key={product._id} css={{ height: 200 }}>
          <ProductCard product={product} />
        </Grid>
      )
    })
  return (
    <Grid.Container gap={1} justify='center'>
      {content}
    </Grid.Container>
  )
}
export default ProductList
