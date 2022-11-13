import React from 'react'
import styles from './style.module.scss'

type NameProps = {
  names: string[],
}

const onClick = (idx: string | number) => {
  console.log('onClick-idx : ' + idx)
}

const Header = ({names}: NameProps) => {
  
  const result = names.map(

    (name, idx) => 
      <div className={styles.appName} onClick={() => onClick(idx)}>{name}&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    )

  return (
    <h1 className={styles.titleStyle}>
      <ul>
        {result}
      </ul>
    </h1>
  )
}

export default Header