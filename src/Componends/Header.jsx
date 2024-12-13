import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <header>
      <Link to="/"><button type="button" class="btn btn-outline-success m-3">Login</button></Link>
      <Link to="/signup"><button type="button" class="btn btn-outline-success m-3">Signup</button></Link>
      <Link to=""><button type="button" class="btn btn-outline-success m-3">Cart</button></Link>

      </header>
    </div>
  )
}

export default Header