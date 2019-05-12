import React, { Component } from "react";
import ProductDetails from "../../components/ProductDetails";

class Product extends Component {
  state = {};
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <ProductDetails lineToSearch={this.props.location.state} />
      </div>
    );
  }
}

export default Product;
