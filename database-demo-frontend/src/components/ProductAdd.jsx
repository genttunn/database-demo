import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLine, addProduct } from '../actions/productLine';

import ProductAddForm from './ProductAddForm';


class ProductAdd extends Component {
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
});

const mapDispatchToProps = dispatch => ({
    addProductLocal: (product) => {
        dispatch(addProduct(product));
    },
    productLineFetchAll: () => {
        dispatch(fetchLine());
    },
});
 
export default connect(mapStateToProps,mapDispatchToProps)(ProductAdd);