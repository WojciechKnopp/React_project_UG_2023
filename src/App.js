import './App.scss';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Page from './components/ProductsPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Cart from './components/Cart';
import DarkMode from './components/DarkMode';
import MainPage from './components/MainPage';
import ProductDetails from './components/ProductDetails';
import DeliveryMethod from './components/DeliveryMethod';
import Payment from './components/Payment';
import Confirm from './components/Confirm';


const NotFound = () => (
  <div>
    <h1>404 - Nie znaleziono strony</h1>
    <Link to="/">Strona domowa</Link>
  </div>
);
  
const App = () => {

  return (
    <UserProvider>
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
              <Route path="/order-done" element={<Confirm />} />
            </Routes>
          </Router>
      </ProductProvider>
    </CartProvider>
    </UserProvider>
  );
}

export default App;
