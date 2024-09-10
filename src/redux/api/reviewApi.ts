import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: ({ orderData, productId }) => ({
        method: "POST",
        url: `/product/${productId}/review`,
        body: orderData,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getReviewsByProductId: builder.query({
      query: (productId) => ({
        method: "GET",
        url: `/product/${productId}/review`,
      }),
      providesTags: ["Reviews"],
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewsByProductIdQuery } =
  reviewApi;
