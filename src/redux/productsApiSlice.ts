import { CreateProductI, DeleteProductResponseI, MutationProductResponseI, ProductI, UpdateProductI } from "@/types/"
import { apiSlice } from "./apiSlice"

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query<ProductI[], void>({
      query: () => ({
        url: "/store/products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProduct: builder.query<ProductI[], ProductI["_id"]>({
      query: (id) => ({
        url: `/store/products/${id}`,
        method: "GET",
      }),
    }),
    createProduct: builder.mutation<MutationProductResponseI, FormData>({
      query: (product) => ({
        url: "/store/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<MutationProductResponseI, any>({
      query: ({ _id, ...product }) => ({
        url: `/store/products/${_id}`,
        method: "PUT",
        body: product.data,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation<DeleteProductResponseI, ProductI["_id"]>({
      query: (id) => ({
        url: `/store/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
})

export const {
  useGetAllProductQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateProductMutation,
} = productsApiSlice
