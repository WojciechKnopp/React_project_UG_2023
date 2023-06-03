import React, { useContext } from "react";
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import PopupTimer from "./PopupTimer";

const Page = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className="Page">
            <ProductList/>
            <div className="bottom-panel fixed-bottom d-flex justify-content-center align-items-center">
            <span className="fs-5">Koszyk: {cartItems.length}</span>
            <Link to="/cart"><button className="ovr-btn">Przejdź do podsumowania</button></Link>
            <Link to="/"><button className="ovr-btn">Anuluj zamówienie</button></Link>
            </div>
            <PopupTimer />
        </div>
    );
}
export default Page;