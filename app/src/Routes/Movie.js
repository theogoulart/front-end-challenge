import { useParams } from "react-router-dom";
import movie from '../Response/movie.json' 

const URL = "https://image.tmdb.org/t/p/original";

function Movie() {
  const params = useParams();
  const releaseDate = new Date(movie.release_date);
  
  console.log(params.movieId);
  return (
    <section>
      <img width="383" height="574" alt="" src={URL + movie.poster_path}/>
      <div>
        <h1 className="text-xl">{movie.original_title} ({releaseDate.getFullYear()})</h1>
        <p>
          {`${("0" + releaseDate.getDate()).substring(-2)}/${("0" + releaseDate.getMonth()).substring(-2)}/${releaseDate.getFullYear()}`} (BR)
          • {movie.genres.map(genre => genre.name).join(', ')} • {Math.floor(movie.runtime/60)}h {movie.runtime%60}m
        </p>
        <h2>Sinopse</h2>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
}

export default Movie;
