import React, { Component } from "react";
import ProductLineAdd from "../../components/ProductLineAdd";
import ProductAdd from "../../components/ProductAdd";
import { connect } from "react-redux";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.admin ? (
          <span>
            {" "}
            <h2>Admin Home</h2>
            <br />
            <h3>Add new Product Line</h3>
            <ProductLineAdd />
            <h3>Add new Product</h3>
            <ProductAdd />
          </span>
        ) : (
          <h2>Welcome to DemoShop!</h2>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  admin: state.login.admin
});
export default connect(
  mapStateToProps,
  null
)(Home);
