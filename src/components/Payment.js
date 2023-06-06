import { Formik, Form } from 'formik';
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopupTimer from './PopupTimer';
import { CartContext } from '../context/CartContext';

const Payment = () => {
    const [choosed, setChoosed] = useState(false);
    const [card, setCard] = useState(false);
    const [cash, setCash] = useState(false);

    const { summary } = useContext(CartContext);
    

    const navigate = useNavigate();

    const handleChoosedCard = () => {
        setChoosed(true);
        setCard(true);
    }

    const handleChoosedCash = () => {
        setChoosed(true);
        setCash(true);
        navigate('/order-done');
    }

    const handlePayment = (values, { setFieldValue }) => {
        setFieldValue('paid', true);
        navigate('/order-done');
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
                <div className="h-100 d-flex justify-content-center align-items-center text-center">
                   <Formik initialValues={{ paid: false }} onSubmit={handlePayment}>
                        <Form>
                            <h4>Suma do zapłaty</h4>
                            <h3>{summary} zł</h3>
                            <button className='ovr-btn' type="submit">Zapłać</button>
                        </Form>
                    </Formik>
                </div>
            )}
            <PopupTimer />
        </div>
    )
}

export default Payment;