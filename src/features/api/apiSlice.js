import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://react-ema-john-pagination-server.vercel.app/",
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/product",
    }),
  }),
});

export const { useGetProductQuery } = productApi;
