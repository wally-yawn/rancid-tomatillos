import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../movieData';
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData.movies);
  }, []);

  return (
    <main className="App">
      <header>
        <h1>rancid tomatillos</h1>
        <button>sort by rating</button>
      </header>
      <Movies movies={movies}/>
    </main>
  );
}

export default App;
