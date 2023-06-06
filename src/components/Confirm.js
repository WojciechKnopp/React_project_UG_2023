import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Confirm = () => {
    const { clearCart } = useContext(CartContext);

    const handleClearCart = () => {
        clearCart();
    }

    let realisationTime = 30;

    return (
        <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <h2>Dziękujemy za złożenie zamówienia!</h2>
            <p>Przewidywany czas oczekiwania na zamówienie to { realisationTime } minut.</p>
            <Link to="/"><button onClick={handleClearCart} className='btn-start'>Powrót na stronę główną</button></Link>
        </div>

    )
}

export default Confirm;