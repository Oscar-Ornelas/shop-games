import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import GameDetail from './components/GameDetail';


function App() {
  const [navSlide, setNavSlide] = useState(true);

  return (
    <>
      <Header navSlide={navSlide} setNavSlide={setNavSlide}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/detail/:gameId">
          <GameDetail/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
