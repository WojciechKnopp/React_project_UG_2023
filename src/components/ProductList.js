import React, { useState } from 'react';
import { useProductContext } from '../ProductContext';

const ProductList = ({onAddToCart}) => {
    const { products } = useProductContext();

    const [detailsVisibleId, setDetailsVisibleId] = useState(null);

    const handleDetailsClick = (Id) => {
        if (detailsVisibleId === Id) {
            // hide showed details
            setDetailsVisibleId(null);
        } else {
            // show details
            setDetailsVisibleId(Id);
        }
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <img className='product-image' src={product.image} alt={product.name} /><br></br>

                    {detailsVisibleId === product.id && <p>{product.description}</p>}
                    <button onClick={()=> handleDetailsClick(product.id)}>
                        {detailsVisibleId === product.id ? 'ukryj' : 'pokaż'}
                    </button>
                    <button onClick={() => onAddToCart(product)}>Dodaj do koszyka</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;