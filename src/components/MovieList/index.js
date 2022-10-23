import React from 'react'
import './style.css'

export default function MovieList({ movies }) {
  
  const render = movies.map((item) => {
    const ratingClass = item.rating >= 8 ? "ratingGood" : item.rating >= 6 ? "ratingSoso" : "ratingBad"

    return (
      <div className='movie' key={item.id}>
        <a className='movieTitle' href={item.url}>{item.title} &#40; 평점 : <span className={ratingClass}>{item.rating}</span> / 10 &#41;</a>
        <div className='movieYear'>{item.year}</div>
        <img className='movieImage' src={item.large_cover_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <>
          {render}
    </>
  )
}
