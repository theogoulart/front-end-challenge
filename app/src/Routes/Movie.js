import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import MovieCard from '../Components/MovieCard';
import PersonCard from '../Components/PersonCard';

const BASE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w342";

function Movie() {
  const params = useParams();
  const movieID = params.movieId;
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}`);
        const movie = await movieResponse.json();
    
        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const credits = await creditsResponse.json();
        
        const reviewsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const reviews = await reviewsResponse.json();
        
        const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        const videos = await videosResponse.json();
        
        const recommResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const recommendations = await recommResponse.json();
    
        setData({
          movie: movie,
          credits: {
            cast: credits.cast,
            crew: credits.crew
          },
          reviews: reviews.results,
          videos: videos.results,
          recommendations: recommendations.results
        });
      }

      fetchData();
    } catch (exception) {
      console.error(404);
    }
    window.scrollTo(0, 0);
  }, [movieID]);

  if (data.length === 0) return (<div>404</div>);

  const releaseDate = new Date(data.movie.release_date);

  const crew = data.credits.crew.filter(v => ['Characters', 'Director', 'Screenplay'].includes(v.job));
  const trailer = data.videos.length > 0 ? data.videos.filter(v => v.type === "Trailer")[0] : null;

  const movieRatings = [];
  data.reviews.forEach((item) => {
    if (!isNaN(item.author_details.rating)) {
      movieRatings.push(item.author_details.rating);
    }
  });
  const movieRating = Math.floor((movieRatings.reduce((p,c) => p+c, 0) / movieRatings.length) * 10);

  return (
    <div>
      <link rel="preload" as="image" href={BASE_URL + POSTER_SIZE + data.movie.poster_path} />
      <section className="flex justify-center items-center bg-purple-custom text-white px-5 md:px-4 py-10 pb-16 md:py-14">
        <div className="flex flex-col md:flex-row w-full max-w-7xl">
          <div className="flex justify-center pb-10 md:w-96 md:shrink-0 md:mr-8">
            <img className="w-48 md:w-96 md:absolute shadow-md rounded" width="383" height="574" alt="" src={BASE_URL + POSTER_SIZE + data.movie.poster_path}/>
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold mb-2">{data.movie.original_title} ({releaseDate.getFullYear()})</h1>
            <p className="text-lg mb-8 md:mb-4">
              {`${(releaseDate.getDate().toString().length === 1 ? "0" + releaseDate.getDate() : releaseDate.getDate())}/${(releaseDate.getMonth().toString().length === 1 ? "0" + releaseDate.getMonth() : releaseDate.getMonth())}/${releaseDate.getFullYear()}`} ({data.movie.original_language.toUpperCase()})
              <span className="hidden md:inline-block ml-1">•</span> <span className="block md:inline-block">{data.movie.genres.map(genre => genre.name).join(', ')}</span> <span className="hidden md:inline-block ml-1">•</span> <span className="block md:inline-block">{Math.floor(data.movie.runtime/60)}h {data.movie.runtime%60}m</span>
            </p>
            <div className="flex items-center mb-8">
              <div className={`progress-radial progress-${movieRating || 0}`}><b></b></div>
              <p className="leading-5 ml-3">Avaliação dos<br/>usuários</p>
            </div>
            <div className="md:h-72">
              <h2 className="text-xl font-bold mb-2">Sinopse</h2>
              <p className="max-w-3xl mb-6">{data.movie.overview}</p>
              <div className="grid gap-y-6 grid-cols-2 md:grid-cols-3">
                {crew.slice(0,6).map((c,i) => (
                  <div key={`crew${i}`}>
                    <div className="font-bold">{c.name}</div>
                    <div>{c.job}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-5 md:px-4 py-12 md:py-20">
        <div className="flex flex-col w-full max-w-7xl">
          <h2 className="text-neutral-900 text-2xl font-bold mb-4 md:mb-8">Elenco original</h2>
          <div className="flex w-full	max-w-7xl overflow-auto pb-6 mb-10">
            {data.credits.cast.map((c, i) => (<PersonCard key={`person${i}`} person={c}/>))}
          </div>
          {trailer === null ? "" : (<div>
            <h2 className="text-neutral-900 text-2xl font-bold mb-4 md:mb-8">Trailer</h2>
            <div className="video-container max-w-4xl mb-14">
              <iframe title="movie trailer" className="w-full" src={`https://www.youtube.com/embed/${trailer.key}`}/>
            </div>
          </div>)}
          {data.recommendations.length === 0 ? "" : (<div>
            <h2 className="text-neutral-900 text-2xl font-bold mb-4 md:mb-8">Recomendações</h2>
            <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 lg:grid-cols-6 w-full max-w-7xl pb-6 mb-10">
              {data.recommendations.slice(0,6).map(v => (<MovieCard key={v.id} movie={v}/>))}
            </div>
          </div>)}
        </div>
      </section>
    </div>
  );
}

export default Movie;
