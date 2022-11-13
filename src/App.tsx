import React, { useState, useEffect, useRef } from 'react'
// import Layout from './Components/Layout/Layout'
// import Header from './Components/Layout/Header/Header'
import MovieList from './Pages/MovieList/index'
import NewsList from './Pages/NewsList/index'
import TodoList from './Pages/TodoLiist'

import styles from './App.module.scss'

function App() {
  // JS
  const names = ['Movies','News', 'Todos']
  const [text, setText] = useState('')
  const [viewList, setViewList] = useState(0)
  const [movies, setMovies] = useState([])
  const [news, setNews] = useState([])
  const [todos, setTodos] = useState([])
  
  const nextId = useRef(todos.length + 1) // todos.length + 1 왜 안 되지?

  const header = names.map(
    (name, idx) => 
      <span className={styles.appName} onClick={() => onClick(String(idx))}>{name}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    )
  const onClick = (idx: string) => {
    setViewList(Number(idx))
    console.log('App-idx : ' + idx)
  }
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res => res.json())
    .then(json => { 
      setMovies(json.data.movies)
    })
  }, [])
  
  const url = 'https://api.hnpwa.com/v0/news.json'
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      setNews(json)
    })
  }, [])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => { return res.json() })
      .then((json) => {
        const result = json.filter((item: { userId: number }) => { return item.userId === 1 })
        setTodos(result)
      })
  }, [todos])

  // // 추가
  // const onCreate = (e: { preventDefault: () => void }) => {
  //   e.preventDefault() // form의 리다이렉팅을 방지
  //   setTodos([...todos, {
  //     completed: false,
  //     id: nextId.current,
  //     title: text,
  //     userId: 1,
  //   }])
  //   nextId.current++
  // }

  // const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
  //   setText(e.target.value)
  // }    

    // const setChildTotods = (todos: React.SetStateAction<never[]>) => {
    //   setTodos(todos)
    // }

  

  // XML
  return (
    <>
    <h1 className={styles.titleStyle}>
      <ul>
        {header}
      </ul>
    </h1>
      {
        viewList === 0 
        ? <MovieList movies={movies} />
        : (viewList === 1
          ? <NewsList news={news} />
          : <TodoList todos={todos} setChildTotods={todos} />
          )
      }

   </>
  )
}

export default App
