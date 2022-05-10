import React, { Component } from 'react';
import menu from '../img/menu_vertical.svg';
import circled_menu from '../img/menu_circled.svg';
import basket from '../img/basket.svg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

class Menu extends Component {

    render() {

        return (
            <div className="menu">
                {(this.props.current === "list" || this.props.current === "grid") ?
                    <>
                        <Row>
                            <Col><p className="shop-name">Haniue Shop</p></Col>
                            <Col xs={2}>

                                <button className='btn-img'>
                                    <img className='menu-img' src={menu}
                                        style={{ backgroundColor: this.props.current === "list" ? '#F7DEDE' : "inherit" }}
                                        onClick={(e) => {
                                            this.props.changeMode("list");
                                        }} />
                                </button>

                                <button className='btn-img'>
                                    <img className='menu-img' src={circled_menu}
                                        style={{ backgroundColor: this.props.current === "grid" ? '#F7DEDE' : "inherit" }}
                                        onClick={() => {
                                            this.props.changeMode("grid");
                                        }} />
                                </button>

                                <button className='btn-img'>
                                    <img className='menu-img' src={basket}
                                        style={{ backgroundColor: this.props.current === "basket" ? '#F7DEDE' : "inherit" }}
                                        onClick={() => {
                                            this.props.changeMode("basket");
                                        }} />
                                </button>
                            </Col>
                        </Row>
                        <hr /> </> :
                    <Row>
                        <Col xs={1}></Col>
                        <Col></Col>
                        <Col xs={2}>
                            <button className="continue left-column" onClick={() => {
                                this.props.changeMode("list");
                            }} >
                                <img className="menu-img left-column" src={basket} />
                                <p> Continue Shopping</p>
                            </button>
                        </Col>
                    </Row>}
            </div>
        );
    }
}

export default Menu