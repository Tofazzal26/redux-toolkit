import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const oriSlice = createSlice({
  name: "ori",
  initialState,
  reducers: {
    likeIncrement: (state, action) => {
      state.value += 1;
    },
  },
});

export const { likeIncrement } = oriSlice.actions;

export default oriSlice.reducer;
