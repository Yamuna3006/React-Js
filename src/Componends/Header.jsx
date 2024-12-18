import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Componends/context/Cartcontext';

function Header() {
  const { cart } = useCart();

  return (
    <div>
      <header>
        <Link to="/">
          <button type="button" className="btn btn-outline-success m-3">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button type="button" className="btn btn-outline-success m-3">
            Signup
          </button>
        </Link>
        <Link to="/Cart">
          <button className="btn btn-primary w-5 mt-3">
            Cart ({cart.length})
          </button>
        </Link>
      </header>
    </div>
  );
}

export default Header;
