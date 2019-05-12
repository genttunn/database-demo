import React, { Component } from "react";
import { Button } from "react-bootstrap";
class ProductAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: {
        productLineId: 0,
	      name: '',
        description: '',
        quantity: 0,
        unit: '',	/* kg, kpl, pkt */
        price: 0
      }
    }
  }

  inputChanged = event => {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [event.target.id]: event.target.value
      }
    });
  };

  resetInputBox = () => {
    this.setState({
      newProduct: {
        productLineId: 0,
	      name: '',
        description: '',
        quantity: 0,
        unit: '',	/* kg, kpl, pkt */
        price: 0
      }
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    const newProduct = this.state.newProduct;
    this.resetInputBox();
    this.props.addProduct(newProduct);
  };

  render() {
    return (
      <form>
        Product Line: {" "}
          <select id="productLineId" onChange={this.inputChanged}>
            <option key={0} value={0}>...</option>
            {
              this.props.productLines.map((item) =>
                <option key={item.id} value={item.id}> {item.name} </option>
              )
            }
        </select>
        <br />
        Name:{" "}
        <input
          id="name"
          type="text"
          onChange={this.inputChanged}
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
          onChange={this.inputChanged}
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
<<<<<<< HEAD
          onChange={this.inputFieldValueChanged}
          margin="normal"
=======
          onChange={this.inputChanged}
          margin="normal"
          placeholder="required"
>>>>>>> 1b84d845c6338cbf17504aa0243fee4cbedef256
          required={true}
        />
        <br />
        Unit:{" "}
        <input
          id="unit"
          type="text"
          value={this.state.newProduct.unit}
<<<<<<< HEAD
          onChange={this.inputFieldValueChanged}
          margin="normal"
=======
          onChange={this.inputChanged}
          margin="normal"
          placeholder="required"
>>>>>>> 1b84d845c6338cbf17504aa0243fee4cbedef256
          required={true}
        />
        <br />
        Price:{" "}
        <input
          id="price"
          type="number"
          value={this.state.newProduct.price}
<<<<<<< HEAD
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
=======
          onChange={this.inputChanged}
          margin="normal"
          placeholder="required"
          required={true}
        />
        <br />

        <button type="button" onClick={this.handleSubmit}>
          ADD NEW PRODUCT
        </button>
>>>>>>> 1b84d845c6338cbf17504aa0243fee4cbedef256
      </form>
    );
  }
}

export default ProductAddForm;
