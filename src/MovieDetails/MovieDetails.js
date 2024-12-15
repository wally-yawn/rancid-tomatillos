import './MovieDetails.css';
import movieDetails from '../data/movie_details';
import homeIcon from '../icons/home.png';

function MovieDetails(props) {
  return (
    <section className='MovieDetails'>
        <button className='home' aria-label='home'>
          <img src={homeIcon}
            alt="home"
            onClick={() => props.setMovieDetailsID(null)}/>
        </button>
      <p>Movie Details go here!</p>
    </section>
  );
}

export default MovieDetails;