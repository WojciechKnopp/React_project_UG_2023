import React from 'react';

const Cart = ({cartItems}) => {

    return (
        <div className="cart">
            <h2>Koszyk</h2>
            {cartItems.length === 0 ? 
            (<p>Koszyk jest pusty</p>
            ) : (
            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <img className='product-image' src={item.image} alt={item.name} /><br></br>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default Cart;

