import React from 'react'
import { Products } from'../Data/Tvdata';
import { FaStar } from 'react-icons/fa';
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
      Products.map((e) =>{
        return (
          <Link to={`/Tv/${e.id}`}>

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

    </Col>
    

  </Row>
    
  )
}

export default Tv