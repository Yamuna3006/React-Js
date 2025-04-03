import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Componends/Header';  // Go up one directory from Dashboard, then into Components
import { Mobiledata } from '../Data/Mobiledata';
import { Earbudsdata } from '../Data/Earbudsdata';
import { Laptopdata } from '../Data/Laptopdata';
import { Tvdata } from '../Data/Tvdata';
import { Watchdata } from '../Data/Watchdata';
import { Row, Col, Button, Card } from 'react-bootstrap'; // Use Card from React Bootstrap for a clean UI

const Dashboard = () => {
  const display = Mobiledata.slice(0, 4);
  const display1 = Earbudsdata.slice(0, 4);
  const display2 = Laptopdata.slice(0, 4);
  const display3 = Tvdata.slice(0, 4);
  const display4 = Watchdata.slice(0, 4);

  const renderProductSection = (title, data, route) => (
    <div className="content-wrapper mb-5">
      <center>
        <h1 className="mb-4 text-primary display-4">{title}</h1>
      </center>
      <Row className="g-4">
        {data.map((e) => (
          <Col xs={12} sm={6} md={3} key={e.id}>
            <Card className="shadow-lg border-light rounded product-card">
              <Card.Body>
                <h5 className="card-title text-center">{e.id}</h5>
                <Card.Img
                  variant="top"
                  src={e.image}
                  alt={e.Brand}
                  className="product-img"
                />
                <p className="card-text text-center mt-2"><strong>Brand:</strong> {e.Brand}</p>
                <p className="card-text text-center"><strong>Price:</strong> {e.Price}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link to={route}>
          <Button variant="outline-primary" className="px-4 view-all-btn">View All</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="abc">
      {/* Header should be placed at the top */}
      <Header />

      <Row>
        <Col sm={12}>
          <div className="content-wrapper">
            {renderProductSection("Mobile Collections", display, '/Mobile')}
            {renderProductSection("Earbuds Collections", display1, '/Earbuds')}
            {renderProductSection("Laptop Collections", display2, '/Laptop')}
            {renderProductSection("TV Collections", display3, '/Tv')}
            {renderProductSection("Watch Collections", display4, '/Watch')}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
