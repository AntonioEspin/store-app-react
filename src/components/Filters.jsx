import { useState } from 'react'
import './Filters.css'

export function Filters (){
  const[minPrice, setMinPrice] = useState(0)

  const handleChangePrice = (e) => {
    setMinPrice(e.target.value)
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio</label>
        <input type="range" name="price" id="price" min='0' max='1000' onChange={handleChangePrice} />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categorias</label>
        <select name="" id="category">
          <option value="all">Todas</option>
          <option value="men's clothing">Ropa de Hombre</option>
          <option value="jewelery">Joyas</option>
          <option value="electronics">Electrónica</option>
          <option value="women's clothing">Ropa de Mujer</option>
        </select>
      </div>
    </section>
  )
}