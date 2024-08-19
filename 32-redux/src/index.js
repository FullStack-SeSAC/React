import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import counterReducer from "./store/counterReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));

// #6. Store 생성
// [전통 Redux 방식]
// 'createStore' 사용해 Redux 스토어 사용
const store = createStore(counterReducer);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
      <hr />
      <App2 />
    </Provider>
  </React.StrictMode>
);
