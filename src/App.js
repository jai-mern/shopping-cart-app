import React, { useState } from 'react';
import ProductList from './ProductList'; // Correct the path
import Cart from './Cart'; // Correct the path

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    // Add more products as needed
  ];

  const addToCart = (productId) => {
    setCartItems((prevCartItems) => [...prevCartItems, productId]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((id) => id !== productId));
  };

  return (
    <div>
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
