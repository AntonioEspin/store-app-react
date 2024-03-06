/* eslint-disable react/prop-types */
import { useContext, useId } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filtersContext'

export function Filters (){

  const {filters, setFilters} = useContext(FiltersContext)

  const minPriceId = useId()
  const categoryId = useId()

  const handleChangePrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Precio</label>
        <input type="range" name="price" id={minPriceId} min='0' max='1000' value={filters.minPrice} onChange={handleChangePrice} />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Categorias</label>
        <select name="" id={categoryId} onChange={handleChangeCategory}>
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