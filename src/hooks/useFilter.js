import { FiltersContext } from "../context/filtersContext"
import { useContext } from "react"

export function useFilter () {
  const { filters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return {filterProducts}
}