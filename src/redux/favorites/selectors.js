export const selectFavorites = (state) => state.favorites.items;

export const selectIsFavorite = (state, productId) =>
  state.favorites.items.includes(productId);
