import React, { useState, useEffect } from 'react'

import AppTitle from './components/AppTitle'
import MovieList from './components/MovieList'
import NewsList from './components/NewsList'

import './App.scss'

function App() {
  // JS
  const [viewList, setViewList] = useState(true)

  const [movies, setMovies] = useState([])
  const [news, setNews] = useState([])
  // const url = viewList ? 'https://api.hnpwa.com/v0/news.json' : 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
  // const url = 'https://yts.mx/api/v2/list_movies.json?sort_by=rating'

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(res => res.json())
      .then(json => { setMovies(json.data.movies) })
  }, [])

  const url = 'https://api.hnpwa.com/v0/news.json'
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => setNews(json))
  }, [url])
  // XML
  return (
    <>
      <div>
        <button onClick={ () => setViewList(!viewList)}>ChangeApp</button>
      </div>
      <div className="App">
        <AppTitle name={viewList ? 'movie' : 'news'}/>
        {
        viewList? <MovieList movies={movies} /> : <NewsList news={news} />
        }
      </div>
    </>
  )
}

export default App
