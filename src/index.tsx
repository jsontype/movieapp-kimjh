import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
// Create Provider Reducer
import { createStore } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./Modules"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
);
