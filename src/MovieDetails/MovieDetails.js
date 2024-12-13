import './MovieDetails.css';
import { useState, useEffect } from 'react';
import Genre from '../Genres/Genre'

function MovieDetails(props) {
  const [movieDetailsInfo, setMovieDetails] = useState(null)
  useEffect(() => {getMovieDetails()}, [])
  
  function getMovieDetails() {
    fetch(`https://rancid-tomatillos-api.onrender.com/api/v1/movies/${props.id}`, {
      method: 'GET', 
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => setMovieDetails(data))
    .catch(error => console.log(error))
  ;}

  if (!movieDetailsInfo) {
    return <p>Loading...</p>;
  }

  const genreCards = movieDetailsInfo.genre_ids.map(genre_id => {
    return (
      <Genre name={genre_id} key ={genre_id}/>
    )
  })

  return (
    <section className='MovieDetails'>
      <img className = 'movie-backdrop' src = {movieDetailsInfo.backdrop_path} alt = {movieDetailsInfo.title}/>
      <h2 className = 'movie-title'>{movieDetailsInfo.title}</h2>
      <section className='genres'>
        {genreCards}
      </section>
      <p className = 'overview'>{movieDetailsInfo.overview}</p>
    </section>
  );
}

export default MovieDetails;