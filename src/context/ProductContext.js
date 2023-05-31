import React, { createContext, useState, useEffect, useContext } from 'react';
import ProductData from '../data.json';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const productsData = await ProductData;
                setProducts(productsData);
            }
            catch(err){
                console.log(err);
            }
        }
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