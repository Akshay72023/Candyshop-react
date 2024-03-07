import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);

  useEffect(() => {
    const total = items.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.quantity;
    }, 0);
    setCartNumber(total);
  }, [items]); 

  const addItemToCartHandler = (item) => {
    const existingItemIndex = items.findIndex((el) => el.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += item.quantity;
      updatedItems[existingItemIndex].price += +item.quantity * +item.price;
      setItems(updatedItems);
    } else {
        item.price = +item.price;
        setItems((prevItems) => [...prevItems, item]);
    }
  };
  
  console.log(items);

  const cartContext = {
    items: items,
    totalAmount: 0,
    cartNumber: cartNumber,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
