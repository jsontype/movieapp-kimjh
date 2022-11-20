import todos from "./todos";
// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
// RootState타입 지정이 필요하다
export type RootState = ReturnType<typeof rootReducer>;
