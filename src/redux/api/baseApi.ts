import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://electronic-gadgets-shop-backend.vercel.app/api",
    baseUrl: "https://electronic-gadgets-shop-backend.vercel.app/api",
  }),
  tagTypes: ["Products", "Reviews", "Orders"],
  endpoints: () => ({}),
});
