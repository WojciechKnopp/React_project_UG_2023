import React, { useEffect, useState } from "react";
import ProductList from './ProductList';
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

const Page = () => {

// clear cart
const { clearCart } = React.useContext(CartContext);

// timeout
useEffect(() => {
    let timeout;

    const resetTimeout = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            // przeniesienie na strone domowa
            window.location.href = "/";
            clearCart();
        }, 1000 * 30 ); // 30 seconds
        
        document.addEventListener('mousemove', resetTimeout);
        document.addEventListener('keydown', resetTimeout);
    };

    resetTimeout();

    return () => {
        clearTimeout(timeout);
        document.removeEventListener('mousemove', resetTimeout);
        document.removeEventListener('keydown', resetTimeout);
    };
}, []);

return (
    <div className="Page">
        <ProductList/>
        <Link to="/cart">Przejdź do podsumowania</Link>
    </div>
)}

export default Page;