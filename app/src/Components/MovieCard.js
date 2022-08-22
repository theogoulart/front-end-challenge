import { Link } from "react-router-dom";

const URL = "https://image.tmdb.org/t/p/original";
const MONTH_NAME = {
  "1": "JAN",
  "2": "FEB",
  "3": "MAR",
  "4": "APR",
  "5": "MAY",
  "6": "JAN",
  "7": "JUL",
  "8": "AUG",
  "9": "SEP",
  "10": "OCT",
  "11": "NOV",
  "12": "DEC"
};

function MovieCard(props) {
  const movie = props.movie;
  const releaseDate = new Date(movie.release_date);

  const formatedDate = ("0" + releaseDate.getDate()).substring(-2) + " "
    + MONTH_NAME[releaseDate.getMonth()] + " "
    + releaseDate.getFullYear();

  return (
    <Link className="w-44" to={`/movie/${movie.id}`}>
      <img className="rounded mb-1" width="176" height="264" alt="" src={URL + movie.poster_path} />
      <div className="font-bold text-base">{movie.original_title}</div>
      <div className="text-gray-600 font-bold text-sm">{formatedDate}</div>
    </Link>
  );
}

export default MovieCard;
