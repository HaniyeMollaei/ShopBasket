import React, { Component } from 'react';
import basket from '../img/basket.svg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

class BasketMenu extends Component {


    render() {

        return (
            <div className="menu">
                <Row>
                    <Col xs={1}></Col>
                    <Col></Col>
                    <Col xs={2}>
                        <button className="continue left-column" onClick={(e) => {
                            this.props.changeMode(0);
                        }} >
                            <img className="menu-img left-column" src={basket} />
                            <p> Continue Shopping</p>
                        </button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BasketMenu