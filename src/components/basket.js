import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import BasketProductItem from './basket_product_item';

class BasketList extends Component {


  render() {
    console.log(this.props.count);
    return (

      <div className='box-border'>
        <Row>
          <p className="shop-name">You Have {this.props.count} Items In Your Cart</p>
        </Row>

        <hr />
        <Row>
          <Col xs={6}><p className="basket-property">Product</p></Col>
          <Col><p className="basket-property">Price</p></Col>
          <Col><p className="basket-property">Quantity</p></Col>
          <Col><p className="basket-property">Subtotal</p></Col>
          <Col xs={1}></Col>
        </Row>
        <hr />

        <Row>
          <Col>
            {this.props.purchases.map(i => <BasketProductItem key={i.product.id} id={i.product.id} title={i.product.title}
              inventory={i.inventory} imageUrl={i.product.imageUrl} price={i.product.price}
              description={i.product.description}
              IncreaseInventory={() => { this.props.IncreaseInventory(i) }}
              decreaseInventory={() => { this.props.decreaseInventory(i) }}
              removeItem={()=> {this.props.removeItem(i)}} />)}
          </Col>

        </Row>

      </div>
    );
  }

}

export default BasketList;