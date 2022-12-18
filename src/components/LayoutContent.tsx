import { Container } from "@nextui-org/react"
import { PropsWithChildren } from "react"

const LayoutContent = ({ children }: PropsWithChildren) => {
  return <Container css={{ minHeight: "80vh" }}>{children}</Container>
}
export default LayoutContent
