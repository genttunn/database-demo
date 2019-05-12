import React, { Component } from 'react';

class ProductAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: {}
    }
  }
  render() {
    return (
      <form>
        Product Line:
                {/* <select id="productLineId" onChange={this.inputFieldValueChanged}>
          {
            this.props.productLines.map((item) =>
              <option key={item.id} value={item.id} > {item.name} </option>
            )

          }
        </select> */}
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
        Budget:{" "}
        <input
          id="budget"
          type="number"
          value={this.state.newProduct.budget}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        Ready For Comment:{" "}
        <input
          id="readyForComment"
          type="checkbox"
          value={this.state.newProduct.readyForComment}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />
        People Needed:{" "}
        <input
          id="peopleNeeded"
          type="number"
          value={this.state.newProduct.peopleNeeded}
          onChange={this.inputFieldValueChanged}
          margin="normal"
        />
        <br />

        <button type="button" onClick={this.handleSubmit}>
          ADD NEW IDEA
        </button>
      </form>
    );
  }
}

export default ProductAddForm;