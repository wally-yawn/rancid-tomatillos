import './MovieCard.css';

function MoviePoster({id,posterPath,votes,title}) {
  console.log("poster path: ", {posterPath})
  return (
    <section className='movie_card'>
      <img src={posterPath} alt={title}></img>
      <p className='votes'>{votes}</p>
    </section>
  );
}

export default MoviePoster;