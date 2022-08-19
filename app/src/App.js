// import './App.css';
import { Routes, Route } from "react-router-dom";

import List from './Routes/List'
import Movie from './Routes/Movie'

import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<List />} >
          <Route path="page/:page" element={<List />} />
        </Route>
        <Route path="movie" element={<Movie />}>
          <Route path=":movieId" element={<Movie />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
