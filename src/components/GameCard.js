import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function GameCard(props) {
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/detail/${props.id}`)} className="game-card">
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
