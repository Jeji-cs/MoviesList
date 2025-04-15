import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./assets/components/Movies";
import WatchList from "./assets/components/WatchList";
import Banner from "./assets/components/Banner";
const App = () => {

  let [watchlist,setWaatchList] = useState([])

  let handleAddWatchList = (movieObj) =>{
    let newWatchList = [...watchlist,movieObj]
    setWaatchList(newWatchList);
    localStorage.setItem("moviesApp",JSON.stringify(newWatchList))
    console.log(newWatchList);
    
  }

  let handleRemoveWatchList = (movieObj)=>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id!= movieObj.id
    })
    setWaatchList(filteredWatchList)
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    console.log(filteredWatchList);
    
  }

  useEffect(()=>{
    let localStorageMovies= localStorage.getItem("moviesApp")
    if(!localStorageMovies) return 
    setWaatchList(JSON.parse(localStorageMovies))
  },[])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleAddWatchList={handleAddWatchList}
                  handleRemoveWatchList={handleRemoveWatchList}
                />
              </>
            }
          />
          <Route
            path="/watchList"
            element={
              <WatchList
                watchlist={watchlist}
                setWaatchList={setWaatchList}
                handleRemoveWatchList={handleRemoveWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
