import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return storedCartItems ? storedCartItems : [];
  });
  const [loading, setLoading] = useState(true);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const addToCart = (item) =>{
    
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        const updatedCartItems = cartItems.map(cartItem => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1, price: item.basePrice * (cartItem.quantity+1) };
          } else {
            return cartItem;
          }
        });
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1, basePrice:item.price  }]);
      }
    };
  
    const removeFromCart = (item) => {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        const updatedCartItems = cartItems.map(cartItem => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1, price: cartItem.basePrice * (cartItem.quantity-1 ) };
          } else {
            return cartItem;
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
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, removeCart,loading}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};