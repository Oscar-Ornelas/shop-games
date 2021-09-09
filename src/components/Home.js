import React, {useState, useEffect} from 'react';
import GameList from './GameList';

function Home() {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-10-10,2021-09-01&ordering=-added&page_size=20`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameList(data.results);
    })
  }, []);

  return (
    <GameList
      gameList={gameList}
    />
  )
}

export default Home;
