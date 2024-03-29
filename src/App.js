import React, {useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import GameDetail from './components/GameDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Search from './components/Search';
import LowerHeader from './components/LowerHeader';
import Footer from './components/Footer';


function App() {
  const [cart, setCart] = useState({games: [], cartCount: 0, gamesPrice: 0, tax: 0, cartPaid: false});
  const [navSlide, setNavSlide] = useState(false);

  return (
    <>
      <Header cart={cart} navSlide={navSlide} setNavSlide={setNavSlide}/>
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/detail/:gameId">
            <GameDetail cart={cart} setCart={setCart}/>
          </Route>
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart}/>
          </Route>
          <Route path="/search/:searchValue">
            <Search/>
          </Route>
          <Route path="/checkout">
            {cart.cartCount > 0 ?
              <Checkout cart={cart} setCart={setCart}/>
            :
              <Redirect to="/"/>
            }
          </Route>
          <Route path="/order-confirmation">
            {cart.cartPaid === true ?
              <OrderConfirmation setCart={setCart}/>
            :
              <Redirect to="/"/>
            }
          </Route>
        </Switch>
        <Footer/>
      </div>
      <LowerHeader cart={cart} navSlide={navSlide} setNavSlide={setNavSlide}/>
    </>
  );
}

export default App;
