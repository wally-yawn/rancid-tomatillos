import { useState } from 'react';
import './MovieCard.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MovieCard({id,posterPath,votes,title}) {
  console.log("poster path: ", posterPath);
  const [voteCount, setVotes] = useState(votes);
  const url = " https://rancid-tomatillos-api.onrender.com/api/v1/movies";

  function upvote() {
     fetch(`${url}/${id}`, {
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ vote_direction: "up" })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to upvote. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setVotes(data.newVoteCount))
    .catch(error => console.log(error.message))
  };  

  function downvote() {
    fetch(`${url}/${id}`, {
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ vote_direction: "down" })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to downvote. Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setVotes(data.newVoteCount))
    .catch(error => console.log(error.message))
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
export default MovieCard;