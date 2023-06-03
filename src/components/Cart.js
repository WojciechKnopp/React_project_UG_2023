import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);

  const sumPrice = useMemo(() => {
    const sum = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return sum.toFixed(2);
}, [cartItems]);


    return (
        <div className="cart">
            <h2>Koszyk</h2>
            {cartItems.length === 0 ? 
            (<p>Koszyk jest pusty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <strong>{item.name} </strong>
                            <span>{item.price}</span>
                            <button onClick={() => removeFromCart(index)}>Usuń</button>
                        </div>
                    ))}
                    <p>Suma: {sumPrice} zł</p>
                    <button onClick={clearCart}>Wyczyść koszyk</button>
                </div>
            )}
            <Link to="/products">Wróć do produktów</Link>
        </div>
    );
}

export default Cart;

