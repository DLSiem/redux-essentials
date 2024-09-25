import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";

// types for reactions
export interface Reactions {
  thumbsUp: number;
  tada: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export type ReactionName = keyof Reactions;

// initial state for reactions
const initialReactions = {
  thumbsUp: 0,
  tada: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
};

type PostUdate = Pick<Post, "id" | "title" | "content">;

// Define a type for the slice state
export interface Post {
  id: string;
  title: string;
  content: string;
  user: string;
  time: string;
  reactions: Reactions;
}

// ccreate initial state

const initialState: Post[] = [
  {
    id: "1",
    title: "First Post!",
    content: "Hello!",
    user: "1",
    time: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: initialReactions,
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text",
    user: "2",
    time: sub(new Date(), { minutes: 5 }).toISOString(), // 5 minutes ago
    reactions: initialReactions,
  },
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
            time: new Date().toISOString(), // current date and time in ISO format (string) eg. 2021-09-01T12:00:00.000Z
            title,
            content,
            user,
            reactions: initialReactions,
          },
        };
      },
    },
    postUpdated(state, action: PayloadAction<PostUdate>) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(
      state,
      action: PayloadAction<{ postId: string; reaction: ReactionName }>
    ) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// exporting actions
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

// exporting reducer
export default postsSlice.reducer;

// exporting selectors
export const selectAllPosts = (state: RootState) => state.posts;

export const selectPostById = (state: RootState, postId: string) =>
  state.posts.find((post) => post.id === postId);
