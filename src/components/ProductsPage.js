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
            <span className="cart-items">Liczba elementów w koszyku: {cartItems.length}</span>
            <Link to="/cart"><button>Przejdź do podsumowania</button></Link>
            <PopupTimer />
        </div>
    );
}
export default Page;