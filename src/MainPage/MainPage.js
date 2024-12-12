import './MainPage.css';
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import MovieCard from '../MovieCard/MovieCard'

function Movies() {

  const [movies, setMovies] = useState(moviePosters)

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        posterPath={movie.poster_path}
        key={movie.id}
        id={movie.id}
        votes={movie.vote_count}
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


// return (
//   <Card
//     title={idea.title}
//     description={idea.description}
//     id={idea.id}
//     key={idea.id}
//     deleteIdea={deleteIdea}
//   />
// )