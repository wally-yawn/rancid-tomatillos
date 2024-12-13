import './MovieCard.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MoviePoster({id,posterPath,votes,title}) {
  console.log("poster path: ", {posterPath})
  return (
    <div className='movie_card'>
      <img src={posterPath} alt={title}></img>
      <section className='voting'>
        <button className='upvote' aria-label='Upvote'>
          <img src={upvoteIcon}
           alt="upvote"
           onClick={() => console.log('Upvoted!')}/>
        </button>
        <p className='votes' >{votes}</p>
        <button className='downvote' aria-label='Downvote'>
          <img src={downvoteIcon} 
          alt="downvote"
          onClick={() => console.log('Downvoted!')}/>
        </button>

      </section>
    </div>
  );
}

function nil() {
  console.log("nothing")
}

function alsoNil() {
  console.log("also nothing")
}
export default MoviePoster;