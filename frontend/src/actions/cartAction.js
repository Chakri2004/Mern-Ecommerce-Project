import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

import auraItems from "../data/auraItems"; // ✅ use your local data

// helper: find product in all auraItems categories
const findProductById = (id) => {
  const categories = [
    "newfeatured",
    "mens",
    "womens",
    "kids",
    "shoes",
    "laptops",
  ];
  for (let cat of categories) {
    const product = auraItems[cat]?.find((item) => item._id === id);
    if (product) return product;
  }
  return null;
};

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const product = findProductById(id);

  if (!product) {
    console.error("Product not found:", id);
    return;
  }

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      stock: product.Stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
