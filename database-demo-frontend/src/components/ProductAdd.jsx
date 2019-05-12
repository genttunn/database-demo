import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLine, addProduct } from '../actions/productLine';

import ProductAddForm from './ProductAddForm';


class ProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        this.props.productLineFetchAll();
    }

    addProduct = (newP) => {
        const product = newP;

        this.props.addProductLocal(product);
    };

    render() { 
        return ( 
            <div>
                <ProductAddForm productLines={this.props.productLines} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // ideas: state.ideas,
    productLines: state.productLineList,
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