import React, { Component } from 'react';
import menu from '../img/menu_vertical.svg';
import moon from '../img/moon.svg';
import sun from '../img/sun.svg'
import circled_menu from '../img/menu_circled.svg';
import basket from '../img/basket.svg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {

        return (
            <div className="menu">
                {(this.props.current === "list" || this.props.current === "grid") ?
                    <>
                        <Row>
                            <Col><p className="shop-name">Haniue Shop</p></Col>
                            <Col xs={3}>

                                <button className='btn-img'>
                                    <img className='menu-img' src={this.props.display === "light" ? moon : sun}
                                        onClick={this.props.changeDisplayMode} />
                                </button>

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

                                <Link to="/basket" className='btn-img'>
                                    <img className='menu-img' src={basket}
                                        style={{ backgroundColor: this.props.current === "basket" ? '#F7DEDE' : "inherit" }}
                                        onClick={() => {
                                            this.props.changeMode("basket");
                                        }} />
                                </Link>
                            </Col>
                        </Row>
                        <hr /> </> :
                    <Row>
                        <Col xs={1}></Col>
                        <Col></Col>
                        <Col xs={2}>
                            <Link to={'/products'} className="continue left-column" onClick={() => {
                                this.props.changeMode("list");
                            }} >
                                <img className="menu-img left-column" src={basket} />
                                <p> Continue Shopping</p>
                            </Link>
                        </Col>
                    </Row>}
            </div>
        );
    }
}

export default Menu