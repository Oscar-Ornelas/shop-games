import React, {useState, useEffect} from 'react';
import './App.css';
import GameCard from './components/GameCard';

function App() {
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    fetch("https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&page_size=10", {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameList(data.results);
      console.log(data);
    })
  }, []);

  const games = gameList !== null && (
    gameList.map(game => (
      <GameCard
        name={game.name}
        img={game.background_image}
        rating={game.rating}
      />
    ))
  )

  return (
    <section classList="games-list">

      {games}
    </section>
  );
}

export default App;
