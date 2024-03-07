/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // comprobar si ya está en el carro
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // clonar el array origial. No se debe modificar el original
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // Si no está en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}