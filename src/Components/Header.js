import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import CartContext from '../store/cart-context';

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const handleCart=(e)=>{
        e.preventDefault();
        props.handleCart();
    }

    return (
        <div style={headerStyle}>
            <h2>Candy Shop</h2>
            <div>
                <Button variant="info" onClick={handleCart}>Cart {cartCtx.cartNumber}</Button>
            </div>
        </div>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(215, 225, 119)',
    padding: '10px',
};

export default Header;
