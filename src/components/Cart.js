import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Koszyk</h2>
            {cartItems.length === 0 ? 
            (<p>Koszyk jest pusty</p>
            ) : (
            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <strong>{item.name} </strong>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default Cart;

