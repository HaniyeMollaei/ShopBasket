import React, { Component } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

class BasketProductItem extends Component {


    render() {

        return (
            <div className="product-list-item">
                <Row>
                    <Col xs={2}><img className="basket-product-item-img" src={this.props.imageUrl} /></Col>
                    <Col xs={4}><p className="shop-name">{this.props.title}</p> </Col>
                    <Col><p className="basket-property">$ {this.props.price}</p></Col>
                    <Col >
                        
                            <button className='inventory-btn left-column left-border-radius' onClick={this.props.IncreaseInventory}> + </button>
                            <p className='left-column inventory-btn'>{this.props.inventory}</p>
                            <button className='inventory-btn left-column right-border-radius'onClick={this.props.decreaseInventory}> - </button>
                        
                    </Col>
                    <Col><p className="basket-property">$ {this.props.inventory * this.props.price}</p></Col>
                   
                    <Col xs={1}>
                    <button className='delete-btn' onClick={this.props.removeItem}> × </button>

                    </Col>
                </Row>
                <hr  />
            </div>
        );
    }
}

export default BasketProductItem