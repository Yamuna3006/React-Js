import React from 'react';
import { useCart } from './context/Cartcontext';

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info text-center">Your cart is empty</div>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div
              key={item.id}
              className="col-md-6 offset-md-3 mb-4"
            >
              <div className="card shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-6 text-center p-2">
                    <img
                      src={item.image}
                      alt={item.name || 'Product'}
                      className="img-fluid rounded"
                      style={{ maxHeight: '150px' }}
                    />
                  </div>
                  <div className="col-md-4 p-3">
                    <h5 className="card-title mb-2">{item.Brand}</h5>
                    <p className="mb-1">ID: {item.id}</p>
                    <p className="mb-1">Color: {item.Color}</p>
                    <p className="mb-2 fw-bold">Price: ₹{item.Price}</p>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
