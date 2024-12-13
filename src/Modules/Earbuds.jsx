import Sidenav from '../Componends/Sidenav';
import { Products } from '../Data/Earbudsdata'
import { FaStar } from 'react-icons/fa';
import {Row , Col} from 'react-bootstrap'
import Header from '../Componends/Header'
import { Link } from 'react-router-dom';
function Earbuds() {
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
          <Link to={`/earbuds/${e.id}`}>
          <div className='all'>

             
              <img src={e.image} alt={e.Brand} style={{ width: '250px' }} />
              <p><strong>Id : </strong>{e.id}</p>
              <p><strong>Brand : </strong>{e.Brand}</p>
              <p><strong>Colour : </strong>{e.Colour}</p>
              <p><strong>Price : </strong>{e.price}/-</p>
             <p className='rating'>{e.rating} { <FaStar /> } <FaStar /> <FaStar /></p>

            </div>
            </Link>
  );
}
      )
    }
    </div>
    </Col>
    </Row>    

  )
}      
      


export default Earbuds