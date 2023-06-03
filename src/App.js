import './App.scss';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Page from './components/ProductsPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './components/Cart';
import DarkMode from './components/DarkMode';
import MainPage from './components/MainPage';


const NotFound = () => (
  <div>
    <h1 className='alert alert-danger'>404 - Nie znaleziono strony</h1>
    <Link to="/">Strona domowa</Link>
  </div>
);
  
function App() {

  return (
    <CartProvider>
    <ProductProvider>
      <Router>
        <DarkMode />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Page />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ProductProvider>
    </CartProvider>
  );
}

export default App;
