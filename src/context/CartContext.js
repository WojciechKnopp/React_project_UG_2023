import React, { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeFromCart = useCallback((index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    })
  }, []);

  const clearCart = () => {
    setCartItems([]);
  };

  const summary = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, summary, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};