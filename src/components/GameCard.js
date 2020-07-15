import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

function GameCard(props) {
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/detail/${props.id}`)} className="game-card">
      <h2 className="game-card-name">{props.name}</h2>
      <div className="game-card-info">
        <p className="game-card-platforms">{props.platforms}</p>
        <p className="game-card-rating">{props.rating}</p>
      </div>
      <img className="game-card-img" src={props.img}/>
    </div>
  )
}

export default GameCard;
