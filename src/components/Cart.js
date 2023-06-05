import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import PopupTimer from './PopupTimer';

const Cart = () => {
  const { cartItems, clearCart, removeFromCart } = useContext(CartContext);

  const sumPrice = useMemo(() => {
    const sum = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return sum.toFixed(2);
}, [cartItems]);


    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <div className='cart text-center'>
                <h2 className='text-center'>Koszyk</h2>
                {cartItems.length === 0 ? 
                (
                    <>
                        <p>Koszyk jest pusty</p>
                        <Link to="/products"><button className='ovr-btn'>Wróć</button></Link>
                    </>
                ) : (
                    <>
                    <table className="cart-items mb-4">
                        {cartItems.map((item, index) => (
                            <tr className="cart-item" key={index}>
                                <td className='text-start'><strong>{item.name}</strong></td>
                                <td className='pl'><span>{item.price} zł</span></td>
                                <td><button className='btn-right' onClick={() => removeFromCart(index)}>Usuń</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}>
                                <p className='text-end'><strong>Suma: {sumPrice} zł</strong></p>
                            </td>
                        </tr>
                        <tr><td colSpan={3} className='text-end'>
                            <Link to="/"><button className='ovr-btn' onClick={clearCart}>Anuluj zamówienie</button></Link>
                        </td></tr>
                    </table>
                    <div className='d-flex justify-content-evenly'>
                        <Link to="/products"><button className='ovr-btn'>Wróć</button></Link>
                        <Link to="/delivery"><button className='ovr-btn'>Dalej</button></Link>
                    </div>
                    </>
                )}
            </div>
            <PopupTimer />
        </div>
    );
}

export default Cart;

