import './MoviePoster.css';
import upvote from '../icons/upvote.png';

function MoviePoster({ movie, updateVotes, viewMovie }) {
  return (
    <section className='MoviePoster'>
      <img onClick={() => viewMovie(movie.id)} className='movie-poster' src={movie.poster_path}/>
      <div className='vote-box'>
        <button onClick={() => updateVotes(movie.id)}><img src={upvote}/></button>
        <p>{movie.vote_count}</p>
      </div>
    </section>
  );
}

export default MoviePoster;