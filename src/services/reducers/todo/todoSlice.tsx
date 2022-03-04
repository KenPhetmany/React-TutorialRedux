import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Test 1", description: "This is test 1" },
  { id: "2", title: "Test 2", description: "This is test 2" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { todoAdded } = todoSlice.actions;
export default todoSlice.reducer;
