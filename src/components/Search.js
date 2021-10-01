import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import GameList from './GameList';

function Search() {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [searchFormData, setSearchFormData] = useState({ordering: ""});
  const [gameList, setGameList] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const {searchValue} = useParams();

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&page_size=50`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameList(data.results);
    })
  }, [searchValue]);

  useEffect(() => {
    updateGameList();
  }, [pageCount])

  function updateGameList() {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&ordering=${searchFormData.ordering}&page=${pageCount}&page_size=50`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameList(data.results);
    })
  }

  function incrementPageCount() {
    if(pageCount < 4) {
      setPageCount(prevPageCount => prevPageCount + 1);
      window.scrollTo(0, 0);
    }
  }

  function decrementPageCount() {
    setPageCount(prevPageCount => prevPageCount - 1);
    window.scrollTo(0, 0);
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
              <option value="-rating">Top Rated</option>
           </select>
          </div>

          <button onClick={handleSubmit} className="btn search-form-btn">Update Filters</button>
        </form>
      </div>


      <div className="search-game-list">
        <GameList
          gameList={gameList}
        />
      </div>

      <div className="change-page-btns">
        {pageCount !== 1 ? <button onClick={decrementPageCount} className="change-page-btn btn">Previous Page</button> : ""}
        {pageCount < 4 ? <button onClick={incrementPageCount} className="change-page-btn btn">Next Page</button> : ""}
      </div>

    </div>
  )
}

export default Search;
