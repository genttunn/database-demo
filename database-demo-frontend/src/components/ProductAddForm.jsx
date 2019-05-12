import React, { Component } from 'react';

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
          onChange={this.inputChanged}
          margin="normal"
          placeholder="required"
          required={true}
        />
        <br />
        Unit:{" "}
        <input
          id="unit"
          type="text"
          value={this.state.newProduct.unit}
          onChange={this.inputChanged}
          margin="normal"
          placeholder="required"
          required={true}
        />
        <br />
        Price:{" "}
        <input
          id="price"
          type="number"
          value={this.state.newProduct.price}
          onChange={this.inputChanged}
          margin="normal"
          placeholder="required"
          required={true}
        />
        <br />

        <button type="button" onClick={this.handleSubmit}>
          ADD NEW PRODUCT
        </button>
      </form>
    );
  }
}

export default ProductAddForm;