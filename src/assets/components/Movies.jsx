import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handleAddWatchList, handleRemoveWatchList, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) setPageNo(1);
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1d98569dbcbf3ef40def7d2eab75939e&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5 relative top-25">
      <div className="text-2xl m-5 font-bold text-center ">Trending Movies</div>
      <div className="flex flex-row flex-wrap gap-5 justify-center">
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movieObj={movie}
              poster_path={movie.poster_path}
              name={movie.original_title}
              handleAddWatchList={handleAddWatchList}
              handleRemoveWatchList={handleRemoveWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Movies;
