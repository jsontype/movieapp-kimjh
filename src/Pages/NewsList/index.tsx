import React from 'react'
import styles from './style.module.scss'

type NewsListProps = {
  news: any[]
}

export default function NewsList({news} :NewsListProps) {
  const readMore = '👆..click read more'

  const render =   news.map(item => {
    const comments = item.comments_count && '🖌' + item.comments_count
    
    return (
          <div className={styles.newsTitle} key={item.id}>
          <a className={styles.linkUrl} href={item.url}>{item.title}</a>&nbsp;&nbsp;&nbsp;&nbsp;{ comments }
          <br/>{ readMore }
          <br/><br/>News From : <span  className={styles.isDomain}>{item.domain}</span>
        </div>
        )
    })

    return (
        <>
            {render}
        </>
    )
}


