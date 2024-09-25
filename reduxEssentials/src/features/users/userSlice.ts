import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Define a type for the slice state
interface User {
  id: string;
  name: string;
}

// Define the initial state using that type
const initialState: User[] = [
  { id: "1", name: "Tiago Jenkins" },
  { id: "2", name: "John Grant" },
  { id: "3", name: "Jane Hollen" },
];

// creating user slice

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// exporting reducer
export default usersSlice.reducer;

// exporting selectors

export const selectAllUsers = (state: RootState) => state.users;

export const selectUserById = (state: RootState, userId: string | null) =>
  state.users.find((user) => user.id === userId);
