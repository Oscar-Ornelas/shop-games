import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import esrb_rating_m from '../imgs/esrb_rating_m.png';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function GameDetail(props) {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [price, setPrice] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [game, setGame] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function addToCart(e) {
    e.preventDefault();
    console.log(platform);
    setGame(prevGame => ({...prevGame, platform: platform}));
    setTimeout(() => props.setCart(prevCart => [...prevCart, game]), 500);
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
            <button onClick={openModal} className="game-detail-btn">Add To Cart</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Create Room Form"
              className="modal"
              overlayClassName="overlay"
            >
              <div className="modal-item-container">
                <div className="modal-item-top modal-item-detail-top">
                  <h3 className="modal-item-header"><i class="fas fa-check"></i>Added to Cart</h3>
                  <i onClick={closeModal} className="fas fa-times"></i>
                </div>
                <div className="modal-item-product">
                  <p className="modal-item-name">{game.name}</p>
                  <img className="modal-item-img" src={game.background_image}/>
                </div>
                <div className="modal-item-btns modal-item-detail-btns">
                  <button onClick={() => history.push('/checkout')} className="btn btn-go-to-cart">Go To Cart</button>
                  <button onClick={closeModal} className="btn btn-keep-shopping">Keep Shopping</button>
                </div>
              </div>
            </Modal>
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
