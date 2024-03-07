/* eslint-disable react/prop-types */
import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'

function CartItem ({image, title, description, price, quantity, addToCart}) {
  return (
    <li>
      <img
        src={image}
        alt={description}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const {cart, addToCart, clearCart} = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input type="checkbox" name="" id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={()=>addToCart(product)}
                {...product}
              />
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}