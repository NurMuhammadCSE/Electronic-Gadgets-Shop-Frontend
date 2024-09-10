import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteOrder: builder.mutation({
      query: ({ order, token }) => {
        console.log(order, token);
        return {
          method: "POST",
          url: `/order/create`,
          body: order,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        };
      },
    }),
  }),
});

export const { useCreteOrderMutation } = productApi;
