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
        url: `product/product/${productId}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productApi;
