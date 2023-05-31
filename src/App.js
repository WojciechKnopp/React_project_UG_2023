import React, { useState } from 'react';
import './App.css';
import { ProductProvider } from './ProductContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <ProductProvider>
      <div className="App">
        <h1>Projekt zaliczeniowy</h1>
        <ProductList onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} />
    
      </div>
    </ProductProvider>
  );
}

export default App;
