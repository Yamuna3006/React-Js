import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'




function Login(){
    return(
    <div className= 'home'>
       <h1 className="text-center mb-4">Login</h1>
     
       
        <div className='card1'>
        <form action="">
        <input type="text" className='box'  placeholder=" Username" /> <br/> 
        <input type="password" className='box' placeholder="Password" />
        <p>Don't you have an Account? </p>
            <Link to="/signup"><button type="button" class="btn btn-outline-success m-3">Signup</button></Link>
            
            <Link to="/dashboard"><button type="button" class="btn btn-outline-success m-3">Login</button></Link>
            </form>
            </div>
            
        </div>
       
    

       
   
   
   
    )
}
export default Login