import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import MainPage from '../MainPage/MainPage';
import homeIcon from '../icons/home.png';
// import searchIcon from '../icons/search.png';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  const [movieDetailsId, setMovieDetailsId] = useState(null)

  return (
    <BrowserRouter>
      <main className='App'>
          <header>
            <h1>rancid tomatillos...</h1>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'hidden' : 'home-button')}
            >
              <img src={homeIcon} alt="Home" />
            </NavLink>
          </header>
          <section>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
          </section>
      </main>
    </BrowserRouter>
  );
}

export default App;