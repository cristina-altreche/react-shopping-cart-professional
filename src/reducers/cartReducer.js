import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },//if there is no value use empty array as a string and because of JSON.parse it will convert to real empty array.
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartItems: action.payload.cartItems,
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: action.payload.cartItems,
      };
    default:
      return state;
  }
};
