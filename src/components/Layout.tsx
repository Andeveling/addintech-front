import { Box } from "./Box.js"
import { PropsWithChildren } from "react"

export const Layout = ({ children }: PropsWithChildren) => (
  <Box
    css={{
      maxW: "100%",
    }}>
    {children}
  </Box>
)
