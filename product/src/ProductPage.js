// ProductPage.js
import React, { useState, useEffect } from 'react';

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=1&minPrice=1&maxPrice=10000');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                if (data.length > 0) {
                    setProduct(data[0]); // Assuming we are fetching only one product
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="product-page">
            <h1>Product Details</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Product Name: {product.productName}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Discount: {product.discount}%</p>
                    <p>Availability: {product.availability}</p>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
