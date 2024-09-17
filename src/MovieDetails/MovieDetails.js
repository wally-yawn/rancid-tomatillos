import './MovieDetails.css';

function MovieDetails({ movie }) {
  console.log(movie)

  const getGenres = () => {
    return movie.genre_ids.map(genre => <p className='genre' >{genre}</p>)
  }

  return (
    <section className='MovieDetails'>
      <img className='backdrop' src={movie.backdrop_path}/>
      <div className='movie-details'>
        <h2>{movie.title}</h2>
        <div>{getGenres()}</div>
        <p className='overview'>{movie.overview}</p>
      </div>
    </section>
  );
}

export default MovieDetails;