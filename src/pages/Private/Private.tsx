import LayoutContent from "@/components/LayoutContent"
import { Container, Grid, Spacer } from "@nextui-org/react"
import ModalProducts from "./components/CreateProductsForm"
import TableProducts from "./components/TableProducts"

const Private = () => {
  return (
    <LayoutContent>
      <Spacer />
      <Container justify='center'>
        <Grid.Container>
          <Grid xs={12} justify='flex-end'>
            <ModalProducts />
          </Grid>
        </Grid.Container>
        <TableProducts />
      </Container>
    </LayoutContent>
  )
}
export default Private
