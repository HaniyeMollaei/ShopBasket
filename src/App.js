import './css/App.css';
import './css/fonts.css';
import Products from './components/products';
import './components/menu';
import BasketList from './components/basket';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopContext, { ShopProvider } from './contexts/my_context';
class App extends React.Component {


  state = {
    display: "light",
    show_mode: "list",
    basketList: [],//{product , inventory}
    setDisplay: () => {
      if (this.state.display === "light") {
        document.body.style.backgroundColor = "#130739";
        this.setState({ display: "dark", })
      } else {
        document.body.style.backgroundColor = "white";
        this.setState({ display: "light", });
      }
    },

    setShowMode: (mode) => {
      this.setState({ show_mode: mode, });
    },

    getBasketProductCount: () => {
      let sum = 0;
      this.state.basketList.map(i => sum = sum + i.inventory);
      return sum;
    },

    changeProductInventory: (p, mode) => {
      if (mode === "increase") {
        this.setState({
          basketList: this.state.basketList.map(el => (el.product.id === p.product.id ? Object.assign({}, el, el.inventory++) : el))
        })
      } else if (mode === "decrease") {
        this.setState({
          basketList: this.state.basketList.map(el => (el.product.id === p.product.id ? Object.assign({}, el, (el.inventory - 1 >= 0) ? el.inventory-- : 0) : el))
        })
      }
    },

    addProductToBasket: (p) => {
      if (this.state.basketList.some(i => i.product.id === p.id)) {
        this.setState({
          basketList: this.state.basketList.map(el => (el.product.id === p.id ? Object.assign({}, el, el.inventory++) : el))
        });
      } else {
        this.setState(previousState => ({
          basketList: [...previousState.basketList, { product: p, inventory: 1 }]
        }));
      }
    },

    removeItemFromBasket: (p) => {
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
  };


  render() {
    return (

      <ShopContext.Provider
        value={this.state}>
        <div className={this.state.display === "light" ? "my-body" : "dark-body"}>
          <BrowserRouter>
            <Routes>

              <Route path="/products" element={<Products />} />

              <Route path="/basket" element={<BasketList />} />

              <Route path="*" element={<Products />} />
              
            </Routes>
          </BrowserRouter>

        </div>
      </ShopContext.Provider>
    );
  }
}

export default App;
