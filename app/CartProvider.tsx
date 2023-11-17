"use client";

import { CartContext, CartProvider } from "../context/CartContext";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
