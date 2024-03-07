import initialProducts from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilter } from './hooks/useFilter'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartContext'

function App() {

  const {filterProducts} = useFilter()
  
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App
