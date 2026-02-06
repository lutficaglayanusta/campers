import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct } from "./operations";

const productSlice = createSlice({
  name: "Products",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

const productReducer = productSlice.reducer;

export default productReducer;
