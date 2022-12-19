import { useGetAllProductQuery } from "@/redux"
import { Grid, Loading, Text } from "@nextui-org/react"
import ProductCard from "./ProductCard"

const ProductList = () => {
  const { data: products, isSuccess, isLoading, error } = useGetAllProductQuery()
  let content = null

  if (isLoading)
    content = (
      <Grid>
        <Loading />
      </Grid>
    )

  if (products && isSuccess)
    content = products.map((product) => {
      return (
        <Grid xs={12} sm={4} md={3} key={product._id} css={{ height: 200 }}>
          <ProductCard product={product} />
        </Grid>
      )
    })
  if (error)
    content = (
      <Grid>
        <Text>{JSON.stringify(error)}</Text>
      </Grid>
    )
  return (
    <Grid.Container gap={1} justify='center'>
      {content}
    </Grid.Container>
  )
}
export default ProductList
