import { Link } from "react-router-dom";

const URL = "https://image.tmdb.org/t/p/original";

function MovieCard(props) {
  const movie = props.movie;
  return (
    <Link to={`/movie/${movie.id}`}>
      <img width="176" height="264" alt="" src={URL + movie.poster_path} />
      <div><b>{movie.original_title}</b></div>
      <div>{movie.release_date}</div>
    </Link>
  );
}

export default MovieCard;
