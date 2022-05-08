import React, { Component } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import basket from '../img/basket.svg';

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
                        <p className="row">{this.props.product.description.substring(0, 250)} ...</p>
                    </Row>
                    <Row>
                        <Col>
                        <button className="btn" onClick={this.props.addProduct}>
                            <div>
                                <img className="add-cart-img " src={basket} />
                                <p className="row add-cart">Add to Cart</p>
                            </div>
                        </button>
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