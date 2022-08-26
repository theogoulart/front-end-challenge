import response from '../Response/list'
import genres from '../Response/genres'

import MovieCard from '../Components/MovieCard'
import FilterButton from '../Components/FilterButton'
import Pagination from '../Components/Pagination'

function List() {
  return (
    <div className="">
      <section className="flex flex-col md:items-center bg-purple-custom text-white p-4 py-14 md:p-20">
        <h1 className="text-5xl font-bold max-w-screen-md md:text-center mb-10">Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <p className="md:mb-4 md:text-center font-bold">FILTRE POR:</p>
        <div className="flex flex-wrap md:justify-center items-center no-wrap max-w-screen-md">
          {genres.genres.map(g => <FilterButton key={`genre-${g.id}`} genre={g.name} />)}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center pb-40">
        <div className="max-w-7xl grid gap-x-12 gap-y-12 grid-cols-2 md:grid-cols-4 xl:grid-cols-6 my-8">
        {response.results.map((movie) => (<MovieCard key={`movie-${movie.id}`} movie={movie}/>))}
        </div>
        <Pagination pages={6} />
      </section>
    </div>
  );
}

export default List;
