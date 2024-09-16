import './MovieDetails.css';
import homeButton from '../icons/home.png';

function MovieDetails({ movie }) {
  return (
    <section className='MovieDetails'>
      <img src={homeButton} />
      <p>{movie.title}</p>
    </section>
  );
}

export default MovieDetails;