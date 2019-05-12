import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLine, addProduct } from "../actions/productLine";

import ProductAddForm from "./ProductAddForm";

class ProductAdd extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.productLineFetchAll();
  }

  addProduct = newP => {
    const product = newP;
    console.log(newP);
    this.props.addProductLocal(product);
  };

  render() {
    return (
      <div>
        <ProductAddForm
          productLines={this.props.productLines}
          addProduct={this.addProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // ideas: state.ideas,
  productLines: state.productLine.productLineList
=======
    componentDidMount() {
        this.props.productLineFetchAll();
    }

    addProduct = (newP) => {
        const product = newP;
        product.quantity = Number(product.quantity);
        product.price = Number(product.price);
        console.log(product);
        this.props.addProductLocal(product);
    };

    render() { 
        return ( 
            <div>
                <ProductAddForm productLines={this.props.productLines} addProduct={this.addProduct} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    productLines: state.productLine.productLineList,
>>>>>>> 1b84d845c6338cbf17504aa0243fee4cbedef256
});

const mapDispatchToProps = dispatch => ({
  addProductLocal: product => {
    dispatch(addProduct(product));
  },
  productLineFetchAll: () => {
    dispatch(fetchLine());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductAdd);
