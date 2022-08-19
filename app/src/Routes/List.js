import { useParams } from "react-router-dom";
import response from '../Response/list'

import MovieCard from '../Components/MovieCard'

function List() {
  console.log(response);
  const params = useParams();
  const page = params.page || 1;

  return (
    <section className="App-List">
      <h1>page: {page}</h1>
      {response.results.map((movie, i) => (<MovieCard key={i} movie={movie}/>))}
    </section>
  );
}

export default List;
