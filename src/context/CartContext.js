import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.productId === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.productId === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { productId: product._id, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce((total, item) => {
      return total + (item.productId.price * item.quantity);  // Correct price reference
    }, 0);
    setTotal(newTotal);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, calculateTotal, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
