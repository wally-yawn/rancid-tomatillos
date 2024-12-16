import React from 'react';
import MainPage from '../MainPage/MainPage';
import './App.css';
// import searchIcon from '../icons/search.png';

function App() {

  return (
    <main className='App'>
        <header>
          <h1>rancid tomatillos...</h1>
        </header>
        <body>
          <MainPage mainPage={MainPage} />
        </body>
    </main>
  );
}

export default App;