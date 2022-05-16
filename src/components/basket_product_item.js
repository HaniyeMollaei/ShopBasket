import React, { Component } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { ShopConsumer } from '../contexts/my_context';

class BasketProductItem extends Component {


    render() {
        return (
            <div className="product-list-item">
                <ShopConsumer>
                    {
                        ({ display, changeProductInventory, removeItemFromBasket }) => (

                            <Row style={{ color: display === "light" ? 'darkslategrey' : 'white' }}>
                                
                                <Col xs={2}><img className="basket-product-item-img" src={this.props.product.imageUrl} /></Col>
                                <Col xs={4}><p className="shop-name">{this.props.product.title}</p> </Col>
                                <Col><p className="basket-property">$ {this.props.product.price}</p></Col>

                                <Col >
                                    <button className='inventory-btn left-column left-border-radius' onClick={() => {changeProductInventory(this.props.item, "increase")}}> + </button>
                                    <p className='left-column inventory-btn'>{this.props.item.inventory}</p>
                                    <button className='inventory-btn left-column right-border-radius' onClick={() => {changeProductInventory(this.props.item, "decrease")}}> - </button>
                                </Col>

                                <Col>
                                    <p className="basket-property">$ {this.props.item.inventory * this.props.product.price}</p>
                                </Col>

                                <Col xs={1}>
                                    <button className='delete-btn' onClick={() => {removeItemFromBasket(this.props.item)}}> × </button>
                                </Col>
                            </Row>
                        )
                    }
                </ShopConsumer>

                <hr />
            </div>
        );
    }
}

export default BasketProductItem