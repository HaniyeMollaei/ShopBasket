import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from './menu';
import BasketProductItem from './basket_product_item';
import { ShopConsumer } from '../contexts/my_context';

class BasketList extends Component {


  render() {
    return (
      <>
        <Menu />
        <hr />

        <div className='box-border'>

          <ShopConsumer>
            {
              ({ display, basketList, getBasketProductCount }) => (
                <>
                  <Row>
                    <p className="shop-name">You Have {getBasketProductCount()} Items In Your Cart</p>
                  </Row>

                  <hr />
                  <Row style={{ color: display === "light" ? 'darkslategrey' : 'white' }}>
                    <Col xs={6}><p className="basket-property">Product</p></Col>
                    <Col><p className="basket-property">Price</p></Col>
                    <Col><p className="basket-property">Quantity</p></Col>
                    <Col><p className="basket-property">Subtotal</p></Col>
                    <Col xs={1}></Col>
                  </Row>
                  <hr />

                  <Row>
                    <Col>
                      {
                        
                      basketList.map(i => <BasketProductItem key={i.product.id} item={i} />)}
                    </Col>

                  </Row>


                </>
              )
            }
          </ShopConsumer>

        </div>
      </>


    );
  }

}

export default BasketList;