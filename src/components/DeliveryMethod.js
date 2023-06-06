import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressForm from "./AddressForm";
import TableForm from "./TableForm";
import PopupTimer from './PopupTimer';

const DeliveryMethod = () => {

    const navigate = useNavigate();

    const [choosed, setChoosed] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [table, setTable] = useState(false);

    const handleChoosedDelivery = () => {
        setChoosed(true);
        setDelivery(true);
    }

    const handleBackFromDelivery = () => {
        setChoosed(false);
        setDelivery(false);
    }

    const handleChoosedPersonal = () => {
        setChoosed(true);
        navigate('/payment');
    }

    const handleChoosedTable = () => {
        setChoosed(true);
        setTable(true);
    }

    return (
        <div className="h-100">
            {!choosed && (
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h2>Wybierz sposób dostawy</h2>
                    <div className="w-100 d-flex justify-content-center">
                        <button className="button-delivery" onClick={handleChoosedDelivery}>Dostawa</button>
                        <button className='button-personal' onClick={handleChoosedPersonal}>Odbiór osobisty</button>
                        <button className="button-table" onClick={handleChoosedTable}>Do stolika</button>
                    </div>
                    <Link to="/cart"><button className='ovr-btn'>Wróć</button></Link>
                </div>
            )}
            {delivery && (
                <div className="pb-2">
                    <AddressForm />
                    <button className='ovr-btn' onClick={handleBackFromDelivery}>Powrót</button>
                </div>
            )}
            {table && (
                <div className="pb-2">
                    <TableForm />
                    <button className='ovr-btn' onClick={handleBackFromDelivery}>Powrót</button>
                </div>
            )}
            <PopupTimer />
        </div>
    )
}

export default DeliveryMethod;