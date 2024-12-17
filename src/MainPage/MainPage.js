import { useState } from 'react';
import './MainPage.css';
import MovieCard from '../MovieCard/MovieCard'

function Movies(props) {

  const [movies, setMovies] = useState(movieCards)

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        id={movie.id}
        posterPath={movie.poster_path}
        votes={movie.vote_count}
        setMovieDetailsID={props.setMovieDetailsID}
        />
    )
  })

  return (
      <section className='movie-container'>
        {movieCards}
      </section>
  );
}
  
export default Movies;