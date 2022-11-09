import React from 'react'
import './style.scss'

type NewsListProps = {
  news: any[]
}

export default function NewsList({news} :NewsListProps) {
  const readMore = '..click read more👆'

  const render =   news.map(item => {
    const domain = item.domain || 'unknown'
    const comments = item.comments_count && '🖌' + item.comments_count

    return (
          <div className='newsTitle' key={item.id}>
          <a href={item.url}>{item.title}</a>
          <br/>{ readMore }&nbsp;&nbsp;&nbsp;&nbsp;{ comments }
          <br/>From:<span  className={domain}>{domain}</span>
        </div>
        )
    })

    return (
        <>
            {render}
        </>
    )
}


