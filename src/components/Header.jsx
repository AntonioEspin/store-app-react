/* eslint-disable react/prop-types */
import { Filters } from "./Filters"

export function Header ({changeFilters}) {
  return (
    <header>
      <h1>React Shopping</h1>
      <Filters changeFilters={changeFilters}/>
    </header>
  )
}