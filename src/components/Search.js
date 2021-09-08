import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import GameList from './GameList';

function Search() {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const {searchValue} = useParams();

  return (
    <div className="search-container">
      <GameList
        searchQuery={`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&page_size=20`}
      />
    </div>
  )
}

export default Search;
