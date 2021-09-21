import React from 'react';
import {Link} from 'react-router-dom';

function LowerHeader(props) {
  return (
    <div className="header-lower">
      <div className={`header-content-lower ${props.navSlide ? "navigation-open-lower" : "navigation-close-lower"}`}>
        <Link to="/cart" className="link">
          <a className="cart-link">
            <i class="fas fa-shopping-cart"></i>{props.cart.cartCount > 0 && <span className="cart-counter">{props.cart.cartCount}</span>}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LowerHeader;
