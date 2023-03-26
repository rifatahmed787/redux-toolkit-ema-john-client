import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        url: "/product",
      }),
      providesTags: ["products"],
    }),
    getCategory: builder.query({
      query: () => "/category",
    }),
    getFeatured: builder.query({
      query: () => "/featured",
    }),
    postProduct: builder.mutation({
      query: (data) => ({
        url: "/postproduct",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/addtocart",
        method: "POST",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `deleteprod/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetCategoryQuery,
  useGetFeaturedQuery,
  usePostProductMutation,
  useDeleteProductMutation,
  useAddToCartMutation,
} = productApi;
