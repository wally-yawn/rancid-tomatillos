import './App.css';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import movieData from '../movieData';
import { useState, useEffect } from 'react';
import sortArrow from '../icons/sort_arrows.png';
import sortAlpha from '../icons/sort_alpha.png';

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesByRating, setMoviesByRating] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [individualMovie, setIndividualMovie] = useState({});
  const [individualView, setIndividualView] = useState(false);

  useEffect(() => {
    setMovies(movieData.movies);
    setMoviesByRating(movieData.movies);
  }, []);

  const updateVotes = (id) => {
    let moviesCopy = [...movies];

    moviesCopy.forEach(movie => {
      if (movie.id === id) {
        movie.votes++
      }
    })

    setMovies(moviesCopy);
  }

  const sortMovies = () => {
    let moviesCopy = [...movies];

    if (!sorted) {
      moviesCopy.sort((a, b) => {
        return b.votes - a.votes
      })
    }
    
    setSorted(!sorted)
    setMoviesByRating(moviesCopy);
  }

  const viewMovie = (id) => {
    let movie = {id, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" };
    
    setIndividualMovie(movie);
    setIndividualView(true);
  }

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
        {sorted 
          ? <button onClick={(event) => sortMovies(event)}><img src={sortAlpha}/>sort alphabetically</button>
          : <button onClick={(event) => sortMovies(event)}><img src={sortArrow}/>sort by rating</button>
        }
      </header>
      {individualView
      ? <MovieDetails movie={individualMovie}/>
      : <Movies movies={moviesByRating} updateVotes={updateVotes} viewMovie={viewMovie} />}
      
    </main>
  );
}

export default App;
