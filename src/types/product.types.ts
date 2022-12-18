export interface ProductI {
  _id: string
  title: string
  price: number
  description: string
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateProductI extends Omit<ProductI, "_id" | "createdAt" | "updatedAt" | "image"> {
  image: FileList
}

export interface UpdateProductI extends Pick<ProductI, "_id"> {
  product: FormData
}

export interface MutationProductResponseI {
  code: number
  message: string
  product: ProductI
}

export interface DeleteProductResponseI extends Omit<MutationProductResponseI, "product"> {}
