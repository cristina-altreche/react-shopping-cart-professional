import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

// TO CREATE MODAL STEPS
// 1.import modal
//2. create state inside construtor
//3. add onClick to image tag
//4. create two event handlers one to open and one to close.
//5. destructure the product after render but before return
//6. use conditional logic at the bottom to create modal.
//7. import effect "zoom"

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is for the MODAL state. Notice onClick on image and the two event handlers below.
      product: null,
    };
  }

  //MODAL EVENT HANDLERS
  openModal = (product) => {
    //fills the value of state with the selected product when user clicks on the product it should set to the state of the component.
    this.setState({ product });
  };

  closeModal = () => {
    //reverse the state to null
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="products">
            {this.props.products.map((product) => (
              // Use li because it will create links for images and title
              <li key={product._id}>
                <div className="product">
                  {/* For the MODAL onClick was added here to image tag */}
                  <a
                    href={"#" + product._id}
                    onClick={() => this.openModal(product)}
                  >
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {/* Create Modal HERE using conditional rendering */}
        {/* if modal exists then you can show the modal component */}
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={product.image} alt={product.title} />
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                  <p>
                    Available Sizes:{" "}
                    {product.availableSizes.map((x) => (
                      <span>
                        {" "}
                        <button className="button">{x}</button>
                      </span>
                    ))}
                  </p>
                  <div className="product-price">
                    <div>
                      {formatCurrency(product.price)}
                    </div>
                    <button className="button primary" onClick={() => {
                      this.props.addToCart(product)
                      this.closeModal()
                    }}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
