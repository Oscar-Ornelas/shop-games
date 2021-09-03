import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import esrb_rating_m from '../imgs/esrb_rating_m.png';

function GameDetail(props) {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [price, setPrice] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [game, setGame] = useState(null);
  const {gameId} = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      const gamePrice = parseInt(data.released.substring(0,4)) < 2015 ? 29.99 : 59.99;
      setGame({...data, price: gamePrice, quantity: 1, platform: data.platforms[0].platform.name});
      setPlatform(data.platforms[0].platform.name);
      setPrice(gamePrice);
    })
  }, []);

  function addToCart(e) {
    e.preventDefault();
    console.log(platform);
    setGame(prevGame => ({...prevGame, platform: platform}));
    setTimeout(() => {
      props.setCart(prevCart => [...prevCart, game]);
      history.push(`/checkout`);
    }, 500);
  }

  function changePlatform(e) {
    const {value} = e.target;
    setPlatform(value);
  }

  const platforms = game && game.platforms.map(platform => {
    return (
      <option key={platform.platform.name} value={platform.platform.name}>{platform.platform.name}</option>
    )

  })

  function setMetascoreStyle() {
    let color = "";

    if(!game.metacritic) {
      color = "#fff";
    } else if(game.metacritic >= 75) {
      color = "#009900";
    } else if(game.metacritic >= 50) {
      color = "#dde342";
    } else {
      color = "#f7070f";
    }

    return {
      border: `1px solid ${color}`,
      color: color
    }
  }

  return (
    game &&
    <div className="game-detail-container container">
      <section className="game-detail-grid container-margin">
        <div className="game-detail-main-info">
          <div className="game-detail-main-info-content">
            <div>
              <h3 className="game-detail-name">{game.name}</h3>
              <p className="game-detail-publisher">{game.publishers[0].name}</p>
            </div>
            <img className="game-detail-esrb-rating" src={esrb_rating_m}/>
          </div>
        </div>
        <img className="game-detail-img" src={game.background_image}/>
        <div className="game-detail-form-container">
          <p className="game-detail-metascore">Metascore <span style={setMetascoreStyle()}>{game.metacritic || "N/A"}</span></p>
          <form onSubmit={addToCart} className="game-detail-form">
            <label className="game-detail-platform-label" htmlFor="platform">Platform</label>
            <select className="game-detail-platform" onChange={changePlatform} name="platform" id="platform">
              {platforms}
            </select>
            <p className="game-detail-price">${price}</p>
            <button className="game-detail-btn">Add To Cart</button>
          </form>
        </div>
      </section>

      <section className="game-detail-overview">
        <h2 className="game-detail-header">Overview</h2>
        <p className="game-detail-description">{game.description_raw}</p>
      </section>
    </div>
  )
}

export default GameDetail;
