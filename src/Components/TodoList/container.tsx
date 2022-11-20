import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../../Modules/todos";
import { RootState } from "../../Modules";
import TodoList from "../../Pages/4_TodoLiist";

export default function TodosContainer() {
  // state조회
  // 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos)

  // action dispatch
  const dispatch = useDispatch();
  const onCreate = (text: string) => dispatch(addTodo(text));
  const onToggle = (id: number, completed: boolean) =>
    dispatch(toggleTodo(id, completed));
  const onDelete = (id: number) => dispatch(deleteTodo(id));

  console.log(todos);
  // UI 컴포넌트 호출
  return (
    <div>
      <TodoList
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}
