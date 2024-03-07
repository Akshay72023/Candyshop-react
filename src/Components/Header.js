// Header.js
import React from 'react';
import { Button } from "react-bootstrap";

const Header = () => {
    return (
        <div style={headerStyle}>
            <h2 >Candy Shop</h2>
            <div >
                <Button variant="info">Cart</Button>
            </div>
        </div>
    );
};


const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(215 225 119)',
    padding: '10px',
};



export default Header;
