import React from 'react';
import {connect} from "react-redux";
import {getProducts} from "./../redux/product-reducer";
import s from './Products.module.css'
import Products from './Products'
import Filters from "./../common/SearchBar";

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.getProducts(this.props.name);
    }
    

    render() {
        return <>
            <Filters  name={this.props.name} 
                    getProducts={this.props.getProducts}/>
            <Products 
                   products={this.props.products}
                   name={this.props.name}/>
        </>
    }
}


let mapStateToProps =(state) => {
    return {
        products: state.productPage.products.filter(({name}) => name.toLowerCase().indexOf(state.productPage.name.toLowerCase()) !== -1),
        name: state.productPage.name
    }
}

export default connect(mapStateToProps,{getProducts})(ProductsContainer);