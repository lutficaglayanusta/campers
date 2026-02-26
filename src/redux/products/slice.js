import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchFilteredProducts, fetchOneProduct } from "./operations";

const productSlice = createSlice({
  name: "Products",
  initialState: {
    items: [],
    oneItem: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });

    builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
      state.oneItem = action.payload;
    });
    builder.addCase(fetchFilteredProducts.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
  },
});

const productReducer = productSlice.reducer;

export default productReducer;
