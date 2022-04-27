import React, { Component } from 'react';
import menu from '../img/menu_vertical.svg';
import circled_menu from '../img/menu_circled.svg';
import basket from '../img/basket.svg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

class Menu extends Component {

    state = {
        color0: '#F7DEDE',
        color1: 'inherit',
        color2: 'inherit',
    }

    render() {

        return (
            <div className="menu">
                <Row>
                    <Col><p className="shop-name">Haniue Shop</p></Col>
                    <Col xs={2}>

                        <button className='btn-img'>
                            <img className='menu-img' src={menu} style={{ backgroundColor: this.state.color0 }}
                                onClick={(e) => {
                                    this.props.changeMode(0);
                                    this.setState({
                                        color0: '#F7DEDE',
                                        color1: 'inherit',
                                        color2: 'inherit'
                                    });
                                }} />
                        </button>

                        <button className='btn-img'>
                            <img className='menu-img' src={circled_menu} style={{ backgroundColor: this.state.color1 }}
                                onClick={() => {
                                    this.props.changeMode(1);
                                    this.setState({
                                        color0: 'inherit',
                                        color1: '#F7DEDE',
                                        color2: 'inherit'
                                    });
                                }} />
                        </button>
                        <button className='btn-img'>
                            <img className='menu-img' src={basket} style={{ backgroundColor: this.state.color2 }}
                                onClick={() => {
                                    this.props.changeMode(2);
                                    this.setState({
                                        color0: 'inherit',
                                        color1: 'inherit',
                                        color2: '#F7DEDE'
                                    });

                                }} />
                        </button>


                    </Col>



                </Row>
                <hr />
            </div>
        );
    }
}

export default Menu