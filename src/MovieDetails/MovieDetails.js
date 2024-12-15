import './MovieDetails.css';
import movieDetails from '../data/movie_details';
import homeIcon from '../icons/home.png';
import { useState } from 'react';

function MovieDetails(props) {
  const [movieDetailsInfo, setMovieDetails] = useState(movieDetails)

  return (
    <section className='MovieDetails'>
        <button className='home' aria-label='home'>
          <img src={homeIcon}
            alt="home"
            onClick={() => props.setMovieDetailsID(null)}/>
        </button>
        <img src = {movieDetails.backdrop_path} alt = {movieDetails.title}/>
      <p>Movie Details go here!</p>
    </section>
  );
}

export default MovieDetails;