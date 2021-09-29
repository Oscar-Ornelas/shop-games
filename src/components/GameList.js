import React, {useState, useEffect} from 'react';
import GameCard from './GameCard';

function GameList(props) {

  const games = props.gameList !== null && (
    props.gameList.map(game => {
      if(game.esrb_rating !== null && game.background_image !== null) {
        const platforms = game.parent_platforms !== undefined && (game.parent_platforms.map(platform => {
          if(platform.platform.name === "PlayStation") {
            return <i className="fab fa-playstation game-card-platform-icon"></i>
          }

          if(platform.platform.name === "Xbox") {
            return <i className="fab fa-xbox game-card-platform-icon"></i>
          }

          if(platform.platform.name === "PC") {
            return <i className="fas fa-laptop game-card-platform-icon"></i>
          }

          if(platform.platform.name === "Nintendo") {
            return <i className="fas fa-gamepad game-card-platform-icon"></i>
          }

        }));

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
      }
    })
  )

  return (
    <section className="container">
      <div className="game-list container-margin">
        <h2 className="game-list-header">{props.header}</h2>
        {games}
      </div>
      <div className={`loading-icon-container ${props.gameList !== null ? "hidden" : "visible"}`}>
        <div className={`loading-icon ${props.gameList !== null ? "hidden" : "visible"}`}>
          <div className="loading-icon-bar"></div>
          <div className="loading-icon-bar"></div>
          <div className="loading-icon-bar"></div>
        </div>
      </div>

    </section>
  )

}

export default GameList;
