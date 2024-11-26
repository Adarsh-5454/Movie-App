import { useEffect, useState } from "react";
import MovieCard from "./MovieCard.jsx";
import SearchIcon from "./assets/search.svg";

import "./App.css";

const Home = () => {
  const api_url = " http://www.omdbapi.com/?apikey=3a901e55 ";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const SearchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    setMovies(data && data.Search);
  };
  useEffect(() => {
    SearchMovies("marvel");
  }, []);

  return (
    <div className="app">
      <h1>Movie World</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          onClick={() => {
            SearchMovies(searchTerm);
          }}
          alt="search"
        />
      </div>

      <div className="container">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
