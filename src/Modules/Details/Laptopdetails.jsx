import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Componends/Sidenav'
import {Laptopdata} from '../../Data/Laptopdata'
import Header from '../../Componends/Header'
function Laptopdetails() {
    const [cart , setCart] = useState(0)
    let { id } = useParams()
    let productDet =Laptopdata.find((item) => item.id == id)
    return (
        <div>

<Row>

    
      <Col sm={2}>
       <Sidenav/>
      </Col>
      <Col sm={10}>
      <Header/>
      <div className='container d-flex justify-content-around border bg-dark text-light rounded align-items-center py-4'>
        <div className='data'>
                <p>{cart}</p>
                <p>{productDet.id}</p>
                <p>{productDet.Color}</p>
                <p>{productDet.Brand}</p>
                <p>{productDet.Price}</p>

             <button className='btn btn-outline-primary' onClick={()=>setCart(cart+1)}>add to cart</button>
         </div>
         <div className='product'>
           <img src={productDet.image} style={{ width: "300px", height:"200px" }} alt="" />
         </div>
        </div>
    </Col>
</Row>    
    </div>

    )
}

export default Laptopdetails