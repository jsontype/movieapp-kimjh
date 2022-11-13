import React, { useState, useEffect } from "react";
// import Layout from './Components/Layout/Layout'
// import Header from './Components/Layout/Header/Header'
import MovieList from "./Pages/MovieList/index";
import NewsList from "./Pages/NewsList/index";
import TodoList from "./Pages/TodoLiist";

import styles from "./App.module.scss";

function App() {
  // JS
  const names = ["Movies", "News", "Todos"];
  const [viewList, setViewList] = useState(0);
  const [movies, setMovies] = useState([]);
  const [news, setNews] = useState([]);
  const [todos, setTodos] = useState([]);

  const header = names.map((name, idx) => (
    <span className={styles.appName} onClick={() => onClick(String(idx))}>
      {name}&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  ));
  const onClick = (idx: string) => {
    setViewList(Number(idx));
    console.log("App-idx : " + idx);
  };
  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
      });
  }, []);

  const url = "https://api.hnpwa.com/v0/news.json";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setNews(json);
      });
  }, []);

  // XML
  return (
    <>
      <h1 className={styles.titleStyle}>
        <ul>{header}</ul>
      </h1>
      {viewList === 0 ? (
        <MovieList movies={movies} />
      ) : viewList === 1 ? (
        <NewsList news={news} />
      ) : (
        <TodoList todos={todos} setTodos={setTodos} />
      )}
    </>
  );
}

export default App;
