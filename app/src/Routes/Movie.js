import { useParams } from "react-router-dom";
import MovieCard from '../Components/MovieCard';
import PersonCard from '../Components/PersonCard';

import movie from '../Response/movie.json';
import videos from '../Response/videos.json';
import credits from '../Response/credits.json';
import recommendations from '../Response/recommendations.json';

const URL = "https://image.tmdb.org/t/p/original";

function Movie() {
  const params = useParams();
  const releaseDate = new Date(movie.release_date);

  const crew = credits.crew.filter(v => ['Characters', 'Director', 'Screenplay'].includes(v.job));
  const trailer = videos.results.filter(v => v.type === "Trailer")[0];
  
  console.log(params.movieId);
  return (
    <div>
      <section className="flex justify-center items-center bg-purple-custom text-white px-5 md:px-4 py-10 pb-16 md:py-14">
        <div className="flex flex-col md:flex-row w-full max-w-7xl">
          <div className="flex justify-center pb-10 md:w-96 md:shrink-0 md:mr-8">
            <img className="w-48 md:w-96 md:absolute shadow-md rounded" width="383" height="574" alt="" src={URL + movie.poster_path}/>
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold mb-2">{movie.original_title} ({releaseDate.getFullYear()})</h1>
            <p className="text-lg mb-8 md:mb-4">
              {`${("0" + releaseDate.getDate()).substring(-2)}/${("0" + releaseDate.getMonth()).substring(-2)}/${releaseDate.getFullYear()}`} (BR)
              <span className="hidden md:inline-block ml-1">•</span> <span className="block md:inline-block">{movie.genres.map(genre => genre.name).join(', ')}</span> <span className="hidden md:inline-block ml-1">•</span> <span className="block md:inline-block">{Math.floor(movie.runtime/60)}h {movie.runtime%60}m</span>
            </p>
            <div className="flex items-center mb-8">
              <div class="progress-radial progress-76"><b></b></div>
              <p className="leading-5 ml-3">Avaliação dos<br/>usuários</p>
            </div>
            <h2 className="text-xl font-bold mb-2">Sinopse</h2>
            <p className="max-w-3xl mb-6">{movie.overview}</p>
            <div className="grid gap-y-6 grid-cols-2 md:grid-cols-3">
              {crew.map(c => (
                <div>
                  <div className="font-bold">{c.name}</div>
                  <div>{c.job}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-5 md:px-4 py-12 md:py-16">
        <div className="flex flex-col w-full max-w-7xl">
          <h2 className="text-neutral-900 text-2xl font-bold mb-4 md:mb-8">Elenco original</h2>
          <div className="flex w-full	max-w-7xl overflow-auto pb-6 mb-10">
            {credits.cast.map(c => (<PersonCard person={c}/>))}
          </div>
          <h2 className="text-neutral-900 text-2xl font-bold mb-4 md:mb-8">Trailer</h2>
          <div className="video-container max-w-4xl mb-14">
            <iframe className="w-full" src={`https://www.youtube.com/embed/${trailer.key}`}/>
          </div>
          <h2 className="text-neutral-900 text-2xl font-bold mb-4 md:mb-8">Recomendações</h2>
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-6 w-full max-w-7xl pb-6 mb-10">
            {recommendations.results.slice(0,6).map(v => (<MovieCard movie={v}/>))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movie;
