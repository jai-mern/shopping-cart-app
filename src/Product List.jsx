import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, removeFromCart, cartItems }) => {
  return (
    <div>
      <h2>Available Products</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={cartItems.includes(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
