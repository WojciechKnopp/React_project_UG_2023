import './App.scss';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Page from './components/ProductsPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './components/Cart';
import DarkMode from './components/DarkMode';
import MainPage from './components/MainPage';


const Home = () => (
  <div>
    <MainPage />
  </div>
);  

const Products = () => (
  <div>
    <Page />
  </div>
);

const Order = () => (
  <div>
    <Cart />
  </div>
);

const NotFound = () => (
  <div>
    <h1>404 - Nie znaleziono strony</h1>
    <Link to="/">Strona domowa</Link>
  </div>
);
  
function App() {

  return (
    <CartProvider>
    <ProductProvider>
      <Router>
        <Link to="/">Strona domowa</Link>
        <Link to="/cart">Przejdź do podsumowania</Link>
        <DarkMode />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ProductProvider>
    </CartProvider>
  );
}

export default App;
