import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  //REFACTORED STATE TO REDUX NO LONGER NEED CONSTRUCTOR
  // constructor() {
  //   super();
  //   this.state = {
  //     // products: data.products,
  //     //JSON.parse is opposite of JSON.strigify. It turns it back to JS object. Normally you will use an empty array here but since you need persistent data on refresh you have to retrieve it from localStorage as shown here.
  //     //Terniary - If cartItem exist then use localStorage, ELSE use empty array.
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //     //moved to redux store
  //     // size: "",
  //     // sort: "",
  //   };
  // }

  //REDUX REFACTORED NOW SHOWN IN ACTIONS
  // createOrder = (order) => {
  //   alert("Need to save order for " + order.name);
  // };

  //REDUX REFACTORED NOW SHOWN IN ACTIONS
  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   this.setState({
  //     cartItems: cartItems.filter((x) => x._id !== product._id),
  //   });
  //   //allows presistent on page refresh
  //   localStorage.setItem(
  //     "cartItems",
  //     JSON.stringify(cartItems.filter((x) => x._id !== product._id))
  //   );
  // };

  //REDUX REFACTORED NOW SHOWN IN ACTIONS
  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;

  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  //   // To keep data persistent on refresh of the page use "localStorage" setItem(key, value) ---- cartItem is a JS function so it needs to be converted to string with JSON.stringify as shown below. You will also do this to removeItem
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  //REDUX REFACTORED NOW SHOWN IN ACTIONS
  // sortProducts = (event) => {
  //   const sort = event.target.value;
  //   //implement
  //   console.log(event.target.value);
  //   this.setState((state) => ({
  //     sort: sort,
  //     products: this.state.products
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "lowest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : sort === "highest"
  //           ? a.price < b.price
  //             ? 1
  //             : -1
  //           : a._id < b._id
  //           ? 1
  //           : -1
  //       ),
  //   }));
  // };

  //REDUX REFACTORED NOW SHOWN IN ACTIONS
  //by changing to arrow function you can have access to "this.setState"
  // filterProducts = (event) => {
  //   console.log(event.target.value);
  //   if (event.target.value === "") {
  //     this.setState({ size: event.target.value, products: data.products });
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: data.products.filter(
  //         (product) => product.availableSizes.indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  // };

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter
                //REFACTORED NOW BEING USED FROM STORE
                // count={this.state.products.length}
                // size={this.state.size}
                // sort={this.state.sort}
                // filterProducts={this.filterProducts}
                // sortProducts={this.sortProducts}
                ></Filter>
                <Products
                //REFACTORED NOW COMING FROM STORE
                // products={this.state.products}
                // addToCart={this.addToCart}
                />
              </div>
              <div className="sidebar">
                <Cart
                //REFACTORED NOW BEING USED FROM STORE
                // cartItems={this.state.cartItems}
                // removeFromCart={this.removeFromCart}
                // createOrder={this.createOrder}
                />
              </div>
            </div>
          </main>
          <footer>All rights reserved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
