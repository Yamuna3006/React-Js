import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'




function Login(){
    return(
       <div className= 'home'>
            <h1>Login</h1><br/>
            <form action="">
                <input type="text" placeholder="Enter your Username" /> <br/> 
                <input type="password" placeholder="Enter your Password" />
            </form>
            <p>Don't you have an Account? </p>
            <Link to="/signup"><button type="button" class="btn btn-outline-success m-3">Signup</button></Link>
            
            <Link to="/dashboard"><button type="button" class="btn btn-outline-success m-3">Login</button></Link>
        </div>
    )
}
export default Login