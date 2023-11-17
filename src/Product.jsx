import React from 'react';

const Product = ({ id, name, description, addToCart, removeFromCart, isInCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(id)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
