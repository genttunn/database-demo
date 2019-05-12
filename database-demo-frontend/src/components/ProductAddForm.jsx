import React, { Component } from "react";
import { Button } from "react-bootstrap";
class ProductAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: {
        productLineId: 0,
        name: "",
        description: "",
        quantity: 0,
        unit: "",
        price: 0
      }
    };
  }

  inputFieldValueChanged = event => {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [event.target.id]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const productToGo = this.state.newProduct;
    console.log(productToGo);
    this.props.addProduct(productToGo);
  };

  render() {
    return (
      <form>
        Product Line:
        <select id="productLineId" onChange={this.inputFieldValueChanged}>
          {this.props.productLines.map(item => (
            <option key={item.id} value={item.id}>
              {" "}
              {item.name}{" "}
            </option>
          ))}
        </select>
        <br />
        Name:{" "}
        <input
          id="name"
          type="text"
          onChange={this.inputFieldValueChanged}
          value={this.state.newProduct.name}
          placeholder="required"
          required={true}
        />
        <br />
        Description:{" "}
        <input
          id="description"
          type="text"
          value={this.state.newProduct.description}
          onChange={this.inputFieldValueChanged}
          margin="normal"
          placeholder="required"
          required={true}
        />
        <br />
        Quantity:{" "}
        <input
          id="quantity"
          type="number"
          value={this.state.newProduct.quantity}
          onChange={this.inputFieldValueChanged}
          margin="normal"
          required={true}
        />
        <br />
        Unit:{" "}
        <input
          id="unit"
          type="text"
          value={this.state.newProduct.unit}
          onChange={this.inputFieldValueChanged}
          margin="normal"
          required={true}
        />
        <br />
        Price:{" "}
        <input
          id="price"
          type="number"
          value={this.state.newProduct.price}
          onChange={this.inputFieldValueChanged}
          margin="normal"
          required={true}
        />
        <br />
        <Button
          type="button"
          className="btn btn-success mt-4"
          onClick={this.handleSubmit}
        >
          ADD NEW PRODUCT
        </Button>
      </form>
    );
  }
}

export default ProductAddForm;
