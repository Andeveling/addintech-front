import LayoutContent from "@/components/LayoutContent"
import { Button, Checkbox, Text, Container, Grid, Row, Spacer, Table, Modal, Input } from "@nextui-org/react"
import { useContext, useState } from "react"
import TableProducts from "./components/TableProducts"
import ModalProducts from "./components/CreateProductsForm"

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
