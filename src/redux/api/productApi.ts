import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product/products",
      }),
      providesTags: ["Products"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => ({
        method: "GET",
        url: `/product/product/${productId}`,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({productId, token}) => ({
        method: "DELETE",
        url: `/product/${productId}`,
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      }),
      invalidatesTags:['Products']
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useDeleteProductMutation } = productApi;
