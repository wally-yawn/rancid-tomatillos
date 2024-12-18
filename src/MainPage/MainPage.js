import './MainPage.css';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import MovieCard from '../MovieCard/MovieCard'

function Movies(props) {

  const [movies, setMovies] = useState(moviePosters)

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        posterPath={movie.poster_path}
        key={movie.id}
        id={movie.id}
        title={movie.title}
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