import './MovieDetails.css';

function MovieDetails({ movie }) {
  return (
    <section className='MovieDetails'>
      <p>{movie.title}</p>
    </section>
  );
}

export default MovieDetails;