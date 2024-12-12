import './MainPage.css';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';

function Movies() {

  const [movies, setMovies] = useState(moviePosters)

  return (
      <section className='MoviesContainer'>
        <p>We'll make some movie posters show up here!</p>
      </section>
  );
}
  
export default Movies;