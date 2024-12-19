import { useState } from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';
import homeIcon from '../icons/home.png';
// import searchIcon from '../icons/search.png';
import MovieDetails from '../MovieDetails/MovieDetails';
// Example imports (for later):
// import moviePosters from '../data/movie_posters';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movieDetailsId, setMovieDetailsId] = useState(null)

  return (
    <main className='App'>
        <header>
          <h1>rancid tomatillos...</h1>
          {movieDetailsId !== null && (
            <button className='home-button' aria-label='home'>
            <img src={homeIcon}
              alt="home"
              onClick={() => setMovieDetailsId(null)}/>
            </button>)}
        </header>
        <section>
          {movieDetailsId !== null ? (
            <MovieDetails id={movieDetailsId}/>
          ) : (
            <MainPage setMovieDetailsId={setMovieDetailsId} />
          )}
        </section>
    </main>
  );
}

export default App;