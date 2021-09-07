import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import GameDetail from './components/GameDetail';
import Checkout from './components/Checkout';
import Search from './components/Search';
import LowerHeader from './components/LowerHeader';


function App() {
  const [cart, setCart] = useState([]);
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
        <Route path="/checkout">
          <Checkout cart={cart} setCart={setCart}/>
        </Route>
        <Route path="/search/:searchValue">
          <Search/>
        </Route>
      </Switch>
      <LowerHeader cart={cart} navSlide={navSlide} setNavSlide={setNavSlide}/>
    </>
  );
}

export default App;
