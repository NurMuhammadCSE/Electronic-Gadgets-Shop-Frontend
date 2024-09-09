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
    // creteOrder: builder.mutation({
    //   query: (data) => {
    //     return {
    //       method: "POST",
    //       url: `/order/create`,
    //       body: data,
    //     };
    //   },
    // }),
  }),
});

export const { useGetProductsQuery } = productApi;
