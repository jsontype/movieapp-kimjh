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
  const [isError, setIsError] = useState(false);
  const [inputStyle, setInputStyle] = useState(styles.inputNormal);

  // const inputStyle = isError ? styles.inputNormal : styles.inputError;

  const onSumbit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // form의 리다이렉팅을 방지

    // p1 삼항연사자를 쓰는 법?
    if (text.length === 0) {
      setIsError(true);
      setInputStyle(styles.inputError);
    } else {
      onCreate();
      setText("");
      setIsError(false);
      setInputStyle(styles.inputNormal);
    }
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
        <input
          className={inputStyle}
          type="text"
          onChange={onChange}
          value={text}
        />
        <button type="submit">Send</button>
        <span className={styles.ErrorMsg}>
          {isError && "할일을 입력해주십시요"}
        </span>
      </form>
      <div>{render}</div>
    </div>
  );
}
