import { createStore, applyMiddleware, compose, combineReducers } from "redux";
//thunk is used to handle async request actions
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducers";

const initialState = {};
//this line of code we are able to send all information about redux store to Chrome redux dev tools and monitor what happens.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ products: productsReducer }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

//THIS IS THE REDUX STORE - USE IT IN APP.js