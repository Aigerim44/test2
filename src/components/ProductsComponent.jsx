import React from 'react';
import { useSelector } from 'react-redux';

const ProductDisplay = () => {
    const products = useSelector((state) => state.products.products);
    const currentProductIndex = useSelector((state) => state.products.currentProductIndex);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    const product = products[currentProductIndex];

    return (
        <div className="product-display">
            <h2>{product.title}</h2>
            <img src={product.images[0]} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDisplay;
