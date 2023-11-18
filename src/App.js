import React, { useState } from 'react';

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description for Product 1', inCart: false },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', inCart: false },
    // Add more products as needed
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, inCart: true } : product
    );
    setProducts(updatedProducts);

    const selectedProduct = products.find((product) => product.id === productId);
    setCart([...cart, selectedProduct]);
  };

  const removeFromCart = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, inCart: false } : product
    );
    setProducts(updatedProducts);

    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            {product.inCart ? (
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            )}
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>

      <p>Total Items in Cart: {cart.length}</p>
    </div>
  );
};

export default ShoppingCart;
