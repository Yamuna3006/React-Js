import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='home'>
      <h1>Signup</h1><br/>
            <form action="">
                <input type="text" placeholder="Enter your email" /><br/>
                <input type="text" placeholder="Enter your Username" /> <br/> 
                <input type="password" placeholder="Enter your Password" /><br/>
                <input type="password" placeholder="Enter your confirm Password" />
            </form>
            <Link to="/React-Js"><button type="button" class="btn btn-outline-success m-3">Signup</button></Link>

    </div>
  )
}

export default Signup