import React, { useState, useEffect } from 'react'
import './App.css'
import AppTitle from './components/AppTitle'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then((res) => { return res.json() })
      .then((json) => { setMovies(json.data.movies) })
  }, [])

  // console.log('movies: ', movies)

  return (
    <div className="App">
      <AppTitle />
      <MovieList movies={movies} />
    </div>
  )
}

export default App
