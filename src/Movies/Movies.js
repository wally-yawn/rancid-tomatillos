import MoviePoster from '../MoviePoster/MoviePoster';
import './Movies.css';

function Movies({ movies, updateVotes, viewMovie }) {
  const showMovies = () => {
      return movies.map(movie => <MoviePoster movie={movie} key={movie.id} updateVotes={updateVotes} viewMovie={viewMovie} />)
  }

  return (
      <section className='Movies'>
        {showMovies()}
      </section>
  );
}
  
export default Movies;