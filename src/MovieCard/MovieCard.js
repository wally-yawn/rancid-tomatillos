import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import upvoteIcon from '../icons/upvote.png';
import downvoteIcon from '../icons/downvote.png';

function MovieCard({ id, posterPath, votes, title }) {
  const [voteCount, setVotes] = useState(Number(votes));
  const [error, setError] = useState(null);
  const url = "https://rancid-tomatillos-api.onrender.com/api/v1/movies";

  function handleVote(vote_direction) {
    const newVoteCount = vote_direction.vote_direction === "up" ? voteCount + 1 : voteCount - 1;
  setVotes(newVoteCount);
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vote_direction),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to update vote. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setVotes(Number(data.vote_count) || 0);
      })
      .catch((error) => setError(error.message));
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className='movie_card'>
      <Link to={`/movies/${id}`}>
        <img className='poster' src={posterPath} alt={title} />
      </Link>
      <section className='voting'>
        <button className='upvote' aria-label='Upvote' onClick={() => handleVote({ vote_direction: "up" })}>
          <img src={upvoteIcon} alt="upvote" />
        </button>
        <p className='votes'>{voteCount}</p>
        <button className='downvote' aria-label='Downvote' onClick={() => handleVote({ vote_direction: "down" })}>
          <img src={downvoteIcon} alt="downvote" />
        </button>
      </section>
    </div>
  );
}

export default MovieCard;
