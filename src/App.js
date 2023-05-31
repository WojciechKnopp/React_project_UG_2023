import './App.css';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import DarkMode from './components/DarkMode';

function App() {

  return (
    <CartProvider>
    <ProductProvider>
      <div className="App">
      <DarkMode />
        <h1>Projekt zaliczeniowy</h1>
        <ProductList/>
        <Cart />
      </div>
    </ProductProvider>
    </CartProvider>
  );
}

export default App;
