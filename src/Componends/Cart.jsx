
import React from 'react';
import { useCart } from './context/Cartcontext'

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2 >Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name || 'Product image'} width="50" />
              <span>{item.name}</span>
              <span> Price: ₹{item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart

