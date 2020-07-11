import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import GameDetail from './components/GameDetail';
import Home from './components/Home';

function App() {
  return (
    <>
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
