import Sidenav from '../Componends/Sidenav';
import { Earbudsdata } from '../Data/Earbudsdata';
import { Row, Col } from 'react-bootstrap';
import Header from '../Componends/Header';
import { Link } from 'react-router-dom';


function Earbuds() {
  return (
    <Row>
      <Header />
      <Col sm={2}>
        <Sidenav />
      </Col>
      <Col sm={10}>
        <div className="flexdirection">
          {Earbudsdata.map((e) => {
            return (
              <Link to={`/earbuds/${e.id}`} key={e.id} className="product-link">
                <div className="product-cardi">
                  <img src={e.image} alt={e.Brand} className="product-image" />
                  <div className="product-details">
                    <p><strong>Id:</strong> {e.id}</p>
                    <p><strong>Brand:</strong> {e.Brand}</p>
                    <p><strong>Colour:</strong> {e.Color}</p>
                    <p><strong>Price:</strong> {e.Price}/-</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Col>
    </Row>
  );
}

export default Earbuds;
