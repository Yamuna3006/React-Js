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
           <li><Link to="/dashboard"><button type="button" class="btn btn-dark">Dashboard</button></Link></li>
           <li><Link to="/mobile" > <button type="button" class="btn btn-dark">Mobile</button></Link></li>
           <li><Link to="/laptop" > <button type="button" class="btn btn-dark">Laptops</button></Link></li>
           <li><Link to="/earbuds"> <button type="button" class="btn btn-dark">Earbuds</button></Link></li>
           <li><Link to="/tv" >     <button type="button" class="btn btn-dark">TV</button></Link></li>
           <li><Link to="/watch" >  <button type="button" class="btn btn-dark">Watch</button></Link></li>
           <li><Link to="/Cart" >   <button className="btn btn-warning w-5 mt-3">Cart ({cart.length})</button></Link></li>
           <li><Link to="/React-Js" >   <button className="btn btn-warning w-5 mt-3 ">Logout</button></Link></li>

           </ul>
           </div>
           </header>
           </div>
         
      
  );
}

export default Header;
