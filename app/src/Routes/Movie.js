import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  return (
    <section className="App-Movie">
      You clicked {params.movieId}.
    </section>
  );
}

export default Movie;
