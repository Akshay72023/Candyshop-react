import React from 'react';

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    cartNumber:0,
    addItem:(item)=>{},
});

export default CartContext;