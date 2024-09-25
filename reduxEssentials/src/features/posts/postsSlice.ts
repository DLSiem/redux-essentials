import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Define a type for the slice state
export interface Post {
  id: string;
  title: string;
  content: string;
  user: string;
}

// ccreate initial state

const initialState: Post[] = [
  { id: "1", title: "First Post!", content: "Hello!", user: "1" },
  { id: "2", title: "Second Post", content: "More text", user: "2" },
];

// creating post slice

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, user: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user,
          },
        };
      },
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

// exporting selectors
export const selectAllPosts = (state: RootState) => state.posts;

export const selectPostById = (state: RootState, postId: string) =>
  state.posts.find((post) => post.id === postId);
