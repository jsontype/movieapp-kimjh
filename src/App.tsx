import React, { useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/0_Home";
import About from "./Pages/1_About";
import MovieList from "./Pages/2_MovieList";
import NewsList from "./Pages/3_NewsList";
import TodoList from "./Pages/4_TodoLiist";
import styles from "./style.module.scss";
import { FaBars } from "react-icons/fa";

export default function App() {
  // JS
  const [movies, setMovies] = useState([]);
  const [news, setNews] = useState([]);
  const [todos, setTodos] = useState([]);

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

  const onClick = () => {
    alert("onClick");
  };

  return (
    <Router>
      <div className={styles.headerStyle}>
        <header>
          <Link to="/">
            <button>
              <FaBars />
            </button>
          </Link>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/NewsList">News</Link>
          </li>
          <li>
            <Link to="/MovieList">Movie</Link>
          </li>
          <li>
            <Link to="/TodoList">Todos</Link>
          </li>
        </header>
      </div>
      <hr />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/NewsList" element={<NewsList news={news} />} />
          <Route path="/MovieList" element={<MovieList movies={movies} />} />
          <Route
            path="/TodoList"
            element={<TodoList todos={todos} setTodos={setTodos} />}
          />
        </Routes>
      </main>
    </Router>
  );
}
