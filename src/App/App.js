import { useState } from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage'
import searchIcon from '../icons/search.png';

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {

  return (
    <main className='App'>
        <header>
          <h1>rancid tomatillos...</h1>
        </header>
        <body>
          <MainPage mainPage={MainPage} />
        </body>
    </main>
  );
}

export default App;
