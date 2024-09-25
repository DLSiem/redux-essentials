import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface Post {
  id: string;
  title: string;
  content: string;
}

// ccreate initial state

const initialState: Post[] = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" },
];

// creating post slice

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action: PayloadAction<Post>) {
      state.push(action.payload);
    },
    postUpdated(state, action: PayloadAction<Post>) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

// exporting actions
export const { postAdded, postUpdated } = postsSlice.actions;

// exporting reducer
export default postsSlice.reducer;
