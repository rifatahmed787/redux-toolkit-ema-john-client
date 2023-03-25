import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
// import counterSlice from "../features/counterSlice";
import logger from "redux-logger";
// import productSlice from "../features/products/productSlice";
import { productApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice,
    filter: filterSlice,
    // products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, productApi.middleware),
});
