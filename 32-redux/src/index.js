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
    {/* React와 Redux 연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 Redux 스토어에 접근 가능 */}
    <Provider store={store}>
      {/* Redux Provider로 스토어를 앱에 주입 */}
      <App />
      <hr />
      <App2 />
    </Provider>
  </React.StrictMode>
);
