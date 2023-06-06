import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { userContext } from "../context/UserContext";
import PopupTimer from "./PopupTimer";

const Confirm = () => {
    const { state, clearAction } = useContext(userContext);
    const { clearCart } = useContext(CartContext);

    const handleBackToMainPage = () => {
        clearCart();
        clearAction();
    }

    let realisationTime = 30;

    return (
        <div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <h2>Dziękujemy za złożenie zamówienia!</h2>
            <p>Przewidywany czas oczekiwania na zamówienie to <strong>{ realisationTime } minut.</strong></p>
            <p className="text-center">
                <strong>Sposób płatności</strong><br/>
                <span>{state.paymentMethod}</span>
            </p>
            {state.deliveryData.city ? (
                <p>
                    <strong>Adres dostawy: </strong> {state.deliveryData.street}{" "}
                    {state.deliveryData.buildingNumber}, {state.deliveryData.postalCode}{" "}
                    {state.deliveryData.city}
                </p>
                ) : (
                <p>
                    <strong>Odbiór osobisty</strong>
                </p>
            )}
            <Link to="/"><button onClick={handleBackToMainPage} className='btn-start'>Powrót na stronę główną</button></Link>
            <PopupTimer />
        </div>
    )
}

export default Confirm;