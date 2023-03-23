import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
// import counterSlice from "../features/counterSlice";
import logger from "redux-logger";
import productSlice from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    cart: cartSlice,
    filter: filterSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
