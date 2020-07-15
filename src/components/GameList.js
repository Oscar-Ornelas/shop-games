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
    gameList.map(game => {

      const platforms = game.platforms.map(platform => {
        if(platform.platform.name === "PlayStation 4") {
          return <i className="fab fa-playstation game-card-platform-icon"></i>
        }

        if(platform.platform.name === "Xbox One") {
          return <i className="fab fa-xbox game-card-platform-icon"></i>
        }

        if(platform.platform.name === "PC") {
          return <i className="fas fa-laptop game-card-platform-icon"></i>
        }
      });

      return (
        <GameCard
          name={game.name}
          img={game.background_image}
          rating={game.rating}
          platforms={platforms}
          id={game.id}
          key={game.id}
        />
      )
    })
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
