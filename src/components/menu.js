import React, { Component } from 'react';
import menu from '../img/menu_vertical.svg';
import moon from '../img/moon.svg';
import sun from '../img/sun.svg'
import circled_menu from '../img/menu_circled.svg';
import basket from '../img/basket.svg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import ShopContext from '../contexts/my_context';

class Menu extends Component {

    render() {

        // const y = { name: "A", age: 25 };
        // const { name } = y;

        return (
            <div className="menu">
                <ShopContext.Consumer>
                    {
                        ({ display, setDisplay, show_mode, setShowMode }) => (
                            <>
                                {(show_mode === "list" || show_mode === "grid") ?
                                    <>
                                        <Row>
                                            <Col><p className="shop-name">Haniue Shop</p></Col>
                                            <Col xs={3}>

                                                <button className='btn-img'>
                                                    <img className='menu-img' src={display === "light" ? moon : sun}
                                                        onClick={() => { setDisplay() }} />
                                                </button>




                                                <button className='btn-img'>
                                                    <img className='menu-img' src={menu}
                                                        style={{ backgroundColor: show_mode === "list" ? '#F7DEDE' : "inherit" }}
                                                        onClick={(e) => {
                                                            setShowMode("list");
                                                        }} />
                                                </button>

                                                <button className='btn-img'>
                                                    <img className='menu-img' src={circled_menu}
                                                        style={{ backgroundColor: show_mode === "grid" ? '#F7DEDE' : "inherit" }}
                                                        onClick={() => {
                                                            setShowMode("grid");
                                                        }} />
                                                </button>

                                                <Link to="/basket" className='btn-img'>
                                                    <img className='menu-img' src={basket}
                                                        style={{ backgroundColor: show_mode === "basket" ? '#F7DEDE' : "inherit" }}
                                                        onClick={() => {
                                                            setShowMode("basket");
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
                            </>
                        )
                    }
                </ShopContext.Consumer>

            </div>
        );
    }
}

export default Menu