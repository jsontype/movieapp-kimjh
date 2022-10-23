import React from 'react'
import './style.css'

export default function test({ movies }) {
  
  const render = movies.map((item) => {
    const ratingClass = item.rating >= 9 ? "ratingGood" : item.rating >= 7 ? "ratingSoso" : "ratingBad"
    const ratingIcon = item.rating >= 9 && "🔥"

    return (
      <div className='movie' key={item.id}>
        <a className='movieTitle' href={item.url}>{item.title} {ratingIcon} &#40; 평점 : <span className={ratingClass}>{item.rating}</span> / 10 &#41;</a>
        <div className='movieYear'>{item.year}</div>
        <img className='movieImage' src={item.background_image} alt={item.title}></img>
      </div>
    )
  })

  return (
    <>
      {render}
    </>
  )
}
