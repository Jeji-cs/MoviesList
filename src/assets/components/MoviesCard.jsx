import React from "react";
import WatchList from "./WatchList";

const MoviesCard = ({
  movieObj,
  poster_path,
  name,
  handleAddWatchList,
  handleRemoveWatchList,
  watchlist,
}) => {
  function isContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end mx-auto"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {isContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemoveWatchList(movieObj);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-black"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddWatchList(movieObj);
          }}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-black"
        >
          &#128525;
        </div>
      )}

      <div className="w-full bg-opacity-50 text-white text-center p-2 rounded-b-xl backdrop-blur-xl">
        {name}
      </div>
    </div>
  );
};

export default MoviesCard;
