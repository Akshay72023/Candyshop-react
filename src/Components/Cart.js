import React, { useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CartContext from '../store/cart-context';

const Cart = (props) => {
    const cartctx = useContext(CartContext);
    const cartElements = cartctx.items;
    
    const total = cartElements.reduce((accumulator, currentItem) => {
        return accumulator + (currentItem.quantity * currentItem.price);
    }, 0);


    return (
        <div style={{ position: 'absolute', right: '0', width: '300px', top: "60px", height: '100%', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.2)', padding: '20px', zIndex: '9999' }}>
            <Button variant="light" style={{ float: 'right', border: 'none' }} onClick={props.handleCartClick}>X</Button>
            <Container>
                <Row>
                    <Col>
                        <h3 style={{ textAlign: 'center' }}>Cart</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Item</h5>
                    </Col>
                    <Col>
                        <h5>Price</h5>
                    </Col>
                    <Col>
                        <h5>Quantity</h5>
                    </Col>
                </Row>
                {cartElements.map((item, index) => (
                    <Row key={index} style={{ marginBottom: '10px', alignItems: 'center' }}>
                        <Col>
                            <p>{item.name}</p>
                        </Col>
                        <Col>
                            <p>${item.price}</p>
                        </Col>
                        <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <p style={{ marginBottom: '5px', marginRight: '5px' }}>{item.quantity}</p>
                        </Col>
                    </Row>
                ))}
                <Row>
                    <Col style={{ textAlign: 'right' }}>Total ${total.toFixed(2)}</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
