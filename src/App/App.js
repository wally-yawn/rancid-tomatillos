import './App.css';
import Movies from '../Movies/Movies';
import movieData from '../movieData';
import { useState, useEffect } from 'react';
import sortArrow from '../icons/sort_arrows.png';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData.movies);
  }, []);

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
        <button><img src={sortArrow}/>sort by rating</button>
      </header>
      <Movies movies={movies}/>
    </main>
  );
}

export default App;
