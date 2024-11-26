import { useNavigate } from "react-router-dom";
const MovieCard = ({ movies }) => {
  const navigate = useNavigate();

  // console.log(movies);
  const handleDetailClick = () => {
    navigate(`/MovieDetails/${movies.imdbID}`);
  };
  return (
    <div className="movie" onClick={handleDetailClick}>
      <div>
        <p>{movies?.Year}</p>
      </div>

      <div>
        <img src={movies?.Poster} alt="Movie Poster" />
      </div>

      <div>
        <span>{movies?.Type}</span>
        <h3>{movies?.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
