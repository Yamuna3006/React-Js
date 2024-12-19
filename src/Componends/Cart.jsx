
import React from 'react';
import { useCart } from './context/Cartcontext'

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
 
    <div className='new bg-light align-items-center py-4 '>
      <center><h2  className='pic align-items-center '>Shopping Cart</h2></center>
     
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <div className="container-fluid d-flex justify-content-around border bg-warning text-dark rounded align-items-center py-2 my-5">

            <div className="product">

              <img src={item.image} alt={item.name || 'Product image'} width="180" />
              </div>
              <div className="data">

              <span> Id: {item.id}</span><br/>
              <span>Brand: {item.Brand}</span><br/>
              <span>Color: {item.color}</span><br/>
              <span> Price: ₹{item.price}</span><br/>
            <button  className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart
