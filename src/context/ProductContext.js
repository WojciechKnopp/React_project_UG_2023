import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/products/');
                setProducts(response.data);
            } catch(err){
                console.log(err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children} 
        </ProductContext.Provider>
    );
}

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductProvider };