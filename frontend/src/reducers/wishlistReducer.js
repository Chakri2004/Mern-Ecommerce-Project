const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const item = action.payload;
      const existItem = state.wishlistItems.find((i) => i.id === item.id);

      if (existItem) {
        return {
          ...state,
          wishlistItems: state.wishlistItems.map((i) =>
            i.id === existItem.id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, item],
        };
      }

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter((i) => i.id !== action.payload),
      };

    default:
      return state;
  }
};
