import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";

type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isError, setIsError] = useState(false);
  const [inputStyle, setInputStyle] = useState(styles.inputNormal);

  const onSumbit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // form의 리다이렉팅을 방지

    // p1 삼항연사자를 쓰는 법?
    if (inputText.length === 0) {
      setIsError(true);
      setInputStyle(styles.inputError);
    } else {
      onCreate(inputText);
      setInputText("");
      setIsError(false);
      setInputStyle(styles.inputNormal);
    }
  };

  let nextId = useRef(1);
  const onCreate = (inputText: string) => {
    const todoNew = {
      title: inputText,
      id: nextId.current++,
      completed: false,
    };

    setTodos([todoNew, ...todos]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const onDelete = (id: number) => {
    const result = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(result);
  };

  const onChecked = (id: number) => {
    const result = todos.map((item) => {
      return item.id === id
        ? { ...item, completed: !item.completed }
        : { ...item };
    });
    setTodos(result);
  };

  const render = todos.map((item) => {
    const titleClass = item.completed ? styles.checked : "unchecked";
    console.log("todo.map(item.id): ", item);

    return (
      <div className={styles.todo} key={item.id}>
        <span>{item.id} : </span>
        <span className={titleClass} onClick={() => onChecked(item.id)}>
          <input type="text" value={item.title} disabled />
          {item.completed && "👍"}
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
          name="todo"
          type="text"
          onChange={(e) => onChange(e)}
          value={inputText}
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
