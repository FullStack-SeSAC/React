// [ Tookit 사용 ]
// #2. Store 생성
// - configureStore 사용해 스토어 생성
// *configureStore*

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import isVisibleReducer from "./isVisibleReducer";
//

// - Redux Toolkit에서 제공하는 함수, 스토어를 더 쉽게 설정
const store = configureStore({
  reducer: {
    counter: counterReducer,
    isVisible: isVisibleReducer,
  },
});

export default store;
