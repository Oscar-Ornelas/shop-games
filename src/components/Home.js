import React, {useState, useEffect} from 'react';
import GameList from './GameList';

function Home() {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  return (
    <GameList
      searchQuery={`https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-10-10,2021-09-01&ordering=-added&page_size=10`}
    />
  )
}

export default Home;
