import React, { Component } from 'react';

class ProductLineAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    inputChanged = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    resetInputBox = () => {
        this.setState({
            name: ''
        })
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const newProductLine = this.state;
        this.resetInputBox();
        this.props.addProductLine(newProductLine);
      };

    render() {
        return (
            <form>
                Name:{" "}
                <input
                    id="name"
                    type="text"
                    onChange={this.inputChanged}
                    value={this.state.name}
                    placeholder="required"
                    required={true}
                />
                <br />

                <button type="button" onClick={this.handleSubmit}>
                    ADD NEW PRODUCT LINE
                </button>
            </form>
        );
    }
}

export default ProductLineAddForm;