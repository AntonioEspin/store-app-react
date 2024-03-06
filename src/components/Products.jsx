/* eslint-disable react/prop-types */
import {AddToCartIcon} from '../components/Icons'
import './Products.css'

export function Products ({products}) {
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
              <button>
                <AddToCartIcon/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}