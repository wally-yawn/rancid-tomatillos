import { useEffect, useState } from 'react';
import './MainPage.css';
import MovieCard from '../MovieCard/MovieCard';
import MovieDetails from '../MovieDetails/MovieDetails';

function MainPage({ movieDetailsId, setMovieDetailsId }) {
  const [movies, setMovies] = useState([]);
  const url = "https://rancid-tomatillos-api.onrender.com/api/v1/movies";

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch movies. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  if (!movies.length) {
    return <p>Loading...</p>;
  }

  function handleMovieClick(id) {
    setMovieDetailsId(id);
  }

  return (
    <div>
      {movieDetailsId ? (
        <MovieDetails id={movieDetailsId} />
      ) : (
        <section className="movie-container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              votes={movie.vote_count}
              title={movie.title}
              onMovieClick={handleMovieClick}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default MainPage;
