import React, { Component } from "react";

import ProductLineAdd from '../../components/ProductLineAdd';
import ProductAdd from "../../components/ProductAdd";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Admin Home</h2>
        <br/>
        <h3>Add new Product Line</h3>
        <ProductLineAdd />
        <h3>Add new Product</h3>
        <ProductAdd />
      </div>
    );
  }
}

export default Home;
