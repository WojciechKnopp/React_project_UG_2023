import React, { useState, useContext, useMemo } from 'react';
import { useProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

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
        <div>
            <input type="text" value={filterText} onChange={handleSearchChange} />
        </div>
        <div className="product-list">
            {filteredProducts.map(product => (
                <div className="product" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <img className='product-image' src={product.image} alt={product.name} /><br></br>

                    {detailsVisibleId === product.id && <p>{product.description}</p>}
                    <button onClick={()=> handleDetailsClick(product.id)}>
                        {detailsVisibleId === product.id ? 'ukryj' : 'pokaż'}
                    </button>
                    <button onClick={() => handleAddToCart(product)}>Dodaj do koszyka</button>
                </div>
            ))}
        </div>
        </>
    );
}

export default ProductList;