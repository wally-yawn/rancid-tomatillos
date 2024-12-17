import './MovieDetails.css';
import { useState } from 'react';
import movieDetails from '../data/movie_details'
import Genre from '../Genres/Genre'

function MovieDetails(props) {
  const [movieDetailsInfo, setMovieDetails] = useState(props.movieDetails)

  const genreCards = movieDetailsInfo.genre_ids.map(genre_id => {
    return (
      <Genre name={genre_id} key ={genre_id}/>
    )
  })

  return (
    <section className='MovieDetails'>
        <img className = 'home-button' src = {movieDetailsInfo.backdrop_path} alt = {movieDetailsInfo.title}/>
        <h2>{movieDetailsInfo.title}</h2>
        <section className='genres'>
          {genreCards}
        </section>
      <p className = 'overview'>{movieDetailsInfo.overview}</p>
    </section>
  );
}

export default MovieDetails;