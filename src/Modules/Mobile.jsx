import { Products } from '../Data/Mobiledata'
import React from 'react';
 import { FaStar } from "react-icons/fa6";
 import {Row , Col} from 'react-bootstrap'
import Header from '../Componends/Header'
import Sidenav from '../Componends/Sidenav';
import { Link } from 'react-router-dom';



function Mobile() {
        
  return (
  <Row>
    <Header/>
    <Col sm={2}>
     <Sidenav/>
    </Col>
    <Col sm={10}>

     <div>
     <div className='flexdirection'>
       {
         Products.map((e) =>{
           return (
            <Link to={`/mobile/${e.id}`}>

             <div className='all'>
            
               <img src={e.image} alt={e.Brand} style={{ width: '250px' }} />
                            <p><strong>Id : </strong>{e.id}</p>
                            <p><strong>Brand : </strong>{e.Brand}</p>
                            <p><strong>Colour : </strong>{e.Colour}</p>
                            <p><strong>Price : </strong>{e.price}/-</p>
                           <p className='rating'>{e.rating} { <FaStar /> } <FaStar /> <FaStar /></p>
              
               </div>
               </Link>
 
            
             
         )})
       }
     </div>
     </div>
    
    </Col>
    

  </Row>
      
  )
}

export default Mobile
           



