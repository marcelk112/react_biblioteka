import { useState, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import MovieList from './components/MovieList/MovieList.jsx'

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story']);
  }, []);

  return (
    <>
      <Header />
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => {
        if (title.trim() === '') return;
        setMovies(prevMovies => [...prevMovies, title]);
        setTitle('');
      }}>
        Dodaj film
      </button>
      <MovieList movies={movies} />
    </>
  );
}

export default App
