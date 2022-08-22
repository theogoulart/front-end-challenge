import response from '../Response/list'
import genres from '../Response/genres'

import MovieCard from '../Components/MovieCard'
import FilterButton from '../Components/FilterButton'
import Pagination from '../Components/Pagination'

function List() {
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center bg-indigo-900 text-white p-20">
        <h1 className="text-5xl font-bold max-w-screen-md text-center mb-10">Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <p className="mb-4 text-center">FILTRE POR:</p>
        <div className="flex flex-wrap justify-center items-center no-wrap max-w-screen-md">
          {genres.genres.map(g => <FilterButton genre={g.name} />)}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="max-w-7xl grid gap-x-12 gap-y-12 grid-cols-6 my-8">
        {response.results.map((movie, i) => (<MovieCard key={i} movie={movie}/>))}
        </div>
        <Pagination pages={6} />
      </section>
    </div>
  );
}

export default List;
