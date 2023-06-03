import React from "react";
import { Link } from 'react-router-dom';

const MainPage = () => {

    return (
        <div className="h-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4">Witaj w kiosku</h1>
            <Link to="/products"><button className="btn-start">Złóż zamówienie</button></Link>
        </div>
    )
}

export default MainPage;