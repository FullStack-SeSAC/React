// [ Toolkit 사용 ]
import { createSlice } from "@reduxjs/toolkit";

/**
 * 액션 타입 상수 정의가 불필요한 이유
 * - 자동 생성: createSlice를 사용하면 액션 타입이 자동 생성
 * - 슬라이스의 name과 reducers 객체의 키를 기반으로 액션 타입이 생성
 */

// createSlice 함수
// - 리듀서와 액션 생성자를 한 번에 정의
// - 'name' : 슬라이스의 이름 정의/ 액션 타입의 네임스페이스로 사용
// - 'initialState' : 상태의 초기 값 정의
// - 'reducers' : 상태를 업데이트 하는 리듀서 함수 정의

// #1. 슬라이스 객체 정의
const counterSlice = createSlice({
  name: "counter", // 즉, plus 액션은 'counter/plus' 타입
  initialState: { number: 100 },
  reducers: {
    plus: (state) => {
      state.number += 1; // 상태를 직접 변경 (immer 라이브러리 내부적으로 사용)
    },
    minus: (state) => {
      state.number -= 1;
    },
  },
});

// Redux Toolkit은 immer 라이브러리를 사용하여 상태를 직접 변경하는 것 처럼 보이지만,
// 실제로는 불변성을 유지하면서 상태를 업데이트

export const { plus, minus } = counterSlice.actions;
// createSlice가 자동을 생성한 액션 생성자를 추출하여 내보냄

export default counterSlice.reducer;
// createSlice로 생성한 counterSlice 객체는 name, actions, reducer 등을 포함
// counterSlice.reducer는 createSlice에 의해 자동으로 생성된 리듀서 함수
// 상태 업데이트를 담당, 핵심 함수라서 default로 export
// 이름에 s를 붙이지 않고 단수형 reducer로 export하는 이유?
//  - 슬라이스에서 단일 리듀서 함수를 반환해서
