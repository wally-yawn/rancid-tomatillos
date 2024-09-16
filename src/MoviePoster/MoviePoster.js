import './MoviePoster.css';
import upvoteArrow from '../icons/upvote_arrow.png';

function MoviePoster({ movie }) {
  return (
    <section className='MoviePoster'>
      <img src={movie.poster_path}/>
      <div className='vote-box'>
        <button><img src={upvoteArrow}/></button>
        <p>{movie.votes}</p>
      </div>
    </section>
  );
}

export default MoviePoster;