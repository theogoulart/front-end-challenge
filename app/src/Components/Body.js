import response from '../Blob/response'

import MovieCard from '../Components/MovieCard'

function Body() {
  console.log(response);
  return (
    <section className="App-body">
      {response.results.map((movie, i) => (<MovieCard key={i} movie={movie}/>))}
    </section>
  );
}

export default Body;
