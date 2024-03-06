import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'

export function Cart () {
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon/>
      </label>
      <input type="checkbox" name="" id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
              alt=''
            />
            <div>
              <strong>Celular</strong> - $1500
            </div>

            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}