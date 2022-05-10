import React, { Component } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import basket from '../img/basket.svg';

class ProductItem extends Component {


    render() {

        return (
            <div className="product-list-item">
                <Row>
                    <Col xs={3}> <img className="product-item-img" src={this.props.product.imageUrl} /></Col>
                    <Col className="left-column description-in-list">
                        <Row>
                            <p className="row shop-name">{this.props.product.title}</p>
                        </Row>
                        <Row>
                            <p className="row"
                             style={{ color: this.props.display === "light" ? 'darkslategrey' : 'white' }}
                             >{this.props.product.description}</p>
                        </Row>
                        <Row xs={4}>
                            <button className="btn" onClick={this.props.addProduct}>
                                <div>
                                    <img className="add-cart-img " src={basket} />
                                    <p className="row add-cart">Add to Cart</p>
                                </div>
                            </button>
                        </Row>
                    </Col>
                    <Col xs={2}>
                            <p className="row add-cart">$ {this.props.product.price}</p>

                    </Col>
                </Row>
                <hr className="my-divider" />
            </div>
        );
    }
}

export default ProductItem