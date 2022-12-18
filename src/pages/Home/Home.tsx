import LayoutContent from "@/components/LayoutContent"
import ProductsContext from "@/context/ProductsContext"
import { Container, Grid, Spacer, Text } from "@nextui-org/react"
import { useContext } from "react"
import ProductList from "./components/ProductList"

const Home = () => {
  return (
    <LayoutContent>
      <Spacer />
      <Container>
        <Text b size='$lg' css={{ marginBottom: 10 }}>
          Our products
        </Text>
        <Spacer />
        <ProductList />
      </Container>
    </LayoutContent>
  )
}
export default Home
