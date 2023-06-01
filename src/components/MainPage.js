import React from "react";
import { Link } from 'react-router-dom';

const MainPage = () => {

    return (
        <div className="MainPage">
            <h1>Witaj w kiosku</h1>
            <Link to="/products">Przejdź do produktów</Link>
        </div>
    )
}

export default MainPage;