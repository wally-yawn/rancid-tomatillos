import { useState } from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage'

import searchIcon from '../icons/search.png';
import MovieDetails from '../MovieDetails/MovieDetails';

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';

// import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {

  const [movieDetailsId, setMovieDetailsID] = useState(129) //update this to null
  //add function to change this state passed to each MovieCard

  return (
    <main className='App'>
        <header>
          <h1>rancid tomatillos...</h1>
        </header>
        <section>
        {movieDetailsId !== null ? (<MovieDetails id={movieDetailsId} setMovieDetailsID={setMovieDetailsID} />) 
          : (<MainPage />)}
        </section>
    </main>
  );
}

export default App;
