import './MoviePoster.css';

function MoviePoster({ movie }) {
  return (
    <section className="MoviePoster">
      <img src={movie.poster_path}/>
      <p>{movie.votes}</p>
    </section>
  );
}

export default MoviePoster;