import React, { useState, useEffect, useRef } from 'react';
import { CartContext } from "../context/CartContext";

const PopupTimer = () => {
    // clear cart
    const { clearCart, cartItems } = React.useContext(CartContext);

    // popup
    const [showPopup, setShowPopup] = useState(false);
    const handlePopupButtonNo = () => {
        setShowPopup(false);
        resetTimer();
    };

    // go to Welcome page
    const goBackToWelcomePage = () => {
        // przeniesienie na strone domowa
        window.location.href = "/";
        clearCart();
    }

//#region timer to popup
    const timerRef = useRef(null);

    const [remainingTime, setRemainingTime] = useState(10);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
        setRemainingTime(prevTime => {
            if (prevTime === 0) {
            clearInterval(timerRef.current);
            goBackToWelcomePage();
            }
            return prevTime - 1;
        });
        }, 1000); // Odliczanie co 1 sekundę
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setRemainingTime(10); // Resetowanie czasu
        startTimer();
    };

    useEffect(() => {
        if (showPopup) {
        startTimer();
        } else {
        clearInterval(timerRef.current);
        }

        return () => {
        clearInterval(timerRef.current);
        };
    }, [showPopup]);
//#endregion

//#region main timeout
    useEffect(() => {
        let timeout;

        const resetTimeout = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                // popup window asking are you there?
                setShowPopup(true);
            }, 1000 * 30 ); // 30 seconds
            
            document.addEventListener('mousemove', resetTimeout);
            document.addEventListener('keydown', resetTimeout);
            document.addEventListener('wheel', resetTimeout);
        };

        resetTimeout();

        return () => {
            clearTimeout(timeout);
            document.removeEventListener('mousemove', resetTimeout);
            document.removeEventListener('keydown', resetTimeout);
            document.addEventListener('wheel', resetTimeout);
        };
    }, []);
//#endregion

    return (
        <div>
        {showPopup && (
            <div className="popup">
                <div className="popup-content">
                    <h3>Jesteś z nami?</h3>
                    <div className="buttons">
                    <button onClick={handlePopupButtonNo}>Tak</button>
                    <button onClick={goBackToWelcomePage}>Nie ({remainingTime})</button>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
}

export default PopupTimer;