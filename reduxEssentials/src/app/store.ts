import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsReducers from "../features/posts/postsSlice";
import usersReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsReducers,
    users: usersReducer,
  },
});

// infer the type of store
export type AppStore = typeof store;

// infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
// infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
