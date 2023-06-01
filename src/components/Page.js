import React, { useEffect, useState } from "react";
import ProductList from './ProductList';
import Cart from './Cart';
import DarkMode from './DarkMode';

const Page = () => {

// welcome page
const [welcomePage, setWelcomePage] = useState(true);
const handleWelcomePage = () => {
  setWelcomePage(true);
}
const handleWelcomePageClose = () => {
  setWelcomePage(false);
}

// timeout
useEffect(() => {
    let timeout;

    const resetTimeout = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setWelcomePage(true);
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
    <DarkMode />
    {welcomePage ? (
        <div className="main-menu">
        <h1>Strona główna</h1>
        <button onClick={handleWelcomePageClose}>Złóż zamówienie</button>
        </div>
    ) : (
        <>
        <ProductList/>
        <Cart />
        <button onClick={handleWelcomePage}>Anuluj zamówienie</button>
        </>
    )}
    </div>
)}

export default Page;