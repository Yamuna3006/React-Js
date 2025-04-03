import React from 'react';
 import {Row , Col ,Card} from 'react-bootstrap'
import Header from '../Componends/Header'
import { Link } from 'react-router-dom';
import {Mobiledata} from '../Data/Mobiledata'
import '../App.css'; // Make sure to create this CSS file for custom styling.




function Mobile() {
        
  return (
  <Row>
    <Header/>
    
    <Col sm={12}>
    <div className="product-list"
        style={{ marginTop: '10px' }}>
          {Mobiledata.map((e) => {
            return (
              
                <Link to={`/mobile/${e.id}`} className="product-link">
                  <Card className="product-card">
                    <Card.Img variant="top" src={e.image} alt={e.Brand} className="product-image" />
                    <Card.Body>
                      <Card.Title>{e.Brand}</Card.Title>
                      <Card.Text>
                        <strong>Color:</strong> {e.Color}
                      </Card.Text>
                      <Card.Text>
                        <strong>Price:</strong> {e.Price}/-
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
            

    
    
 
            
             
         )})
       }
     </div>
     
    
    </Col>
    

  </Row>
      
  )
}

export default Mobile
           



