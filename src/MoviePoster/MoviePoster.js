import './MoviePoster.css';
import upvoteArrow from '../icons/upvote_arrow.png';

function MoviePoster({ movie, updateVotes, viewMovie }) {
  return (
    <section className='MoviePoster'>
      <img onClick={() => viewMovie(movie.id)} className='movie-poster' src={movie.poster_path}/>
      <div className='vote-box'>
        <button onClick={() => updateVotes(movie.id)}><img src={upvoteArrow}/></button>
        <p>{movie.vote_count}</p>
      </div>
    </section>
  );
}

export default MoviePoster;