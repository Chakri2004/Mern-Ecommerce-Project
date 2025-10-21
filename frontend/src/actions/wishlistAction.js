export const addToWishlist = (item) => (dispatch, getState) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: item,
  });

  localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};

export const removeFromWishlist = (id) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  });

  localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};
