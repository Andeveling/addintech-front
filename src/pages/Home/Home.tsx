import LayoutContent from "@/components/LayoutContent"
import { Container, Spacer, Text } from "@nextui-org/react"
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
