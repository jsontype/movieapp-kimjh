// action type
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// action fuction
let nextId: number = 2;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    title: text,
    completed: false,
  },
});
export const toggleTodo = (id: number, completed: boolean) => ({
  type: TOGGLE_TODO,
  id: id,
  completed: completed,
});
export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id: id,
});

// init
const initState = [
  {
    id: 1,
    title: "할일목록",
    completed: false,
  },
];

// reducer
export default function todos (
  state = initState,
  action: {
    id: number;
    todo: string;
    type: string;
  }
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      });
    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
}
