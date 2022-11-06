import React from 'react'

type MovieDetailProps = {
    item: any
}

export default function MovieDetail({ item }: MovieDetailProps) {
    const movieRank = item.rating >= 9 ? 'movieRankGood' : item.rating >= 7 ? 'movieRankSoso' : 'movieRankBad' 
    const hotIcon = item.rating >= 9 && '🔥'
    const genres = item.genres.join(', ')
    const runtime = item.runtime + "min"|| "상영시간 정보없음"
    const summary = item.summary ? item.summary : item.synopsis
    const copyUrl = (url: string, idx: number) => {
        navigator.clipboard.writeText(url)
        console.log("토렌토" + idx + " 주소가 복사되었습니다")
    }

    const torrents = item.torrents.map((item: any, idx: number) => {
        return (
            <div key={idx}>토렌트{idx + 1}&nbsp;
                <button type="button" onClick={ () => copyUrl(item.url, idx + 1)}>주소복사</button>
                &nbsp;{item.url}
            </div>
        )
    })
    
    const detail = (
        <div className='movieDetail'>
            <div>장르: {genres}</div>
            <div>러닝타임: {runtime}</div>
            <div><span>{hotIcon}</span> 평점 : <span className={movieRank}>{item.rating}</span> / 10</div>
            <div>{summary}</div>
            <div>{torrents}</div>
        </div>
    )

    return (
        <div>{detail}</div>
    )
}
