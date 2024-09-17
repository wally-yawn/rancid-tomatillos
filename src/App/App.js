import './App.css';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import homeButton from '../icons/home.png';
import searchIcon from '../icons/search.png';

function App() {
  const [movies, setMovies] = useState([]);
  const [individualMovie, setIndividualMovie] = useState({});
  const [individualView, setIndividualView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch('http://localhost:3001/api/v1/movies')
    .then(res => res.json())
    .then(data => {
      setMovies(data)
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
    })
    .catch(err => console.log(err))
  }

  const viewMovie = (id) => {
    fetch(`http://localhost:3001/api/v1/movies/${id}`)
    .then(res => res.json())
    .then(data => {
      setIndividualMovie(data);
      setIndividualView(true);
    })
    .catch(err => console.log(err))
  }

  const goHome = () => {
    setIndividualView(false);
  }

  const searchMovies = () => {
    let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

    if (!filteredMovies.length) {
      return <p className='no-movies-message'>No movies found that match your search.</p>
    } else {
      return <Movies movies={filteredMovies} updateVotes={updateVotes} viewMovie={viewMovie} />
    }
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
          <form className='search'>
            <img src={searchIcon}/>
            <input 
              type='text'
              name='search'
              value={searchQuery}
              onChange={event => setSearchQuery(event.target.value)}
            />
          </form>
        </header>
        { searchQuery 
        ? <>{searchMovies()}</>
        : <Movies movies={movies} updateVotes={updateVotes} viewMovie={viewMovie} />
        }
      </>
      }
      
    </main>
  );
}

export default App;
