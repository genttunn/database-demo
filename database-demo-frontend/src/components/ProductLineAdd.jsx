import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductLine } from '../actions/productLine';

import ProductLineAddForm from './ProductLineAddForm';

class ProductLineAdd extends Component {
    addProductLine = (newPL) => {
        const productLine = newPL;

        this.props.addProductLineLocal(productLine);
    };
    render() { 
        return ( 
            <ProductLineAddForm addProductLine={this.addProductLine} />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addProductLineLocal: (productLine) => {
        dispatch(addProductLine(productLine));
    },
});
 
export default connect(null,mapDispatchToProps)(ProductLineAdd);