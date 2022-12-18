import { Route, Routes } from "react-router-dom"
import { PropsWithChildren } from "react"

function RoutesWithNotFound({ children }: PropsWithChildren) {
  return (
    <Routes>
      {children}
      <Route path='*' element={<>Not Found</>} />
    </Routes>
  )
}
export default RoutesWithNotFound
