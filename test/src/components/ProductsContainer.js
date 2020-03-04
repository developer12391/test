import React from 'react';
import {connect} from "react-redux";
import {getProducts} from "./../redux/product-reducer";
import s from './Products.module.css'
import Products from './Products'

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.currentPage,this.props.pageSize);
    }

    render() {
        return <>
            <Products 
                   products={this.props.products}/>
        </>
    }
}


let mapStateToProps =(state) => {
    return {
        products: state.productPage.products
    }
}

export default connect(mapStateToProps,{getProducts})(ProductsContainer);