import React, { Component } from "react";
import productList from '../data/products.json';
import ProductItem from './product_item';

class ProductsList extends Component {

  render(){

    return (
      <>
        {productList.map(i => <ProductItem key={i.id} addProduct = {() => {this.props.addProduct(i)}} 
        id={i.id} title={i.title} imageUrl={i.imageUrl} price={i.price} description={i.description} />)}
      </>
    );
  }

}

export default ProductsList;