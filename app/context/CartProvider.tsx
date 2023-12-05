"use client";

import { createContext, useReducer } from "react";
import { cartReducer } from "../menu/cart/cartReducer";

const initialState: CartState = {
  cart: [],
};

export const CartContext = createContext({
  state: initialState,
  dispatch: (action: CartAction) => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<React.Reducer<CartState, CartAction>>(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
