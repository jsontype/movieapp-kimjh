import React, { useState } from "react";
import styles from "./styles.module.scss";

type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoListProps = {
  todos: TodoProps[];
  onCreate: (text: string) => void;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onCreate, onToggle, onDelete }: TodoListProps) {
  const [inputText, setInputText] = useState("");
  const [isError, setIsError] = useState(false);
  const [inputStyle, setInputStyle] = useState(styles.inputNormal);

  const onSumbit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // form의 리다이렉팅을 방지

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const render = todos.map((item: TodoProps) => {
    const titleClass = item.completed ? styles.checked : "unchecked";
    console.log("todo.map(item.id): ", item);

    return (
      <div className={styles.todo} key={item.id}>
        <span>{item.id} : </span>
        <span className={titleClass} onClick={() => onToggle(item.id, item.completed)}></span>
        <span>{item.title}</span>
        <span>{item.completed && "👍"}
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
          value={inputText}
          onChange={onChange}
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
