import './App.css';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Page from './components/Page';

function App() {

  

  return (
    <CartProvider>
    <ProductProvider>
      <Page />
    </ProductProvider>
    </CartProvider>
  );
}

export default App;
