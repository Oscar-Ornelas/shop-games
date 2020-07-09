import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import esrb_rating_m from '../imgs/esrb_rating_m.png';

function GameDetail(props) {
  const [price, setPrice] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [game, setGame] = useState(null);
  const {gameId} = useParams();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${gameId}`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      const gamePrice = parseInt(data.released.substring(0,4)) < 2015 ? "$29.99" : "$59.99";
      setGame(data);
      setPlatform(data.platforms[0].platform.name);
      setPrice(gamePrice);
      console.log(data);
    })
  }, []);

  function addToCart(e) {
    e.preventDefault();
  }

  function changePlatform(e) {
    const {value} = e.target;
    setPlatform(value);
  }


  const platforms = game && game.platforms.map(platform => (
    <option value={platform.platform.name}>{platform.platform.name}</option>
  ))


  return (
    game &&
    <div>
      <section className="game-detail-main game-detail-grid">
      <div className="game-detail-main-info">
        <div>
          <h3 className="game-detail-name">{game.name}</h3>
          <p className="game-detail-publisher">{game.publishers[0].name}</p>
        </div>
        <img className="game-detail-esrb-rating" src={esrb_rating_m}/>
      </div>
        <img className="game-detail-img" src={game.background_image}/>
        <div className="game-detail-form-container">
          <form onSubmit={addToCart} className="game-detail-form">
            <label className="game-detail-platform-label" htmlFor="platform">Platform</label>
            <select className="game-detail-platform" onChange={changePlatform} name="platform" id="platform">
              {platforms}
            </select>
            <p className="game-detail-price">{price}</p>
            <button className="game-detail-btn">Add To Cart</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default GameDetail;
