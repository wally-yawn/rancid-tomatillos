import './App.css';

// Example of importing an image:
import searchIcon from '../icons/search.png';

// Example imports:
// import MoviesContainer from '../MoviesContainer/MoviesContainer';
// import { useState, useEffect } from 'react';

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
