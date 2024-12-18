import { Link } from 'react-router-dom';
import Cart from './Cart';
function Topbar() {



  return (
    <div className="border p-2 d-flex justify-content-between">
      <p>TopBar</p>
      <div>
        <Link to="/Cart">
          <button className="btn btn-primary w-5 mt-3">
            Cart({Cart.length === 0})</button>
        </Link>
      </div>
    </div>
  )
}

export default Topbar