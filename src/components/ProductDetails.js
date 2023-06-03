import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useProductContext();
    const product = products.find(product => product.id === parseInt(id));

    return (
        // show details of the product
        <div className="product details" key={product.id}>
            <img className='card-img-top' src={product.image} alt={product.name} />
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text"><strong>{product.price} zł</strong></p>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default ProductDetails;