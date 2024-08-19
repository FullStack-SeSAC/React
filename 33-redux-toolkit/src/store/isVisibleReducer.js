import { createSlice } from "@reduxjs/toolkit";

// 슬라이스 정의
const isVisibleSlice = createSlice({
  name: "isVisible",
  initialState: true,
  reducers: {
    // 상태를 반전시키는 액션
    changVisiblility: (state) => {
      return !state;
    },
  },
});

export const { changVisiblility } = isVisibleSlice.actions;

export default isVisibleSlice.reducer;
