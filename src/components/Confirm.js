import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { userContext } from "../context/UserContext";
import PopupTimer from "./PopupTimer";
import SummaryPDF from './SummaryPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Confirm = () => {
    const { state, clearAction } = useContext(userContext);
    const { clearCart, cartItems, summary } = useContext(CartContext);

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
                ) : ( state.tableNumber.tableNumber ? (
                    <strong>Stolik numer {state.tableNumber.tableNumber}</strong>
                ) : (
                <p>
                    <strong>Odbiór osobisty</strong>
                </p>
            ))}
            <button type="button" className="btn-upper">
                <PDFDownloadLink document={<SummaryPDF order={state} cartItems={cartItems} summary={summary} />} fileName="potwierdzenie.pdf" scale={0.1}>
                    Wydrukuj potwierdzenie
                </PDFDownloadLink>
            </button>
            <Link to="/"><button onClick={handleBackToMainPage} className='btn-start'>Powrót na stronę główną</button></Link>
            <PopupTimer />
        </div>
    )
}

export default Confirm;