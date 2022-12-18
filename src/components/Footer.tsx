import { Divider, Grid, Spacer, Text } from "@nextui-org/react"
import { Box } from "./Box"

export default function Footer() {
  return (
    <>
      <Spacer y={1} />
      <Divider y={1} />
      <Box style={{ background: "#111" }}>
        <Grid.Container justify='center' gap={2}>
          <Grid direction='column' xs={12} sm={6}>
            <Text h4 css={{ lineHeight: "$9xl", color: "$warningLightContrast" }}>
              Andres Parra
            </Text>
            <Text css={{ lineHeight: "$9xl", color: "$gray500" }}>Web Developer</Text>
          </Grid>
          <Grid justify='center' xs={12}>
            <Text css={{ color: "$warningLightContrast" }}>
              © 2022 | Coded with 🤍/⚡ using{" "}
              <Text b css={{ color: "$blue500" }}>
                &nbsp;Reactjs&nbsp;
              </Text>
              by Andeveling
            </Text>
          </Grid>
        </Grid.Container>
      </Box>
    </>
  )
}
