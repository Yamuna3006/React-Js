import React from 'react';
 import {Row , Col} from 'react-bootstrap'
import Header from '../Componends/Header'
import Sidenav from '../Componends/Sidenav';
import { Link } from 'react-router-dom';
import {Watchdata} from '../Data/Watchdata';




function Watch() {
        
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
        Watchdata.map((e) =>{
           return (
            <Link to={`/watch/${e.id}`}  className="product-link">
               <div className="product-cardi">
             <img src={e.image} alt={e.Brand}  className="product-image" />
               <div className="product-details">
                            <p><strong>Id : </strong>{e.id}</p>
                            <p><strong>Brand : </strong>{e.Brand}</p>
                            <p><strong>Colour : </strong>{e.Color}</p>
                            <p><strong>Price : </strong>{e.Price}/-</p>
              
               </div>
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

export default Watch
           



