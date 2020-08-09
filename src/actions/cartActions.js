import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

///LOCALSTORAGE ONLY ACCEPTS STRING DATA

///////////ADD TO CART/////////////////

//current item and product adding to cart as params
export const addToCart = (product) => (dispatch, getState) => {
  //create clone of items
  const cartItems = getState().cart.cartItems.slice();
  //define the alreadyExist
  let alreadyExists = false;
  //search into cart items to make sure there is a product of this type inside the cart or not
  cartItems.forEach((x) => {
    //this means the product already exists in the cart then update the value of count
    if (x._id === product._id) {
      //alreadyExist gets set to true
      alreadyExists = true;
      x.count++;
    }
  });

  if (!alreadyExists) {
    //push all properties of product and add count as a number of items of product in the cart. At the very beginning we will add 1 item to the cart
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems }, //the cartItems itself
  });
  //update the localStorage based on the new cartItems itself.
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

//////////REMOVE FROM CART////////////

//accepts items and product we will remove as params
export const removeFromCart = (product) => (dispatch, getState) => {
  //make a copy of items and then use filter on each item. if current item._id doesn't equal to current product-_id then return true.
  const cartItems = getState()
  .cart.cartItems.slice().filter((x) => x._id !== product._id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
