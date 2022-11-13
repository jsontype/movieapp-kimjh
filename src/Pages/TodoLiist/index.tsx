import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";

// type TodoListItemProps = {};

type TodoListProps = {
  todos: any[];
  setTodos: (value: any) => void;
};

export default function TodoList({ todos, setTodos }: TodoListProps) {
  const [text, setText] = useState("");
  const nextId = useRef(1);

  const onSumbit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // form의 리다이렉팅을 방지
    onCreate();
    setText("");
  };

  const onCreate = () => {
    setTodos([
      ...todos,
      {
        completed: false,
        id: nextId.current,
        title: text,
        userId: 1,
      },
    ]);
    nextId.current++;
  };

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setText(e.target.value);
  };

  const onDelete = (id: string) => {
    const result = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(result);
  };

  const onChecked = (id: string) => {
    const result = todos.map((item) => {
      return item.id === id
        ? { ...item, completed: !item.completed }
        : { ...item };
    });
    setTodos(result);
  };

  const render = todos.map((item) => {
    const titleClass = item.completed ? styles.checked : "unchecked";
    return (
      <div className={styles.todo} key={item.id}>
        <span>#{item.id} / </span>
        <span className={titleClass} onClick={() => onChecked(item.id)}>
          제목: {item.title} {item.completed && "👍"}
        </span>
        <span className={styles.deleteBtn} onClick={() => onDelete(item.id)}>
          ❌
        </span>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={onSumbit}>
        <input type="text" onChange={onChange} value={text} />
        <button type="submit">Send</button>
      </form>
      <div>{render}</div>
    </div>
  );
}
