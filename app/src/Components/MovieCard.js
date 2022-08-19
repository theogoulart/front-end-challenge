const URL = "https://image.tmdb.org/t/p/original";

function MovieCard(props) {
  const movie = props.movie;
  return (
    <div className="App-header">
      <img width="176" height="264" alt="" src={URL + movie.poster_path} />
      <b>{movie.original_title}</b>
      {movie.release_date}
    </div>
  );
}

export default MovieCard;
