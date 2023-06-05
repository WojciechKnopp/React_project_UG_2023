import './App.scss';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Page from './components/ProductsPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './components/Cart';
import DarkMode from './components/DarkMode';
import MainPage from './components/MainPage';
import ProductDetails from './components/ProductDetails';
import DeliveryMethod from './components/DeliveryMethod';
import Payment from './components/Payment';


const NotFound = () => (
  <div>
    <h1>404 - Nie znaleziono strony</h1>
    <Link to="/">Strona domowa</Link>
  </div>
);
  
const App = () => {

  return (
    <CartProvider>
    <ProductProvider>
      <Router>
        <DarkMode />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<Page />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/delivery" element={<DeliveryMethod />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </ProductProvider>
    </CartProvider>
  );
}

export default App;
