import React, { Component } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import basket from '../img/basket.svg';
import { ShopConsumer } from '../contexts/my_context';

class ProductGridItem extends Component {


    render() {

        return (
            <div className="product-grid-item">
                <Col>
                    <Row>
                        <img className="grid-img" src={this.props.product.imageUrl} />
                    </Row>
                    <Row className='grid-title'>
                        <p className="row shop-name">{this.props.product.title}</p>
                    </Row>
                    <Row className='grid-description'>
                        <ShopConsumer>
                            {
                                ({ display }) => (
                                    <p className="row"
                                        style={{ color: display === "light" ? 'darkslategrey' : 'white' }}>{this.props.product.description.substring(0, 250)} ...</p>
                                )
                            }
                        </ShopConsumer>

                    </Row>
                    <Row className='grid-button'>
                        <Col>
                            <ShopConsumer>
                                {({ addProductToBasket }) => (
                                    <button className="btn" onClick={addProductToBasket}>
                                        <div>
                                            <img className="add-cart-img " src={basket} />
                                            <p className="row add-cart">Add to Cart</p>
                                        </div>
                                    </button>
                                )}
                            </ShopConsumer>

                        </Col>
                        <Col>
                            <p className="row add-cart">$ {this.props.product.price}</p>
                        </Col>

                    </Row>
                </Col>
            </div>
        );
    }
}

export default ProductGridItem