import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { useCart } from '../../Componends/context/Cartcontext'; 
import Header from '../../Componends/Header';
import { Mobiledata} from '../../Data/Mobiledata'

function Mobiledetails() {
  const { addToCart } = useCart();
  let { id } = useParams();
  let productDet = Mobiledata.find((item) => item.id == id);

  if (!productDet) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(productDet);
  };

  return (
    <div>
      <Header />
      <Row className="justify-content-center" style={{ marginTop: '100px' }}>
        <Col sm={12} md={8} lg={6}>
          <div className="product-box p-3 mt-1 rounded shadow-lg bg-light">
            <Row className="align-items-center">
              {/* Left side - Product Info */}
              <Col xs={12} md={6}>
                <div className="product-info">
                  <h2 className="product-title">{productDet.Brand} </h2>
                  <p><strong>Product ID:</strong> {productDet.id}</p>
                  <p><strong>Color:</strong> {productDet.Color}</p>
                  <p><strong>Price:</strong> {productDet.Price}/-</p>
                  <button className="btn btn-primary " onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </Col>

              {/* Right side - Product Image */}
              <Col xs={12} md={6}>
                <div className="product-image text-center">
                  <img
                    src={productDet.image}
                    alt={productDet.name}
                    className="img-fluid rounded"
                    style={{ Width: '250px', height: '180px' }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Mobiledetails;
