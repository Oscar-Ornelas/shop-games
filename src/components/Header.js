import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

function Header(props) {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  function handleChange(e) {
    const {value} = e.target;
    setSearch(value);
  }

  function toggleNavSlide() {
    props.setNavSlide(prevNavSlide => !prevNavSlide);
  }

  function changeRoute() {
    if(search !== "") {
      history.push(`/search/${search}`);
      window.location.reload();
    }
  }

  return (
    <header style={{zIndex: props.navSlide ? `101` : `99`}} className="header visible">
      <div className="nav-toggler-container">
        <button onClick={toggleNavSlide} className="nav-toggler"><i class="fas fa-bars"></i></button>
      </div>
      <div className={`header-content ${props.navSlide ? "navigation-open" : "navigation-close"}`}>
        <div className="logo-container">
          <Link to="/" className="link">
            <h1 onClick={() => window.scrollTo(0, 0)} className="logo">ShopGames</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <form className="form">
                <input name="searchValue" placeholder="Search" value={search} onChange={handleChange} className="search-input" type="text"></input>
                <button onClick={changeRoute} className="search-btn"><i className="fas fa-search"></i></button>
              </form>
            </li>
          </ul>
        </nav>
        <div className="header-cart">
          <Link to="/checkout" className="link">
            <a className="cart-link">
              <i class="fas fa-shopping-cart"></i>{props.cart.length > 0 && <span className="cart-counter">{props.cart.length}</span>}
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
