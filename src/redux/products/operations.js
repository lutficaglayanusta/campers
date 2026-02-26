import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllProduct = createAsyncThunk(
  "products/fetchAllProduct",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/campers");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const fetchOneProduct = createAsyncThunk(
  "products/fetchOneProduct",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/campers/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async (filters, thunkAPI) => {
    let query = `/campers?location=${filters.location}&form=${filters.type}`;
    console.log(filters);
    if (filters.equipment.includes("AC")) {
      query += `&AC=true`;
    }
    if (filters.equipment.includes("Kitchen")) {
      query += `&kitchen=true`;
    }
    if(filters.equipment.includes("TV")) {
      query += `&TV=true`;
    }
    if(filters.equipment.includes("Bathroom")) {
      query += `&bathroom=true`;
    }
    if(filters.equipment.includes("automatic")) {
      query += `&transmission=automatic`;
    }
    
    console.log(query);

    try {
      const res = await axios.get(query);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
