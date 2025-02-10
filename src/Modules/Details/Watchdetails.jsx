import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { useCart } from '../../Componends/context/Cartcontext'; 
import Sidenav from '../../Componends/Sidenav';
import Header from '../../Componends/Header';
import { Watchdata} from '../../Data/Watchdata';

function Watchdetails() {
  const { addToCart } = useCart(); 
  let { id } = useParams(); 
  let productDet = Watchdata.find((item) => item.id == id); 

  
  if (!productDet) {
    return <p>Product not found</p>;
  }

  
  const handleAddToCart = () => {
    addToCart(productDet); 
  };

  return (
    <div>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <Header />
          <div className="container d-flex justify-content-around border bg-warning text-dark rounded align-items-center py-4">
            <div className="data">
              <p>Product ID: {productDet.id}</p>
              <p>Color: {productDet.Color}</p>
              <p>Brand: {productDet.Brand}</p>
              <p>Price: ₹{productDet.price}</p>
              <button className="btn btn-outline-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
            <div className="product">
              <img
                src={productDet.image}
                style={{ width: '300px', height: '200px' }}
                alt={productDet.name}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Watchdetails;
