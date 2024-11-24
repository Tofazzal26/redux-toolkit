import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postReducer from "./postSlice";
import oriReducer from "./oriSlice";

const store = configureStore({
  reducer: { counter: counterReducer, posts: postReducer, ori: oriReducer },
});

export default store;
