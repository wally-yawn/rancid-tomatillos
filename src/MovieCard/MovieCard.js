import { useState, useEffect } from 'react';
import './MovieCard.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MovieCard({id,posterPath,votes,title}) {
  const [voteCount, setVotes] = useState(votes)

  function getVotes() {
    setVotes();
  }

  function upvote() {
    setVotes(voteCount + 1)
  }
  
  function downvote() {
    setVotes(voteCount - 1)
  }

  return (
    <div className='movie_card'>
      <img src={posterPath} alt={title}></img>
      <section className='voting'>
        <button className='upvote' aria-label='Upvote'>
          <img src={upvoteIcon}
            alt="upvote"
            onClick={() => upvote(id)}/>
        </button>
        <p className='votes' >{voteCount}</p>
        <button className='downvote' aria-label='Downvote'>
          <img src={downvoteIcon}
          alt="downvote"
          onClick={() => downvote(id)}/>
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
export default MovieCard;