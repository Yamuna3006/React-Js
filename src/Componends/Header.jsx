import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Componends/context/Cartcontext';

function Header() {
  const { cart } = useCart();

  return (
   <div>
    <header>
       <div className='side' >
           <ul className='side-list'>
           <li><Link to="/dashboard" className='side-link'>Dashboard</Link></li>
           <li><Link to="/mobile" className='side-link'>Mobile</Link></li>
           <li><Link to="/laptop" className='side-link'>Laptops</Link></li>
           <li><Link to="/earbuds" className='side-link'>Earbuds</Link></li>
           <li><Link to="/tv" className='side-link'>TV</Link></li>
           <li><Link to="/watch"  className='side-link'>Watchs</Link></li>
           <li><Link to="/Cart">
                 <button className="btn btn-warning w-5 mt-3">
                   Cart ({cart.length})
                   </button>
             </Link></li>
           </ul>
           </div>
           </header>
           </div>
      
  );
}

export default Header;
