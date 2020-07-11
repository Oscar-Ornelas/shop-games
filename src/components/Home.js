import React, {useState, useEffect} from 'react';
import GameList from './GameList';

function Home() {
  return (
    <GameList
      searchQuery={"https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&page_size=10"}
    />
  )
}

export default Home;
