import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { useCart } from '../../Componends/context/Cartcontext'; 
import Header from '../../Componends/Header';
import { Earbudsdata } from '../../Data/Earbudsdata';

function Budsdetails() {
  const { addToCart } = useCart(); 
  let { id } = useParams(); 
  let productDet = Earbudsdata.find((item) => item.id == id); 

  if (!productDet) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(productDet); 
  };

  return (
    <div>
          <Header />
      <Row>
        <Col sm={12}>
          <div
            className="container d-flex justify-content-around border bg-warning text-dark rounded align-items-center py-4 "
            style={{ marginTop: '200px' }}// Added margin-top here
          >
            <div className="data" >
              <p>Product ID: {productDet.id}</p>
              <p>Brand: {productDet.Brand}</p>
              <p>Color: {productDet.Color}</p>
              <p>Price: {productDet.Price}</p>
              <button className="btn btn-outline-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
            <div className="product rounded" >
              <img
                src={productDet.image}
                style={{ width: '300px', height: '200px', borderRadius: '10px' }}
                alt={productDet.name}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Budsdetails;
