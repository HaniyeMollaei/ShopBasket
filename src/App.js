import './css/App.css';
import './css/fonts.css';
import ProductsList from './components/products';
import './components/menu';
import React from "react";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: "light",
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

  changeShowMode(mode) {
    this.setState({ show_mode: mode, });
  }

  changeDisplayMode() {
    if (this.state.display === "light") {
      document.body.style.backgroundColor = "#130739";
      this.setState({ display: "dark", })
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({ display: "light", });
    }

  }

  render() {
    return (
      <div className={this.state.display === "light" ? "my-body" : "dark-body"}>

        <ProductsList
          count={this.getBasketProductCount()}
          current={this.state.show_mode}
          display={this.state.display}
          changeDisplayMode={() => this.changeDisplayMode()}
          changeMode={(mode) => this.changeShowMode(mode)}
          addProduct={(p) => this.addProductToBasket(p)}
          purchases={this.state.basketList}
          IncreaseInventory={(p) => this.changeProductInventory(p, "increase")}
          decreaseInventory={(p) => this.changeProductInventory(p, "decrease")}
          removeItem={(p) => this.removeItemFromBasket(p)} />
      </div>);
  }
}

export default App;
