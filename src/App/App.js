import './App.css';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import sortArrow from '../icons/sort_arrows.png';
import sortAlpha from '../icons/sort_alpha.png';
import homeButton from '../icons/home.png';

function App() {
  const [movies, setMovies] = useState([]);
  const [currView, setCurrView] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [individualMovie, setIndividualMovie] = useState({});
  const [individualView, setIndividualView] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch('http://localhost:3001/api/v1/movies')
    .then(res => res.json())
    .then(data => {
      setMovies(data)
      setCurrView(data)
    })
    .catch(err => console.log(err))
  }

  const updateVotes = (id) => {
    fetch('http://localhost:3001/api/v1/movies', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    .then(res => res.json())
    .then(data => {
      setMovies(data)
      setCurrView(data)
    })
  }

  const sortMovies = () => {
    let moviesCopy = [...movies];

    if (!sorted) {
      moviesCopy.sort((a, b) => {
        return b.vote_count - a.vote_count
      })
    }
    
    setSorted(!sorted)
    setCurrView(moviesCopy);
  }

  const viewMovie = (id) => {
    let movie = {id, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" };
    
    setIndividualMovie(movie);
    setIndividualView(true);
  }

  const goHome = () => {
    setIndividualView(false);
  }

  return (
    <main className='App'>

      {individualView
      ? <>
        <header>
          <h1>rancid tomatillos</h1>
          <img onClick={goHome} src={homeButton}/>
        </header>
        <MovieDetails movie={individualMovie}/> 
      </>
      : <>
        <header>
          <h1>rancid tomatillos</h1>
          {sorted 
              ? <button onClick={(event) => sortMovies(event)}><img src={sortAlpha}/>sort alphabetically</button>
              : <button onClick={(event) => sortMovies(event)}><img src={sortArrow}/>sort by rating</button>
            }
        </header>
        <Movies movies={currView} updateVotes={updateVotes} viewMovie={viewMovie} />
      </>
      }
      
    </main>
  );
}

export default App;
