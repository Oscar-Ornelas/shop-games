import React from 'react';
import {Link} from 'react-router-dom';

function LowerHeader(props) {
  return (
    <div className="header-lower">
      <div className={`header-content-lower ${props.navSlide ? "navigation-open-lower" : "navigation-close-lower"}`}>
        <Link to="/checkout" className="link">
          <a className="cart-link">
            <i class="fas fa-shopping-cart"></i>{props.cart.length > 0 && <span className="cart-counter">{props.cart.length}</span>}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LowerHeader;
