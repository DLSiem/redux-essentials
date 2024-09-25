import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Define a type for the slice state
interface AuthState {
  username: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    userLoggedOut(state) {
      state.username = null;
    },
  },
});

export default authSlice.reducer;

// exporting actions
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

// exporting selectors

export const selectCurrentUsername = (state: RootState) => state.auth.username;
