import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='home'>
      <h1   className="text-center mb-4">Signup</h1>
      <div className='card1'>

            <form action="">
                <input type="text"  className='box' placeholder="Enter your email" /><br/>
                <input type="text"  className='box' placeholder="Enter your Username" /> <br/> 
                <input type="password"  className='box' placeholder="Enter your Password" /><br/>
                <input type="password"  className='box' placeholder="Enter your confirm Password" />
            </form>
            <Link to="/React-Js"><button type="button" class="btn btn-outline-success m-3">Signup</button></Link>
      </div>

    </div>
  )
}

export default Signup