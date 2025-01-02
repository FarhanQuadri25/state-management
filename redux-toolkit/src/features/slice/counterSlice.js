import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 10;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Export actions for dispatch
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer for the store
export default counterSlice.reducer;
