import React, {useState, useEffect} from 'react';
import GameList from './GameList';

function Home() {
  const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
  const [gameLists, setGameLists] = useState({
    popularGameList: null,
    mostRecentGameList: null,
    topRatedGameList: null
   });

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-10-10,2021-09-01&ordering=-added&page_size=25`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameLists(prevGameLists => ({...prevGameLists, popularGameList: data.results}));
    })
  }, []);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-10-10,2021-09-01&ordering=-rating&page_size=25`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameLists(prevGameLists => ({...prevGameLists, topRatedGameList: data.results}));
    })
  }, []);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2021-01-10,2021-09-29&page_size=25`, {
      headers: {
        'User-Agent': "shop-games"
      }
    })
    .then(response => response.json())
    .then(data => {
      setGameLists(prevGameLists => ({...prevGameLists, mostRecentGameList: data.results}));
    })
  }, []);

  return (
    <>
      <GameList gameList={gameLists.popularGameList} header="Most Popular"/>
      <GameList gameList={gameLists.topRatedGameList} header="Top Rated"/>
      <GameList gameList={gameLists.mostRecentGameList} header="Recently Released"/>
    </>
  )
}

export default Home;
