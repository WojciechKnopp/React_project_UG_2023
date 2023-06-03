import React, { useState, useContext, useMemo } from 'react';
import { useProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductList = ({onAddToCart}) => {
    const { products } = useProductContext();

    // shopping cart
    const { addToCart } = useContext(CartContext);
    const handleAddToCart = (product) => {
        addToCart(product);
    };

    // filtering products
    const [filterText, setFilterText] = useState('');
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            return product.name.toLowerCase().includes(filterText.toLowerCase());
        });
    }, [products, filterText]);

    const handleSearchChange = (event) => {
        setFilterText(event.target.value);
    };

    return (
        <>
        <div className='d-flex justify-content-center'>
            <input placeholder='Wyszukaj produkt' type="text" value={filterText} onChange={handleSearchChange} />
        </div>
        <div className="product-list d-flex flex-wrap">
            {filteredProducts.map(product => (
                <div className="product card" key={product.id}>
                    <img className='card-img-top' src={product.image} alt={product.name} />
                    <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <p className="card-text"><strong>{product.price} zł</strong></p>
                        <Link to={`/products/${product.id}`} className='ovr-btn'>Szczegóły</Link>
                        <button className='ovr-btn' onClick={() => handleAddToCart(product)}>Dodaj do koszyka</button>
                    </div> 
                </div>
            ))}
        </div>
        </>
    );
}

export default ProductList;