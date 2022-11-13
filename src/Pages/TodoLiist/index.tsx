import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.scss'

type TodoListProps = {
  todos: any[],
  setChildTotods: any[],
}

export default function TodoList({todos, setChildTotods}: TodoListProps) {
  //JS
  //  const [todosProp, setTodosProp] = useState([])

    //   // 삭제
    const onDelete = (id: string) => {
      const result = todos.filter(item => { return item.id !== id })
      // const setChildTotods = () => {
      //   setChildTotods(result)
      // }
    
      console.log(id+ 'onDelete' + result)
      // setTodosProp(result)
      // setTodosProp(todos.filter(item => { return item.id}
    }
    // 수정  
    const onChecked = (id: string) => {
      const result = todos.map(item => { return item.id === id ? { ...item, completed: !item.completed } : { ...item }})
      // setTodos(result)
      console.log('onChecked'+ id, result)
    }
  const render =   todos.map(item => {
      const titleClass = item.completed ? styles.checked : 'unchecked'

    return (
      <div className={styles.todo} key={item.id}>
        <span>#{item.id} / </span>
        <span className={titleClass} onClick={() => onDelete(item.id)}>제목: {item.title} {item.completed && '👍'}</span>
        <span className={styles.deleteBtn} onClick={() => onChecked(item.id)}>❌</span>
      </div>
        )
    })

    return (
        <>
            {render}
        </>
    )
}


  // JS
  // const render = todos.map((item: any[]) => {
  //   // 삭제
  //   const onDelete = (id: string) => {
  //     const result = todos.filter(item => { return item.id !== id })
  //     setTodos(result)
  //   }
  //   // 수정  
  //   const onChecked = (id) => {
  //     const result = todos.map(item => { return item.id === id ? { ...item, completed: !item.completed } : { ...item }})
  //     setTodos(result)
    // }
    // const titleClass = item.completed ? styles.checked : 'unchecked'
    // return (
      // <div className={styles.todo} key={item.id}>
      //   <span>#{item.id} / </span>
      //   <span className={titleClass} onClick={() => onChecked(item.id)}>제목: {item.title} {item.completed && '👍'}</span>
      //   <span className={styles.deleteBtn} onClick={() => onDelete(item.id)}>❌</span>
      // </div>
  //   )
  // })

  // XML
  // return (
  //   <div className={styles.App}>
  //     <form onSubmit={onCreate}>
  //     <div>{render}</div>
  //       <input name="title" type="text" onChange={onChange} value={text} required></input>
  //       <button type="submit">등록</button>
  //     </form>
  //   </div>
  // )