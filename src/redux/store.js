import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/slice";
import favoritesReducer from "./favorites/slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    favorites: favoritesReducer,
  },
});
