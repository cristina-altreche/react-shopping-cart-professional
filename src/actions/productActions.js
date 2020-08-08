import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "../types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: { //this returns the filtered data
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts , sort) => (dispatch) => {
  //Line below this allows a copy of the filteredProducts that you can sort
  const sortedProducts = filteredProducts.slice();
  console.log(sortedProducts)
  //to sort products check sort itself
  if (sort === "latest") {
      //if it is latest sort by id
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
      //if not sort by price
    sortedProducts.sort((a, b) =>
      //if sort is checked lowest price
      sort === "lowest"
        ? a.price > b.price // this sorts based on lowest to highest
          ? 1
          : -1
        : a.price > b.price //this sorts based on highest to lowest
        ? -1
        : 1
    );
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,// this returns the sorted data
    },
  });
};
