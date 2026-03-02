import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    initializeFavorites: (state) => {
      const saved = localStorage.getItem("favorites");
      if (saved) {
        state.items = JSON.parse(saved);
      }
    },
  },
});

export const { addFavorite, removeFavorite, initializeFavorites } =
  favoritesSlice.actions;

const favoritesReducer = favoritesSlice.reducer;

export default favoritesReducer;
