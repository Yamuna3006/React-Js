import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
  <div className='side' >
    <ul>
      <Link to="/dashboard"><li>Dashboard</li></Link>
      <Link to="/mobile"><li>Mobile</li></Link>
      <Link to="/laptop"><li>Laptops</li></Link>
      <Link to="/earbuds"><li>Earbuds</li></Link>
      <Link to="/tv"><li>TV</li></Link>
      <Link to="/watch"><li>Watchs</li></Link>

    </ul>
    </div>
  )
}

export default Sidenav