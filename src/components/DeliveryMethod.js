import React from "react";
import { Link } from "react-router-dom";
import AddressForm from "./AddressForm";

const DeliveryMethod = () => {

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

    // const handleChoosedPersonal = () => {
    //     setChoosed(true);
    //     setPersonal(true);
    // }

    return (
        <div className="h-100">
            {!choosed && (
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h2>Wybierz sposób dostawy</h2>
                    <div>
                        <button className="ovr-btn" onClick={handleChoosedDelivery}>Dostawa</button>
                        {/* <button onClick={handleChoosedPersonal}>Odbiór osobisty</button> */}
                        <Link to="/payment"><button className='ovr-btn'>Odbiór osobisty</button></Link>
                    </div>
                    <Link to="/cart"><button className='ovr-btn'>Wróć</button></Link>
                </div>
            )}
            {delivery && (
                <div>
                    <AddressForm />
                    <button className='ovr-btn' onClick={handleBackFromDelivery}>Powrót</button>
                </div>
            )}
        </div>
    )
}

export default DeliveryMethod;