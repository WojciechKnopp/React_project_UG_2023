import React, { useContext } from "react";
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import PopupTimer from "./PopupTimer";

const Page = () => {

    const { cartItems } = useContext(CartContext);

    return (
        <div className="page pb-5">
            <ProductList/>
            <div className="bottom-panel fixed-bottom d-flex justify-content-center align-items-center">
            <Link to="/cart" className="text-end" style={{flex: "1 0 0", justifyContent: "flex-end"}}><button className="ovr-btn">Przejdź do podsumowania</button></Link>
            <span className="cart-image">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItems.length}</span>
            </span>
            <Link to="/" style={{flex: "1 0 0"}}><button className="ovr-btn">Anuluj zamówienie</button></Link>
            </div>
            <PopupTimer />
        </div>
    );
}
export default Page;