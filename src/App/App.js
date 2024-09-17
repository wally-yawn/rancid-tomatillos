import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';

console.log(movieDetails)

function App() {
  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
        <form className='search'>
          <img src={searchIcon}/>
          <input 
            type='text'
            name='search'
          />
        </form>
      </header>
      <p>Movie Posters or Movie Details will show up here!</p>
    </main>
  );
}

export default App;
