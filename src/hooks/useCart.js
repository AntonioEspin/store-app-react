import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart () {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('Not context provider')
  }

  return context
}