import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

// creating counter slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment action
    increment: (state) => {
      state.value += 1;
    },
    // decrement action
    decrement: (state) => {
      state.value -= 1;
    },
    // increment by amount action
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// exporting actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// exporting reducer
export default counterSlice.reducer;
