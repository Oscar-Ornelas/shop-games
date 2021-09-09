import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import GameList from './GameList';

function Search() {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [searchFormData, setSearchFormData] = useState({platform: "", genre: "", ordering: ""});
  const [gameList, setGameList] = useState(null);
  const {searchValue} = useParams();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&page_size=20`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameList(data.results);
    })
  }, []);

  function updateGameList() {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&ordering=${searchFormData.ordering}&page_size=20`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameList(data.results);
    })
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setSearchFormData(prevSearchFormData => ({...prevSearchFormData, [name]: value}));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateGameList();
  }

  return (
    <div className="search-container">
      <div className="search-form-container">
        <h3 className="search-value">Search Results for "{searchValue}"</h3>
        <form className="search-form">
          <div className="search-form-inputs">
            <select
              value={searchFormData.ordering}
              onChange={handleChange}
              name="ordering"
              className="search-form-input"
            >
              <option value="">Best Match</option>
              <option value="-released">Newest to Oldest</option>
              <option value="-rating">Top Rated</option>
           </select>
          </div>

          <button onClick={handleSubmit} className="btn search-form-btn">Update Filters</button>
        </form>
      </div>


      <div>
        <GameList
          gameList={gameList}
        />
      </div>

    </div>
  )
}

export default Search;
