import todoReducer from "./todos";
// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
// RootState타입 지정이 필요하다
export type RootState = ReturnType<typeof rootReducer>;
