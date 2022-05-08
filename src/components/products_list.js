import React, { Component } from "react";
import productList from '../data/products.json';
import ProductItem from './product_item';

class ProductsList extends Component {

  render(){

    return (
      <>
        {productList.map(i => <ProductItem key={i.id} product={i} addProduct = {() => {this.props.addProduct(i)}} />)}
      </>
    );
  }

}

export default ProductsList;