import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { useProductContext } from '../context/ProductContext';
import PopupTimer from './PopupTimer';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    // const { products } = useProductContext();
    // const product = products.find(product => product.id === parseInt(id));

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
                setProduct(response.data);
            } catch(err){
                console.log(err);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="product details pb-3" key={product.id}>
            <img className='card-img-top' src={product.image} alt={product.name} />
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text"><strong>{product.price} zł</strong></p>
                <p><strong>Opis: </strong><br/>{product.description}</p>
                <p><strong>Składniki: </strong>{product.ingredients}</p>
            </div>
            <Link to='/products'><button className='ovr-btn'>Wróć do produktów</button></Link>
            <PopupTimer />
        </div>
    );
}

export default ProductDetails;