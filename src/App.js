import './css/App.css';
import './css/fonts.css';
import './components/products_list';
import './components/menu';
import BasketMenu from './components/basket_menu';
import BasketList from './components/basket';
import ProductsList from './components/products_list';
import ProductsGridView from './components/products_gride_view';
import Menu from './components/menu';
import React from "react";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show_mode: "list",
      basketList: [],//{product , inventory}
    };
  }

  getBasketProductCount() {
    let sum = 0;
    this.state.basketList.map(i => sum = sum + i.inventory);
    console.log(sum);
    return sum;
  }

  addProductToBasket(p) {
    if (this.state.basketList.some(i => i.product.id === p.id)) {
      this.setState({
        basketList: this.state.basketList.map(el => (el.product.id === p.id ? Object.assign({}, el, el.inventory++) : el))
      });
    } else {
      this.setState(previousState => ({
        basketList: [...previousState.basketList, { product: p, inventory: 1 }]
      }));
    }
  }

  changeProductInventory(p, mode) {
    if (mode === "increase") {
      this.setState({
        basketList: this.state.basketList.map(el => (el.product.id === p.product.id ? Object.assign({}, el, el.inventory++) : el))
      })
    } else if (mode === "decrease") {
      this.setState({
        basketList: this.state.basketList.map(el => (el.product.id === p.product.id ? Object.assign({}, el, (el.inventory - 1 >= 0) ? el.inventory-- : 0) : el))
      })
    }
  }

  removeItemFromBasket(p) {
    var index = this.state.basketList.indexOf(p);
    console.log(index);
    if (index !== -1) {
      this.setState({
        basketList: [
          ...this.state.basketList.slice(0, index),
          ...this.state.basketList.slice(index + 1)
        ]
      })
    }
  }

  changeShowMode(mode){
    this.setState({ show_mode: mode, });
  }

  render() {
    return (
      <div className="my-body">
        {
          this.state.show_mode === "basket" ?
            <BasketMenu changeMode={(mode) =>this.changeShowMode(mode)} />
            : <Menu changeMode={(mode) =>this.changeShowMode(mode)} />
        }

        {this.state.show_mode === "list" ?
          <ProductsList addProduct={(p) => this.addProductToBasket(p)} /> :
          this.state.show_mode === "grid" ?
            <ProductsGridView addProduct={(p) => this.addProductToBasket(p)} /> :
            <BasketList count={this.getBasketProductCount()} purchases={this.state.basketList}
              IncreaseInventory={(p) => this.changeProductInventory(p, "increase")}
              decreaseInventory={(p) => this.changeProductInventory(p, "decrease")}
              removeItem={(p) => this.removeItemFromBasket(p)} />}
      </div>);
  }
}

export default App;
