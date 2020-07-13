import React, {useState, useEffect} from 'react';
import GameCard from './GameCard';

function GameList(props) {
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    fetch(props.searchQuery, {
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
        id={game.id}
        key={game.id}
      />
    ))
  )

  return (
    <section className="container">
      <div className="game-list container-margin">
        {games}
      </div>
    </section>
  )

}

export default GameList;
