import React from 'react'
import './style.css'

export default function MovieList({ movies }) {
  
  const render = movies.map((item) => {
    const ratingClass = item.rating >= 8 ? "ratingGood" : item.rating >= 6 ? "ratingSoso" : "ratingBad"
    const ratingIcon = item.rating >= 8 && "🎇"
    const genres = item.genres.join(', ') || '장르없음'
    const ratingScore = item.rating || "평점없음"
    const image = item.large_cover_image || item.medium_cover_image || item.small_cover_image || item.background_image || item.background_image_original
    const runtime = item.runtime ? item.runtime + '분' : '상영시간없음'
    const summary = item.summary || "줄거리없음"

    return (
      <div className='movie' key={item.id}>
        <a className='movieTitle' href={item.url}>
          {item.title} {ratingIcon} 
          &#40; 평점 : <span className={ratingClass}>{ratingScore}</span> / 10 &#41;
          <div>장르 : {genres}</div>
          <div>상영시간 : {runtime} </div>
          <hr className='styleHr'/><div>줄거리 : </div>
          <div> { summary } </div>
        </a>
        <div className='movieYear'>{item.year}</div>
        { image && <img className='movieImage' src={image} alt={item.title}></img> }

      </div>
    )
  })

  return (
    <>
      {render}
    </>
  )
}
