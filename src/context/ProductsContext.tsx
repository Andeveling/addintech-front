import { useGetAllProductQuery } from "@/redux"
import { ProductI } from "@/types"
import { createContext, PropsWithChildren, useEffect, useState } from "react"

interface ProductsContextI {
  products: ProductI[]
}

const ProductsContext = createContext<ProductsContextI>({
  products: [],
})

export const ProductsProvider = ({ children }: PropsWithChildren) => {
  const { data, isSuccess } = useGetAllProductQuery()
  const [products, setProducts] = useState<ProductI[]>([])

  useEffect(() => {
    if (data && isSuccess) setProducts(data)
  }, [data])

  const values = {
    products,
  }
  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}

export default ProductsContext
