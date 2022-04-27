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
      show_mode: 0,
      basketList: [],
      count: 0
    };

  }

  render() {
    return (
      <div className="my-body">
        {
          this.state.show_mode === 2 ?
            <BasketMenu changeMode={(mode) => {
              this.setState({ show_mode: mode, });
            }} />
            : <Menu changeMode={(mode) => {
              this.setState({ show_mode: mode, });
            }} />
        }


        {this.state.show_mode === 0 ?

          <ProductsList addProduct={(p) => {

            if (this.state.basketList.some(i => i.product.id === p.id)) {
              this.setState({
                count: this.state.count + 1,
                basketList: this.state.basketList.map(el => (el.product.id === p.id ? Object.assign({}, el, el.inventory++) : el))
              });
            } else {
              this.setState(previousState => ({
                count: this.state.count + 1,
                basketList: [...previousState.basketList, { product: p, inventory: 1 }]
              }));
            }
          }} /> :

          this.state.show_mode === 1 ?
            <ProductsGridView
              addProduct={(p) => {

                if (this.state.basketList.some(i => i.product.id === p.id)) {
                  this.setState({
                    count: this.state.count + 1,
                    basketList: this.state.basketList.map(el => (el.product.id === p.id ? Object.assign({}, el, el.inventory++) : el))
                  });
                } else {
                  this.setState(previousState => ({
                    count: this.state.count + 1,
                    basketList: [...previousState.basketList, { product: p, inventory: 1 }]
                  }));
                }
              }} /> :

            <BasketList count={this.state.count} purchases={this.state.basketList}
              IncreaseInventory={(p) => {
                this.setState({
                  count: this.state.count + 1,
                  basketList: this.state.basketList.map(el => (el.product.id === p.product.id ? Object.assign({}, el, el.inventory++) : el))
                })
              }}
              decreaseInventory={(p) => {
                this.setState({
                  count: this.state.count - 1,
                  basketList: this.state.basketList.map(el => (el.product.id === p.product.id ? Object.assign({}, el, (el.inventory - 1 >= 0) ? el.inventory-- : 0) : el))
                })
              }}
              removeItem={(p) => {
                var index = this.state.basketList.indexOf(p);
                console.log(index);
                if(this.state.basketList[index].inventory !== 0){
                  this.setState({
                    count: this.state.count - this.state.basketList[index].inventory 
                  })
                }
                if (index !== -1) {
                  this.setState({
                    basketList: [
                      ...this.state.basketList.slice(0, index),
                      ...this.state.basketList.slice(index + 1)
                    ]
                  })
                }
                
              }} />}
      </div>);
  }
}

export default App;
