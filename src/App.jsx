import initialProducts from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilter } from './hooks/useFilter'
import { Cart } from './components/Cart'

function App() {

  const {filterProducts} = useFilter()
  
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
