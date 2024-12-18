import React from 'react'
import { Tvdata } from'../Data/Tvdata';
import Sidenav from '../Componends/Sidenav';
import {Row , Col} from 'react-bootstrap'
import Header from '../Componends/Header'
import { Link } from 'react-router-dom';
function Tv() {
  return (
    <Row>
    <Header/>
    <Col sm={2}>
     <Sidenav/>
    </Col>
    <Col sm={10}>
  
     <div className='flexdirection'>
    {
      Tvdata.map((e) =>{
        return (
          <Link to={`/Tv/${e.id}`} className="product-link">

          <div className="product-card">
          <img src={e.image} alt={e.Brand} className="product-image"/>
         <div className="product-details">
              <p><strong>Id : </strong>{e.id}</p>
              <p><strong>Brand : </strong>{e.Brand}</p>
              <p><strong>Colour : </strong>{e.Colour}</p>
              <p><strong>Price : </strong>{e.price}/-</p>
           </div>
            </div>
            </Link>
        )})
    
    }
  </div>

    </Col>
    

  </Row>
    
  )
}

export default Tv