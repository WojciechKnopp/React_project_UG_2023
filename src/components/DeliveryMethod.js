import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressForm from "./AddressForm";
import PopupTimer from './PopupTimer';

const DeliveryMethod = () => {

    const navigate = useNavigate();

    const [choosed, setChoosed] = React.useState(false);
    const [delivery, setDelivery] = React.useState(false);
    // const [personal, setPersonal] = React.useState(false);

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
        // setPersonal(true);
        navigate('/payment');
    }

    return (
        <div className="h-100">
            {!choosed && (
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h2>Wybierz sposób dostawy</h2>
                    <div className="w-100 d-flex justify-content-center">
                        <button className="button-delivery" onClick={handleChoosedDelivery}>Dostawa</button>
                        <button className='button-personal' onClick={handleChoosedPersonal}>Odbiór osobisty</button>
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
            <PopupTimer />
        </div>
    )
}

export default DeliveryMethod;