/* eslint-disable react/prop-types */
import {AddToCartIcon} from '../components/Icons'
import { useCart } from '../hooks/useCart'
import './Products.css'

export function Products ({products}) {
  const {addToCart} = useCart()
  return (
    <main className='products'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.description} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>

            <div>
              <button onClick={()=> addToCart(product)}>
                <AddToCartIcon/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}