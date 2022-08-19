import response from '../Blob/response'

import MovieCard from '../Components/MovieCard'

function List() {
  console.log(response);
  return (
    <section className="App-List">
      {response.results.map((movie, i) => (<MovieCard key={i} movie={movie}/>))}
    </section>
  );
}

export default List;
