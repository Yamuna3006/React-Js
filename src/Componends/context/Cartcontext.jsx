import React, { createContext, useState, useContext } from 'react';

const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <Cartcontext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => useContext(Cartcontext);
