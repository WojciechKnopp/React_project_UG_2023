import { Formik, Form } from 'formik';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupTimer from './PopupTimer';

const Payment = () => {
    const [choosed, setChoosed] = useState(false);
    const [card, setCard] = useState(false);
    const [cash, setCash] = useState(false);

    const handleChoosedCard = () => {
        setChoosed(true);
        setCard(true);
    }

    const handleChoosedCash = () => {
        setChoosed(true);
        setCash(true);
        window.location.href = "/order-done"
    }

    const handlePayment = (values, { setFieldValue }) => {
        setFieldValue('paid', true);
        window.location.href = "/order-done"
    };

    return (
        <div className="h-100">
            {!choosed && (
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h2>Wybierz sposób płatności</h2>
                    <div className="w-100 d-flex justify-content-center">
                        <button className="button-card" onClick={handleChoosedCard}>Karta</button>
                        <button className='button-cash' onClick={handleChoosedCash}>Gotówka</button>
                    </div>
                    <Link to="/delivery"><button className='ovr-btn'>Wróć</button></Link>
                </div>
            )}
            {card && (
                <div className="pb-2">
                   <Formik initialValues={{ paid: false }} onSubmit={handlePayment}>
                        <Form>
                            <button type="submit">Zapłać</button>
                        </Form>
                    </Formik>
                </div>
            )}
            <PopupTimer />
        </div>
    )
}

export default Payment;