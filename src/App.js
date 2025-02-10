import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Componends/Login';
import Signup from './Componends/Signup';
import Sidenav from './Componends/Sidenav';
import Dashboard from './Modules/Dashboard';
import Earbuds from './Modules/Earbuds';
import Mobile from './Modules/Mobile';
import Laptop from './Modules/Laptop';
import TV from './Modules/Tv';
import Watch from './Modules/Watch';
import Budsdetails from './Modules/Details/Budsdetails';
import Laptopdetails from './Modules/Details/Laptopdetails';
import Mobiledetails from './Modules/Details/Mobiledetails';
import Tvdetails from './Modules/Details/Tvdetails';
import Watchdetails from './Modules/Details/Watchdetails';
import Cart from './Componends/Cart';
import { CartProvider } from './Componends/context/Cartcontext';

function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <Routes>
          <Route path='/React-Js' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/sidenav' element={<Sidenav />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/earbuds' element={<Earbuds />}></Route>
          <Route path='/mobile' element={<Mobile />}></Route>
          <Route path='/watch' element={<Watch/>}></Route>
          <Route path='/laptop' element={<Laptop />}></Route>
          <Route path='/tv' element={<TV />}></Route>
          <Route path='/earbuds/:id' element={<Budsdetails />}></Route>
          <Route path='/mobile/:id' element={<Mobiledetails />}></Route>
          <Route path='/laptop/:id' element={<Laptopdetails />}></Route>
          <Route path='/tv/:id' element={<Tvdetails />}></Route>
          <Route path='/watch/:id' element={<Watchdetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        </CartProvider>
      </Router>
    </div>
  )
}

export default App
