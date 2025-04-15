import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import genreids from "../../Utility/genre";

const WatchList = ({ watchlist, setWaatchList, handleRemoveWatchList }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let sortInc = () => {
    let sortedInc = watchlist.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWaatchList([...sortedInc]);
  };
  let sortDec = () => {
    let sortedDec = watchlist.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWaatchList([...sortedDec]);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };
  useEffect(() => {
    var temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);
  return (
    <div className="relative top-25">
      <div className="flex justify-center flex-wrap m-4 ">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-500 rounded-xl font-bold text-white m-4"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl font-bold text-white m-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center py-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for Movies"
          className="h-[3rem] w-[20rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-black text-center ">
          <thead className="border-2">
            <tr className="text-lg font-bold">
              <th>Name</th>
              <th className="flex justify-center items-center gap-5">
                <div onClick={sortInc}>
                  <FaArrowUp className="hover:cursor-pointer" />
                </div>
                <div>Ratings</div>
                <div onClick={sortDec}>
                  <FaArrowDown className="hover:cursor-pointer" />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") return true;
                else return genreids[movieObj.genre_ids[0]] == currGenre;
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://images.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="movie_poster"
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td onClick={()=>handleRemoveWatchList(movieObj)} className="text-red-500 hover:cursor-pointer">
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
