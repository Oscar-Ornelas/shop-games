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


function App() {
  const [cart, setCart] = useState({games: [], cartCount: 0, gamesPrice: 0, tax: 0});
  const [navSlide, setNavSlide] = useState(false);

  return (
    <>
      <Header cart={cart} navSlide={navSlide} setNavSlide={setNavSlide}/>
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
        {cart.cartCount > 0 ?
          <>
            <Route path="/checkout">
              <Checkout cart={cart}/>
            </Route>
            <Route path="/order-confirmation">
              <OrderConfirmation setCart={setCart}/>
            </Route>
          </>
          :
          <Redirect to="/"/>
        }
        <Route path="/search/:searchValue">
          <Search/>
        </Route>
      </Switch>
      <LowerHeader cart={cart} navSlide={navSlide} setNavSlide={setNavSlide}/>
    </>
  );
}

export default App;
