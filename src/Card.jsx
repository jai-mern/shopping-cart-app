import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((itemId) => (
          <li key={itemId}>
            Item {itemId} <button onClick={() => removeFromCart(itemId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
