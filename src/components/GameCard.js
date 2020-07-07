import React, {useState, useEffect} from 'react';

function GameCard(props) {
  const [game, setGame] = useState(null);

  return (
    <div className="game-card">
      <p className="game-card-name">{props.name}</p>
      <div className="game-card-info">
        <p className="game-card-platforms">Xbox, Playstation, PC</p>
        <p className="game-card-rating">{props.rating}</p>
      </div>
      <img className="game-card-img" src={props.img}/>
    </div>
  )
}

export default GameCard;
