
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
  
    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 , price: cartItem.price + item.price };
        } else {
          return cartItem;
        }
      });
  
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1, price: item.price }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
  
    if (existingItem && existingItem.quantity > 1) {
      const updatedCartItems = cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return Math.round(cartItem);
        }
      });
  
      setCartItems(updatedCartItems);
    } else {
     
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    }
  };
  const removeCart = (item) => {
    setCartItems(cartItems.filter(apple => apple !== item));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
