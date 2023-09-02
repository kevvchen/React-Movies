import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      {/* Movie Year*/}
      <div>
        <p>{movie.Year}</p>
      </div>

      {/* movie image */}
      <div>
        <img
          src={
            movie.Poster !== "NA"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      {/* Type of movie (tv show/movie)*/}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
