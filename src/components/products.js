import React, { Component } from "react";
import productList from '../data/products.json';
import ProductItem from './product_list_item';
import ProductGridItem from './product_grid_item';
import Menu from './menu';
import BasketList from './basket';

class ProductsList extends Component {

  render() {

    return (
      <>
        <Menu changeMode={(mode) => { this.props.changeMode(mode) }} current={this.props.current} />


        {this.props.current === "list" ?
          productList.map(i => <ProductItem key={i.id} product={i}
            addProduct={() => { this.props.addProduct(i) }} />) :

          this.props.current === "grid" ?
            productList.map(i => <ProductGridItem key={i.id} product={i}
              addProduct={() => { this.props.addProduct(i) }} />) :

            <BasketList
              count={this.props.count}
              purchases={this.props.purchases}
              display={this.props.display}
              IncreaseInventory={(p) => this.props.IncreaseInventory(p, "increase")}
              decreaseInventory={(p) => this.props.decreaseInventory(p, "decrease")}
              removeItem={(p) => this.props.removeItem(p)} />
        }
      </>


    );
  }

}

export default ProductsList;