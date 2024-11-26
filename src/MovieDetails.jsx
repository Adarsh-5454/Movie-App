import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  const [getMovie, setGetMovie] = useState("");

  const api_url = " http://www.omdbapi.com/?apikey=3a901e55&plot=full ";

  useEffect(() => {
    const detailMovies = async () => {
      const response = await fetch(`${api_url}&i=${id}`);
      const data = await response.json();
      setGetMovie(data);
      console.log(getMovie);
    };
    detailMovies();
  }, [id]);

  return (
    <div className="Adi">
      <h2 className="OHH"> {getMovie.Title}</h2>
      <img className="Poster" src={getMovie.Poster} alt="" />
      <span className="Poli">Genre:-{getMovie.Genre}</span>
      <span className="Poli">Actor:-{getMovie.Actors}</span>
      <span className="Poli">Released:-{getMovie.Released}</span>
      <span className="Poli">Type:-{getMovie.Type}</span>
      <span className="Poli">Plot:-{getMovie.Plot}</span>
      <span className="Poli">Imdb:-{getMovie.imdbRating}</span>
    </div>
  );
};

export default MovieDetails;
