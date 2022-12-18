import { Loading } from "@nextui-org/react"

const Loader = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "grid", placeContent: "center" }}>
      <Loading color='primary' size='xl' />
    </div>
  )
}
export default Loader
