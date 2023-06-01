import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);

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
                    <button onClick={clearCart}>Wyczyść koszyk</button>
                    <Link to="/products">Wróć do produktów</Link>
                </div>
            )}
        </div>
    );
}

export default Cart;

