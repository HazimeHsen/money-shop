// CartProvider.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { Products } from "@/types/Products";

export type CartContextType = {
  cartItems: Products[];
  addToCart: (item: Products) => void;
  removeFromCart: (item: Products) => void;
  clearCart: () => void;
  getCartTotal: () => number;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Products[]>(
    Cookies.get("cartItems-xoco")
      ? JSON.parse(Cookies.get("cartItems-xoco")!)
      : []
  );

  const addToCart = (item: Products) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (!isItemInCart) {
      setCartItems([...cartItems, { ...item }]);
    }
  };

  const removeFromCart = (item: Products) => {
    setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  useEffect(() => {
    Cookies.set("cartItems-xoco", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = Cookies.get("cartItems-xoco");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  console.log(cartItems);

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
