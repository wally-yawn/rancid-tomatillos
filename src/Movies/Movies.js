import MoviePoster from '../MoviePoster/MoviePoster';
import './Movies.css';

function Movies({ movies }) {
  const showMovies = () => {
      return movies.map(movie => <MoviePoster movie={movie} key={movie.id}/>)
  }

  return (
      <section className="Movies">
        {showMovies()}
      </section>
  );
}
  
export default Movies;