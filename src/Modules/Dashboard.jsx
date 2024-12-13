import React from 'react';
import Sidenav from '../Componends/Sidenav';
import { Link } from 'react-router-dom';
import { Products } from '../Data/Mobiledata';
import { Row, Col } from 'react-bootstrap';

function Dashboard() {
  const display = Products.slice(0, 4);

  return (
    <div className="container-fluid">
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <div className="content-wrapper">
            <center><h1 className="mb-4 text-primary">Mobile Collections</h1></center>
            
            <Row className="g-4">
              {display.map((e) => (
                <Col xs={12} sm={6} md={3} key={e.id}>
                  <div className="dash">
                    <h5 className="card-title text-center">{e.id}</h5>
                    <img
                      src={e.image}
                      alt={e.Brand}
                      style={{ width: '150px', height: '190px', objectFit: 'contain' }}
                    />
                    <p className="card-text"><strong>Brand:</strong> {e.Brand}</p>
                    <p className="card-text"><strong>Price:</strong> {e.Price}</p>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-4">
              <Link to='/Mobile'>
                <button className="btn btn-outline-primary">View All</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
