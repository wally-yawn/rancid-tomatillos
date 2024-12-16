import { useState } from 'react';
import './MainPage.css';
import MovieCard from '../MovieCard/MovieCard'

function Movies() {

  const [movies, setMovies] = useState(movieCards)

  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        id={movie.id}
        posterPath={movie.poster_path}
        votes={movie.vote_count}
        title={movie.title}
        key={movie.id}
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