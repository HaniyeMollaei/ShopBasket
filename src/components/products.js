import React, { Component } from "react";
import productList from '../data/products.json';
import ProductItem from './product_list_item';
import ProductGridItem from './product_grid_item';
import Menu from './menu';
import ShopContext from "../contexts/my_context";

class Products extends Component {

  render() {

    return (
      <div>

        <Menu />

        <ShopContext.Consumer>
          {
            ({show_mode }) => (
              <>
                {show_mode === "list" ?
                  productList.map(i => <ProductItem key={i.id} product={i} />)
                  :
                  productList.map(i => <ProductGridItem key={i.id} product={i} />)
                }
              </>
            )
          }
        </ShopContext.Consumer>
      </div>
    );
  }

}

export default Products;