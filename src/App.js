import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import GameDetail from './components/GameDetail';
import Checkout from './components/Checkout';


function App() {
  const [cart, setCart] = useState([1]);
  const [navSlide, setNavSlide] = useState(true);

  return (
    <>
      <Header cart={cart} navSlide={navSlide} setNavSlide={setNavSlide}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/detail/:gameId">
          <GameDetail/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
