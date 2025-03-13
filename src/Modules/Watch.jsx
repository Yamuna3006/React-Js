import React from 'react';
import { Row, Col ,Card } from 'react-bootstrap';
import Header from '../Componends/Header'
import { Link } from 'react-router-dom';
import { Watchdata } from '../Data/Watchdata';
import '../App.css'; // Make sure to create this CSS file for custom styling.


function Watch() {
  return (
    <>
      <Row>
      <Header />
        <Col sm={12}>
        <div className="product-list"
        style={{ marginTop: '140px' }}>
          {Watchdata.map((e) => {
            return (
              
                <Link to={`/watch/${e.id}`} className="product-link">
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
                );
              })}
            </div>
          
        </Col>
      </Row>
    </>
  );
}

export default Watch;
