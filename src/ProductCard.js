// 
import React from 'react';

const ProductCard = ({ name, price, rating }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      {/* Add more details like discount, availability, etc. */}
    </div>
  );
};

export default ProductCard;
